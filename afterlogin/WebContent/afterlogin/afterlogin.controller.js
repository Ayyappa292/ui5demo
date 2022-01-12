sap.ui.controller("afterlogin.afterlogin", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf afterlogin.afterlogin
*/

onInit: function() {
	var oModel= new sap.ui.model.json.JSONModel({
		ouser:[{
			username:"ayyappa",
			password:"qwerty"
			
		},
		
		{
			username:"pivox",
			password:"pivox"
		},
		],
		onewuser:[
			{
				username:"",
				password:""
			},
		],
	ouserdetails:[{
		ayyappa:{
		fullname:"Ayyappa Reddy",
		usename:"ayyappa",
		password:"qwerty",
		email:"ayyappa@gmail.com",
		phonenumber:"9876543212",
	}},
	{
		pivox:{
		fullname:"pivox labs",
		usename:"pivox",
		password:"pivox",
		email:"pivox@gmail.com",
		phonenumber:"9876543211",
	}},
	],
	onewdetails:[
		{
		fullname:"",
		usename:"",
		password:"",
		email:"",
		phonenumber:"",
	},
	]
	});
	this.getView().setModel(oModel,"demo");
},

onListItemPress: function (oEvent) {debugger;
	var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
	var ostudent= oEvent.getSource().getBindingContext("demo");
	var ostudentmodel = this.getView().getModel("demo");
	if(ostudentmodel){
		ostudentmodel.setData(ostudent);
	}
	this.getSplitAppObj().toDetail(this.createId(sToPageId));
},
getSplitAppObj: function () {
	var result = this.byId("splitapp");
	if (!result) {
		Log.info("SplitApp object can't be found");
	}
	return result;
},
/*onListItemPress: function (oEvent) {debugger;
var ostudent= oEvent.oSource.getBindingContext().getValue();
var ostudentmodel = this.getView().getModel("demo");
if(ostudentmodel){
	ostudentmodel.setData(ostudent);
}
},*/

//onForgot : function(){
//	var oapp = sap.ui.getCore().byId("app1");
//	oapp.to(page3);
//},
//onNew : function(){
//	var oapp = sap.ui.getCore().byId("app1");
//	oapp.to(page2);
//},
//onLogin: function(){
//	var sa= this.getView().byId("u1").getValue();
//	var sb= this.getView().byId("p1").getValue();
//	
//	var oData = this.getView().getModel("demo").getData();
//	var auser = jQuery.grep(oData.ouser1,function(e) {
//	    return e.username === sa;
//	});
//	var apass = jQuery.grep(oData.ouser1,function(e){
//		return e.password === sb;
//	});
//	
//	if(auser.length!=0 && apass.length!=0)
//		{
//		var oapp = sap.ui.getCore().byId("app1");
//		oapp.to(page4);
//		}
//	else
//		{
//		alert("invalid details");
//		}
//},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf afterlogin.afterlogin
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf afterlogin.afterlogin
*/
//onAfterRendering: function () {
//	
//},
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf afterlogin.afterlogin
*/
//	onExit: function() {
//
//	}

});