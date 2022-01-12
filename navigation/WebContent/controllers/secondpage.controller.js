sap.ui.controller("navigation.controllers.secondpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf views.secondpage
*/
//	onInit: function() {
//
//	},
	onpress3 : function(){
		 debugger;
		 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		 oRouter.navTo("thirdpage");
	 },
		goback1 : function(){
			 debugger;
			 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			 oRouter.navTo("firstpage");
		 }
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf views.secondpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf views.secondpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf views.secondpage
*/
//	onExit: function() {
//
//	}

});