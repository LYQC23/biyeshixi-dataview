$(function () {
  map();
  function map() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("map"));
    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    };

    option = {
      // backgroundColor: '#404a59',
      title: {
        text: "山东省空气质量一览",
        //subtext: "虚拟标题自行更",
        left: "center",
        top: "40",
        textStyle: {
          color: "#fff",
        },
      },
      formatter: {},
      tooltip: {
        trigger: "item",
        show: false,
      },

      geo: {
        map: "山东",
        label: {
          emphasis: {
            show: false,
          },
        },
        roam: false,
        zoom: 1.2,
        itemStyle: {
          normal: {
            areaColor: "rgba(2,37,101,.5)",
            borderColor: "rgba(112,187,252,.5)",
          },
          emphasis: {
            areaColor: "rgba(2,37,101,.8)",
          },
        },
      },
      series: [
        {
          name: "AQI",
          type: "scatter",
          coordinateSystem: "geo",
          data: scatterData(citysData),
          symbolSize: 10,
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: true,
            },
            emphasis: {
              show: true,
              formatter: "{b}:{@[3]}",
              position: "top",
              fontSize: 10,
            },
          },
          itemStyle: {
            normal: {
              color: "#ffeb7b",
            },
          },
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
});
