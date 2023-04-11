module.exports = function (grunt) {
    //#region [ Registration ]

    grunt.registerTask("app-build", build);
    grunt.registerTask("app-clean", clean);

    //#endregion


    //#region [ Tasks ]

    /**
     * Build task.
     * 
     * @param {string} configuration Build configuration.
     */
    function build(configuration) {
        var version = grunt.config("package").version;

        grunt.log.writeln("Building \"" + configuration.toUpperCase() + "\" version \"" + version + "\"");

        // List of tasks
        var tasks = [
            "clean:wwwroot",
            "clean:dependencies",
            "copy:dependencies",
            "rename:dependencies",
            "jshint",
            "copy:img",
            "copy:js",
            "copy:html",
            "copy:config",
            "less"
        ];

        // Set up dynamic parameters
        switch(configuration.toUpperCase()) {
            case "DEBUG":
                grunt.config("configuration", "Debug");

                break;
            case "VSIX":
                grunt.config("configuration", "Vsix");

                break;                
            case "RELEASE":
                grunt.config("configuration", "Release");
                grunt.config("jshint.options.debug", false);

                tasks.push("cssmin");
                tasks.push("clean:cssmin");
                tasks.push("rename:cssmin");
                tasks.push("uglify:release");
                break;
            default:
                grunt.fail.fatal("Unknown build configuration '" + configuration.toUpperCase() + "'.");
            break;
        }

        // Run tasks
        grunt.task.run.apply(grunt.task, tasks);
    }


    /**
     * Clean task.
     */
    function clean() {
        grunt.log.writeln("Cleaning");

        // List of tasks
        var tasks = [
            "clean:vsix"
        ];

        // Run tasks
        grunt.task.run.apply(grunt.task, tasks);
    }    

    //#endregion
};