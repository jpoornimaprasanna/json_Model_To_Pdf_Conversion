sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"table/Table/js/jspdf.plugin.autotable"
	
], function (Controller,autoTable ) {
	"use strict";

	return Controller.extend("table.Table.controller.View1", {
		empData: function (oEvent) {
			var oView = this.getView();
			var oModel = oView.getModel("jsonData");
		},
		onChange: function () {

		},
		OnExportPdf: function (oEvent) {
			/*var fnSuccess = function (oData, oResponse) {
				var columns = ["Model", "Country", "Code"];
				var data = [];
				for (var i = 0; i < oData.jsonData.length; i++) {
					data[i] = [oData.jsonData[i].model, oData.jsonData[i].fields.country, oData.jsonData[i].fields.code];
				}
				var doc = new jspdf("p", "pt");
				doc.autoTable(columns, data);
				doc.save("DemoData.pdf");
			};
			var fnFail = function () {};
			sap.ui.getCore().getModel().read("jsonData>/data",
				null, null, true, fnSuccess, fnFail);*/
				var oModel = this.getView().getModel("jsonData").oData.data;
			var columns = ["Model", "Country", "Code"];
			var data = [];
			for (var i = 0; i < oModel.length; i++){
				//data[i]=[oData.results[i].Id,oData.results[i].Fname,oData.results[i].Lname,oData.results[i].Phoneno];
				//if Model name is DataModel
				data[i] = [oModel[i].model, oModel[i].fields.country, oModel[i].fields.code];
			}
			var doc = new jsPDF('p', 'pt');
			doc.autoTable(columns, data);
			doc.save("DemoData.pdf");
		}
	});
});



/*,
			"js":[
			{
				"uri":"js/jspdf.js"
			}
			]*/