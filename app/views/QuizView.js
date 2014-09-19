define([
  'jquery',
  'underscore',
  'backbone',
  'models/QuizModel',
  'models/SimpleTextQuizSubjectModel',
  'views/BaseView',
  'views/QuizQuestionContainerView',
  'views/QuizStatsView',
  'views/QuizQuestionViewFactory',
  'text!templates/QuizView.html'
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone,
  QuizModel, SimpleTextQuizSubjectModel,
  BaseView, QuizQuestionContainerView, QuizStatsView, QuizQuestionViewFactory,
  quizViewTemplate) {

  var QuizView = BaseView.extend({
    className: "QuizView",

    el: $('#main'),
    cssClass: 'quiz-view',
    template: _.partial(_.template(quizViewTemplate)),
    events: {
      "click #rerender-button": "rerender",
      "click #next-question-button": "showNextQuestion",
      "click #prev-question-button": "showPreviousQuestion",
      "click #random-question-button": "showRandomQuestion",
      "click #show-answer-button": "showAnswer',"
    },

    postInitialize: function() {
      this.questionContainerView = new QuizQuestionContainerView();
      this.statsView = new QuizStatsView();

      this.model = new QuizModel();

      this.questionFactory = new QuizQuestionViewFactory();
      this.questionFactory.once("loaded", function() {
        console.log("loaded!");
        this.questionContainerView.setQuestion(this.questionFactory.getNextQuestion());
      }, this);

      this.questionContainerView.on("answer:correct", this.onCorrectAnswer, this);
      this.questionContainerView.on("answer:incorrect", this.onIncorrectAnswer, this);
    },

    postRender: function() {
      this.questionContainerView.render();
      this.$('.quiz-question').append(this.questionContainerView.$el);

      this.statsView.render();
      this.$('.quiz-stats').append(this.statsView.$el);

      this.delegateEvents();

      // $("#rerender-button").click(_.bind(function(e) {
      //   this.onRerender();
      // }, this));
      // $("#next-question-button").click(_.bind(function(e) {
      //   this.questionContainerView.setQuestion(this.questionFactory.getNextQuestion());
      // }, this));
      // $("#prev-question-button").click(_.bind(function(e) {
      //   this.questionContainerView.setQuestion(this.questionFactory.getPreviousQuestion());
      // }, this));
      // $("#random-question-button").click(_.bind(function(e) {
      //   this.questionContainerView.setQuestion(this.questionFactory.getNextQuestion());
      // }, this));
      // $("#show-answer-button").click(_.bind(function(e) {
      //   this.questionContainerView.showAnswer();
      // }, this));
    },

    // Event callbacks for DOM elems
    rerender: function() {
      this.render();
    },

    showNextQuestion: function() {
      this.questionContainerView.setQuestion(this.questionFactory.getNextQuestion());
    },

    showPreviousQuestion: function() {
      this.questionContainerView.setQuestion(this.questionFactory.getPreviousQuestion());
    },

    showRandomQuestion: function() {
      // TODO: make this random
      this.questionContainerView.setQuestion(this.questionFactory.getRandomQuestion());
    },

    showAnswer: function() {
      this.questionContainerView.showAnswer();
    },

    // Event callbacks for subviews
    onCorrectAnswer: function() {
      this.showNextQuestion();
    },

    onIncorrectAnswer: function() {
      this.showAnswer();
    },

  });

  // Our module now returns our view
  return QuizView;

});
