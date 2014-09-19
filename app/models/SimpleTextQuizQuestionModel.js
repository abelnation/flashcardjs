define([
  'jquery',
  'underscore',
  'backbone',
  'models/BaseModel',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseModel) {

  var SimpleTextQuizQuestionModel = BaseModel.extend({

    className: "SimpleTextQuizQuestionModel",
    defaults: {
      'question': 'what is the answer?',
      'answer': 'this is the answer'
    },

    postInitialize: function() {},

  });

  // Our module now returns our view
  return SimpleTextQuizQuestionModel;

});
