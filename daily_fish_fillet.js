//data of the line chart
var series = [
    {
       name: 'FF-NE',
       data: [ 9284.25,  9576.5 ,  9513.75, 11797.5 ,  7634.2 ,  7400.2 ,
        9875.6 ],
       color:'#0288D1'
    }, 
    {
       name: 'FF-SW',
       data: [ 9241.25,  8891.5 ,  9503.5 ,  9390.75, 10821.  ,  7992.8 ,
        7792.8 ],
       color:'#F06292' 
    }, 
    {
       name: 'FF-NW',
       data: [ 8649.75,  8787.75,  9328.75,  9273.75, 10405.6 ,  8536.6 ,
        7806.6 ],
       color:'#27251F'
    },
    {
        name: 'FF-SE',
        data: [ 8712.75,  8402.5 ,  8867.5 ,  8802.25, 11769.4 ,  7831.4 ,
            7322.8 ],
        color:'#DA291C'
     },
     {
        name: 'FF-C',
        data: [ 8863.5 ,  8498.  ,  8992.  ,  9093.25, 12136.6 ,  8345.4 ,
            7484.4 ],
        color: '#FFC72C'
     }
 ];

 // Configuration about the plot
 var title = {
    text: 'Average Sales of MCD\'s Fish Fillet by Day'     
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
var someVar = document.getElementById("LineChartFourPlaceHolder");
Highcharts.chart(someVar, json);