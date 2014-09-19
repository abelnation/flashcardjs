module.exports = function(grunt) {
    return {
        gruntfile: {
            files: '<%= jshint.gruntfile.src %>',
            tasks: ['jshint:gruntfile']
        },
        grunttasks: {
            files: ['grunt/**/*', '.jshintrc', '.jscs.jquery.json'],
            // options: {
            //     reload: true
            // },
            tasks: ['jshint:grunttasks']
        },
        all: {
            // options: {
            //     reload: true
            // },
            files: [
                '<%= paths.src %>/**',
                './index.html',
            ],
            tasks: [
                'build',
            ]
        },
    };
};
