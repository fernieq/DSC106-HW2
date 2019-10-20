//data of the line chart
var series = [
    {
       name: 'HM-total',
       data: [181368.5 , 180341.75, 181304.75, 179467.25, 181921.  , 180366.4 ,
        179456.4 ],
       color:'#FFC72C'
    }, 
    {
       name: 'CF-total',
       data: [77043.75, 75525.25, 76449.25, 75905.  , 75899.2 , 73860.6 ,
        76835.8 ],
       color:'#DA291C' 
    }, 
    {
       name: 'FF-total',
       data: [44751.5 , 44156.25, 46205.5 , 48357.5 , 52766.8 , 40106.4 ,
        40282.2 ],
       color:'#27251F'
    }
 ];

 // Configuration about the plot
 var title = {
    text: 'Total Sales of MCD\'s Three Items by Day on Average'     
 };
 var xAxis = {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };
 var yAxis = {
    title: {
       text: 'USD($)'
    },
    plotLines: [{
       value: 0,
       width: 3,
       color: '#FFC72C'
    }]
 };  
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("LineChartPlaceHolder");
Highcharts.chart(someVar, json);