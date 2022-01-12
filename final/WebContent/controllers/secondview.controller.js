sap.ui.controller("final.controllers.secondview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf final.secondview
*/
//	onInit: function() {
//
//	},
	onlogin : function(){
			debugger;
			var sa = this.getView("view2").byId("u1").getValue();
			var sb = this.getView().byId("p1").getValue();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oData = this.getView().getModel("idontknow").getData();
			var auser = jQuery.grep(oData.ouser, function(e) {
				return e.username === sa;
			});
			var apass = jQuery.grep(oData.ouser, function(e) {
				return e.password === sb;
			});
			
			if (auser.length != 0 && apass.length != 0) {
				oRouter.navTo("fourthview");
			} else {
				alert("invalid details");
			}
		},
		 
		 
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf final.secondview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf final.secondview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf final.secondview
*/
//	onExit: function() {
//
//	}

});