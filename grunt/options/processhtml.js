module.exports = function(grunt) {

  return {
    release: {
      files: {
        "<%= paths.dist %>/index.html": [ "index.html" ]
      }
    }
  };
};
