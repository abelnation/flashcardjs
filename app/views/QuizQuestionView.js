define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseView) {
  var QuizQuestionView = BaseView.extend({
    className: "QuizQuestionView",
    tagName: 'div',
    cssClass: 'quiz-question-view',
    // template: _.partial(_.template(quizQuestionViewTemplate)),

    // overridden
    showAnswer: function() {},

    setAnswerInputView: function(answerView, rerender) {
      this.answerView = answerView;
      this.answerView.on("submit:answer", function(guessAnswer) {
        if (this.model.get('answer') === guessAnswer) {
          this.onCorrectAnswer(guessAnswer);
        } else {
          this.onIncorrectAnswer(guessAnswer);
        }
      }, this);
      this.render();
    },

    onCorrectAnswer: function(guessAnswer) {
      console.log("Correct!");
      this.trigger("answer:correct");
    },

    onIncorrectAnswer: function(guessAnswer) {
      console.log("Incorrect!");
      this.trigger("answer:incorrect");
    },
  });

  // Our module now returns our view
  return QuizQuestionView;
});
