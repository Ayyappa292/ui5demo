sap.ui.controller("form.form", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf form.form
*/onSubmit : function(){						//Start of validations
	debugger;
	var sa = this.getView().byId("FName").getValue();
	var sb = this.getView().byId("UName").getValue();
	var sc = this.getView().byId("EmailId").getValue();
	var sd = this.getView().byId("Pass").getValue();
	var na = this.getView().byId("MNumber").getValue();
	var sapattern = /^[a-zA-Z\s]*$/;					//start of patterns			
	var sbpattern = /^[a-zA-Z0-9_]{3,15}$/;	
	var scpattern=/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
	var sdpattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	var napattern=/^[0-9]{10}$/;
	if(sapattern.test(sa))									//start of pattern checking
		{
		this.getView().byId("FName").setValueState(sap.ui.core.ValueState.None);
		}
		else
		{
		this.getView().byId("FName").setValueState(sap.ui.core.ValueState.Error);		
		}
	if(sbpattern.test(sb))
		{
		this.getView().byId("UName").setValueState(sap.ui.core.ValueState.None);
		}
	else
	{
		this.getView().byId("UName").setValueState(sap.ui.core.ValueState.Error);
	}
	if(scpattern.test(sc))
		{
		this.getView().byId("EmailId").setValueState(sap.ui.core.ValueState.None);
		}
	else
	{
		this.getView().byId("EmailId").setValueState(sap.ui.core.ValueState.Error);
	}
	if(sdpattern.test(sd))
		{
		this.getView().byId("Pass").setValueState(sap.ui.core.ValueState.None);
		}
	else
	{
		this.getView().byId("Pass").setValueState(sap.ui.core.ValueState.Error);
	}
	if(napattern.test(na))
		{
		this.getView().byId("MNumber").setValueState(sap.ui.core.ValueState.None);
		}
	else
	{
		this.getView().byId("MNumber").setValueState(sap.ui.core.ValueState.Error);
	}
	
},

onLogin : function(){									//switch to login view	
	var oapp = sap.ui.getCore().byId("app1");
	oapp.to(page);
},	
onNew : function(){										//switch to new registration view
	var oapp = sap.ui.getCore().byId("app1");
	oapp.to(page);
},
handleChange: function (oEvent) {
	var oValidatedComboBox = oEvent.getSource();
	var	sSelectedKey = oValidatedComboBox.getSelectedKey();
	var	sValue = oValidatedComboBox.getValue();
	if (sValue==null) {
		oValidatedComboBox.setValueState(ValueState.Error);
		oValidatedComboBox.setValueStateText("Please enter a valid country!");
	} else {
		oValidatedComboBox.setValueState(ValueState.None);
	}
},
//	onInit: function() {
//	
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf form.form
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf form.form
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf form.form
*/
//	onExit: function() {
//
//	}
	
});