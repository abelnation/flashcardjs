module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('./package.json');
    var paths = pkg.domains;

    return {
        build: [ '<%= paths.build %>' ],
        dev: [ '<%= paths.dev %>' ],
        dist: [ '<%= paths.dist %>' ],
    };
};
