define([
  'jquery',
  'underscore',
  'backbone',
  'views/QuizView',
], function($, _, Backbone, QuizView) {
  "use strict";

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "index.html": "index",
    },

    index: function() {
      var quizView = new QuizView();
      quizView.render();
    }
  });

  return Router;
});
