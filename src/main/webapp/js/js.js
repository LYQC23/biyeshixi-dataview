$(window).load(function () {
  $(".loading").fadeOut();
});
$(function () {
  echarts_2();
  echarts_3();
  echarts_4();
  function echarts_2() {
    var myChart = echarts.init(document.getElementById("echart2"));
    var option = {
      //   title: {
      //     text: "污染程度排行",
      //   },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      textStyle: {
        color: "#fff",
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
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
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          name: "污染指数",
          type: "bar",
          data: [81, 85, 87, 88, 90, 104, 107, 113, 130, 147],
          color: "#0073ab",
          label: {
            color: "#fff",
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  function echarts_3() {
    // 利用dom，初始化echarts实例

    //日历饼图
    var myChart = echarts.init(document.getElementById("echart3"));
    var cellSize = [105, 55]; //日历大少
    var pieRadius = 20; //饼图大小
    var app = {};
    var incomclass = [
      [
        { name: "PM2.5", value: 5.4 },
        { name: "PM10", value: 6 },
        { name: "O3", value: 37.8 },
      ],
      [
        { name: "PM2.5", value: 10.7 },
        { name: "PM10", value: 12.3 },
        { name: "O3", value: 59 },
      ],
      [
        { name: "PM2.5", value: 15.1 },
        { name: "PM10", value: 19.5 },
        { name: "O3", value: 79.8 },
      ],
      [
        { name: "PM2.5", value: 7.6 },
        { name: "PM10", value: 11.3 },
        { name: "O3", value: 64.7 },
      ],
      [
        { name: "PM2.5", value: 23.7 },
        { name: "PM10", value: 34.6 },
        { name: "O3", value: 120.1 },
      ],
      [
        { name: "PM2.5", value: 18.5 },
        { name: "PM10", value: 25.4 },
        { name: "O3", value: 119.6 },
      ],
      [
        { name: "PM2.5", value: 26.5 },
        { name: "PM10", value: 33.1 },
        { name: "O3", value: 136.5 },
      ],
      [
        { name: "PM2.5", value: 17.2 },
        { name: "PM10", value: 21.7 },
        { name: "O3", value: 102.4 },
      ],
      [
        { name: "PM2.5", value: 5.2 },
        { name: "PM10", value: 7.9 },
        { name: "O3", value: 84.3 },
      ],
      [
        { name: "PM2.5", value: 10.6 },
        { name: "PM10", value: 14.6 },
        { name: "O3", value: 70.7 },
      ],
      [
        { name: "PM2.5", value: 14.1 },
        { name: "PM10", value: 17.9 },
        { name: "O3", value: 87 },
      ],
      [
        { name: "PM2.5", value: 11.8 },
        { name: "PM10", value: 16.6 },
        { name: "O3", value: 91.9 },
      ],
      [
        { name: "PM2.5", value: 8.1 },
        { name: "PM10", value: 9.8 },
        { name: "O3", value: 84.8 },
      ],
      [
        { name: "PM2.5", value: 19.7 },
        { name: "PM10", value: 27 },
        { name: "O3", value: 123.1 },
      ],
      [
        { name: "PM2.5", value: 15.7 },
        { name: "PM10", value: 19.9 },
        { name: "O3", value: 84.8 },
      ],
      [
        { name: "PM2.5", value: 12.7 },
        { name: "PM10", value: 19.5 },
        { name: "O3", value: 89.5 },
      ],
      [
        { name: "PM2.5", value: 15.9 },
        { name: "PM10", value: 22.8 },
        { name: "O3", value: 110.9 },
      ],
      [
        { name: "PM2.5", value: 12.3 },
        { name: "PM10", value: 19.3 },
        { name: "O3", value: 104.8 },
      ],
      [
        { name: "PM2.5", value: 12.6 },
        { name: "PM10", value: 18.7 },
        { name: "O3", value: 89 },
      ],
      [
        { name: "PM2.5", value: 8 },
        { name: "PM10", value: 15.6 },
        { name: "O3", value: 89.4 },
      ],
      [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 16.9 },
        { name: "O3", value: 114.3 },
      ],
      [
        { name: "PM2.5", value: 8.9 },
        { name: "PM10", value: 20.6 },
        { name: "O3", value: 88.4 },
      ],
      [
        { name: "PM2.5", value: 5.7 },
        { name: "PM10", value: 16.8 },
        { name: "O3", value: 82 },
      ],
      [
        { name: "PM2.5", value: 10 },
        { name: "PM10", value: 17.5 },
        { name: "O3", value: 92.3 },
      ],
      [
        { name: "PM2.5", value: 18.7 },
        { name: "PM10", value: 26.7 },
        { name: "O3", value: 101.8 },
      ],
      [
        { name: "PM2.5", value: 21.6 },
        { name: "PM10", value: 39.3 },
        { name: "O3", value: 137 },
      ],
    ];

    //获取日历显示的日期范围
    function getVirtulData() {
      var date = +echarts.number.parseDate("2022-08-01");
      var end = +echarts.number.parseDate("2022-09-01");
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime("yyyy-MM-dd", time),
          Math.floor(Math.random() * 10000),
        ]);
      }
      return data;
    }

    function getPieSeriesUpdate(scatterData, chart) {
      return echarts.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel("calendar", item);
        return {
          id: index + "pie",
          center: center,
        };
      });
    }

    var scatterData = getVirtulData();
    var option = {
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
      },
      calendar: {
        top: "middle",
        left: "center",
        orient: "vertical",
        cellSize: "auto",
        itemStyle: {
          color: "rgba(0,0,0,0)",
        },
        splitLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        yearLabel: {
          show: false,
        },
        dayLabel: {
          margin: 20,
          firstDay: 1,
          nameMap: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        monthLabel: {
          show: false,
        },
        range: ["2022-08-01", "2022-08-26"],
      },
      series: [
        {
          id: "label",
          type: "scatter",
          coordinateSystem: "calendar",
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return echarts.format.formatTime("dd", params.value[0]);
              },
              offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
              textStyle: {
                color: "#fff",
                fontSize: 14,
              },
            },
          },
          data: scatterData,
        },
      ],
    };

    function getPieSeries(scatterData, chart) {
      var i = 0;
      return echarts.util.map(scatterData, function (item, index) {
        var center = chart.convertToPixel("calendar", item);
        var pieData = incomclass[i];
        i = i + 1;
        return {
          id: index + "pie",
          type: "pie",
          center: center,
          label: {
            normal: {
              formatter: "{b}",
              fontSize: 10,
              position: "inside",
            },
          },
          radius: pieRadius,
          data: pieData,
        };
      });
    }
    if (!app.inNode) {
      var pieInitialized;
      setTimeout(function () {
        pieInitialized = true;
        myChart.setOption({
          series: getPieSeries(scatterData, myChart),
        });
      }, 10);

      app.onresize = function () {
        if (pieInitialized) {
          myChart.setOption({
            series: getPieSeriesUpdate(scatterData, myChart),
          });
        }
      };
    }
    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_4() {
    // 利用dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart4"));

    // 指定图表的配置项和数据
    initGrades();
    function initGrades() {
      var option;

      option = {
        title: {},
        legend: {
          left: 0,
          textStyle: {
            color: "#fff",
          },
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "aqi", max: 200 },
            { name: "pm25", max: 75 },
            { name: "pm10", max: 150 },
            { name: "no2", max: 80 },
            { name: "so2", max: 150 },
            { name: "co", max: 10 },
            { name: "o3", max: 200 },
          ],
          textStyle: {
            fontSize: 8,
          },
        },
        series: [
          {
            top: 30,
            name: "point",
            type: "radar",
            color: "#0060f7",
            data: [
              {
                value: [33, 11, 17, 11, 5, 0.3, 83],
                name: "威海市",
              },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  }
});
