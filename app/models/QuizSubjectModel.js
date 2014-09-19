define([
  'jquery',
  'underscore',
  'backbone',
  'models/BaseModel',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseModel) {

  var QuizSubjectModel = BaseModel.extend({

    className: "QuizSubjectModel",

    postInitialize: function() {
      this.isActive = true;
    },

    toggleIsActive: function(isActive) {
      if (typeof isActive === 'undefined') {
        this.isActive = !this.isActive;
      } else {
        this.isActive = isActive;
      }
    },

    // override
    getNextQuestion: function() {},
    // override
    getPreviousQuestion: function() {},

  });

  // Our module now returns our view
  return QuizSubjectModel;

});
