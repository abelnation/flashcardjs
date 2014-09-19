define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
], function($, _, Backbone) {

  function loadFileFromUrl(url, callback) {
    // TODO: (aallison) stub
    callback("text");
  }

  var CSV = {

    loadFromText: function loadFromText(text) {
      var lines = text.split(/[\r\n]/);
      var result = [];
      var tokens;
      var record;

      var columnNames = lines[0].split(",");

      _.each(lines, function(line, index) {
        if (index === 0) { return; }

        tokens = line.split(",");

        // line into a key/value dict record
        result.push(_.reduce(
          tokens,
          function(res, token, index) {
            res[columnNames[index]] = token;
            return res;
          },
          {}
        ));

      });

      return result;
    },

    loadFromUrl: function loadCSVFileFromUrl(url) {
      var d = $.Deferred();

      console.log(url);

      $.get(url, _.bind(function(data, textStatus, jqXHR) {
        d.resolve(this.loadFromText(data));
      }, this));

      // var result = [
      //   { 'question': 'question 1', 'answer': 'answer 1' },
      //   { 'question': 'question 2', 'answer': 'answer 2', 'choice_1': 'foo', 'choice_2': 'answer 2', 'choice_3': 'baz' },
      //   { 'question': 'question 3', 'answer': 'answer 3' },
      //   { 'question': 'question 4', 'answer': 'answer 4' },
      //   { 'question': 'question 5', 'answer': 'answer 5', 'choice_1': 'answer 5', 'choice_2': 'bar', 'choice_3': 'baz' },
      //   { 'question': 'question 6', 'answer': 'answer 6' },
      //   { 'question': 'question 7', 'answer': 'answer 7' },
      //   { 'question': 'question 8', 'answer': 'answer 8' },
      //   { 'question': 'question 9', 'answer': 'answer 9' },
      //   { 'question': 'question 10', 'answer': 'answer 10', 'choice_1': 'foo', 'choice_2': 'bar', 'choice_3': 'answer 10' },
      //   { 'question': 'question 11', 'answer': 'answer 11' },
      //   { 'question': 'question 12', 'answer': 'answer 12' },
      //   { 'question': 'question 13', 'answer': 'answer 13' },
      // ];
      // setTimeout(function() {
      //   console.log("resolving csv call");
      //   d.resolve(result);
      // }, 1000);

      return d;
    }
  };

  return CSV;
});
