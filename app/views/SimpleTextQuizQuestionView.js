define([
  'jquery',
  'underscore',
  'backbone',
  'views/QuizQuestionView',
  'views/TextQuizQuestionInputView',
  'views/MultipleChoiceQuizQuestionInputView',
  'text!templates/SimpleTextQuizQuestionView.html',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone,
  QuizQuestionView, TextQuizQuestionInputView, MultipleChoiceQuizQuestionInputView,
  simpleTextQuizQuestionViewTemplate
) {

  var SimpleTextQuizQuestionView = QuizQuestionView.extend({
    className: "SimpleTextQuizQuestionView",
    tagName: 'div',
    cssClass: 'simple-text-quiz-question-view',
    template: _.partial(_.template(simpleTextQuizQuestionViewTemplate)),

    postInitialize: function() {
      var answerView;
      var choices = this.model.get('choices');

      console.log("choices");
      console.log(choices);
      if (choices) {
        answerView = new MultipleChoiceQuizQuestionInputView({ model: choices });
      } else {
        answerView = new TextQuizQuestionInputView();
      }

      this.setAnswerInputView(answerView);
    },

    postRender: function() {
      if (this.model) {
        this.$(".question").html(this.model.get('question'));
        this.$(".answer").html(this.model.get('answer'));

        this.answerView.setElement(this.$(".answer-input"));
        this.answerView.render();

      }
    },

    showAnswer: function() {
      console.log(this.className + ": showAnswer");
      this.$(".answer").removeClass("invisible");
    },

  });

  // Our module now returns our view
  return SimpleTextQuizQuestionView;
});
