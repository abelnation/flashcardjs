define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone) {

  var Util = {
    loadFileFromUrl: function loadFileFromUrl(url, callback) {
      // TODO: (aallison) stub
      callback("text");
    },

    loadCSVFileFromUrl: function loadCSVFileFromUrl(url, callback) {
      // TODO: (aallison) stub
      callback([
        { 'question': 'foo1', 'answer': 'bar1' },
        { 'question': 'foo2', 'answer': 'bar2' },
        { 'question': 'foo3', 'answer': 'bar3' },
        { 'question': 'foo4', 'answer': 'bar4' },
        { 'question': 'foo5', 'answer': 'bar5' },
        { 'question': 'foo6', 'answer': 'bar6' },
        { 'question': 'foo7', 'answer': 'bar7' },
        { 'question': 'foo8', 'answer': 'bar8' },
      ]);
    }
  };

  return Util;
});
