sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent,JSONModel) {
	"use strict";
	return UIComponent.extend("nnnn.Component", {
		metadata: {
			manifest: "json",
		},
	init : function () {
  	  debugger;
       // call the init function of the parent
       UIComponent.prototype.init.apply(this, arguments);
       var oModel = new JSONModel({
    	   oData:{
    		   name:"ayyappa",
    		   phonenumber:"9876543211"
    	   }
       })
       //oModel.setData(oData);
       this.setModel(oModel,"mymodel")
       console.log(oModel.getData())
       this.getRouter().initialize();
    },
    createContent : function(){
  	  debugger;
  		var app = new sap.m.App("app");
//  		var page = sap.ui.view({id:"p",viewName:"nnnn.views.p", type:sap.ui.core.mvc.ViewType.XML});
//  		var page1 = sap.ui.view({id:"demo",viewName:"nnnn.views.demo", type:sap.ui.core.mvc.ViewType.XML});
//  		var page2 = sap.ui.view({id:"third",viewName:"nnnn.views.third", type:sap.ui.core.mvc.ViewType.XML});
//  		app.addPage(page).addPage(page1).addPage(page2);
  		return app;
    },

	});
 
});