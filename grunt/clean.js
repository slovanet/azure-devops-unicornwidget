module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("clean", {
        wwwroot: [
            "wwwroot/**/*"
        ],
        vsix: [
            "wwwroot/**/*",
            "!wwwroot/*.vsix"
        ],
        dependencies: [
            "js/libs/*"
        ],
        cssmin: [
            "wwwroot/css/*",
            "!wwwroot/css/*.min.css"
        ]
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-clean");

    //#endregion
};