var myChart = echarts.init(document.getElementById("barchart"));

initGrades();
function initGrades() {
  var option = {
    title: {
      text: "污染程度排行",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: [
        "文登",
        "莱州",
        "寿光",
        "黄岛",
        "荣成",
        "招远",
        "即墨",
        "乳山",
        "莱西",
        "平度",
      ],
    },
    series: [
      {
        name: "污染指数",
        type: "bar",
        data: [81, 85, 87, 88, 90, 104, 107, 113, 130, 147],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
