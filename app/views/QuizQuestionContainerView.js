define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'views/SimpleTextQuizQuestionView',
  'text!templates/QuizQuestionContainerView.html'
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseView, SimpleTextQuizQuestionView, quizQuestionContainerViewTemplate) {
  var QuizQuestionContainerView = BaseView.extend({
    className: "QuizQuestionContainerView",
    tagName: 'div',
    cssClass: 'quiz-question-container-view',
    template: _.partial(_.template(quizQuestionContainerViewTemplate)),

    postInitialize: function() {},

    postRender: function() {
      if (this.questionView) {
        this.questionView.render();
        this.$('.quiz-question-content-container').html(this.questionView.$el);
      }
    },

    setQuestion: function(quizQuestionView) {
      // remove old question view
      if (this.questionView) {
        this.questionView.remove();
      }

      // set new question view
      this.questionView = quizQuestionView;
      this.questionView.on("answer:correct", function() { this.trigger("answer:correct"); }, this);
      this.questionView.on("answer:incorrect", function() { this.trigger("answer:incorrect"); }, this);

      // re-render
      this.render();
    },

    showAnswer: function() {
      console.log(this.className + ": showAnswer");
      this.questionView.showAnswer();
    }

  });

  // Our module now returns our view
  return QuizQuestionContainerView;
});
