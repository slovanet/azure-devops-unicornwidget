module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("less", {
        options: {
            paths: ["less"],
            strictMath: false
        },
        src: {
            files: {
                "wwwroot/css/unicornwidget.css": "less/unicornwidget.less"
            }
        }
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-less");

    //#endregion
};