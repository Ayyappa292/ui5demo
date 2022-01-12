sap.ui.controller("nnnn.controller.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf nnnn.demo
*/
//	onInit: function() {
//
//	},
	onpress1 : function(){
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
* @memberOf nnnn.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf nnnn.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf nnnn.demo
*/
//	onExit: function() {
//
//	}

});