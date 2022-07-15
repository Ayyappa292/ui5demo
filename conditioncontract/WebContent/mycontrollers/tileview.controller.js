sap.ui.controller("conditioncontract.mycontrollers.tileview", {

	onInit : function() {
		var Component = this.getOwnerComponent();
		var oDataModel = Component.getModel("oDataModel");
		var oModel = Component.getModel("myModel");
		oDataModel.read('/header', {
			urlParameters : {
				"$expand" : "to_items"
			},
			success : function(oResponse) {
				oModel.setProperty("/contractData", oResponse.results);
			},
			error : function(oResponse) {
			}
		})

	},
	/**
	 * This Function open dialog to take inital user details
	 */

	onTilePress : function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("overview");
		
	}

});