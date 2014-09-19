module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('./package.json');
    var paths = pkg.paths;

    return {
        default: {
            options : {
                add : {
                    // will only be added if NODE_ENV isn't already set
                    NODE_ENV : 'dev',
                    ABS_PATH : paths['dev'],
                },
            }
        },
        dev : {
            NODE_ENV : 'dev',
            ABS_PATH : paths['dev'],
        },
        dist : {
            NODE_ENV : 'dist',
            ABS_PATH : paths['dist'],
        }
    };
};
