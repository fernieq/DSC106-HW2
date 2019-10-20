var series = [
    {
        name:"NE",
        data:[62547.  , 62738.5 , 62629.25, 64903.  , 59814.  , 58755.6 ,
            63375.2 ],
        color: '#0288D1'
      },
      {
        name:"SW",
        data:[60272.25, 59319.25, 61150.5 , 59837.25, 64433.  , 58117.  ,
            59841.4 ],
        color: '#F06292'
      },
      {
        name:"NW",
        data:[61255.  , 60442.75, 61153.5 , 60937.25, 61950.  , 59045.2 ,
            58294.2 ],
        color: '#27251F'
      },
      {
        name:"SE",
        data:[58164.5 , 58320.5 , 59346.75, 58514.  , 61971.4 , 58740.6 ,
            56822.6 ],
        color: '#DA291C'
      },
      {
        name:"C",
        data:[60925.  , 59202.25, 59679.5 , 59538.25, 62418.6 , 59675.  ,
            58241.  ],
        color: '#FFC72C'
      }
    ]
  
  // Configuration about the plot
  var chart = {
    type: 'column'
  }
  var title = {
    text: "Three Items Sales by Days in Different Regions"
  }
  
  var xAxis = {
    title: {
      text: 'Day of the Week'
    },
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
  var yAxis = {
    min: 0,
    title: {
      text: "USD($)"
    },
    stackLabels: {
      enabled: true,
      style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
      }
    }
  };
  var legend = {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  };
  
  var plotOptions = {
    column:{
      stacking:'normal',
      dataLabels: {
        enabled: true
      }
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
  
  var someVar = document.getElementById("BarChartPlaceHolder");
  console.log(series);
  Highcharts.chart(someVar,bar_json)