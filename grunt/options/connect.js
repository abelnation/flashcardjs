module.exports = function(grunt) {
    return {
        watch: {
            options: {
              port: 8084,
              base: '<%= paths.dist %>/',
              debug: true,
              livereload: true,
              keepalive: true,
              // open: true
            },
        },
    };
};
