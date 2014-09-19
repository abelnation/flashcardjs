define([
  'jquery',
  'underscore',
  'backbone',
  'models/BaseModel',

  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseModel) {

  var QuizModel = BaseModel.extend({
    className: "QuizModel",

    postInitialize: function() {
    },
  });

  // Our module now returns our view
  return QuizModel;

});
