	sap.ui.define([
        "sap/ui/core/mvc/Controller",
    	"sap/ui/model/Filter",
    	"sap/ui/model/FilterOperator",
              ],function(Controller,Filter,FilterOperator){
	              "use strict";
	  return Controller.extend("final.controllers.fourthview",{
// onInit: function() {
// },
		  
	onselectChange : function(oEvent) {
		debugger;	
		var omodel = this.getView().getModel("idontknow");	
		let odata = omodel.getProperty("/ouserdetails");
		let list = this.getView().byId("listid").getSelectedItem();
		let ouser = list.getBindingContext("idontknow").getObject("username");
		let odetails = odata.find(element=>element.username == ouser);
		let aa = this.getView().getModel("idontknow").getProperty("/details");
		aa=[];
		aa.push(odetails);
		this.getView().getModel("idontknow").setProperty("/details",aa);
		console.log(this.getView().getModel("idontknow").getProperty("/details"));
		var sToPageId = oEvent.getParameter("listItem")
		.getCustomData()[0].getValue();
		this.getSplitAppObj()
		.toDetail(this.createId(sToPageId));
	},
	getSplitAppObj : function() {
		var result = this.byId("splitapp");
		if (!result) {
			Log.info("SplitApp object can't be found");
		}
		return result;
	},
	onSearch: function (oEvent) {
		debugger;
		var aFilters = [];
		var sQuery = oEvent.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new Filter("username", FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var oList = this.byId("listid");
		var oBinding = oList.getBinding("items");
		oBinding.filter(aFilters, "ouser");
	},
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf final.fourthview
 */
// onBeforeRendering: function() {
//
// },

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf final.fourthview
 */
// onAfterRendering: function() {
//
// },

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf final.fourthview
 */
// onExit: function() {
//
// }
	  });

});