module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("rename", {
        dependencies: {
            files: [
                { src: ["js/libs/VSS.SDK.js"], dest: "js/libs/vss.js" }
            ]
        },
        cssmin: {
            files: [
                { src: ["wwwroot/css/unicornwidget.min.css"], dest: "wwwroot/css/unicornwidget.css" }
            ]
        }
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-rename-util");

    //#endregion
};