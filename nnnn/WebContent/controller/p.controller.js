sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
 
	return Controller.extend("nnnn.controller.p", {
 
		onInit: function () {
			
		},
 onpress : function(){
	 debugger;
	 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	 oRouter.navTo("secondpage");
 },
 
	});
 
});
 