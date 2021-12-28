sap.ui.jsview("registrationform.registrationform", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf registrationform.registrationform
	*/ 
	getControllerName : function() {
		return "registrationform.registrationform";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf registrationform.registrationform
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Registration Form",
			content: [		
			new sap.m.VBox({
				alignContent : sap.m.FlexAlignContent.Center,
				alignItems : sap.m.FlexAlignItems.Center,
				backgroundDesign : sap.m.BackgroundDesign.Solid,
				width : "100%",
				items : [	
					new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,
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
					new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,
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
					new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,
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
					new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,
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
					new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,
						items : [
							new sap.m.Label({
								text:"State:",
							}),
							new sap.m.ComboBox({
								items : [
									sap.ui.core.Item({
										key : "1",
										text : "AP",
									})
								]
							})
							]
					}),	//End of city
					new sap.m.HBox({alignItems : sap.m.FlexAlignItems.Center,
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
					
			]
			})
		});
	}

});