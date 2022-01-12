sap.ui.jsview("table.table", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf table.table
	*/ 
	getControllerName : function() {
		return "table.table";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf table.table
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Table",
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
			]									//end of main content
		});
	}

});