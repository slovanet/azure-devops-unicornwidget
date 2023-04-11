module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("copy", {
        dependencies: {
            files: [{
                expand: true,
                flatten: true,
                cwd: "node_modules/",
                src: [
                    "vss-web-extension-sdk/lib/VSS.SDK.js"
                ],
                dest: "js/libs/",
                filter: "isFile"
            }]
        },
        img: {
            files: [{
                expand: true,
                cwd: "img/",
                src: ["**"],
                dest: "wwwroot/img/",
                filter: "isFile"
            }]
        },
        html: {
            options: {
                process: function (content, srcpath) {
                    if (grunt.config("configuration").toUpperCase() === "VSIX") {
                        return content
                            .replace(/#\{Project.AssemblyInfo.Version\}#/g, grunt.config("package").version)
                            .replace(/#\{Extension.Id\}#/g, grunt.config("package").name);
                    }

                    return content;
                }
            },
            files: [{
                expand: true,
                cwd: "html/",
                src: ["**"],
                dest: "wwwroot/html/",
                filter: "isFile"
            }]
        },        
        js: {
            options: {
                process: function (content, srcpath) {
                    if (grunt.config("configuration").toUpperCase() === "VSIX") {
                        return content
                            .replace(/#\{Project.AssemblyInfo.Version\}#/g, grunt.config("package").version);
                    }

                    return content;
                }
            }, 
            files: [{
                expand: true,
                cwd: "js/",
                src: ["**", "!**/*.less", "!config.*.js"],
                dest: "wwwroot/js/",
                filter: "isFile"
            }]
        },
        config: {
            options: {
                process: function (content, srcpath) {
                    if (grunt.config("configuration").toUpperCase() === "VSIX") {
                        return content
                            .replace(/#\{Project.AssemblyInfo.Version\}#/g, grunt.config("package").version)
                            .replace(/#\{Extension.Id\}#/g, grunt.config("package").name)
                            .replace(/#\{Extension.Publisher\}#/g, grunt.config("package").author);
                    }

                    return content;
                }
            },            
            files: [{
                expand: true,
                src: ["extension.json"],
                cwd: "",
                filter: "isFile",
                rename: function () {
                    return "wwwroot/vss-extension.json";
                }
            }]
        }
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-copy");

    //#endregion
};