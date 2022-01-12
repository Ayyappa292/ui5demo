sap.ui.controller("final.controllers.thirdview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf final.thirdview
*/
//	onInit: function() {
//
//	},
	onSubmit : function() { // Start of validations
		var sa = this.getView().byId("FName").getValue();
		var sb = this.getView().byId("UName").getValue();
		var sc = this.getView().byId("EmailId").getValue();
		var sd = this.getView().byId("Pass").getValue();
		var na = this.getView().byId("MNumber").getValue();
		var sapattern = /^[a-zA-Z\s]*$/; // start of patterns
		var sbpattern = /^[a-zA-Z0-9_]{3,15}$/;
		var scpattern = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
		var sdpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
		var napattern = /^[0-9]{10}$/;
		if (sapattern.test(sa)) // start of pattern checking
		{
			this.getView().byId("FName").setValueState(
					sap.ui.core.ValueState.None);
		} else {
			this.getView().byId("FName").setValueState(
					sap.ui.core.ValueState.Error);
		}
		if (sbpattern.test(sb)) {
			this.getView().byId("UName").setValueState(
					sap.ui.core.ValueState.None);
		} else {
			this.getView().byId("UName").setValueState(
					sap.ui.core.ValueState.Error);
		}
		if (scpattern.test(sc)) {
			this.getView().byId("EmailId").setValueState(
					sap.ui.core.ValueState.None);
		} else {
			this.getView().byId("EmailId").setValueState(
					sap.ui.core.ValueState.Error);
		}
		if (sdpattern.test(sd)) {
			this.getView().byId("Pass").setValueState(
					sap.ui.core.ValueState.None);
		} else {
			this.getView().byId("Pass").setValueState(
					sap.ui.core.ValueState.Error);
		}
		if (napattern.test(na)) {
			this.getView().byId("MNumber").setValueState(
					sap.ui.core.ValueState.None);
		} else {
			this.getView().byId("MNumber").setValueState(
					sap.ui.core.ValueState.Error);
		}
		var oModel = this.getView().getModel("idontknow");
		debugger;
		var aUsers = oModel.getProperty("/ouser");
		aUsers.push({
			username : sb,
			password : sd
		});
		oModel.setProperty("/ouser", aUsers);
		var adetails = oModel.getProperty("/ouserdetails");
		adetails.push(
				{
			fullname : sa,
			username : sb,
			email :sc,
			password : sd,
			phonenumber : na
				
		})
		oModel.setProperty("/ouserdetails",adetails)
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("fourthview");
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf final.thirdview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf final.thirdview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf final.thirdview
*/
//	onExit: function() {
//
//	}

});