sap.ui.controller("registrationform.registrationform", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf registrationform.registrationform
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf registrationform.registrationform
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf registrationform.registrationform
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf registrationform.registrationform
*/
//	onExit: function() {
//
//	}
	onSubmit : function(){						//Start of validations
		var sa = sap.ui.getCore().byId("FName").getValue();
		var sb = sap.ui.getCore().byId("UName").getValue();
		var sc = sap.ui.getCore().byId("EmailId").getValue();
		var sd = sap.ui.getCore().byId("Pass").getValue();
		var na = sap.ui.getCore().byId("MNumber").getValue();
		var sapattern = /^[a-zA-Z\s]*$/;
		var sbpattern = /^[a-zA-Z0-9_]{3,15}$/;	
		var scpattern=/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
		var sdpattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
		var napattern=/^[0-9]{10}$/;		
		if(!sapattern.test(sa))
			{
			sap.ui.getCore().byId("FName").setValueState(sap.ui.core.ValueState.Error);
			alert(sa+"is not a valid Full Name");
			}
		if(!sbpattern.test(sb))
		{
		sap.ui.getCore().byId("UName").setValueState(sap.ui.core.ValueState.Error);
		alert(sb+"is not a valid UserName");
		}
		if(!scpattern.test(sc))
		{
		sap.ui.getCore().byId("EmailId").setValueState(sap.ui.core.ValueState.Error);
		alert(sc+"is not a valid Email")
		}
		if(!sdpattern.test(sd))
		{
		sap.ui.getCore().byId("Pass").setValueState(sap.ui.core.ValueState.Error);
		alert(sd+"is not a valid pass")
		}
		if(!napattern.test(na))
		{
		sap.ui.getCore().byId("MNumber").setValueState(sap.ui.core.ValueState.Error);
		alert(na+"is not a valid Mobile Number")
		}
	} // end of validations
});