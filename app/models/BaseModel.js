define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone) {
  var BaseModel = Backbone.Model.extend({

    className: "BaseModel",

    constructor: function() {
      // Define objects that should be in all subclasses (not in prototype)
      // this.subviews = {};

      // Call the original constructor
      Backbone.Model.apply(this, arguments);
    },

    initialize: function(options) {
      this._postInitialize();
    },

    _postInitialize: function() {
      this.postInitialize();
      this.trigger('initialize');
    },

    // To be called before view is thrown away.  Clean up intervals, events, etc.
    // NOOP will be overriden
    cleanup: function() {
      this.dispose();
    },

    // Stole this method from Backbone v0.9.2 bleeding edge.
    // https://github.com/documentcloud/backbone/commit/3ae1af6df1b542bfb3e38f2fdfe7a471f2b830a0
    //
    // Clean up references to this view in order to prevent latent effects and
    // memory leaks.
    dispose: function() {
      return this;
    },

    // NOOP will be overriden
    postInitialize: function() {},

  });

  // Our module now returns our view
  return BaseModel;
});
