(function (root, factory) {
    factory(root.VSS);
}(typeof self !== "undefined" ? self : this, function (vss) {
    //#region [ Fields ]

    var global = (function () { return this; })();
    var view = global.document.querySelector(".unicorn");
    
    //#endregion


    //#region [ Constructors ]

    /**
     * Constructor.
     * 
     * @param {object} args Arguments.
     */
    var Model = function (args) {
        console.log("Unicorn()");

        this.projectId = args.projectId;
        this.collectionUri = args.collectionUri;
        this.widgetHelpers = args.widgetHelpers;
    };

    //#endregion


    //#region [ Methods : Public ]

    /**
     * Loads widget.
     * 
     * @param {object} widgetSettings Widget settings. 
     */
    Model.prototype.load = function (widgetSettings) {
        return this.widgetHelpers.WidgetStatusHelper.Success();
    };


    /**
     * Reloads widget.
     * 
     * @param {object} widgetSettings Widget settings. 
     */
    Model.prototype.reload = function (widgetSettings) {
        return this.load(widgetSettings);
    };
  
    //#endregion


    //#region [ Initialization ]

    vss.init({                        
        explicitNotifyLoaded: true,
        usePlatformStyles: true
    });
    
    vss.require([
        "TFS/Dashboards/WidgetHelpers"
    ], function (WidgetHelpers) {
        var webContext = vss.getWebContext();

        // Create model instance
        var model = new Model({
            projectId: webContext.project.id,
            collectionUri: webContext.collection.uri,
            widgetHelpers: WidgetHelpers
        });

        // Register widget
        vss.register("unicornwidget", function () {                
            return model;
        });

        vss.notifyLoadSucceeded();
    });

    //#endregion
}));