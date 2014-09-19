module.exports = function(grunt) {

  return {
    release: {
      options: {
        mainConfigFile: "<%= paths.src %>/config.js",

        include: [ "main" ],
        out: "<%= paths.dist %>/source.min.js",
        //optimize: "uglify2",
        // generateSourceMaps: true,

        optimize: "none",

        baseUrl: "app",
        paths: {
          "almond": "../<%= paths.bower %>/almond/almond",
          "marked": "../node_modules/marked/lib/marked",
        },
        name: "almond",
        wrap: true,
        preserveLicenseComments: false
      }
    }
  };
};
