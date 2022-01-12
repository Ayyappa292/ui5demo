sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/IconPool",
	"sap/m/Dialog",
	"sap/m/DialogType",
	"sap/m/Button",
	"sap/m/ButtonType",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Text"
], function (Controller, JSONModel, IconPool, Dialog, DialogType, Button, ButtonType, List, StandardListItem, Text) {
	"use strict";
	return Controller.extend("product.controllers.mainview", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf product.mainview
*/
//	onInit: function() {
//
//	},
	onListItemPress: function (oEvent) {
		var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

		this.getSplitAppObj().toDetail(this.createId(sToPageId));
	},
	getSplitAppObj: function () {
		var result = this.byId("SplitAppDemo");
		if (!result) {
			Log.info("SplitApp object can't be found");
		}
		return result;
	},
onadd : function(){
	if(!this.newdialog){
	this.newdialog = sap.ui.xmlfragment("product.fragments.register",this);
	}
	this.newdialog.open();
},
onclose : function(){
	this.newdialog.close();
},
onSubmit : function(){
	debugger;
	let sa = sap.ui.getCore().byId("pid").getValue();
	let sb = sap.ui.getCore().byId("pn").getValue();
	let sc = sap.ui.getCore().byId("pimg").getValue();
	let sd = sap.ui.getCore().byId("mrp").getValue();
	let na = sap.ui.getCore().byId("op").getValue();
	let oModel = this.getView().getModel("iknow");
	let aproducts = oModel.getProperty("/products");
	aproducts.push({
		productid	: sa,
		productname	: sb,
		productimage	: sc,
		mrp : sc,
		offerprice	: sd
	});
	oModel.setProperty("/products",aproducts);
	this.newdialog.close();
},
onadd1 : function(){
	if(!this.newdialog1){
	this.newdialog1 = sap.ui.xmlfragment("product.fragments.userregister",this);
	}
	this.newdialog1.open();
},
onclose1 : function(){
	this.newdialog1.close();
},
onSubmit1 : function(){
	debugger;
	let sa = sap.ui.getCore().byId("uid").getValue();
	let sb = sap.ui.getCore().byId("un").getValue();
	let sc = sap.ui.getCore().byId("validity").getValue();
	let sd = sap.ui.getCore().byId("ms").getValue();
	let oModel = this.getView().getModel("iknow");
	let ausers = oModel.getProperty("/users");
	ausers.push({
		userid	: sa,
		username	: sb,
		validity	: sc,
		membership : sc
	});
	oModel.setProperty("/users",ausers);
	this.newdialog1.close();
},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf product.mainview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf product.mainview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf product.mainview
*/
//	onExit: function() {
//
//	}
	});
});