sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("project.Component", {
	  metadata:{
		  manifest:"json"
	  },
      init : function () {
    	  debugger;
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
      },
      createContent : function(){
    	  debugger;
    		var app = new sap.m.App("project.views.App");
    		return app;
      }
   });
});