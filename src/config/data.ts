export const SteppedChartData: any = {
  chartType: 'SteppedAreaChart',
  dataTable: [
    ['Month', 'California', 'Nevada', 'Arizona'],
    ['January', 3.53, 1.20, 0.76],
    ['February', 3.60, 1.90, 0.93],
    ['March', 3.65, 2.35, 1.48],
    ['April', 3.73, 2.10, 1.25],
    ['May', 3.75, 1.80, 1.56],
    ['June', 3.81, 2.07, 1.88]
  ],
  options: {
    connectSteps: false,
    curveType: 'function',
    titleTextStyle: {
      color: '#F3F7F0'
    },
    width: 600,
    height: 400,
    title: 'National Sales',
    legend: { position: 'none' },
    backgroundColor: '#423E4F',
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },
    colors: [
      '#59A5D8', '#BCD39C', '#FFC857', '#177E89', '#F3F7F0'
    ],
    hAxis: {
      gridlines: { count: 0 },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null,
      textStyle: {
        color: '#F3F7F0'
      }
    },
    vAxis: {
      gridlines: {
        count: 0,
        color: '#423E4F'
      },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null
    
    }
  }
};

export const LineChartData: any = {
  chartType: 'LineChart',
  dataTable: [
    ['Month', 'Page Authority', 'MozRank', 'MozTrust'], ['January', 21, 3.86, 3.53], ['February', 25, 3.93, 3.60],
    ['March', 26, 3.96, 3.65], ['April', 28, 4.01, 3.73], ['May', 31, 4.09, 3.75], ['June', 32, 4.12, 3.81]
  ],
  options: { title: 'Company Performance' }
};

export const ColChartData: any = {
  chartType: 'ColumnChart',
  dataTable: [
    ['Quarter', 'Sales', { role: "style" }],
    ["Q1 2016", 59, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q2 2016", 80, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q3 2016", 81, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q4 2016", 56, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q1 2017", 55, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q2 2017", 40, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"]
  ],
  options: {
    title: "Quarterly Sales",
    titleTextStyle: {
      color: '#F3F7F0'
    },
    width: 600,
    height: 400,
    backgroundColor: '#423E4F',
    bar: { groupWidth: "75%" },
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    colors: [
      '#59A5D8', '#BCD39C', '#FFC857', '#177E89', '#F3F7F0'
    ],
    hAxis: {
      count: 0,
      textStyle: {
        color: '#F3F7F0'
      }
    },
    vAxis: {
      gridlines: {count: 0, color: '#423E4F'}
      
    },
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },
    legend: { position: "none" } }
};

export const BarChartData: any = {
  chartType: 'BarChart',
  dataTable: [
    ['Quarter', 'Sales', { role: "style" }],
    ["Q1 2016", 59, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q2 2016", 80, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q3 2016", 81, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q4 2016", 56, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q1 2017", 55, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"],
    ["Q2 2017", 40, "stroke-color: #FFC857; stroke-width: 4; fill-opacity: 0.4; fill-color: #FFC857"]
  ],
  options: {
    title: "Quarterly Sales",
    titleTextStyle: {
      color: '#F3F7F0'
    },
    width: 600,
    height: 400,
    backgroundColor: '#423E4F',
    bar: { groupWidth: "75%" },
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    colors: [
      '#59A5D8', '#BCD39C', '#FFC857', '#177E89', '#F3F7F0'
    ],
    hAxis: {
      count: 0,
      textStyle: {
        color: '#F3F7F0'
      }
    },
    vAxis: {
      gridlines: {
        count: 0,
        color: '#423E4F'
      }
      
    },
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },
    legend: { position: "none" }
  }
};

export const PieChartData: any = {
  chartType: 'PieChart',
  dataTable: [
    ['Payment Type', 'Amount'],
    ["Credit Card", 220],
    ["ACH Debit", 12],
    ["Bitcoin", 64],
    ["Apple Pay", 45],
    ["Cash", 170]
  ],
  options: {
    is3D: true,
    pieHole: 0.3,
    pieSliceTextStyle: {
      color: 'black',
    },
    title: "Payment Types",
    titleTextStyle: {
      color: '#F3F7F0'
    },
    width: 600,
    height: 400,
    backgroundColor: '#423E4F',
    bar: { groupWidth: "75%" },
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    colors: [
      '#59A5D8', '#BCD39C', '#FFC857', '#177E89', '#F3F7F0'
    ],
    hAxis: {
      count: 0,
      textStyle: {
        color: '#F3F7F0'
      }
    },
    vAxis: {
      gridlines: {
        count: 0,
        color: '#423E4F'
      }
      
    },
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },
    legend: { position: "none" }
  }
};
