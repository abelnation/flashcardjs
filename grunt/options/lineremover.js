module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('./package.json');
    var paths = pkg.domains;

    return {
        html: {
            files: [{
                expand: true,
                cwd: '<%= pkg.paths.build %>/products/<%= grunt.task.current.args[0] %>/<%= grunt.task.current.args[1] %>/',
                src: ['**/*.html'],
                dest: '<%= pkg.paths.build %>/products/<%= grunt.task.current.args[0] %>/<%= grunt.task.current.args[1] %>/',
                ext: '.html'
            }]
        }
    };
};
