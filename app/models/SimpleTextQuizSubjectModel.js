define([
  'jquery',
  'underscore',
  'backbone',
  'marked',
  'models/BaseModel',
  'models/QuizSubjectModel',
  'models/SimpleTextQuizQuestionModel',
  'util/CSV',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, marked, BaseModel, QuizSubjectModel, SimpleTextQuizQuestionModel, CSV) {

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

  var SimpleTextQuizSubjectModel = QuizSubjectModel.extend({

    className: "SimpleTextQuizSubjectModel",

    // text questions have object format:
    // {
    //   'question': 'question text',
    //   'answer': 'answer text'
    // }
    defaults: function defaults() {
      return {
        'questions': [ ],
        'currentQuestion': 0
      };
    },

    postInitialize: function postInitialize() {
    },

    getCurrentQuestion: function getCurrentQuestion() {
      return this.get('questions')[this.get('currentQuestion')];
    },

    // TODO: (aallison) shuffle deck
    getNextQuestion: function getNextQuestion() {
      var questions = this.get('questions');
      var randomIndex = Math.round(Math.random() * questions.length);
      return questions[randomIndex];
    },

    getPreviousQuestion: function getPreviousQuestion() {
      var questions = this.get('questions');
      var nextQuestion = (this.get('currentQuestion') - 1) % questions.length;
      if (nextQuestion < 0) { nextQuestion += questions.length; }
      this.set({ currentQuestion: nextQuestion });

      return questions[nextQuestion];
    },

  });

  // Class methods
  _.extend(SimpleTextQuizSubjectModel, {

    loadFromMarkdownCSV: function loadFromMarkdownCSV(url) {
      var d = $.Deferred();

      console.log(url);

      CSV.loadFromUrl(url).then(function(data) {
        var questions = [];
        _.each(data, function(record) {
          if (!_.has(record, "question") || !_.has(record, "answer")) {
            return;
          }

          var choices;
          if (_.keys(record).length > 2) {
            choices = [];
            var numChoices = _.keys(record).length - 2;
            for (var i = 0; i < numChoices; i++) {
              choices.push(record['choice_' + (i + 1)]);
            }
            choices.push(record['answer']);
          }

          questions.push(new SimpleTextQuizQuestionModel({
            'question': marked(record['question']),
            'answer': marked(record['answer']),
            'choices': choices
          }));
        }, this);

        d.resolve(new SimpleTextQuizSubjectModel({ questions: questions }));
      });

      return d;
    },

    loadFromCSV: function loadFromCSV(url) {
      var d = $.Deferred();

      console.log(url);

      CSV.loadFromUrl(url).then(function(data) {
        var questions = [];
        _.each(data, function(record) {
          if (!_.has(record, "question") || !_.has(record, "answer")) {
            return;
          }

          var choices;
          if (_.keys(record).length > 2) {
            choices = [];
            var numChoices = _.keys(record).length - 2;
            for (var i = 0; i < numChoices; i++) {
              choices.push(record['choice_' + (i + 1)]);
            }
            choices.push(record['answer']);
          }

          questions.push(new SimpleTextQuizQuestionModel({
            'question': record['question'],
            'answer': record['answer'],
            'choices': choices
          }));
        }, this);

        d.resolve(new SimpleTextQuizSubjectModel({ questions: questions }));
      });

      return d;
    },

  });

  // Our module now returns our view
  return SimpleTextQuizSubjectModel;

});
