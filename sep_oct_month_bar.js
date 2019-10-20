var series = [
    {
        name: 'September',
        data: [1606160, 1642152, 1618403, 1536130, 1520076],
        color:'#FFC72C'
    }, 
    {
        name: 'October',
        data: [1380063, 1351220, 1351293, 1334204, 1364454],
        color:'#DA291C'
    }
    ]
  
  // Configuration about the plot
  var chart = {
    type: 'column'
  }
  
  var title = {
    text: "Hamburgers Sales by Regions in Sep and Oct"
  }
  
  var xAxis = {
    title: {
      text: 'Region'
    },
    categories: ['NorthEast', 'SouthWest', 'NorthWest', 'SouthEast', 'Central'],
    crosshair: true
  };

  var yAxis = {
    min: 0,
    title: {
        text: 'USD($)'
    },
  };

  var legend = {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    borderColor: '#CCC',
    borderWidth: 3,
    shadow: false
  };
  
  var plotOptions = {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
  };
  
  // Data structure holding all configurations together
  var bar_json = {};
  
  // Typing all the configurations
  bar_json.chart = chart;
  bar_json.title = title;
  bar_json.xAxis = xAxis;
  bar_json.yAxis = yAxis;
  bar_json.legend = legend; 
  bar_json.plotOptions = plotOptions;
  
  // Typing the data as series data
  bar_json.series = series;
  
  var someVar = document.getElementById("BarChartTwoPlaceHolder");
  console.log(series);
  Highcharts.chart(someVar,bar_json)