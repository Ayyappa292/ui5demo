sap.ui.define([
	"sap/ui/core/UIComponent",
],function(UIComponent){
	"use strict";
	return UIComponent.extend("demo.Component",{
		
});

	init : function(){
	UIComponent.prototype.init.apply.(this,arguments);
	var oModel = new sap.ui.model.json.JSONModel("demo11"){
		
	}
	oModel.loadData("model/object.json")
	this.getView().setModel(oModel,"demo11")
 }














})