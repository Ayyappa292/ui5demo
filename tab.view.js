sap.ui.jsview("tab.tab", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tab.tab
	*/ 
	getControllerName : function() {
		return "tab.tab";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tab.tab
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Registration Page",
			
			content: [
				new sap.m.IconTabBar({  //Start of Icon tab 
					items:[
						new sap.m.IconTabFilter({			//start of 1st tab 
							text:"Login Page",
							//showAll:true,
							selectedKey : "page",
							icon : "sap-icon://account",
							content:[						//start of 1st tab content							
								new sap.m.VBox({
									alignContent : sap.m.FlexAlignContent.Center,
									alignItems : sap.m.FlexAlignItems.Center,
									backgroundDesign : sap.m.BackgroundDesign.Solid,
									width : "100%",
									justifyContent :sap.m.FlexJustifyContent.Center,
									items : [	
										new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,justifyContent :sap.m.FlexJustifyContent.Center,
											items : [
												new sap.m.Label({
													text:"Full Name:"
												}),
												new sap.m.Input({
													type : sap.m.InputType.Text,
													id : "FName"
												})
												]
										}),	//end of fullname
										new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,justifyContent :sap.m.FlexJustifyContent.Centers,
											items : [
												new sap.m.Label({
													text:"User Name:"
												}),
												new sap.m.Input({
													type : sap.m.InputType.Text,
													id : "UName",
												})
												]
										}),		// end if username
										new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,justifyContent :sap.m.FlexJustifyContent.Center,
											items : [
												new sap.m.Label({
													text:"Email:"
												}),
												new sap.m.Input({
													type : sap.m.InputType.Email,
													id : "EmailId",
												})
												]
										}),	//end of email
										new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,justifyContent :sap.m.FlexJustifyContent.Center,
											items : [
												new sap.m.Label({
													text:"Password:",
													
												}),
												new sap.m.Input({
													type : sap.m.InputType.Password,
													id : "Pass",
													
												})
												]
										}),	//End of password
										new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,justifyContent :sap.m.FlexJustifyContent.Center,
											items : [
												new sap.m.Label({
													text:"Mobile Number:"
													
												}),
												new sap.m.Input({
													type : sap.m.InputType.Tel,
													id : "MNumber",
												})
												]
										}),	//end mobile number
										new sap.m.Button({										//Submit Button 
											text : "Submit",
											press : oController.onSubmit
											})//End of Submit Buton 
									]		//End of VBox Items
								})			//End of VBox
								
							]									//end of 1st tab content
							
							
						}),							//end of 1st tab
//						new sap.m.IconTabSeparator({
//							
//						}),
						new sap.m.IconTabFilter({		//start of 2nd tab
							text:"Table",
							selectedKey : "table",
							icon : "sap-icon://table-chart",
							content: [
								new sap.m.Table({				//Start of table
									headerText : "Student Info",
									columns:[				//Start of Colum
								          new sap.m.Column({
								          header:[
								                  new sap.m.Label({
								                  text:"S.No"
								                  })
								                  ]
								          }),new sap.m.Column({
								          header:[
								                  new sap.m.Label({
								                  text:"Student Name"
								                  })
								                  ]
								          }),new sap.m.Column({
								          header:[
								                  new sap.m.Label({
								                  text:"ID"
								                  })
								                  ]
								          })
								          ],
								  items:[
								        new sap.m.ColumnListItem({
								        cells:[
								               new sap.m.Text({
								               text:"1"
								               }),
								               new sap.m.Text({
								               text:"Ayyappa"
								               }),
								               new sap.m.Text({
								               text:"501"
								               })
								               ],			               
								        }),
								        new sap.m.ColumnListItem({
									        cells:[
									               new sap.m.Text({
									               text:"2"
									               }),
									               new sap.m.Text({
									               text:"Manikanta"
									               }),
									               new sap.m.Text({
									               text:"502"
									               })
									               ],          
									        }),
									        new sap.m.ColumnListItem({
										        cells:[
										               new sap.m.Text({
										               text:"3"
										               }),
										               new sap.m.Text({
										               text:"Siva"
										               }),
										               new sap.m.Text({
										               text:"503"
										               })
										               ],			               
										        }),
										        new sap.m.ColumnListItem({
											        cells:[
											               new sap.m.Text({
											               text:"4"
											               }),
											               new sap.m.Text({
											               text:"Likitha"
											               }),
											               new sap.m.Text({
											               text:"504"
											               })
											               ],							               
											        }),
								        new sap.m.ColumnListItem({
									        cells:[
									               new sap.m.Text({
									               text:"5"
									               }),
									               new sap.m.Text({
									               text:"Alekhya"
									               }),
									               new sap.m.Text({
									               text:"505"
									               })
									               ],					               
									        })
								        ]
								  })							//End of table	
							]								//end of 2nd tab content
						})								//end of 2nd tab
					]
				
				})
			]
 		
		});
	}

});