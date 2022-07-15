sap.ui.controller("conditioncontract.mycontrollers.overview", {

	
	onCreateContract : function(){
	var Component = this.getOwnerComponent();
	var oDataModel = Component.getModel("oDataModel");
	var oModel = Component.getModel("myModel");
	const d = new Date();
	oContract = {
			 Id:"21323",
			    Type:"cust",
			    Externalreference:"ref2",
			    PrimaryPartnerNumber:"1234",
			    SalesOrganisation:"1710",
			    DistributionChannel:"10",
			    Division:"00",
			    SalesOffice:"dmat",
			    SalesGroup:"mat",
			    PurchaseOrganisation:"khhi",
			    PurchaseGroup:"kkl",
			    ValidFrom:d,
			    ValidTo:d,
			    DocumentDate:d,
			    ReferenceLeanGroup:"1234",
			    Status:"c",
			    ConditionContractNum:"444",
			    DataAging:d,
			    CreatedBy:"sample",
			    ChangedBy:"sampe",
			    CreatedOn:d,
			    ChangedOn:d,
			
	}
	oDataModel.create('/header', oContract,{
		
		success : function(oResponse) {

		},
		error : function(oResponse) {
		}
	})
	},
	onBeforeRebindTable: function(oEvent) {

        var mBindingParams = oEvent.getParameter("bindingParams");

        var aFilters = mBindingParams.filters
	
	}
	
});