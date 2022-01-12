sap.ui.controller("sample.sample",{

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sample.sample
*/

onInit: function() {
	debugger;
	var oModel= new sap.ui.model.json.JSONModel({
		data:{
		fullname:"Ayyappa",
		username:"ayyappa",
		email:"ayyappareddy292@gmail.com",
		pass:"qwerty@123",
		mobile:"987654321",
		}
	});	
		this.getView().setModel(oModel,"demo");	
},

	onclick : function(oEvent){
		debugger;	
		var sa = this.getView().getModel("demo").getProperty();
		console.log(sa);	
	},
	onpress : function(){
		var oapp = sap.ui.getCore().byId("app2");
		oapp.to(page1);
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sample.sample
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sample.sample
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sample.sample
*/
//	onExit: function() {
//
//	}
	
});