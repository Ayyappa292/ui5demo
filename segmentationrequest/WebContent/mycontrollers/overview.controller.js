sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/Fragment',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function(Controller, JSONModel, Fragment, Filter, FilterOperator, Sorter) {
    "use strict";
    return Controller.extend("segmentationrequest.mycontrollers.overview", {
        onInit: function() {
            this.readData();
        },
        /*
         * This Function is used for Reading the Header Data and applying validations conversions and binding to the ui 
         */
        readData: function() {
            let Component = this.getOwnerComponent();
            let oDataModel = Component.getModel("oDataModel");
            let oModel = Component.getModel("myModel");
            oDataModel.setUseBatch(false);
            oDataModel.read('/header', {
            	async:false,
                urlParameters : { "$expand" : "to_items" },
                success: function(oResponse) {
                    let nActiveRecordsCount = 0;
                    let nInprogressRecordsCount = 0;
                    let nRejectedRecordsCount = 0;
                    let nCustRecordsCount = 0;
                    let nVendRecordsCount = 0;
                    let nPivoxRecordsCount = 0;
                    let nAmazonRecordsCount = 0;
                    let nFlipkartRecordsCount = 0;
                    let nBigbazarRecordsCount = 0;
                    for (let i = 0; i < oResponse.results.length; i++) {
                        oResponse.results[i].ValidTo = new Date(oResponse.results[i].ValidTo).toDateString();
                        oResponse.results[i].ValidFrom = new Date(oResponse.results[i].ValidFrom).toDateString();
                        oResponse.results[i].CreatedOn = new Date(oResponse.results[i].CreatedOn).toLocaleString();
                        if (oResponse.results[i].Status == 'ACTIVE') {
                            nActiveRecordsCount = nActiveRecordsCount + 1;
                        } else if (oResponse.results[i].Status == "INPROGRESS") {
                            nInprogressRecordsCount = nInprogressRecordsCount + 1;
                        } else if (oResponse.results[i].Status == "REJECTED") {
                            nRejectedRecordsCount = nRejectedRecordsCount + 1;
                        }
                        if (oResponse.results[i].Type == "CUST" || oResponse.results[i].Type == "cust") {
                            nCustRecordsCount = nCustRecordsCount + 1;
                        } else if (oResponse.results[i].Type == "VEND" || oResponse.results[i].Type == "vend") {
                            nVendRecordsCount = nVendRecordsCount + 1;
                        }
                        if (oResponse.results[i].PrimaryPartner == "PIVOX") {
                            nPivoxRecordsCount = nPivoxRecordsCount + 1;
                        } else if (oResponse.results[i].PrimaryPartner == "AMAZON") {
                            nAmazonRecordsCount = nAmazonRecordsCount + 1;
                        } else if (oResponse.results[i].PrimaryPartner == "FLIPKART") {
                            nFlipkartRecordsCount = nFlipkartRecordsCount + 1;
                        } else if (oResponse.results[i].PrimaryPartner == "BIGBAZAR") {
                            nBigbazarRecordsCount = nBigbazarRecordsCount + 1;
                        }
                    };
                    oModel.setProperty("/contractData", oResponse.results);
                    oModel.setProperty("/TotalHeaderRecords", oResponse.results.length);
                    oModel.setProperty("/nActiveRecordsCount", nActiveRecordsCount);
                    oModel.setProperty("/nInprogressRecordsCount", nInprogressRecordsCount);
                    oModel.setProperty("/nRejectedRecordsCount", nRejectedRecordsCount);
                    oModel.setProperty("/nCustRecordsCount", nCustRecordsCount);
                    oModel.setProperty("/nVendRecordsCount", nVendRecordsCount);
                    oModel.setProperty("/nPivoxRecordsCount", nPivoxRecordsCount);
                    oModel.setProperty("/nAmazonRecordsCount", nAmazonRecordsCount);
                    oModel.setProperty("/nFlipkartRecordsCount", nFlipkartRecordsCount)
                    oModel.setProperty("/nBigbazarRecordsCount", nBigbazarRecordsCount);
                    let oBusyDialog = sap.ui.xmlfragment("segmentationrequest.myfragments.BusyDialog");
                    oBusyDialog.open();
                    setTimeout(function() {
                        oBusyDialog.close();
                    }, 1000);
                },
                error: function(oResponse) {}
            })
        },
        /*
         * This function is used for Applying the filter operations on Segments and Bar Charts
         */
        onFilter : function(oEvent) {
        	let oType = this.getView().byId("type") ;
        	let oStatus = this.getView().byId("status");
        	let oBar = this.getView().byId("bars");
        	let aFilters = [];
        			for(let i=0;i<oType.getSelectedSegments().length;i++) {
        			 	let typeFilter = new Filter("Type", FilterOperator.Contains, oType.getSelectedSegments()[i].mProperties.label);
        			 	aFilters.push(typeFilter);	
        			}
        			for(let i=0;i<oStatus.getSelectedSegments().length;i++) {
        			   let statusFilter = new Filter("Status", FilterOperator.Contains, oStatus.getSelectedSegments()[i].mProperties.label);
                       aFilters.push(statusFilter);
                    }
        			for(let i=0;i<oBar.getSelectedBars().length;i++) {
        			 	let barFilter = new Filter("PrimaryPartner", FilterOperator.Contains, oBar.getSelectedBars()[i].mProperties.label);
        			 	aFilters.push(barFilter)
        			}
        	let oTable = this.byId("SegmentationHeaderTable");
            let oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilters, "contractData");
            let oModel = this.getView().getModel("myModel");
            oModel.setProperty("/TotalHeaderRecords", oTable._iBindingLength);
            let oBusyDialog = sap.ui.xmlfragment("segmentationrequest.myfragments.BusyDialog");
            oBusyDialog.open();
            setTimeout(function() {
                 oBusyDialog.close();
            }, 1000);
        },
        /*
         * This Function refreshes the oData
         */
        onRefresh: function() {
            let oView = this.getView();
            let oComponent = this.getOwnerComponent();
            let oTable = oView.byId("SegmentationHeaderTable");
            oTable.setSelectedIndex(-1);
            oComponent.getModel("myModel").setProperty("/boolean/value", false);
            this.readData();

        },
        /*
         * This function is used selection of particular header record and binds it in Object Page
         */
        onRowSelection: function(oEvent) {
            let oView = this.getView();
            let oComponent = this.getOwnerComponent();
            let iSelectedIndex = oEvent.getSource().getSelectedIndex();
            let aContractData = oComponent.getModel("myModel").getProperty("/contractData");
            if (iSelectedIndex >= 0) {
                let iId = aContractData[iSelectedIndex].Id;
                oComponent.getModel("myModel").setProperty("/boolean/value", true);
                oComponent.getModel("myModel").setProperty("/iId", iId);
            } else {
                oComponent.getModel("myModel").setProperty("/boolean/value", false);
            }

        },
        /*
         * This function is used for the opening the create Wizard Dialog
         */
        onCreateDialog: function() {
            if (!this.createHeaderDialog) {
                this.createHeaderDialog = sap.ui.xmlfragment("segmentationrequest.myfragments.createheader", this);
                this.getView().addDependent(this.createHeaderDialog);
            }
            this.createHeaderDialog.open();
        },
        onClick : function(oEvent) {
			if (oEvent.getParameter("selected")) {
				sap.ui.getCore().byId("chekverify").setVisible(true);
				sap.ui.getCore().byId("check1").setVisible(false);
				sap.ui.getCore().byId("check2").setVisible(false);
				sap.ui.getCore().byId("vendorvend").setVisible(false);
				sap.ui.getCore().byId("check3").setVisible(false);
				sap.ui.getCore().byId("check4").setVisible(false);
				this._wizard = sap.ui.getCore().byId("CreateProductWizard");
				this._wizard.invalidateStep(sap.ui.getCore().byId("initial"));
			} 
			else {
				sap.ui.getCore().byId("chekverify").setVisible(false);
				sap.ui.getCore().byId("check1").setVisible(true);
				sap.ui.getCore().byId("check2").setVisible(false);
				sap.ui.getCore().byId("check4").setVisible(true);
			}
	
		},
        onValueHelpRequest: function(oEvent) {
            let oDialog = this.getView().byId("dialoge");
            oDialog.open();
        },
        onClose: function() {
            let oDialog = sap.ui.getCore().byId("dialoge");
            oDialog.close();
        },
        onValueHelpRequest: function(oEvent) {
            let oDialog = sap.ui.getCore().byId("dialoge");
            oDialog.open();
        },
        onClose: function() {
            let oDialog = sap.ui.getCore().byId("dialoge");
            oDialog.close();
        },
        onChange: function(oEvent) {
            var selvalue = oEvent.getParameters().selectedItem.mProperties.text;
            this._wizard = sap.ui.getCore().byId("CreateProductWizard");

            if (selvalue == "REQ1") {
                sap.ui.getCore().byId("vendorvend").setVisible(false);
                sap.ui.getCore().byId("check2").setVisible(false);
                sap.ui.getCore().byId("custm").setVisible(true);
                sap.ui.getCore().byId("check3").setVisible(true);
                sap.ui.getCore().byId("check4").setVisible(true);
                let inputId = sap.ui.getCore().byId("SegReqType").getValue();
                if (inputId == "REQ1") {
                    this._wizard.validateStep(sap.ui.getCore().byId("initial"));
                }
            }
            if (selvalue == "REQ2") {
                sap.ui.getCore().byId("custm").setVisible(false);
                sap.ui.getCore().byId("check2").setVisible(true);
                sap.ui.getCore().byId("check3").setVisible(false);
                sap.ui.getCore().byId("vendorvend").setVisible(true);
                this._wizard.validateStep(sap.ui.getCore().byId("initial"));
            }
        },
        onChangesales: function(oEvent) {
            var selctedsalevalue = oEvent.getSource().getSelectedKey();
            if (selctedsalevalue.length > 0) {
                var division = sap.ui.getCore().byId("div");
                var sSalesGroup = sap.ui.getCore().byId("SalesGroup");
                var codebox = sap.ui.getCore().byId("dschannel");
                codebox.setSelectedKey("11");
                sSalesGroup.setSelectedKey("SalesGroup");
                division.setSelectedKey("21");
            }
        },
        additionalInfoValidation: function() {
            this._wizard = sap.ui.getCore().byId("CreateProductWizard");
            let input2Id = sap.ui.getCore().byId("titleId").getValue();
            if (input2Id.length > 0) {
                this._wizard.validateStep(this.byId("initial"));
            }
        },
        handleWizardCancel: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("view3");
        },
        onChangepurchase: function(oEvent) {
            var selctedpurchasevalue = oEvent.getSource().getSelectedKey();
            if (selctedpurchasevalue.length > 0) {
                var sChangePurchase = sap.ui.getCore().byId("PurGroup");
                sChangePurchase.setSelectedKey("PurGroup");
                this._wizard.validateStep(this.byId("initial"));
            }
        },
        handleChange: function(oEvent) {
            var currentDate = new Window.Date();
            var oToDate = this.getView().byId('DP2');
            oToDate.setDateValue(currentDate);
        },
        onselectChange: function(oEvent) {
            let list = sap.ui.getCore().byId("List").getSelectedItem();
            let oObj = list.getBindingContext("myModel").getObject();
            this.getView().getModel("myModel").setProperty("/selecteduser", oObj);
        },
        onValueHelpRequestID: function(oEvent) {
            let oDialog = sap.ui.getCore().byId("segmentId");
            oDialog.open();
        },
        onselectChangesegment: function(oEvent) {
            let listsegment = this.getView().byId("Listsegment").getSelectedItem();
            let oObj = listsegment.getBindingContext("myModel").getObject();
            this.getView().getModel("myModel").setProperty("/selectedusersegment", oObj);
        },
        onClosesegment: function(oEvent) {
            let oDialog = this.getView().byId("segmentId");
            oDialog.close();
        },
        onSearch: function(oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("productId", FiterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            var oList = this.byId("List");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        },
        onChangeType: function(oEvent) {
            var selvaluetype = oEvent.getSource().getSelectedKey();
            var codeboxtype = this.oView.byId("SegReqType");
            if (selvaluetype == "cust") {
                codeboxtype.setSelectedKey("req1");
                this.getView().byId("req2").setEnabled(false);
            } else if (selvaluetype == "vendor") {
                codeboxtype.setSelectedKey("req2");
            }
        },
        /*
         * This function is used for creation of header Record 
         */
        onCreateContract: function() {
        	let oThis = this;
            let oModel = this.getView().getModel("myModel");
            let oSegment = oModel.getProperty("/oSegment");   
            let oDataModel = this.getOwnerComponent().getModel("oDataModel");
            let nRandomIdGen = Math.floor(100000000 + Math.random() * 9000);
            oSegment.Id = JSON.stringify(nRandomIdGen);
            oSegment.ValidFrom = sap.ui.model.odata.ODataUtils.formatValue(new Date(oSegment.ValidFrom), "Edm.DateTime");
            oSegment.ValidFrom = oSegment.ValidFrom.slice(9,28);
            oSegment.ValidTo = sap.ui.model.odata.ODataUtils.formatValue(new Date(oSegment.ValidTo), "Edm.DateTime");
            oSegment.ValidTo = oSegment.ValidTo.slice(9, 28);
            oSegment.CreatedOn = new Date().toISOString();   
            oDataModel.create("/header", oSegment, {    
            					   success: function(oResponse) {
            						    this.createHeaderDialog.close();
            						   	this.readData();
                          },      
                    				 error:   function(Error) {

                          }    })
        },
        /*
         * This function is used for performing search operation
         */
        onSearch: function(oEvent) {
            let oView = this.getView();
            let aFilters = [];
            let sQuery = oEvent.getSource().getValue();
            let oTable = this.getView().byId("SegmentationHeaderTable");
            let columns = ["CreatedBy", "Id", "PrimaryPartner"];
            let filters = new Filter(columns.map(function(colName) {
                return new Filter(colName, FilterOperator.Contains, sQuery);
            }), false);
            aFilters.push(filters);
            let oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilters, "contractData");
            oView.byId("SearchButton").setVisible(true);
            oView.byId("SearchField").setVisible(false);
        },
        /*
         * This function is used for navigation to the object page
         */
        onTableItemShow: function() {
            let oView = this.getView();
            let oComponent = this.getOwnerComponent();
            let iId = oComponent.getModel("myModel").getProperty("/iId");
            oComponent.getModel("myModel").setProperty("/boolean/value", false);
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("objectpageview", { Id: iId });
            let oTable = oView.byId("SegmentationHeaderTable");
            oTable.setSelectedIndex(-1);
        },
        /*
         * This fuction is for toggle or untoggle the searchfield
         */
        onToggleSearchField: function() {
            let oView = this.getView();
            oView.byId("SearchButton").setVisible(false);
            oView.byId("SearchField").setVisible(true);
        },
        /*
         * This function closes the Create dialog of the header
         */
        onCancel: function() {
            if (!this.createHeaderDialog) {
                this.createHeaderDialog = sap.ui.xmlfragment("segmentationrequest.myfragments.createheader", this);
            }
            this.createHeaderDialog.close();
        },
        /*
         * This function navigates back to the overview page
         */
        onBack: function() {
            this.onRefresh();
            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("firstview");
        },
        /*
         * This function is used for submiting a inprocess record to active state
         */
        onSubmitItem: function(oEvent) {
            let oThis = this;
            let oComponent = this.getOwnerComponent();
            let oDataModel = oComponent.getModel("oDataModel");
            let oView = this.getView();
            let oTable = oView.byId("SegmentationHeaderTable")
            let iSelectedIndex = oTable.mProperties.selectedIndex;
            let aContractData = oComponent.getModel("myModel").getProperty("/contractData");
            let nSegmentId = aContractData[iSelectedIndex].Id;
            if (aContractData[iSelectedIndex].Status == "INPROGRESS") {
                oDataModel.callFunction("/updatestatus", {
                    method: "POST",
                    urlParameters: {
                        "Id": nSegmentId,
                    },
                    success: function() {
                        oThis.readData();
                    },
                    error: function() {

                    }

                });
            } else {
                alert("The record cannot be submitted");
            }
        },
        /*
         * This function is used for rejecting a inprocess record to rejected state 
         */
        onRejectItem: function(oEvent) {
            let oThis = this;
            let oComponent = this.getOwnerComponent();
            let oDataModel = oComponent.getModel("oDataModel");
            let oView = this.getView();
            let oTable = oView.byId("SegmentationHeaderTable")
            let iSelectedIndex = oTable.mProperties.selectedIndex;
            let aContractData = oComponent.getModel("myModel").getProperty("/contractData");
            let nSegmentId = aContractData[iSelectedIndex].Id;
            if (aContractData[iSelectedIndex].Status == "INPROGRESS") {
                oDataModel.callFunction("/rejectstatus", {
                    method: "POST",
                    urlParameters: {
                        "Id": nSegmentId,
                    },
                    success: function() {
                        oThis.readData();
                    },
                    error: function() {

                    }
                });
            } else {
                alert("The record cannot be rejected")
            }
        },
        /*
         * This function is used for deleting a header record
         */
        onDeleteTableItem: function() {
            let oThis = this;
            let oTable = this.getView().byId("SegmentationHeaderTable");
            let iSelectedIndex = oTable.mProperties.selectedIndex;
            let aContractData = this.getView().getModel("myModel").getProperty("/contractData");
            let nSegmentId = aContractData[iSelectedIndex].Id;
            let oDataModel = this.getOwnerComponent().getModel("oDataModel");
            oDataModel.remove(`/header(Id='${nSegmentId}')`, {
                success: function() {
                    oThis.readData();
                },
                error: function() {

                }
            });
        }
    });
});