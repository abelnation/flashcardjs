define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone) {
  var BaseView = Backbone.View.extend({

    className: "BaseView",
    cssClass: "base-view",
    template: null,

    constructor: function() {
      // Define objects that should be in all subclasses (not in prototype)
      // this.subviews = {};
      this.cssClasses = [];

      // Call the original constructor
      Backbone.View.apply(this, arguments);
    },

    initialize: function(options) {
      this.bindings();
      this._postInitialize();
    },

    _postInitialize: function() {
      // create cached jquery ref to dom obj
      if (this.el) {
        this.$el = $(this.el);
      }

      // Add cssClass of instance to container element
      _.each(this.getCssClasses(), function(cssClass) {
        this.cssClasses.push(cssClass);
        if (typeof this.el !== 'undefined') {
          $(this.el).addClass(cssClass);
        }
      }, this);

      this.postInitialize();
      this.trigger('initialize');
    },

    getRenderData: function() {
      if (this.model) {
        console.log(this.model);
        return this.model.toJSON();
      } else {
        return {};
      }
    },

    getTemplate: function() {
      // if (this.template && typeof JST !== 'undefined') {
      //   return JST[this.template];
      // }
      return this.template;
    },

    getHtml: function() {
      var template = this.getTemplate();
      if (template) {
        return template(this.getRenderData());
      } else {
        return "";
      }
    },

    render: function() {
      this.$el.html(this.getHtml());
      this.trigger('render');
      this.postRender();
      return this;
    },

    // crawls up prototype chain, generating a list of cssClasses of
    // all parent classes
    getCssClasses: function() {
      var result = [];

      var proto = Object.getPrototypeOf(this);

      while (typeof proto !== 'undefined' && proto !== null) {
        if (_.has(proto, 'cssClass')) {
          result.push(proto.cssClass);
        }

        proto = Object.getPrototypeOf(proto);
      }

      return result;
    },

    // To be called before view is thrown away.  Clean up intervals, events, etc.
    // NOOP will be overriden
    cleanup: function() {
      this.dispose();
      this.remove();
    },

    // Stole this method from Backbone v0.9.2 bleeding edge.
    // https://github.com/documentcloud/backbone/commit/3ae1af6df1b542bfb3e38f2fdfe7a471f2b830a0
    //
    // Clean up references to this view in order to prevent latent effects and
    // memory leaks.
    dispose: function() {
      this.undelegateEvents();

      if (this.model) {
        this.model.off(null, null, this);
      }

      if (this.collection) {
        this.collection.off(null, null, this);
      }

      return this;
    },

    // NOOP will be overriden
    postInitialize: function() {},

    // NOOP will be overriden
    postRender: function() {},

    // Your bindings
    // NOOP will be overriden
    bindings: function() {},

  });

  // Our module now returns our view
  return BaseView;
});
