module.exports = function(grunt) {

  return {
    data: {
      files: [{
        cwd: '<%= paths.src %>/',
        expand: true,
        src: [
          "data/**"
        ],
        dest: "dist/"
      }]
    },

    release: {
      files: [
        {
          src: "<%= paths.bower %>/**",
          dest: "dist/"
        }
      ]
    }
  };
};
