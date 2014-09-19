module.exports = function(grunt) {
    return {
        options: {
          config: "<%= pkg.paths.src %>/.jscs.jquery.json",
        },
        src: {
            files: {
                src: [ "<%= jshint.src.src %>" ]
            }
        },
    };
};
