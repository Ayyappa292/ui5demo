sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/Device', "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator", "sap/m/ColumnListItem", "sap/m/MessageToast",
        "sap/m/MessageBox", "sap/m/Input", "sap/m/ComboBox",
        "sap/m/DatePicker", "sap/ui/core/Item", 	"sap/m/Token", 	'sap/m/Label',
        "sap/ui/core/Fragment"
    ],
    function(Controller, Device, Filter, FilterOperator, ColumnListItem, MessageToast,
        MessageBox, Input, ComboBox, DatePicker, Item,Token,Label,Fragment) {
        "use strict";

        return Controller.extend("segmentationrequest.mycontrollers.objectpageview", {
            onInit: function() {
                debugger;
                let oComponent = this.getOwnerComponent();
                oComponent.getRouter().attachRoutePatternMatched(this._handleRouteMatched, this);
            },
            _handleRouteMatched: function(oEvent) {
                let iId = oEvent.getParameters().arguments.Id;
                this.readData(iId);
            },
            readData: function(iId) {
                let oView = this.getView();
                var Component = this.getOwnerComponent();
                var oDataModel = Component.getModel("oDataModel");
                var oModel = Component.getModel("myModel");
                oDataModel.setUseBatch(false);
                oDataModel.read(`/header('${iId}')`, {
                    async: false,
                    urlParameters: { "$expand": "to_items" },
                    success: function(oResponse) {
                        oResponse.ValidTo = new Date(oResponse.ValidTo).toDateString();
                        oResponse.ValidFrom = new Date(oResponse.ValidFrom).toDateString();
                        oResponse.CreatedOn = new Date(oResponse.CreatedOn).toLocaleString();

                        for (let i = 0; i < oResponse.to_items.results.length; i++) {
                            oResponse.to_items.results[i].ValidTo = new Date(oResponse.to_items.results[i].ValidTo).toDateString();
                            oResponse.to_items.results[i].ValidFrom = new Date(oResponse.to_items.results[i].ValidFrom).toDateString();
                        };
                        oModel.setProperty("/oSelectedRecord", oResponse);
                        oModel.setProperty("/oSelectedItemRecord", oResponse.to_items.results);
                        if (oResponse.Type == "CUST") {
                            oModel.setProperty("/oType", "CUSTOMER");
                            oModel.setProperty("/oDescription", "Customer Description");
                            let oSelectedItemRecord = oModel.getProperty("/contractData");
	                    	let aArray = [];
	                    	for(let i=0; i<oSelectedItemRecord.length;i++){
	                    	 for(let j=0; j<oSelectedItemRecord[i].to_items.results.length;j++){ 
	                    		let oCustomerName = oSelectedItemRecord[i].to_items.results[j].Customer;
	                    		let oCustomerDescription =  oSelectedItemRecord[i].to_items.results[j].CustomerDescription;
	                    		if(oCustomerName !== ""){
	                    		aArray.push({
	                    			Description: oCustomerDescription,
	                    			Name: oCustomerName
	                    			});	
	                    		}
	                    	  }
	                    	}
	                    	oModel.setProperty("/aCustomerVendor",aArray);
	                    	oView.byId("Navcon").to(oView.byId("General_Details"));		                    	
	                    }else{
	                    	oModel.setProperty("/oType","VENDOR");
	                    	oModel.setProperty("/oDescription","Vendor Description");
	                    	let oSelectedItemRecord = oModel.getProperty("/contractData");
	                    	let aArray = [];
	                    	for(let i=0; i<oSelectedItemRecord.length;i++){
	                    		for(let j=0; j<oSelectedItemRecord[i].to_items.results.length;j++){ 
	                    		let oVendorName = oSelectedItemRecord[i].to_items.results[j].Vendor;
	                    		let oVendorDescription = oSelectedItemRecord[i].to_items.results[j].VendorrDescription;
	                    		if(oVendorName !== ""){
	                    		aArray.push({
	                    			Description: oVendorDescription,
	                    			Name: oVendorName
	                    			
	                    		});	
	                    		}
	                    	}
	                    	}
	                    	oModel.setProperty("/aCustomerVendor",aArray);
	                    	oView.byId("Navcon").to(oView.byId("Vendor"));
	                    }
                        var oBusyDialog = sap.ui.xmlfragment("segmentationrequest.myfragments.BusyDialog");
                        oBusyDialog.open();
                        setTimeout(function() {
                            oBusyDialog.close();
                        }, 1000);
                        //this.onItemSelect();
                    },
                    error: function(oResponse) {}
                })
            },
            onBack: function() {
                let navcon = this.getView().byId("Navcon");
                let General_Details = this.getView().byId("General_Details");
                navcon.to(General_Details);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.getView().byId("NavigationList").setSelectedKey("General_Details");
                oRouter.navTo("overview");
               
                
            },
            onSideNavButtonPress: function() {
                var oToolPage = this.byId("toolPage");
                var bSideExpanded = oToolPage.getSideExpanded();

                this._setToggleButtonTooltip(bSideExpanded);

                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },
            _setToggleButtonTooltip: function(bLarge) {
                var oToggleButton = this.byId('sideNavigationToggleButton');
                if (bLarge) {
                    oToggleButton.setTooltip('Large Size Navigation');
                    let navcon = this.getView().byId("Navcon");
                    let General_Details = this.getView().byId("General_Details");
                    navcon.to(General_Details);
                } else {
                    oToggleButton.setTooltip('Small Size Navigation');
                }
            },
            onItemSelect: function(oEvent) {
                let oItem = oEvent.getParameter("item");
                let oView = this.getView();
                let oComponent = this.getOwnerComponent();
                let oModel = oComponent.getModel("myModel");
                let oType = oModel.getProperty("/oType");
                if (oItem.mProperties.text == "General Details") {
                    var type = this.getOwnerComponent().getModel("myModel").getProperty("/oSelectedRecord/Type");
                    if (type == "CUST") {
                        this.byId("Navcon").to(this.getView().byId("General_Details"));
                    } else {
                        this.byId("Navcon").to(this.getView().byId("Vendor"));
                    }
                } else {
                    this.byId("Navcon").to(this.getView().byId(oItem.getKey()));
                }
            },
            onOperation: function(oEvent) {
                debugger;
                var sSelectedOperation = oEvent.getParameters().item.getText();
                if (sSelectedOperation == "Add") {
                    debugger;
                    if (!this.newdialog) {
                        this.newdialog = sap.ui.xmlfragment("segmentationrequest.myfragments.CreateCustomerItems", this);
                        this.getView().addDependent(this.newdialog);
                    }
                    this.newdialog.open();
                };

            },
            onCancel: function() {
                debugger;
                if (!this.newdialog) {
                    this.newdialog = sap.ui.xmlfragment("segmentationrequest.myfragments.CreateCustomerItems", this);
                }
                this.newdialog.close();
            },
            onValueHelpRequested: function(oEvent) {
                debugger;
                let oModel = this.getView().getModel("myModel");
                var oId = oEvent.getParameters().id;
                oModel.setProperty("/oId",oId);
                if (!this.odialog) {
                    this.odialog = sap.ui.xmlfragment("segmentationrequest.myfragments.CustomerValueHelp", this);
                    this.getView().addDependent(this.odialog);
                }
                this.odialog.open();
            },
            onCustomerValueHelpClose: function(oEvent) {
            	debugger;
                if (!this.odialog) {
                    this.odialog = sap.ui.xmlfragment("segmentationrequest.myfragments.CustomerValueHelp", this);
                }
                this.odialog.close();
            },
            onCustomerValueHelpItem: function(oEvent){
    			debugger;
    				let oModel = this.getOwnerComponent().getModel("myModel");
    				let sPath = oEvent.getSource().getSelectedContextPaths()[0];
    				let oItem = oModel.getProperty(sPath);
    				let sType = oModel.getProperty("/oType");
    				oModel.setProperty("/newCreatedItem/Customer",oItem.Name);
    				oModel.setProperty("/newCreatedItem/CustomerDescription",oItem.Description);
    				oModel.setProperty("/newCreatedItem/Material",oItem.Name);
    				oModel.setProperty("/newCreatedItem/MaterialDescription",oItem.MaterialDescription);
    				this.onCustomerValueHelpClose();
    			},
    			onSave : function(){
    				debugger;
    				var oChild;
    				var aCreate = [];
    				let oTable = sap.ui.getCore().byId("ItemCreationTable");
    				for(let i = 0; i < oTable.getItems().length; i++)
    					{
    					for(let j = 0; j<1;j++)
    						{
    					oChild = {
    							Customer : oTable.getItems()[i].getCells()[j].getValue(),
    							CustomerDescription : oTable.getItems()[i].getCells()[j+1].getValue(),
    							Material : oTable.getItems()[i].getCells()[j+2].getValue(),
    							MaterialDescription : oTable.getItems()[i].getCells()[j+3].getValue(),
    							Action : oTable.getItems()[i].getCells()[j+4].getValue(),
    							ValidFrom : oTable.getItems()[i].getCells()[j+5].getValue(),
    							ValidTo : oTable.getItems()[i].getCells()[j+6].getValue(),
    							SegReqId:JSON.stringify(i+1)
    					}
    					oChild.ValidFrom = sap.ui.model.odata.ODataUtils.formatValue(new Date(oChild.ValidFrom), "Edm.DateTime");
    					oChild.ValidFrom = oChild.ValidFrom.slice(9,28);
    					oChild.ValidTo = sap.ui.model.odata.ODataUtils.formatValue(new Date(oChild.ValidTo), "Edm.DateTime");
    					oChild.ValidTo = oChild.ValidTo.slice(9,28);
    					aCreate.push(oChild);
    						}
    					}
    			     var Component = this.getOwnerComponent();
    	                var oDataModel = Component.getModel("oDataModel");
    	                var oModel = Component.getModel("myModel");
    	                oDataModel.setUseBatch(true);
    	                var oItemCreate;
    	                for(let i=0;i<aCreate.length;i++){
    	                	oItemCreate={
    	                			Id:"15",
    	                			SegReqId:aCreate[i].SegReqId,
    	                			Customer:aCreate[i].Customer,
    	                			CustomerDescription:aCreate[i].CustomerDescription,
    	                			Material:aCreate[i].Material,
    	                			MaterialDescription:aCreate[i].MaterialDescription,
    	                			ValidFrom:aCreate[i].ValidFrom,
    	                			ValidTo:aCreate[i].ValidTo,
    	                			Action:"ADD",
    	                			Status:"NEW"
    	                	}
    	                oDataModel.create("/items",oItemCreate,{
    	                	success : function(oResponse){
    	                		
    	                	},
    	                	error : function(oError){
    	                		
    	                	}
    	                })
    	                }
    	                oDataModel.setUseBatch(false);
    			},
    			onAdd : function()
    			{
    				var oItem = new sap.m.ColumnListItem({
    					
    					cells:[
    						new sap.m.Input({showValueHelp : true}),
    						new sap.m.Input(),
    						new sap.m.Input({showValueHelp : true}),
    						new sap.m.Input(),
    						new sap.m.Input(),
    						new sap.m.DatePicker(),
    						new sap.m.DatePicker()
    					]
    				})
    				var oTable = sap.ui.getCore().byId("ItemCreationTable")
    				oTable.addItem(oItem);
    				oTable.bindItems("array", oItem);
    			},
    			handleValueHelpClose: function (oEvent) {
    				let oId = this.getView().getModel("myModel").getProperty("/oId");
    				var oSelectedItem = oEvent.getParameter("selectedItem"),
    				oInput = sap.ui.getCore().byId(oId);

    				if (!oSelectedItem) {
    					oInput.resetProperty("value");
    					return;
    				}

    				oInput.setValue(oSelectedItem.getCells()[0].getText());
    			}
    			

    			 
        });

    });
