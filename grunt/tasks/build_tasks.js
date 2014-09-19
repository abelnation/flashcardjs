module.exports = function(grunt) {
    var _ = require("underscore");

    //
    // Fine-grained Tasks
    //

    // Javascript
    grunt.registerTask('lint', [
        'jshint',
        'jscs',
    ]);

    // Build app
    grunt.registerTask('build', [
        'clean',
        'devUpdate',
        'lint',
        // 'karma:run',
        'processhtml',
        'copy',
        'requirejs',
        'sass',
    ]);
};
