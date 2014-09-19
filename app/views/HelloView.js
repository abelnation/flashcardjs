define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/hello.html'
], function($, _, Backbone, helloTemplate) {
  var HelloView = Backbone.View.extend({
    el: $('#main'),
    render: function() {
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( helloTemplate, data );

      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });

  // Our module now returns our view
  return HelloView;
});
