sap.ui
		.controller(
				"form.login",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf form.login
					 */
					onInit : function() {
						var oModel = new sap.ui.model.json.JSONModel({
							ouser : [ {
								username : "ayyappa",
								password : "qwerty"

							},

							{
								username : "pivox",
								password : "pivox"
							},

							],
							ouserdetails : [ 
								{
								fullname : "Ayyappa Reddy",
								username : "ayyappa",
								password : "qwerty",
								email : "ayyappa@gmail.com",
								phonenumber : "9876543212",
							}, {
								
								fullname : "pivox labs",
								username : "pivox",
								password : "pivox",
								email : "pivox@gmail.com",
								phonenumber : "9876543211",
							}, ],
						});
						this.getView().setModel(oModel, "demo");
					},
					onForgot : function() {
						var oapp = sap.ui.getCore().byId("app1");
						oapp.to(page3);
					},
					onNew : function() {
						var oapp = sap.ui.getCore().byId("app1");
						oapp.to(page2);
					},
					onLogin : function() {
						debugger;
						var sa = this.getView().byId("u1").getValue();
						var sb = this.getView().byId("p1").getValue();

						var oData = this.getView().getModel("demo").getData();
						var auser = jQuery.grep(oData.ouser, function(e) {
							return e.username === sa;
						});
						var apass = jQuery.grep(oData.ouser, function(e) {
							return e.password === sb;
						});

						if (auser.length != 0 && apass.length != 0) {
							var oapp = sap.ui.getCore().byId("app1");
							oapp.to(page4);
						} else {
							alert("invalid details");
						}
					},
					onselectChange : function(oEvent) {
						debugger;
						var oModel = this.getView().getModel("demo");
						let list = this.getView().byId("listid").getSelectedItem();
						var sUserID = list.getBindingContext("demo").getObject("username");
						let ob = oModel.getProperty("/ouserdetails");
						
						var aa= this.getView().byId("sform");
								aa.bindElement({
							  path: "ouserdetails('"+ sUserID +"')",							 
							  model: "demo",
							});
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
					onLogout : function() {
						var oapp = sap.ui.getCore().byId("app1");
						oapp.to(page);
					},
					onSubmit : function() { // Start of validations
						var sa = this.getView().byId("FName").getValue();
						var sb = this.getView().byId("UName").getValue();
						var sc = this.getView().byId("EmailId").getValue();
						var sd = this.getView().byId("Pass").getValue();
						var na = this.getView().byId("MNumber").getValue();
						var sapattern = /^[a-zA-Z\s]*$/; // start of patterns
						var sbpattern = /^[a-zA-Z0-9_]{3,15}$/;
						var scpattern = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
						var sdpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
						var napattern = /^[0-9]{10}$/;
						if (sapattern.test(sa)) // start of pattern checking
						{
							this.getView().byId("FName").setValueState(
									sap.ui.core.ValueState.None);
						} else {
							this.getView().byId("FName").setValueState(
									sap.ui.core.ValueState.Error);
						}
						if (sbpattern.test(sb)) {
							this.getView().byId("UName").setValueState(
									sap.ui.core.ValueState.None);
						} else {
							this.getView().byId("UName").setValueState(
									sap.ui.core.ValueState.Error);
						}
						if (scpattern.test(sc)) {
							this.getView().byId("EmailId").setValueState(
									sap.ui.core.ValueState.None);
						} else {
							this.getView().byId("EmailId").setValueState(
									sap.ui.core.ValueState.Error);
						}
						if (sdpattern.test(sd)) {
							this.getView().byId("Pass").setValueState(
									sap.ui.core.ValueState.None);
						} else {
							this.getView().byId("Pass").setValueState(
									sap.ui.core.ValueState.Error);
						}
						if (napattern.test(na)) {
							this.getView().byId("MNumber").setValueState(
									sap.ui.core.ValueState.None);
						} else {
							this.getView().byId("MNumber").setValueState(
									sap.ui.core.ValueState.Error);
						}
						var oModel = this.getView().getModel("demo");
						debugger;
						var aUsers = oModel.getProperty("/ouser");
						aUsers.push({
							username : sb,
							password : sd
						});
						oModel.setProperty("/ouser", aUsers);
						var adetails = oModel.getProperty("/ouserdetails");
						adetails.push(
								{
							fullname : sa,
							username : sb,
							email :sc,
							password : sd,
							phonenumber : na
								
						})
						var oapp = sap.ui.getCore().byId("app1");
						page4.setModel(oModel, "demo");
						oapp.to(page4);
					},

					onNew : function() { // switch to new registration view
						var oapp = sap.ui.getCore().byId("app1");
						oapp.to(page2);
					},
				/**
				 * Similar to onAfterRendering, but this hook is invoked before
				 * the controller's View is re-rendered (NOT before the first
				 * rendering! onInit() is used for that one!).
				 * 
				 * @memberOf form.login
				 */
				// onBeforeRendering: function() {
				//
				// },
				/**
				 * Called when the View has been rendered (so its HTML is part
				 * of the document). Post-rendering manipulations of the HTML
				 * could be done here. This hook is the same one that SAPUI5
				 * controls get after being rendered.
				 * 
				 * @memberOf form.login
				 */
				// onAfterRendering: function() {
				//
				// },
				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf form.login
				 */
				// onExit: function() {
				//
				// }
				});