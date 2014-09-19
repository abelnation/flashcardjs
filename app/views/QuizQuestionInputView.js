define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseView) {
  var QuizQuestionInputView = BaseView.extend({
    className: "QuizQuestionInputView",
    tagName: 'div',
    cssClass: 'quiz-question-input-view',
    // template: _.partial(_.template(quizQuestionViewTemplate)),

    postInitialize: function() {},
    postRender: function() {},

    checkAnswer: function(guessAnswer) {
      if (guessAnswer === this.model.answer) {
        this.onCorrectAnswer(guessAnswer);
      } else {
        this.onIncorrectAnswer(guessAnswer);
      }
    },

    onAnswerSubmitted: function(guessAnswer) {
      console.log("on answer submitted: " + guessAnswer);
      this.trigger("submit:answer", guessAnswer);
    },

  });

  // Our module now returns our view
  return QuizQuestionInputView;
});
