define([
  'jquery',
  'underscore',
  'backbone',
  'views/QuizQuestionInputView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, QuizQuestionInputView) {

  var MultipleChoiceQuizQuestionInputView = QuizQuestionInputView.extend({
    className: "MultipleChoiceQuizQuestionInputView",
    tagName: 'div',
    cssClass: 'multiple-choice-quiz-question-input-view',
    // template: _.partial(_.template(quizQuestionViewTemplate)),

    postInitialize: function() {},

    postRender: function() {
      if (this.model && _.isArray(this.model)) {
        console.log(this.model);

        var that = this;

        this.model = _.shuffle(this.model);
        _.each(this.model, function(answer) {
          var elem = $(_.template('<button type="button" class="btn btn-default" value="<%= value %>"><%= text %></button> ', { 'value': encodeURIComponent(answer), 'text': answer }));
          elem.click(function(e) {
            that.onAnswerSubmitted(decodeURIComponent($(this).val()));
          });
          this.$el.append(elem);
          this.$el.append(" ");
        }, this);
      }
    },

  });

  // Our module now returns our view
  return MultipleChoiceQuizQuestionInputView;
});
