sap.ui.controller("sample.sample",{

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sample.sample
*/
	// set the alias here
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel(data);
		this.getView().setModel(oModel);	
		var oData=[ {"fullname2":sfullname},{"username2": susername}
		];
//		sfullname=oModel.getProperty("fullname1");
//		console.log(sfullname);
},

	onPress : function(){
		debugger;	
		var sfullname=this.getView().byId("fullname1").getValue();
		var susername=this.getView().byId("username1").getValue();
		var semail=this.getView().byId("email1").getValue();
		var spass=this.getView().byId("pass1").getValue();
		var snumber=this.getView().byId("mobile1").getValue();
		this.getView().getModel(oModel);
		oModel.setData(oData);
	},
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