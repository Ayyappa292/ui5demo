sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("product.Component", {
	   metadata:{
		   manifest :"json"
		},
      init : function () {
    	  debugger;
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         //this.getRouter().initialize();
      },
      createContent : function(){
    	  debugger;
    	  	var app = new sap.m.App("App");
    	  	var page1 = sap.ui.view({id:"view1", viewName:"product.views.mainview", type:sap.ui.core.mvc.ViewType.XML});
    	  	var page2 = sap.ui.view({id:"view2", viewName:"product.views.nextview", type:sap.ui.core.mvc.ViewType.XML});
			app.addPage(page1).addPage(page2);
    		return app;
      }
   });
});
