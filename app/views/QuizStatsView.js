define([
  'jquery',
  'underscore',
  'backbone',
  'views/BaseView',
  'text!templates/QuizStatsView.html'
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone, BaseView, quizStatsViewTemplate) {
  var QuizStatsView = BaseView.extend({
    className: "QuizStatsView",
    tagName: 'div',
    cssClass: 'quiz-stats-view',
    template: _.partial(_.template(quizStatsViewTemplate)),

    postInitialize: function() {},
    postRender: function() {},

  });

  // Our module now returns our view
  return QuizStatsView;
});
