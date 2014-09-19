define([
  'jquery',
  'underscore',
  'backbone',
  'views/QuizQuestionInputView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, QuizQuestionInputView) {
  var TextQuizQuestionInputView = QuizQuestionInputView.extend({
    className: "TextQuizQuestionInputView",
    tagName: 'div',
    cssClass: 'text-quiz-question-input-view',
    // template: _.partial(_.template(quizQuestionViewTemplate)),

    postInitialize: function() {},

    postRender: function() {
      var that = this;
      var elem = $('<input type="text" value="" />');
      elem.keypress(function(e) {
        if (e.which === 13) {
          that.onAnswerSubmitted($(this).val());
        }
      });
      this.$el.append(elem);
      setTimeout(function() { this.$("input").focus(); }, 1);
    },

  });

  // Our module now returns our view
  return TextQuizQuestionInputView;
});
