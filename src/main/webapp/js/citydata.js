const citysData = [
  {
    name: "威海",
    aqi: 33,
    pm25: 11,
    pm10: 17,
    location: [122.116394, 37.509691],
  },
  {
    name: "烟台",
    aqi: 40,
    pm25: 12,
    pm10: 26,
    location: [121.391382, 37.539297],
  },
  {
    name: "潍坊",
    aqi: 45,
    pm25: 18,
    pm10: 28,
    location: [119.107078, 36.70925],
  },
  {
    name: "淄博",
    aqi: 45,
    pm25: 31,
    pm10: 45,
    location: [118.047648, 36.814939],
  },
  {
    name: "济南",
    aqi: 44,
    pm25: 25,
    pm10: 41,
    location: [117.000923, 36.675807],
  },
  {
    name: "泰安",
    aqi: 46,
    pm25: 32,
    pm10: 40,
    location: [117.129063, 36.194968],
  },
  {
    name: "即墨",
    aqi: 107,
    pm25: 77,
    pm10: 164,
    location: [120.409175, 36.400331],
  },
  {
    name: "文登",
    aqi: 81,
    pm25: 36,
    pm10: 112,
    location: [122.096354, 37.187271],
  },
  {
    name: "胶州",
    aqi: 79,
    pm25: 46,
    pm10: 108,
    location: [119.996956, 36.299109],
  },
  {
    name: "平度",
    aqi: 147,
    pm25: 112,
    pm10: 172,
    location: [119.957897, 36.760427],
  },
  {
    name: "莱州",
    aqi: 85,
    pm25: 61,
    pm10: 120,
    location: [119.94222, 37.17702],
  },
  {
    name: "青岛",
    aqi: 32,
    pm25: 16,
    pm10: 21,
    location: [120.355173, 36.082982],
  },
  {
    name: "乳山",
    aqi: 113,
    pm25: 75,
    pm10: 175,
    location: [121.5402, 36.92021],
  },
  {
    name: "荣成",
    aqi: 90,
    pm25: 54,
    pm10: 129,
    location: [122.48628, 37.16523],
  },
];
const  getLevel = (val) =>{
        if(val<=50) return 'green';
        else if(val >100) return 'red';
        else  return 'rgb(255,140,0)';
      }
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

const sunBurstData = function (citysData){
  var res = [];
  for (var i = 0; i < citysData.length; i++) {
    res.push({
      name: citysData[i].name,
      value: 1,
    });
  }
  return res;
};
const highlevel = (citysData)=>{
      var res = [];
      for (var i = 0; i < citysData.length; i++) {
        if(citysData[i].api >=100){
         res.push({
                  name: citysData[i].name,
                  value: 1,
                });
        }
      }
      return res;
}
const midlevel = (citysData)=>{
       var res = [];
       for (var i = 0; i < citysData.length; i++) {
         if(citysData[i].api <100 && citysData[i].api >50){
          res.push({
                   name: citysData[i].name,
                   value: 1,
                 });
         }
       }
       return res;
 }

 const lowlevel = (citysData)=>{
        var res = [];
        for (var i = 0; i < citysData.length; i++) {
          if( citysData[i].api <=50){
           res.push({
                    name: citysData[i].name,
                    value: 1,
                  });
          }
        }
        return res;
  }