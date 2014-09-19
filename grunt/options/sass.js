module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    return {
        src: {
            options: {
                style: 'expanded', // grunt-inline will do the minification for us
                compass: true,
                lineNumbers: true,
            },
            expand: true,
            flatten: true,
            cwd: '<%= paths.src %>/scss/',
            src: [
                '**/*.scss',
                '!**/_*.scss',
                '!partials/**/*.scss'
            ],
            dest: '<%= paths.dist %>/css/',
            ext: '.css'
        },
    };
};
