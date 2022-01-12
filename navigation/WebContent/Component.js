sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("navigation.Component", {
metadata:{
	manifest :"json"
},
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         this.getRouter().initialize();
	},
	createContent : function(){
  	  debugger;
  		var app = new sap.m.App("App");
  		/*var page = sap.ui.view({id:"firstpage", viewName:"navigation.views.firstpage", type:sap.ui.core.mvc.ViewType.XML});
  		var page1 = sap.ui.view({id:"secondpage", viewName:"navigation.views.secondpage", type:sap.ui.core.mvc.ViewType.XML});
  		var page2 = sap.ui.view({id:"thirdpage", viewName:"navigation.views.thirdpage", type:sap.ui.core.mvc.ViewType.XML});
		app.addPage(page).addPage(page1).addPage(page2);*/
  		return app;
    }
   });
});
