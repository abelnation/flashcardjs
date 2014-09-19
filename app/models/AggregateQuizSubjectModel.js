define([
  'jquery',
  'underscore',
  'backbone',
  'marked',
  'models/BaseModel',
  'models/QuizSubjectModel',
  'util/CSV',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, marked, BaseModel, QuizSubjectModel, CSV) {

  var AggregateSubjectModel = QuizSubjectModel.extend({

    className: "AggregateSubjectModel",

    postInitialize: function postInitialize() {

    },

    getCurrentQuestion: function getCurrentQuestion() {
      return this.currentQuestion;
    },

    getNextQuestion: function getNextQuestion() {
      // pick random subject from aggregate
      var subject = _.sample(this.model);

      this.previousQuestion = this.currentQuestion;
      this.currentQuestion = subject.getNextQuestion();
    },

    getPreviousQuestion: function getPreviousQuestion() {
      // TODO: (aallison) make robust
      return this.previousQuestion;
    },

  });

  // Class methods
  _.extend(AggregateSubjectModel, {

    subjectModelFromCollection: function loadFromCSV(subjectModels) {
      return new AggregateSubjectModel({ model: subjectModels });
    },

  });

  // Our module now returns our view
  return AggregateSubjectModel;

});
