sap.ui.controller("segmentationrequest.mycontrollers.tileview", {

	onInit : function() {

	},
	/**
	 * This Function open dialog to take inital user details
	 */

	onTilePress : function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("overview");
	}

});