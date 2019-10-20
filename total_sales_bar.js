var series = [
    {
        name: 'Hamburger',
        data: [65362334, 64421707, 63572000, 62328614, 61582375],
        color:'#FFC72C'
    }, 
    {
        name: 'Chicken Fillet',
        data: [27233220, 26815953, 26341429, 26039450, 25724566],
        color:'#DA291C'
    },
    {
        name: 'Fish Fillet',
        data: [16345942, 16104137, 15821178, 15614539, 15540968],
        color:'#27251F'
    }
    ]
  
  // Configuration about the plot
  var chart = {
    type: 'column'
  }
  
  var title = {
    text: "Three Items Total Sales by Region"
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
  
  var someVar = document.getElementById("BarChartThreePlaceHolder");
  console.log(series);
  Highcharts.chart(someVar,bar_json)