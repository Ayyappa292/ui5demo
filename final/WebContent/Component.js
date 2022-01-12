sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("final.Component", {
	   metadata:{
			manifest :"json"
		},
      init : function () {
    	  debugger;
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         this.getRouter().initialize();
      },
      createContent : function(){
    	  debugger;
    	  	var app = new sap.m.App("App");
    		return app;
      }
   });
});
