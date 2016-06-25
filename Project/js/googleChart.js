//Load google vis library  and the core chart package

google.load("visualization", "1", {packages:["corechart"]});

//Once library is loaded lets run a function.

google.setOnLoadCallback(drawChart);

//Create drawChart function

function drawChart(){
	//We will actually draw the chart

	//Create a data table using an array.

	var data = google.visualization.arrayToDataTable([
	["Year", "Adoptions"],
	["2012", 82],
	["2013", 103],
	["2014", 115],
	["2015", 102],
	["2016", 123]
	]);

	var options ={
		title: "Adoption Stats",
		//is3D:true
		//pieHole: .6
		//pieSliceText: "percentage",
		//pieStartAngle:45,
		//width:500,
		//height:500
		//legend:{position:"labeled"},
		//tooltip:{trigger:"none"}
		};


	//Create the chart variable
	var chart = new google.visualization.BarChart(document.getElementById("piechart"));

	//Draw The Chart
	chart.draw(data, options);


	}
