module.exports = function(grunt) {

  var framework = "mocha";

  return {
    options: {
      basePath: process.cwd(),
      singleRun: true,
      captureTimeout: 7000,
      autoWatch: true,
      logLevel: "INFO",
      reporters: ["dots", "coverage"],
      browsers: ["PhantomJS"],
      frameworks: [framework],
      plugins: [
        "karma-jasmine",
        "karma-mocha",
        "karma-qunit",
        "karma-phantomjs-launcher",
        "karma-coverage"
        ],
      preprocessors: {
        "<%= paths.src %>/**/*.js": "coverage"
      },
      coverageReporter: {
        type: "lcov",
        dir: "test/coverage"
      },
      files: [
        "<%= paths.bower %>/assert/assert.js",
        "<%= paths.bower %>/requirejs/require.js",
        "<%= paths.tests %>/runner.js",
        {
          pattern: "<%= paths.src %>/**/*.*",
          included: false
        }, {
          pattern: "<%= paths.tests %>/" + framework + "/**/*.spec.js",
          included: false
        }, {
          pattern: "<%= paths.bower %>/**/*.js",
          included: false
        }
      ]
    },
    daemon: {
      options: {
        singleRun: false
      }
    },
    run: {
      options: {
        singleRun: true
      }
    }
  };
};
