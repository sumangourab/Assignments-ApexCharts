const options = {
  series: [
    {
      name: "Discharge by Intrval",
      type: "column",
      data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0],
      y: {
        axisIndex: 0
    },
     
    },
    {
      name: "Avg Time",
      type: "line",
      data: [0, 2.18, 2.57, 2.32, 1.45, 0, 0, 0,0,0],
      y: {
          axisIndex: 1
      },
      dataLabels: {
          enabled: true,
      }
  }
  
    
  ],

 
  colors: ['#F9A3A4', '#662E9B'], 
  chart: {
    height: 550,
    width: 1500,
    type: "line",

  },



  

  stroke: {
    width: [2, 2],
    curve: "smooth",
    
  },
  
  grid: {
    show: false,
  },
  

  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        position: "bottom",           
      }, 
        
    },
  
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#FF4560",'#662E9B'],
  } ,
  formatter: function(val, opts) {
    if(val === 0) {
        return '';
    }
    return val;
},
  y: {
    axisIndex: 1
},
   
 },
  


 
  xaxis: {
    categories: [
      "12AM - 6AM",
      "6AM - 8AM",
      "8AM - 10AM",
      "10AM - 12PM",
      "12PM - 2PM",
      "2PM - 4PM",
      "4PM - 6PM",
      "6PM - 8PM",
      "8PM - 10PM",
      "10PM - 12AM",
    ], 
     
  },

  


  yaxis: [
    {
          seriesName: "Avg Time",
           show: false,
           opposite:true,
           axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#662E9B'
            },
            labels: {
              style: {
                color: '#662E9B',
              }
            },
            title: {
              text: "Avg Time",
              style: {
                color: '#662E9B',
              }
            },
            min: 0
         },{
       show: false,
       opposite: false,
       min: 0,
       max: 3,
       showForNullSeries: false,
       yAxisIndex: 1,
       axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#F9A3A4'
            },
            labels: {
              style: {
                color: '#F9A3A4',
              }
            },
            title: {
              text: "Discharge by Intrval",
              style: {
                color: '#F9A3A4',
              }
            },
            min: 0
         },
  ],
  

}

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

