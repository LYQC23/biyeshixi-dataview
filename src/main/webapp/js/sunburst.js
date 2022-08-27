$(function () {
  const getLevel = (val) => {
    if (val <= 50) return "green";
    else if (val > 100) return "red";
    else return "rgb(255,140,0)";
  };
  const scatterData = function (citysData) {
    var res = [];
    for (var i = 0; i < citysData.length; i++) {
      res.push({
        name: citysData[i].name,
        value: citysData[i].location.concat([
          citysData[i].api,
          citysData[i].pm25,
          citysData[i].pm10,
        ]),
        itemStyle: {
          color: getLevel(citysData[i].pm25),
        },
      });
    }
    return res;
  };
  function rgb() {
    //rgb颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
  }
  const highlevel = (citysData) => {
    var res = [];
    for (var i = 0; i < citysData.length; i++) {
      if (citysData[i].aqi >= 100) {
        res.push({
          name: citysData[i].name,
          value: 3,
          children: [
            {
              name: `pm2.5:${citysData[i].pm25}`,
              value: 2,
              itemStyle: { color: "#F5F5F5" },
            },
            {
              name: `pm10:${citysData[i].pm10}`,
              value: 1,
              itemStyle: { color: "#F0FFFF" },
            },
          ],
          itemStyle: { color: rgb() },
        });
      }
    }
    return res;
  };
  const midlevel = (citysData) => {
    var res = [];
    for (var i = 0; i < citysData.length; i++) {
      if (citysData[i].aqi < 100 && citysData[i].aqi > 50) {
        res.push({
          name: citysData[i].name,
          value: 3,
          itemStyle: { color: rgb() },
          children: [
            {
              name: `pm2.5:${citysData[i].pm25}`,
              value: 2,
              itemStyle: { color: "#F5F5F5" },
            },
            {
              name: `pm10:${citysData[i].pm10}`,
              value: 1,
              itemStyle: { color: "#F0FFFF" },
            },
          ],
        });
      }
    }
    return res;
  };
  const lowlevel = (citysData) => {
    var res = [];
    for (var i = 0; i < citysData.length; i++) {
      if (citysData[i].aqi <= 50) {
        res.push({
          name: citysData[i].name,
          value: 3,
          itemStyle: { color: rgb() },
          children: [
            {
              name: `pm2.5:${citysData[i].pm25}`,
              value: 2,
              itemStyle: { color: "#F5F5F5" },
            },
            {
              name: `pm10:${citysData[i].pm10}`,
              value: 1,
              itemStyle: { color: "#F0FFFF" },
            },
          ],
        });
      }
    }
    return res;
  };

  const item1 = {
    color: "#F54F4A",
  };
  const item2 = {
    color: "#FF8C75",
  };
  const item3 = {
    color: "#FFB499",
  };
  const data = [
    {
      name: "中度污染",
      children: midlevel(citysData),
      itemStyle: item1,
    },
    {
      name: "轻度污染",
      children: highlevel(citysData),
      itemStyle: item2,
    },
    {
      name: "空气清新",
      children: lowlevel(citysData),
      itemStyle: item3,
    },
  ];
  const setChart5 = () => {
    const option = {
      textStyle: {
        fontSize: 10,
        align: "center",
        color: "white",
      },
      subtextStyle: {
        align: "center",
      },

      series: {
        radius: ["15%", "80%"],
        type: "sunburst",
        sort: undefined,
        emphasis: {
          focus: "ancestor",
        },
        data: data,
        label: {
          rotate: "radial",
        },
        levels: [
          {},
          {
            r0: "15%",
            r: "35%",
            itemStyle: {
              borderWidth: 2,
            },
            label: {
              rotate: "tangential",
            },
          },
          {
            r0: "35%",
            r: "70%",
            label: {
              align: "right",
            },
          },
          {
            r0: "70%",
            r: "72%",
            label: {
              position: "outside",
              padding: 3,
              silent: false,
            },
            itemStyle: {
              borderWidth: 3,
            },
          },
        ],

        itemStyle: {
          color: "#ddd",
          borderWidth: 2,
        },
      },
    };
    var chartDom = document.getElementById("echart5");
    var myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  };
  setChart5();
});
