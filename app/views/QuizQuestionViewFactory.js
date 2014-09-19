define([
  'jquery',
  'underscore',
  'backbone',
  'models/SimpleTextQuizSubjectModel',
  'views/BaseView',
  'views/SimpleTextQuizQuestionView'
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, SimpleTextQuizSubjectModel, BaseView, SimpleTextQuizQuestionView) {
  var QuizQuestionViewFactory = function() {
    this.previousQuestion = null;
    this.currentQuestion = null;

    SimpleTextQuizSubjectModel.loadFromMarkdownCSV("data/hello.csv")
      .then(_.bind(function(quizSubject) {
        this.questionTypeSubjectModels['SimpleTextQuizQuestionModel'] = quizSubject;
        this.trigger("loaded");
      }, this));
  };

  _.extend(QuizQuestionViewFactory.prototype, Backbone.Events);
  _.extend(QuizQuestionViewFactory.prototype, {
    className: "QuizQuestionViewFactory",
    questionTypeViews: {
      "SimpleTextQuizQuestionModel": SimpleTextQuizQuestionView,
    },
    questionTypeSubjectModels: {},

    addSubject: function(questionModelType, subjectModel, viewType) {
      this.questionTypeViews[questionModelType] = viewType;
      this.questionTypeSubjectModels[questionModelType] = subjectModel;
    },

    getNextQuestion: function(questionType) {
      if (!questionType) {
        questionType = _.sample(_.keys(this.questionTypeViews));
      }

      console.log("type: " + questionType);
      var question = this.quizQuestionFromType(questionType);

      console.log(question);
      this.previousQuestion = this.currentQuestion;
      this.currentQuestion = question;

      return question;
    },

    getPreviousQuestion: function() {
      // TODO: make better
      return this.previousQuestion;
    },

    quizQuestionFromType: function(questionType) {
      if (_.has(this.questionTypeSubjectModels, questionType)) {

        var subject = this.questionTypeSubjectModels[questionType];
        console.log(subject);
        var model = subject.getRandomQuestion();
        console.log(model);
        return this.quizQuestionFromModel(model);

      } else {
        return null;
      }
    },

    quizQuestionFromModel: function(questionModel) {
      var type = questionModel.className;
      if (type && _.has(this.questionTypeViews, type)) {
        var ViewType = this.questionTypeViews[type];
        var view = new ViewType({ model: questionModel });
        console.log(view);
        return view;

      } else {
        return null;
      }
    },
  });

  // Our module now returns our view
  return QuizQuestionViewFactory;
});
