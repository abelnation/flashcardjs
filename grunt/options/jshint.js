module.exports = function(grunt) {
    return {
        gruntfile: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: 'Gruntfile.js'
        },
        grunttasks: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['./grunt/**/*.js', './grunt/*.js']
        },
        src: {
            options: {
                jshintrc: '<%= paths.src %>/.jshintrc'
            },
            src: [
                '<%= paths.src %>/**/*.js',
                '!<%= paths.src %>/**/lib/*.js',
            ]
        },
        spec: {
            options: {
                jshintrc: '<%= paths.tests %>/.jshintrc'
            },
            src: [
                '<%= paths.tests %>/*/specs/*.spec.js',
            ]
        },
    };
};
