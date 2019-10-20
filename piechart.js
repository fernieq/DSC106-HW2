var series = [
    {
        name:"USD($)",
        data:[["Sunday", 296574.40],
              ["Monday",303164.75],
              ["Tuesday",300025.25],
              ["Wednesday",303962.50],
              ["Thursday",303733.75],
              ["Friday",310592.00],
              ["Saturday",294339.40]
        ]
      }
  ]
  
  // Configuration about the plot
  var chart = {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  }
  var title = {
      text: 'Total Sales by Day of Week',
      style: {
          display: 'none',
      }
  }
  
  var plotOptions = {
    pie:{
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      },
      colors :['#36C5F0','#2EB67D','#E01E5A','#ECB22E','#006699','#98FB98','#FC642D']
    }
  };
  
  // Data structure holding all configurations together
  var pie_json = {};
  
  // Typing all the configurations
  pie_json.chart = chart;
  pie_json.title = title;
  pie_json.plotOptions = plotOptions;
  
  // Typing the data as series data
  pie_json.series = series;
  
  var someVar = document.getElementById("PieChartHolder");
  console.log(series);
  Highcharts.chart(someVar,pie_json)