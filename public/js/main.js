$(function(){
	var god_data;
	$.ajax({
		method: "GET",
		url: "https://raw.githubusercontent.com/NMandes/smite_charts/master/public/lib/smitedata.js",
		dataType: "json",
		success: function(data){
			god_data = data;
			console.log(data);
			set_class(data);
			set_img(data);
			set_name(data);
			set_id(data);
			// buildchart(godselection());
		},
		error: function(data){
			console.log(data);
		}
	});
function build_charts_by_level(datasets){
	console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(0,73,73,0.2)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][0][0], datasets[0][0][1],datasets[0][0][2],datasets[0][0][3],datasets[0][0][4],datasets[0][0][5],datasets[0][0][6],datasets[0][0][7],datasets[0][0][8], datasets[0][0][9],datasets[0][0][10],datasets[0][0][11],datasets[0][0][12],datasets[0][0][13],datasets[0][0][14],datasets[0][0][15],datasets[0][0][16],datasets[0][0][17],datasets[0][0][18],datasets[0][0][19],datasets[0][0][20]]
        },
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(146,0,0,0.2)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][0][0][1], datasets[1][0][0][2],datasets[1][0][0][3],datasets[1][0][0][4],datasets[1][0][0][5],datasets[1][0][0][6],datasets[1][0][0][7],datasets[1][0][0][8],datasets[1][0][0][9], datasets[1][0][0][10],datasets[1][0][0][11],datasets[1][0][0][12],datasets[1][0][0][13],datasets[1][0][0][14],datasets[1][0][0][15],datasets[1][0][0][16],datasets[1][0][0][17],datasets[1][0][0][18],datasets[1][0][0][19],datasets[1][0][0][20]]
        }
        //selected god dataset
        
    ]
	};
	var ctx = document.getElementById("health_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 3000,
                            stepSize: 500
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Health"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "Health"
        }, 
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		// console.log(data.datasets[0].data[tooltipItems.index]);
                    		// console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection)/ avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }

    }
    
    });
	mana_chart(datasets);
};
function mana_chart(datasets){
	console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][1][0], datasets[0][1][1],datasets[0][1][2],datasets[0][1][3],datasets[0][1][4],datasets[0][1][5],datasets[0][1][6],datasets[0][1][7],datasets[0][1][8], datasets[0][1][9],datasets[0][1][10],datasets[0][1][11],datasets[0][1][12],datasets[0][1][13],datasets[0][1][14],datasets[0][1][15],datasets[0][1][16],datasets[0][1][17],datasets[0][1][18],datasets[0][1][19],datasets[0][1][20]]
        },
        //selected god dataset
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][1][0][1], datasets[1][1][0][2],datasets[1][1][0][3],datasets[1][1][0][4],datasets[1][1][0][5],datasets[1][1][0][6],datasets[1][1][0][7],datasets[1][1][0][8],datasets[1][1][0][9], datasets[1][1][0][10],datasets[1][1][0][11],datasets[1][1][0][12],datasets[1][1][0][13],datasets[1][1][0][14],datasets[1][1][0][15],datasets[1][1][0][16],datasets[1][1][0][17],datasets[1][1][0][18],datasets[1][1][0][19],datasets[1][1][0][20]]
        }
    ]
	};
	var ctx = document.getElementById("mana_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 1500,
                            stepSize: 500
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Mana"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "Mana"
        },
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		// console.log(data.datasets[0].data[tooltipItems.index]);
                    		// console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection)/ avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }  
    }
	});
	mp5_chart(datasets);
};
function mp5_chart(datasets){
	// console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][2][0], datasets[0][2][1],datasets[0][2][2],datasets[0][2][3],datasets[0][2][4],datasets[0][2][5],datasets[0][2][6],datasets[0][2][7],datasets[0][2][8], datasets[0][2][9],datasets[0][2][10],datasets[0][2][11],datasets[0][2][12],datasets[0][2][13],datasets[0][2][14],datasets[0][2][15],datasets[0][2][16],datasets[0][2][17],datasets[0][2][18],datasets[0][2][19],datasets[0][2][20]]
        },
        //selected god dataset
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][2][0][1], datasets[1][2][0][2],datasets[1][2][0][3],datasets[1][2][0][4],datasets[1][2][0][5],datasets[1][2][0][6],datasets[1][2][0][7],datasets[1][2][0][8],datasets[1][2][0][9], datasets[1][2][0][10],datasets[1][2][0][11],datasets[1][2][0][12],datasets[1][2][0][13],datasets[1][2][0][14],datasets[1][2][0][15],datasets[1][2][0][16],datasets[1][2][0][17],datasets[1][2][0][18],datasets[1][2][0][19],datasets[1][2][0][20]]
        }
    ]
	};
	var ctx = document.getElementById("mp5_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 20,
                            stepSize: 5
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Mana Per 5 seconds"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "MP5"
        },
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		console.log(data.datasets[0].data[tooltipItems.index]);
                    		console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection)/ avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }  
    }
	});
	hp5_chart(datasets);
};
function hp5_chart(datasets){
	// console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][3][0], datasets[0][3][1],datasets[0][3][2],datasets[0][3][3],datasets[0][3][4],datasets[0][3][5],datasets[0][3][6],datasets[0][3][7],datasets[0][3][8], datasets[0][3][9],datasets[0][3][10],datasets[0][3][11],datasets[0][3][12],datasets[0][3][13],datasets[0][3][14],datasets[0][3][15],datasets[0][3][16],datasets[0][3][17],datasets[0][3][18],datasets[0][3][19],datasets[0][3][20]]
        },
        //selected god dataset
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][3][0][1], datasets[1][3][0][2],datasets[1][3][0][3],datasets[1][3][0][4],datasets[1][3][0][5],datasets[1][3][0][6],datasets[1][3][0][7],datasets[1][3][0][8],datasets[1][3][0][9], datasets[1][3][0][10],datasets[1][3][0][11],datasets[1][3][0][12],datasets[1][3][0][13],datasets[1][3][0][14],datasets[1][3][0][15],datasets[1][3][0][16],datasets[1][3][0][17],datasets[1][3][0][18],datasets[1][3][0][19],datasets[1][3][0][20]]
        }
    ]
	};
	var ctx = document.getElementById("hp5_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 30,
                            stepSize: 5
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Health Per 5 seconds"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "HP5"
        }, 
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		// console.log(data.datasets[0].data[tooltipItems.index]);
                    		// console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection)/ avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }  
    }
	});
	magic_prot_chart(datasets);
};
function magic_prot_chart(datasets){
	// console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][4][0], datasets[0][4][1],datasets[0][4][2],datasets[0][4][3],datasets[0][4][4],datasets[0][4][5],datasets[0][4][6],datasets[0][4][7],datasets[0][4][8], datasets[0][4][9],datasets[0][4][10],datasets[0][4][11],datasets[0][4][12],datasets[0][4][13],datasets[0][4][14],datasets[0][4][15],datasets[0][4][16],datasets[0][4][17],datasets[0][4][18],datasets[0][4][19],datasets[0][4][20]]
        },
        //selected god dataset
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][4][0][1], datasets[1][4][0][2],datasets[1][4][0][3],datasets[1][4][0][4],datasets[1][4][0][5],datasets[1][4][0][6],datasets[1][4][0][7],datasets[1][4][0][8],datasets[1][4][0][9], datasets[1][4][0][10],datasets[1][4][0][11],datasets[1][4][0][12],datasets[1][4][0][13],datasets[1][4][0][14],datasets[1][4][0][15],datasets[1][4][0][16],datasets[1][4][0][17],datasets[1][4][0][18],datasets[1][4][0][19],datasets[1][4][0][20]]
        }
    ]
	};
	var ctx = document.getElementById("magic_prot_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 50,
                            stepSize: 5
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Magic Protection"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "Magic Protection"
        }, 
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		// console.log(data.datasets[0].data[tooltipItems.index]);
                    		// console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection) / avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }  
    }
	});
	phys_prot_chart(datasets);
};
function phys_prot_chart(datasets){
	// console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][5][0], datasets[0][5][1],datasets[0][5][2],datasets[0][5][3],datasets[0][5][4],datasets[0][5][5],datasets[0][5][6],datasets[0][5][7],datasets[0][5][8], datasets[0][5][9],datasets[0][5][10],datasets[0][5][11],datasets[0][5][12],datasets[0][5][13],datasets[0][5][14],datasets[0][5][15],datasets[0][5][16],datasets[0][5][17],datasets[0][5][18],datasets[0][5][19],datasets[0][5][20]]
        },
        //selected god dataset
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][5][0][1], datasets[1][5][0][2],datasets[1][5][0][3],datasets[1][5][0][4],datasets[1][5][0][5],datasets[1][5][0][6],datasets[1][5][0][7],datasets[1][5][0][8],datasets[1][5][0][9], datasets[1][5][0][10],datasets[1][5][0][11],datasets[1][5][0][12],datasets[1][5][0][13],datasets[1][5][0][14],datasets[1][5][0][15],datasets[1][5][0][16],datasets[1][5][0][17],datasets[1][5][0][18],datasets[1][5][0][19],datasets[1][5][0][20]]
        }
    ]
	};
	var ctx = document.getElementById("phys_prot_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            max: 65 ,
                            stepSize: 5
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Physical Protection"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "Physical Protection"
        }, 
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		// console.log(data.datasets[0].data[tooltipItems.index]);
                    		// console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection)/ avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }  
    }
	});
	attack_speed_chart(datasets);
};
function attack_speed_chart(datasets){
	// console.log(datasets);
	var datasets = datasets;
	var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"],
    datasets: [
        {
            label: datasets[0][0][20] + " Average",
            backgroundColor: "rgba(0,73,73,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [datasets[0][6][0], datasets[0][6][1],datasets[0][6][2],datasets[0][6][3],datasets[0][6][4],datasets[0][6][5],datasets[0][6][6],datasets[0][6][7],datasets[0][6][8], datasets[0][6][9],datasets[0][6][10],datasets[0][6][11],datasets[0][6][12],datasets[0][6][13],datasets[0][6][14],datasets[0][6][15],datasets[0][6][16],datasets[0][6][17],datasets[0][6][18],datasets[0][6][19],datasets[0][6][20]]
        },
        //selected god dataset
        {
            label: datasets[1][0][0][0],
            backgroundColor: "rgba(146,0,0,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [datasets[1][6][0][1], datasets[1][6][0][2],datasets[1][6][0][3],datasets[1][6][0][4],datasets[1][6][0][5],datasets[1][6][0][6],datasets[1][6][0][7],datasets[1][6][0][8],datasets[1][6][0][9], datasets[1][6][0][10],datasets[1][6][0][11],datasets[1][6][0][12],datasets[1][6][0][13],datasets[1][6][0][14],datasets[1][6][0][15],datasets[1][6][0][16],datasets[1][6][0][17],datasets[1][6][0][18],datasets[1][6][0][19],datasets[1][6][0][20]]
        }
    ]
	};
	var ctx = document.getElementById("attack_speed_chart");
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: { 
        legend: {
                position: "top",
                legendabels: {
                    boxWidth: 20
                }
        },
        scales: {
                xAxes: [{
                        stacked: false,
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Levels"
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },       
                }],
                yAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0.5,
                            max: 1.5,
                            stepSize: 0.25
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Attacks Per Second"
                        }
                }]
        },
        title: {
                fontSize: 14,
                display: true,
                text: "Attack Speed"
        },
    	tooltips: {
                callbacks: {
                	title: function(tooltipItems, data){
                		// console.log(tooltipItems);
                		var xlabel = tooltipItems[0];
                		// console.log(tooltipItems[0]);
                		return "Level: " + tooltipItems[0].xLabel;
                	},
                    afterLabel: function(tooltipItems, data) { 
                    	// var tooltipItems = tooltipItems
                    	// console.log(this);
                    	// console.log(tooltipItems);
                    	// console.log(data);
                    	// console.log(tooltipItems.datasetIndex);
                    	if (tooltipItems.datasetIndex === 1){
                    		var this_selection = tooltipItems.yLabel;
                    		var avg_selection = data.datasets[0].data[tooltipItems.index];
                    		// console.log(data.datasets[0].data[tooltipItems.index]);
                    		// console.log(tooltipItems.yLabel);
                    		return ["Stat: " + (((this_selection - avg_selection)/ avg_selection)* 100).toFixed(2) + "%", "Difference: " + (this_selection - avg_selection).toFixed(2)]
                    		
                    	}else if (tooltipItems.datasetIndex === 0){

                    		return 
                    	}else{
                    		return  tooltipItems;
                    	}	
                    }
              }
        }  
    }
	});
};


function set_img (data){
		var img = $('img');
		for (i=0; i < data.length; i++){
			var id = data[i].id;
			img[i].src = "./img/"+id+".jpg";
		};
};
function set_id (data){
		var god_selection_box = $('.godselection');
		for (i = 0; i < data.length; i++){
			var name = data[i].id;
			god_selection_box[i].id = name;
		};
};
function set_class (data){
		var god_selection_box = $('.godselection');
		for (i = 0; i < data.length - 1; i++){
			god_selection_box[i].className = "col-md-1 col-sm-2 col-xs-3 godselection " + data[i].Pantheon.toLowerCase() + " " + data[i].Type.toLowerCase() + " " + data[i].Roles.toLowerCase();		
		};
};
function set_name (data){
		var title = $('.title');
		for (i = 0; i < data.length; i++){
			var name = data[i].Name;
			title[i].innerText = name;
		};
};
function filter_gods (){
		var god_selection_box = $('.godselection');
		// console.log(god_selection_box);
		var id = this.id;
		// console.log(id);
		for (i = 0; i < god_selection_box.length; i++){
			var target = god_selection_box[i].id
			if (god_selection_box[i].className.includes(id)) {
				// console.log("true within selection");
                $("#" + target).show();
                // $("#" + target).velocity({opacity: 1.0},120);
                if ($('.layout').innerHeight() > 350) {
                    $('.layout').css({height: "50vh"});
                }else {
                    $('.layout').css({height: "100%"});
                }
				
		}else if (this.id === "all"){
                if ($('.layout').innerHeight() > 350) {
                    $('.layout').css({height: "50vh"});
                }else {
                    $('.layout').css({height: "100%"});
                }
				$(".godselection").show();
                // $(".godselection").velocity({opacity: 1.0},120);
		}else {
				// console.log("false within selection");
				
                // $("#" + target).velocity({opacity: 0.0},120); // Alternative animation
				$("#" + target).hide();
                if ($('.layout').innerHeight() > 350) {
                    $('.layout').css({height: "50vh"});
                }else {
                    $('.layout').css({height: "100%"});
                }
                };
		};
};
function compare_Selection(target){
		var god_selection_box = $('.godselection');
		var role;
		// level must be changed to user input
		var level = 1;
		var health_array = [];
		var mana_array = [];
		var speed_array = [];
		var mp5_array = [];
		var hp5_array = [];
		var magic_prot_array = [];
		var phys_prot_array = [];
		var attack_speed_array = [];
		var basic_attack_array = [];
		var chart_dataset = [];
		var selected_god_stats = [];

		for (i = 0; i < god_data.length; i++){
			var name = target.children[1].innerText;

			if (god_data[i].Name === name){
				selected_god_stats.push(god_data[i].Name);
				selected_god_stats.push(god_data[i].Health);
				selected_god_stats.push(god_data[i].Mana);
				selected_god_stats.push(god_data[i].Speed);
				selected_god_stats.push(god_data[i].ManaPerFive);
				selected_god_stats.push(god_data[i].HealthPerFive);
				selected_god_stats.push(god_data[i].MagicProtection);
				selected_god_stats.push(god_data[i].PhysicalProtection);
				selected_god_stats.push(god_data[i].AttackSpeed);

				role = $.trim(god_data[i].Roles);
			}else{
			};
		};

		for (i = 0; i < god_data.length; i++){		 
			if ($.trim(god_data[i].Roles) === role ) {		 
			
				health_array.push(god_data[i].Health+(level * god_data[i].HealthPerLevel));
				mana_array.push(god_data[i].Mana + (level * god_data[i].ManaPerLevel));
				speed_array.push(god_data[i].Speed);
				mp5_array.push(god_data[i].ManaPerFive + (level * god_data[i].MP5PerLevel));
				hp5_array.push(god_data[i].HealthPerFive + (level * god_data[i].HP5PerLevel));
				magic_prot_array.push(god_data[i].MagicProtection + (level * god_data[i].MagicProtectionPerLevel));
				phys_prot_array.push(god_data[i].PhysicalProtection + (level * god_data[i].PhysicalPowerPerLevel));
				attack_speed_array.push(god_data[i].AttackSpeed + (level * god_data[i].AttackSpeedPerLevel));

				// basic_attack_array.push(god_data[i].basicAttack.menuitems.value.slice(0,1).parseFloat() + (level * god_data[i].basicAttack.menuitems.value.slice(5,8).parseInt()));
		}else {};

	};	
		// console.log("health_array:");
		// console.log(health_array);
		// console.log("mana_array;");
		// console.log(mana_array);
		// console.log("speed_array:");
		// console.log(speed_array);
		// console.log("mp5_array;");
		// console.log(mp5_array);
		// console.log("hp5_array:");
		// console.log(hp5_array);
		// console.log("magic_prot_array;");
		// console.log(magic_prot_array);
		// console.log("phys_prot_array:");
		// console.log(phys_prot_array);
		// console.log("attack_speed_array;");
		// console.log(attack_speed_array);
		var health_total = 0;
		var mana_total = 0;
		var speed_total = 0;
		var mp5_total = 0;
		var hp5_total = 0;
		var magic_prot_total = 0;
		var phys_prot_total = 0;
		var attack_speed_total = 0;
		for (i = 0; i < health_array.length; i++){
				health_total += health_array[i];
				mana_total += mana_array[i];
				speed_total += speed_array[i];
				mp5_total += mp5_array[i];
				hp5_total += hp5_array[i];
				magic_prot_total += magic_prot_array[i];
				phys_prot_total += phys_prot_array[i];
				attack_speed_total += attack_speed_array[i];
		};
		// console.log(health_total);
		var health_avg = parseInt(health_total / health_array.length);
		var mana_avg = parseInt(mana_total / mana_array.length);
		var speed_avg = parseInt(speed_total / speed_array.length);
		var mp5_avg = parseInt(mp5_total / mp5_array.length).toFixed(3);
		var hp5_avg = parseInt(hp5_total / hp5_array.length).toFixed(3);
		var magic_prot_avg = parseInt(magic_prot_total / magic_prot_array.length);
		var phys_prot_avg = parseInt(phys_prot_total / phys_prot_array.length).toFixed(3);
		var attack_speed_avg = parseFloat(attack_speed_total / attack_speed_array.length).toFixed(3);
		// console.log(health_avg);
		// console.log(mana_avg);
		// console.log(speed_avg);
		// console.log(mp5_avg);
		// console.log(hp5_avg);
		// console.log(magic_prot_avg);
		// console.log(phys_prot_avg);
		// console.log(attack_speed_avg);
		
			datasets_array.push(role);
			datasets_array.push(health_avg);
			datasets_array.push(mana_avg);
			datasets_array.push(speed_avg);
			datasets_array.push(mp5_avg);
			datasets_array.push(hp5_avg);
			datasets_array.push(magic_prot_avg);
			datasets_array.push(phys_prot_avg);
			datasets_array.push(attack_speed_avg);
		console.log(datasets_array);
		return [datasets_array, selected_god_stats];
};
$('.filter').on('click', filter_gods);
// $('.godselection').on('click', function(){
// 	var target = this;
// 	buildchart(godSelection(target));});
// end of function
$('.godselection').on('click', function(){
    var target = this;
    // console.log(target.id);
    // console.log($(this).children("p.title")[0].innerText);
   
        if ($(window).scrollTop() > 100) {
            $("html, body").velocity('scroll', {
            duration: 500,
            offset: 0,
            easing: 'easeOutCirc'
        });
        } else {
            
        };
        
        
 
    build_chart_elements($(this).children("p.title")[0].innerText, target.id);
    build_charts_by_level(build_data_by_level(target));
            
            $('.layout').velocity({opacity: 0.0},300);
        
            $('.formfield').velocity({opacity: 0.0}, 240);
            $('.formfield').hide();
             
            $('.layout').hide();
            
            $('.chart_area').show();
            $('.chart_area').velocity({opacity: 1.0},500)
            
            $('.back').show();
});
            $('.back').on('click', function(){
            $('.chart_area').velocity({opacity: 0.0},300);
            destroy_chart_elements();
            $('.formfield').show();
            $('.layout').show();
            $('.formfield').velocity({opacity: 1.0}, 200);
            $('.layout').velocity({opacity: 1.0},300);
            $('.chart_area').hide();
            $('.back').hide();
});
function build_chart_elements (title, img){
    var sub_title;
    var title = title;
    var selected_role;
    var pantheon;
    for (i = 0; i < god_data.length; i++){
        if (god_data[i].Name === title){
            sub_title = god_data[i].Title;
            pantheon = god_data[i].Pantheon;
            selected_role = god_data[i].Roles


        }else {};
    };
    $('.back').after(
        "<div class=\"container chart_area margin-top\">\n" +
        "<div class=\"row charts\">\n" +
        "<div class=\"col-xs-12\">\n" +
        
        "<div class=\"col-xs-12 col-sm-6 col-md-6 margin-bottom\">\n" +
            "<img class=\"god_img\" src=\"./img/" + img + ".jpg\">\n" +
            "<h2 class=\"selected_title padding-top\">" + title + "<\/h2>\n" +
            "<h4 class=\"selected_subtitle\">" + sub_title + "<\/h4>\n" +
        "<\/div>\n" +
        "<div class=\"col-xs-12 col-sm-6 col-md-6 margin-bottom\">\n" +
            "<div class=\"col-xs-6 col-sm-6 col-md-6 margin-bottom\"\n>"+
            
            "<img class=\"detailed-img\" src=\"\">\n" +
            "<h5 class=\"inline-block\">"+pantheon+"<\/h5>\n" +
            "<\/div>\n" +

            "<div class=\"col-xs-6 col-sm-6 col-md-6 margin-bottom\">\n" +

            "<img class=\"detailed-img\" src=\"\" >\n" +
            "<h5 class=\"inline-block\">"+selected_role+"<\/h5>\n" +
            "<\/div>\n" +
        "<\/div>\n" +
        "<\/div>\n" +
        "<div class=\"row\">\n" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"health_chart\"><\/canvas>\n" +
            "<\/div>\n" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"mana_chart\"><\/canvas>\n" +
            "<\/div>\n" +
        "<\/div>\n" +
        "<div class=\"row\">\n" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"mp5_chart\"><\/canvas>\n" +
            "<\/div>" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"hp5_chart\"><\/canvas>\n" +
            "<\/div>\n" +
        "<\/div>\n" +
        "<div class=\"row\">\n" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"magic_prot_chart\"><\/canvas>\n" +
            "<\/div>\n" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"phys_prot_chart\"><\/canvas>\n" +
            "<\/div>\n" +
        "<\/div>\n" +
        "<div class=\"row\">\n" +
            "<div class=\"ccol-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"attack_speed_chart\"><\/canvas>\n" +
            "<\/div>\n" +
            "<div class=\"col-xs-12 col-sm-6\">\n" +
                "<canvas class=\"chart\" id=\"\"><\/canvas>\n" +
            "<\/div>\n" +
        "<\/div>\n" +
        "<\/div>\n" +
        "<\/div>");

};
function destroy_chart_elements(){
    $('.chart_area').remove();
};

//data for charts
function build_data_by_level(target){
		var god_selection_box = $('.godselection');
		var role;
		var role_specific_health_array = [];
		var role_specific_mana_array = [];
		// var role_specific_speed_array = [];
		var role_specific_mp5_array = [];
		var role_specific_hp5_array = [];
		var role_specific_magic_prot_array = [];
		var role_specific_phys_prot_array = [];
		var role_specific_attack_speed_array = [];
		// var basic_attack_array = [];
		var chart_dataset = [];
		var selected_god_health_stats = [];
		var selected_god_mana_stats = [];
		// var selected_god_speed_stats = [];
		var selected_god_mp5_stats = [];
		var selected_god_hp5_stats = [];
		var selected_god_magic_prot_stats = [];
		var selected_god_phys_prot_stats = [];
		var selected_god_attack_speed_stats = [];


// set stat info for the selected god
		for (i = 0; i < god_data.length; i++){
			var name = target.children[1].innerText;

			if (god_data[i].Name === name){

				selected_god_health_stats.push([god_data[i].Name,
														 god_data[i].Health+(1 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(2 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(3 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(4 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(5 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(6 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(7 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(8 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(9 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(10 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(11 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(12 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(13 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(14 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(15 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(16 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(17 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(18 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(19 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(20 * god_data[i].HealthPerLevel),
														]);
						selected_god_mana_stats.push([	god_data[i].Name,
														god_data[i].Mana + (1 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (2 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (3 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (4 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (5 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (6 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (7 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (8 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (9 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (10 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (11 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (12 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (13 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (14 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (15 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (16 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (17 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (18 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (19 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (20 * god_data[i].ManaPerLevel),
														]);
						selected_god_mp5_stats.push(	[god_data[i].Name,
														(god_data[i].ManaPerFive + (1 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (2 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (3 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (4 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (5 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (6 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (7 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (8 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (9 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (10 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (11 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (12 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (13 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (14 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (15 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (16 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (17 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (18 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (19 * god_data[i].MP5PerLevel)).toFixed(3),
														(god_data[i].ManaPerFive + (20 * god_data[i].MP5PerLevel)).toFixed(3),
														]);
						selected_god_hp5_stats.push(	[god_data[i].Name,
														(god_data[i].HealthPerFive + (1 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (2 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (3 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (4 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (5 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (6 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (7 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (8 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (9 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (10 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (11 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (12 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (13 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (14 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (15 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (16 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (17 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (18 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (19 * god_data[i].HP5PerLevel)).toFixed(3),
														(god_data[i].HealthPerFive + (20 * god_data[i].HP5PerLevel)).toFixed(3),
														]);
						selected_god_magic_prot_stats.push([god_data[i].Name,
														(god_data[i].MagicProtection + (1 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (2 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (3 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (4 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (5 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (6 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (7 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (8 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (9 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (10 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (11 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (12 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (13 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (14 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (15 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (16 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (17 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (18 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (19 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														(god_data[i].MagicProtection + (20 * god_data[i].MagicProtectionPerLevel)).toFixed(3),
														]);
						selected_god_phys_prot_stats.push([god_data[i].Name,
														(god_data[i].PhysicalProtection + (1 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (2 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (3 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (4 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (5 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (6 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (7 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (8 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (9 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (10 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (11 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (12 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (13 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (14 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (15 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (16 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (17 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (18 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (19 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														(god_data[i].PhysicalProtection + (20 * god_data[i].PhysicalPowerPerLevel)).toFixed(3),
														]);
						selected_god_attack_speed_stats.push([god_data[i].Name,
														god_data[i].AttackSpeed + (1 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (2 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (3 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (4 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (5 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (6 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (7 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (8 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (9 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (10 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (11 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (12 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (13 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (14 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (15 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (16 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (17 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (18 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (19 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (20 * god_data[i].AttackSpeedPerLevel),
														]);
				role = $.trim(god_data[i].Roles);
			}else{
			};
		};
// set the stat info for all gods of the same role
		for (i = 0; i < god_data.length; i++){		 
			if ($.trim(god_data[i].Roles) === role ) {		 
						role_specific_health_array.push([
														 god_data[i].Health+(1 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(2 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(3 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(4 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(5 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(6 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(7 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(8 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(9 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(10 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(11 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(12 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(13 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(14 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(15 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(16 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(17 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(18 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(19 * god_data[i].HealthPerLevel),
														 god_data[i].Health+(20 * god_data[i].HealthPerLevel),
														]);
						role_specific_mana_array.push([	
														god_data[i].Mana + (1 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (2 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (3 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (4 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (5 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (6 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (7 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (8 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (9 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (10 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (11 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (12 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (13 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (14 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (15 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (16 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (17 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (18 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (19 * god_data[i].ManaPerLevel),
														god_data[i].Mana + (20 * god_data[i].ManaPerLevel),
														]);
						role_specific_mp5_array.push(	[
														god_data[i].ManaPerFive + (1 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (2 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (3 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (4 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (5 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (6 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (7 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (8 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (9 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (10 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (11 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (12 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (13 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (14 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (15 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (16 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (17 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (18 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (19 * god_data[i].MP5PerLevel),
														god_data[i].ManaPerFive + (20 * god_data[i].MP5PerLevel),
														]);
						role_specific_hp5_array.push(	[
														god_data[i].HealthPerFive + (1 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (2 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (3 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (4 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (5 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (6 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (7 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (8 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (9 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (10 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (11 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (12 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (13 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (14 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (15 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (16 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (17 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (18 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (19 * god_data[i].HP5PerLevel),
														god_data[i].HealthPerFive + (20 * god_data[i].HP5PerLevel),
														]);
						role_specific_magic_prot_array.push([
														god_data[i].MagicProtection + (1 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (2 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (3 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (4 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (5 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (6 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (7 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (8 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (9 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (10 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (11 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (12 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (13 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (14 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (15 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (16 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (17 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (18 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (19 * god_data[i].MagicProtectionPerLevel),
														god_data[i].MagicProtection + (20 * god_data[i].MagicProtectionPerLevel),
														]);
						role_specific_phys_prot_array.push([
														god_data[i].PhysicalProtection + (1 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (2 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (3 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (4 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (5 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (6 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (7 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (8 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (9 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (10 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (11 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (12 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (13 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (14 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (15 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (16 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (17 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (18 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (19 * god_data[i].PhysicalPowerPerLevel),
														god_data[i].PhysicalProtection + (20 * god_data[i].PhysicalPowerPerLevel),
														]);
						role_specific_attack_speed_array.push([
														god_data[i].AttackSpeed + (1 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (2 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (3 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (4 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (5 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (6 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (7 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (8 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (9 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (10 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (11 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (12 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (13 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (14 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (15 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (16 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (17 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (18 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (19 * god_data[i].AttackSpeedPerLevel),
														god_data[i].AttackSpeed + (20 * god_data[i].AttackSpeedPerLevel),
														]);
						// role_specific_speed_array.push(god_data[i].Speed);
						// basic_attack_array.push(god_data[i].basicAttack.menuitems.value.slice(0,1).parseFloat() + (level * god_data[i].basicAttack.menuitems.value.slice(5,8).parseInt()));
		}else {};

	};	
		
		var level_1_role_specific_health_total = 0;
		var level_2_role_specific_health_total = 0;
		var level_3_role_specific_health_total = 0;
		var level_4_role_specific_health_total = 0;
		var level_5_role_specific_health_total = 0;
		var level_6_role_specific_health_total = 0;
		var level_7_role_specific_health_total = 0;
		var level_8_role_specific_health_total = 0;
		var level_9_role_specific_health_total = 0;
		var level_10_role_specific_health_total = 0;
		var level_11_role_specific_health_total = 0;
		var level_12_role_specific_health_total = 0;
		var level_13_role_specific_health_total = 0;
		var level_14_role_specific_health_total = 0;
		var level_15_role_specific_health_total = 0;
		var level_16_role_specific_health_total = 0;
		var level_17_role_specific_health_total = 0;
		var level_18_role_specific_health_total = 0;
		var level_19_role_specific_health_total = 0;
		var level_20_role_specific_health_total = 0;

		var level_1_role_specific_mana_total = 0;
		var level_2_role_specific_mana_total = 0;
		var level_3_role_specific_mana_total = 0;
		var level_4_role_specific_mana_total = 0;
		var level_5_role_specific_mana_total = 0;
		var level_6_role_specific_mana_total = 0;
		var level_7_role_specific_mana_total = 0;
		var level_8_role_specific_mana_total = 0;
		var level_9_role_specific_mana_total = 0;
		var level_10_role_specific_mana_total = 0;
		var level_11_role_specific_mana_total = 0;
		var level_12_role_specific_mana_total = 0;
		var level_13_role_specific_mana_total = 0;
		var level_14_role_specific_mana_total = 0;
		var level_15_role_specific_mana_total = 0;
		var level_16_role_specific_mana_total = 0;
		var level_17_role_specific_mana_total = 0;
		var level_18_role_specific_mana_total = 0;
		var level_19_role_specific_mana_total = 0;
		var level_20_role_specific_mana_total = 0;

		var level_1_role_specific_mp5_total = 0;
		var level_2_role_specific_mp5_total = 0;
		var level_3_role_specific_mp5_total = 0;
		var level_4_role_specific_mp5_total = 0;
		var level_5_role_specific_mp5_total = 0;
		var level_6_role_specific_mp5_total = 0;
		var level_7_role_specific_mp5_total = 0;
		var level_8_role_specific_mp5_total = 0;
		var level_9_role_specific_mp5_total = 0;
		var level_10_role_specific_mp5_total = 0;
		var level_11_role_specific_mp5_total = 0;
		var level_12_role_specific_mp5_total = 0;
		var level_13_role_specific_mp5_total = 0;
		var level_14_role_specific_mp5_total = 0;
		var level_15_role_specific_mp5_total = 0;
		var level_16_role_specific_mp5_total = 0;
		var level_17_role_specific_mp5_total = 0;
		var level_18_role_specific_mp5_total = 0;
		var level_19_role_specific_mp5_total = 0;
		var level_20_role_specific_mp5_total = 0;

		var level_1_role_specific_hp5_total = 0;
		var level_2_role_specific_hp5_total = 0;
		var level_3_role_specific_hp5_total = 0;
		var level_4_role_specific_hp5_total = 0;
		var level_5_role_specific_hp5_total = 0;
		var level_6_role_specific_hp5_total = 0;
		var level_7_role_specific_hp5_total = 0;
		var level_8_role_specific_hp5_total = 0;
		var level_9_role_specific_hp5_total = 0;
		var level_10_role_specific_hp5_total = 0;
		var level_11_role_specific_hp5_total = 0;
		var level_12_role_specific_hp5_total = 0;
		var level_13_role_specific_hp5_total = 0;
		var level_14_role_specific_hp5_total = 0;
		var level_15_role_specific_hp5_total = 0;
		var level_16_role_specific_hp5_total = 0;
		var level_17_role_specific_hp5_total = 0;
		var level_18_role_specific_hp5_total = 0;
		var level_19_role_specific_hp5_total = 0;
		var level_20_role_specific_hp5_total = 0;

		var level_1_role_specific_magic_prot_total = 0;
		var level_2_role_specific_magic_prot_total = 0;
		var level_3_role_specific_magic_prot_total = 0;
		var level_4_role_specific_magic_prot_total = 0;
		var level_5_role_specific_magic_prot_total = 0;
		var level_6_role_specific_magic_prot_total = 0;
		var level_7_role_specific_magic_prot_total = 0;
		var level_8_role_specific_magic_prot_total = 0;
		var level_9_role_specific_magic_prot_total = 0;
		var level_10_role_specific_magic_prot_total = 0;
		var level_11_role_specific_magic_prot_total = 0;
		var level_12_role_specific_magic_prot_total = 0;
		var level_13_role_specific_magic_prot_total = 0;
		var level_14_role_specific_magic_prot_total = 0;
		var level_15_role_specific_magic_prot_total = 0;
		var level_16_role_specific_magic_prot_total = 0;
		var level_17_role_specific_magic_prot_total = 0;
		var level_18_role_specific_magic_prot_total = 0;
		var level_19_role_specific_magic_prot_total = 0;
		var level_20_role_specific_magic_prot_total = 0;

		var level_1_role_specific_phys_prot_total = 0;
		var level_2_role_specific_phys_prot_total = 0;
		var level_3_role_specific_phys_prot_total = 0;
		var level_4_role_specific_phys_prot_total = 0;
		var level_5_role_specific_phys_prot_total = 0;
		var level_6_role_specific_phys_prot_total = 0;
		var level_7_role_specific_phys_prot_total = 0;
		var level_8_role_specific_phys_prot_total = 0;
		var level_9_role_specific_phys_prot_total = 0;
		var level_10_role_specific_phys_prot_total = 0;
		var level_11_role_specific_phys_prot_total = 0;
		var level_12_role_specific_phys_prot_total = 0;
		var level_13_role_specific_phys_prot_total = 0;
		var level_14_role_specific_phys_prot_total = 0;
		var level_15_role_specific_phys_prot_total = 0;
		var level_16_role_specific_phys_prot_total = 0;
		var level_17_role_specific_phys_prot_total = 0;
		var level_18_role_specific_phys_prot_total = 0;
		var level_19_role_specific_phys_prot_total = 0;
		var level_20_role_specific_phys_prot_total = 0;

		var level_1_role_specific_attack_speed_total = 0;
		var level_2_role_specific_attack_speed_total = 0;
		var level_3_role_specific_attack_speed_total = 0;
		var level_4_role_specific_attack_speed_total = 0;
		var level_5_role_specific_attack_speed_total = 0;
		var level_6_role_specific_attack_speed_total= 0;
		var level_7_role_specific_attack_speed_total = 0;
		var level_8_role_specific_attack_speed_total = 0;
		var level_9_role_specific_attack_speed_total = 0;
		var level_10_role_specific_attack_speed_total = 0;
		var level_11_role_specific_attack_speed_total = 0;
		var level_12_role_specific_attack_speed_total = 0;
		var level_13_role_specific_attack_speed_total = 0;
		var level_14_role_specific_attack_speed_total = 0;
		var level_15_role_specific_attack_speed_total = 0;
		var level_16_role_specific_attack_speed_total = 0;
		var level_17_role_specific_attack_speed_total = 0;
		var level_18_role_specific_attack_speed_total = 0;
		var level_19_role_specific_attack_speed_total = 0;
		var level_20_role_specific_attack_speed_total = 0;

		for (i = 0; i < role_specific_health_array.length; i++){
			for (j = 0; j < 20; j++){
				if (j===0) {
					level_1_role_specific_health_total += role_specific_health_array[i][j];
					level_1_role_specific_mana_total += role_specific_mana_array[i][j];
					level_1_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_1_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_1_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_1_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_1_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===1) {
					level_2_role_specific_health_total += role_specific_health_array[i][j];
					level_2_role_specific_mana_total += role_specific_mana_array[i][j];
					level_2_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_2_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_2_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_2_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_2_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===2){
					level_3_role_specific_health_total += role_specific_health_array[i][j];
					level_3_role_specific_mana_total += role_specific_mana_array[i][j];
					level_3_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_3_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_3_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_3_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_3_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===3){
					level_4_role_specific_health_total += role_specific_health_array[i][j];
					level_4_role_specific_mana_total += role_specific_mana_array[i][j];
					level_4_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_4_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_4_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_4_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_4_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===4){
					level_5_role_specific_health_total += role_specific_health_array[i][j];
					level_5_role_specific_mana_total += role_specific_mana_array[i][j];
					level_5_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_5_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_5_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_5_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_5_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===5){
					level_6_role_specific_health_total += role_specific_health_array[i][j];
					level_6_role_specific_mana_total += role_specific_mana_array[i][j];
					level_6_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_6_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_6_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_6_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_6_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===6){
					level_7_role_specific_health_total += role_specific_health_array[i][j];
					level_7_role_specific_mana_total += role_specific_mana_array[i][j];
					level_7_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_7_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_7_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_7_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_7_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===7){
					level_8_role_specific_health_total += role_specific_health_array[i][j];
					level_8_role_specific_mana_total += role_specific_mana_array[i][j];
					level_8_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_8_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_8_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_8_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_8_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];

				}else if (j===8){
					level_9_role_specific_health_total += role_specific_health_array[i][j];
					level_9_role_specific_mana_total += role_specific_mana_array[i][j];
					level_9_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_9_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_9_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_9_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_9_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===9){
					level_10_role_specific_health_total += role_specific_health_array[i][j];
					level_10_role_specific_mana_total += role_specific_mana_array[i][j];
					level_10_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_10_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_10_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_10_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_10_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===10){
					level_11_role_specific_health_total += role_specific_health_array[i][j];
					level_11_role_specific_mana_total += role_specific_mana_array[i][j];
					level_11_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_11_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_11_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_11_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_11_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===11){
					level_12_role_specific_health_total += role_specific_health_array[i][j];
					level_12_role_specific_mana_total += role_specific_mana_array[i][j];
					level_12_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_12_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_12_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_12_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_12_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===12){
					level_13_role_specific_health_total += role_specific_health_array[i][j];
					level_13_role_specific_mana_total += role_specific_mana_array[i][j];
					level_13_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_13_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_13_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_13_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_13_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===13){
					level_14_role_specific_health_total += role_specific_health_array[i][j];
					level_14_role_specific_mana_total += role_specific_mana_array[i][j];
					level_14_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_14_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_14_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_14_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_14_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===14){
					level_15_role_specific_health_total += role_specific_health_array[i][j];
					level_15_role_specific_mana_total += role_specific_mana_array[i][j];
					level_15_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_15_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_15_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_15_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_15_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===15){
					level_16_role_specific_health_total += role_specific_health_array[i][j];
					level_16_role_specific_mana_total += role_specific_mana_array[i][j];
					level_16_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_16_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_16_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_16_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_16_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===16){
					level_17_role_specific_health_total += role_specific_health_array[i][j];
					level_17_role_specific_mana_total += role_specific_mana_array[i][j];
					level_17_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_17_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_17_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_17_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_17_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===17){
					level_18_role_specific_health_total += role_specific_health_array[i][j];
					level_18_role_specific_mana_total += role_specific_mana_array[i][j];
					level_18_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_18_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_18_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_18_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_18_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===18){
					level_19_role_specific_health_total += role_specific_health_array[i][j];
					level_19_role_specific_mana_total += role_specific_mana_array[i][j];
					level_19_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_19_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_19_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_19_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_19_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else if (j===19){
					level_20_role_specific_health_total += role_specific_health_array[i][j];
					level_20_role_specific_mana_total += role_specific_mana_array[i][j];
					level_20_role_specific_mp5_total += role_specific_mp5_array[i][j];
					level_20_role_specific_hp5_total += role_specific_hp5_array[i][j];
					level_20_role_specific_magic_prot_total += role_specific_magic_prot_array[i][j];
					level_20_role_specific_phys_prot_total += role_specific_phys_prot_array[i][j];
					level_20_role_specific_attack_speed_total += role_specific_attack_speed_array[i][j];
					// role_specific_speed_total += role_specific_speed_array[i];
				}else{};
			
		};
	};
		
			var level_1_role_specific_health_avg = parseInt(level_1_role_specific_health_total / role_specific_health_array.length);
			var level_2_role_specific_health_avg = parseInt(level_2_role_specific_health_total / role_specific_health_array.length);
			var level_3_role_specific_health_avg = parseInt(level_3_role_specific_health_total / role_specific_health_array.length);
			var level_4_role_specific_health_avg = parseInt(level_4_role_specific_health_total / role_specific_health_array.length);
			var level_5_role_specific_health_avg = parseInt(level_5_role_specific_health_total / role_specific_health_array.length);
			var level_6_role_specific_health_avg = parseInt(level_6_role_specific_health_total / role_specific_health_array.length);
			var level_7_role_specific_health_avg = parseInt(level_7_role_specific_health_total / role_specific_health_array.length);
			var level_8_role_specific_health_avg = parseInt(level_8_role_specific_health_total / role_specific_health_array.length);
			var level_9_role_specific_health_avg = parseInt(level_9_role_specific_health_total / role_specific_health_array.length);
			var level_10_role_specific_health_avg = parseInt(level_10_role_specific_health_total / role_specific_health_array.length);
			var level_11_role_specific_health_avg = parseInt(level_11_role_specific_health_total / role_specific_health_array.length);
			var level_12_role_specific_health_avg = parseInt(level_12_role_specific_health_total / role_specific_health_array.length);
			var level_13_role_specific_health_avg = parseInt(level_13_role_specific_health_total / role_specific_health_array.length);
			var level_14_role_specific_health_avg = parseInt(level_14_role_specific_health_total / role_specific_health_array.length);
			var level_15_role_specific_health_avg = parseInt(level_15_role_specific_health_total / role_specific_health_array.length);
			var level_16_role_specific_health_avg = parseInt(level_16_role_specific_health_total / role_specific_health_array.length);
			var level_17_role_specific_health_avg = parseInt(level_17_role_specific_health_total / role_specific_health_array.length);
			var level_18_role_specific_health_avg = parseInt(level_18_role_specific_health_total / role_specific_health_array.length);
			var level_19_role_specific_health_avg = parseInt(level_19_role_specific_health_total / role_specific_health_array.length);
			var level_20_role_specific_health_avg = parseInt(level_20_role_specific_health_total / role_specific_health_array.length);

			var level_1_role_specific_mana_avg = parseInt(level_1_role_specific_mana_total / role_specific_mana_array.length);
			var level_2_role_specific_mana_avg = parseInt(level_2_role_specific_mana_total / role_specific_mana_array.length);
			var level_3_role_specific_mana_avg = parseInt(level_3_role_specific_mana_total / role_specific_mana_array.length);
			var level_4_role_specific_mana_avg = parseInt(level_4_role_specific_mana_total / role_specific_mana_array.length);
			var level_5_role_specific_mana_avg = parseInt(level_5_role_specific_mana_total / role_specific_mana_array.length);
			var level_6_role_specific_mana_avg = parseInt(level_6_role_specific_mana_total / role_specific_mana_array.length);
			var level_7_role_specific_mana_avg = parseInt(level_7_role_specific_mana_total / role_specific_mana_array.length);
			var level_8_role_specific_mana_avg = parseInt(level_8_role_specific_mana_total / role_specific_mana_array.length);
			var level_9_role_specific_mana_avg = parseInt(level_9_role_specific_mana_total / role_specific_mana_array.length);
			var level_10_role_specific_mana_avg = parseInt(level_10_role_specific_mana_total / role_specific_mana_array.length);
			var level_11_role_specific_mana_avg = parseInt(level_11_role_specific_mana_total / role_specific_mana_array.length);
			var level_12_role_specific_mana_avg = parseInt(level_12_role_specific_mana_total / role_specific_mana_array.length);
			var level_13_role_specific_mana_avg = parseInt(level_13_role_specific_mana_total / role_specific_mana_array.length);
			var level_14_role_specific_mana_avg = parseInt(level_14_role_specific_mana_total / role_specific_mana_array.length);
			var level_15_role_specific_mana_avg = parseInt(level_15_role_specific_mana_total / role_specific_mana_array.length);
			var level_16_role_specific_mana_avg = parseInt(level_16_role_specific_mana_total / role_specific_mana_array.length);
			var level_17_role_specific_mana_avg = parseInt(level_17_role_specific_mana_total / role_specific_mana_array.length);
			var level_18_role_specific_mana_avg = parseInt(level_18_role_specific_mana_total / role_specific_mana_array.length);
			var level_19_role_specific_mana_avg = parseInt(level_19_role_specific_mana_total / role_specific_mana_array.length);
			var level_20_role_specific_mana_avg = parseInt(level_20_role_specific_mana_total / role_specific_mana_array.length);

			var level_1_role_specific_mp5_avg = parseFloat(level_1_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_2_role_specific_mp5_avg = parseFloat(level_2_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_3_role_specific_mp5_avg = parseFloat(level_3_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_4_role_specific_mp5_avg = parseFloat(level_4_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_5_role_specific_mp5_avg = parseFloat(level_5_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_6_role_specific_mp5_avg = parseFloat(level_6_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_7_role_specific_mp5_avg = parseFloat(level_7_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_8_role_specific_mp5_avg = parseFloat(level_8_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_9_role_specific_mp5_avg = parseFloat(level_9_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_10_role_specific_mp5_avg = parseFloat(level_10_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_11_role_specific_mp5_avg = parseFloat(level_11_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_12_role_specific_mp5_avg = parseFloat(level_12_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_13_role_specific_mp5_avg = parseFloat(level_13_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_14_role_specific_mp5_avg = parseFloat(level_14_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_15_role_specific_mp5_avg = parseFloat(level_15_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_16_role_specific_mp5_avg = parseFloat(level_16_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_17_role_specific_mp5_avg = parseFloat(level_17_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_18_role_specific_mp5_avg = parseFloat(level_18_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_19_role_specific_mp5_avg = parseFloat(level_19_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);
			var level_20_role_specific_mp5_avg = parseFloat(level_20_role_specific_mp5_total / role_specific_mp5_array.length).toFixed(3);

			var level_1_role_specific_hp5_avg = parseFloat(level_1_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_2_role_specific_hp5_avg = parseFloat(level_2_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_3_role_specific_hp5_avg = parseFloat(level_3_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_4_role_specific_hp5_avg = parseFloat(level_4_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_5_role_specific_hp5_avg = parseFloat(level_5_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_6_role_specific_hp5_avg = parseFloat(level_6_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_7_role_specific_hp5_avg = parseFloat(level_7_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_8_role_specific_hp5_avg = parseFloat(level_8_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_9_role_specific_hp5_avg = parseFloat(level_9_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_10_role_specific_hp5_avg = parseFloat(level_10_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_11_role_specific_hp5_avg = parseFloat(level_11_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_12_role_specific_hp5_avg = parseFloat(level_12_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_13_role_specific_hp5_avg = parseFloat(level_13_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_14_role_specific_hp5_avg = parseFloat(level_14_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_15_role_specific_hp5_avg = parseFloat(level_15_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_16_role_specific_hp5_avg = parseFloat(level_16_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_17_role_specific_hp5_avg = parseFloat(level_17_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_18_role_specific_hp5_avg = parseFloat(level_18_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_19_role_specific_hp5_avg = parseFloat(level_19_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			var level_20_role_specific_hp5_avg = parseFloat(level_20_role_specific_hp5_total / role_specific_hp5_array.length).toFixed(3);
			
			var level_1_role_specific_magic_prot_avg = parseFloat(level_1_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_2_role_specific_magic_prot_avg = parseFloat(level_2_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_3_role_specific_magic_prot_avg = parseFloat(level_3_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_4_role_specific_magic_prot_avg = parseFloat(level_4_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_5_role_specific_magic_prot_avg = parseFloat(level_5_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_6_role_specific_magic_prot_avg = parseFloat(level_6_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_7_role_specific_magic_prot_avg = parseFloat(level_7_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_8_role_specific_magic_prot_avg = parseFloat(level_8_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_9_role_specific_magic_prot_avg = parseFloat(level_9_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_10_role_specific_magic_prot_avg = parseFloat(level_10_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_11_role_specific_magic_prot_avg = parseFloat(level_11_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_12_role_specific_magic_prot_avg = parseFloat(level_12_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_13_role_specific_magic_prot_avg = parseFloat(level_13_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_14_role_specific_magic_prot_avg = parseFloat(level_14_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_15_role_specific_magic_prot_avg = parseFloat(level_15_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_16_role_specific_magic_prot_avg = parseFloat(level_16_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_17_role_specific_magic_prot_avg = parseFloat(level_17_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_18_role_specific_magic_prot_avg = parseFloat(level_18_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_19_role_specific_magic_prot_avg = parseFloat(level_19_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);
			var level_20_role_specific_magic_prot_avg = parseFloat(level_20_role_specific_magic_prot_total / role_specific_magic_prot_array.length).toFixed(3);

			var level_1_role_specific_phys_prot_avg = parseFloat(level_1_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_2_role_specific_phys_prot_avg = parseFloat(level_2_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_3_role_specific_phys_prot_avg = parseFloat(level_3_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_4_role_specific_phys_prot_avg = parseFloat(level_4_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_5_role_specific_phys_prot_avg = parseFloat(level_5_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_6_role_specific_phys_prot_avg = parseFloat(level_6_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_7_role_specific_phys_prot_avg = parseFloat(level_7_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_8_role_specific_phys_prot_avg = parseFloat(level_8_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_9_role_specific_phys_prot_avg = parseFloat(level_9_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_10_role_specific_phys_prot_avg = parseFloat(level_10_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_11_role_specific_phys_prot_avg = parseFloat(level_11_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_12_role_specific_phys_prot_avg = parseFloat(level_12_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_13_role_specific_phys_prot_avg = parseFloat(level_13_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_14_role_specific_phys_prot_avg = parseFloat(level_14_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_15_role_specific_phys_prot_avg = parseFloat(level_15_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_16_role_specific_phys_prot_avg = parseFloat(level_16_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_17_role_specific_phys_prot_avg = parseFloat(level_17_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_18_role_specific_phys_prot_avg = parseFloat(level_18_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_19_role_specific_phys_prot_avg = parseFloat(level_19_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);
			var level_20_role_specific_phys_prot_avg = parseFloat(level_20_role_specific_phys_prot_total / role_specific_phys_prot_array.length).toFixed(3);


			
			var level_1_role_specific_attack_speed_avg = parseFloat(level_1_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_2_role_specific_attack_speed_avg = parseFloat(level_2_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_3_role_specific_attack_speed_avg = parseFloat(level_3_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_4_role_specific_attack_speed_avg = parseFloat(level_4_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_5_role_specific_attack_speed_avg = parseFloat(level_5_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_6_role_specific_attack_speed_avg = parseFloat(level_6_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_7_role_specific_attack_speed_avg = parseFloat(level_7_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_8_role_specific_attack_speed_avg = parseFloat(level_8_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_9_role_specific_attack_speed_avg = parseFloat(level_9_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_10_role_specific_attack_speed_avg = parseFloat(level_10_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_11_role_specific_attack_speed_avg = parseFloat(level_11_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_12_role_specific_attack_speed_avg = parseFloat(level_12_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_13_role_specific_attack_speed_avg = parseFloat(level_13_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_14_role_specific_attack_speed_avg = parseFloat(level_14_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_15_role_specific_attack_speed_avg = parseFloat(level_15_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_16_role_specific_attack_speed_avg = parseFloat(level_16_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_17_role_specific_attack_speed_avg = parseFloat(level_17_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_18_role_specific_attack_speed_avg = parseFloat(level_18_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_19_role_specific_attack_speed_avg = parseFloat(level_19_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
			var level_20_role_specific_attack_speed_avg = parseFloat(level_20_role_specific_attack_speed_total / role_specific_attack_speed_array.length).toFixed(3);
	
		
			chart_dataset.push([ level_1_role_specific_health_avg,
								level_2_role_specific_health_avg,
								level_3_role_specific_health_avg,
								level_4_role_specific_health_avg,
								level_5_role_specific_health_avg,
								level_6_role_specific_health_avg,
								level_7_role_specific_health_avg,
								level_8_role_specific_health_avg,
								level_9_role_specific_health_avg,
								level_10_role_specific_health_avg,
								level_11_role_specific_health_avg,
								level_12_role_specific_health_avg,
								level_13_role_specific_health_avg,
								level_14_role_specific_health_avg,
								level_15_role_specific_health_avg,
								level_16_role_specific_health_avg,
								level_17_role_specific_health_avg,
								level_18_role_specific_health_avg,
								level_19_role_specific_health_avg,
								level_20_role_specific_health_avg,
								role
				],
				[				level_1_role_specific_mana_avg,
								level_2_role_specific_mana_avg,
								level_3_role_specific_mana_avg,
								level_4_role_specific_mana_avg,
								level_5_role_specific_mana_avg,
								level_6_role_specific_mana_avg,
								level_7_role_specific_mana_avg,
								level_8_role_specific_mana_avg,
								level_9_role_specific_mana_avg,
								level_10_role_specific_mana_avg,
								level_11_role_specific_mana_avg,
								level_12_role_specific_mana_avg,
								level_13_role_specific_mana_avg,
								level_14_role_specific_mana_avg,
								level_15_role_specific_mana_avg,
								level_16_role_specific_mana_avg,
								level_17_role_specific_mana_avg,
								level_18_role_specific_mana_avg,
								level_19_role_specific_mana_avg,
								level_20_role_specific_mana_avg,

				],
				[				level_1_role_specific_mp5_avg,
								level_2_role_specific_mp5_avg,
								level_3_role_specific_mp5_avg,
								level_4_role_specific_mp5_avg,
								level_5_role_specific_mp5_avg,
								level_6_role_specific_mp5_avg,
								level_7_role_specific_mp5_avg,
								level_8_role_specific_mp5_avg,
								level_9_role_specific_mp5_avg,
								level_10_role_specific_mp5_avg,
								level_11_role_specific_mp5_avg,
								level_12_role_specific_mp5_avg,
								level_13_role_specific_mp5_avg,
								level_14_role_specific_mp5_avg,
								level_15_role_specific_mp5_avg,
								level_16_role_specific_mp5_avg,
								level_17_role_specific_mp5_avg,
								level_18_role_specific_mp5_avg,
								level_19_role_specific_mp5_avg,
								level_20_role_specific_mp5_avg,

				],[				level_1_role_specific_hp5_avg,
								level_2_role_specific_hp5_avg,
								level_3_role_specific_hp5_avg,
								level_4_role_specific_hp5_avg,
								level_5_role_specific_hp5_avg,
								level_6_role_specific_hp5_avg,
								level_7_role_specific_hp5_avg,
								level_8_role_specific_hp5_avg,
								level_9_role_specific_hp5_avg,
								level_10_role_specific_hp5_avg,
								level_11_role_specific_hp5_avg,
								level_12_role_specific_hp5_avg,
								level_13_role_specific_hp5_avg,
								level_14_role_specific_hp5_avg,
								level_15_role_specific_hp5_avg,
								level_16_role_specific_hp5_avg,
								level_17_role_specific_hp5_avg,
								level_18_role_specific_hp5_avg,
								level_19_role_specific_hp5_avg,
								level_20_role_specific_hp5_avg,

				],[				level_1_role_specific_magic_prot_avg,
								level_2_role_specific_magic_prot_avg,
								level_3_role_specific_magic_prot_avg,
								level_4_role_specific_magic_prot_avg,
								level_5_role_specific_magic_prot_avg,
								level_6_role_specific_magic_prot_avg,
								level_7_role_specific_magic_prot_avg,
								level_8_role_specific_magic_prot_avg,
								level_9_role_specific_magic_prot_avg,
								level_10_role_specific_magic_prot_avg,
								level_11_role_specific_magic_prot_avg,
								level_12_role_specific_magic_prot_avg,
								level_13_role_specific_magic_prot_avg,
								level_14_role_specific_magic_prot_avg,
								level_15_role_specific_magic_prot_avg,
								level_16_role_specific_magic_prot_avg,
								level_17_role_specific_magic_prot_avg,
								level_18_role_specific_magic_prot_avg,
								level_19_role_specific_magic_prot_avg,
								level_20_role_specific_magic_prot_avg,


				],[				level_1_role_specific_phys_prot_avg,
								level_2_role_specific_phys_prot_avg,
								level_3_role_specific_phys_prot_avg,
								level_4_role_specific_phys_prot_avg,
								level_5_role_specific_phys_prot_avg,
								level_6_role_specific_phys_prot_avg,
								level_7_role_specific_phys_prot_avg,
								level_8_role_specific_phys_prot_avg,
								level_9_role_specific_phys_prot_avg,
								level_10_role_specific_phys_prot_avg,
								level_11_role_specific_phys_prot_avg,
								level_12_role_specific_phys_prot_avg,
								level_13_role_specific_phys_prot_avg,
								level_14_role_specific_phys_prot_avg,
								level_15_role_specific_phys_prot_avg,
								level_16_role_specific_phys_prot_avg,
								level_17_role_specific_phys_prot_avg,
								level_18_role_specific_phys_prot_avg,
								level_19_role_specific_phys_prot_avg,
								level_20_role_specific_phys_prot_avg,

				],[				level_1_role_specific_attack_speed_avg,
								level_2_role_specific_attack_speed_avg,
								level_3_role_specific_attack_speed_avg,
								level_4_role_specific_attack_speed_avg,
								level_5_role_specific_attack_speed_avg,
								level_6_role_specific_attack_speed_avg,
								level_7_role_specific_attack_speed_avg,
								level_8_role_specific_attack_speed_avg,
								level_9_role_specific_attack_speed_avg,
								level_10_role_specific_attack_speed_avg,
								level_11_role_specific_attack_speed_avg,
								level_12_role_specific_attack_speed_avg,
								level_13_role_specific_attack_speed_avg,
								level_14_role_specific_attack_speed_avg,
								level_15_role_specific_attack_speed_avg,
								level_16_role_specific_attack_speed_avg,
								level_17_role_specific_attack_speed_avg,
								level_18_role_specific_attack_speed_avg,
								level_19_role_specific_attack_speed_avg,
								level_20_role_specific_attack_speed_avg,

				]);
			
		// console.log(datasets_array);
		return [chart_dataset,[selected_god_health_stats,selected_god_mana_stats,selected_god_mp5_stats,selected_god_hp5_stats,selected_god_magic_prot_stats,selected_god_phys_prot_stats,selected_god_attack_speed_stats]];
};
});