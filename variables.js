// Arrays for the heatmap.
var tear_gas_mid=[];
var tear_gas_lat=[];
var tear_gas_lng=[];
var tear_gas_tg_count=[];
var tear_gas_date=[];
var heat_map_variables=[];

// Loads the CSV data for the heatmap.
d3.csv("TG_Jun12toNov18 .csv",function(d){
                tear_gas_mid.push(d.mid);
                tear_gas_lat.push(parseFloat(d.Lat));
                tear_gas_lng.push(parseFloat(d.Lng));
                tear_gas_tg_count.push(d.Adj_TG_Count);
                tear_gas_date.push(d.DateUS);
                heat_map_variables.push([parseFloat(d.Lat),parseFloat(d.Lng),(d.Adj_TG_Count / 100)]); // lat, lng, intensity
            });

// Function that parses the station information.
function stationInfo(StationCode, latitude, longitude, Windlatitude, Windlongitude, StationName, WebcamAngle)
{
  this.StationCode = StationCode;
  this.latitude = latitude;
  this.longitude = longitude;
  this.Windlatitude = Windlatitude;
  this.Windlongitude = Windlongitude;
  this.StationName = StationName;
  this.WebcamAngle = WebcamAngle;
}

// 20190821: build AWS Station list
var AWS_Station = new Array();

AWS_Station[0] = new stationInfo("hko", "22.301944", "114.174297", "", "", { name_E: "Hong Kong Observatory", name_UC: "香港天文台", name_SC: "香港天文台" }, "0");

AWS_Station[1] = new stationInfo("sha", "22.402478", "114.209881", "", "", { name_E: "Sha Tin", name_UC: "沙田", name_SC: "沙田" }, "0");

AWS_Station[2] = new stationInfo("lfs", "22.468925", "113.983511", "", "", { name_E: "Lau Fau Shan", name_UC: "流浮山", name_SC: "流浮山" }, "270");

AWS_Station[3] = new stationInfo("tkl", "22.528544", "114.156619", "", "", { name_E: "Ta Kwu Ling", name_UC: "打鼓嶺", name_SC: "打鼓岭" }, "0");

AWS_Station[4] = new stationInfo("tun", "22.385906", "113.964178", "", "", { name_E: "Tuen Mun", name_UC: "屯門", name_SC: "屯门" }, "0");

AWS_Station[5] = new stationInfo("hks", "22.247836", "114.173547", "", "", { name_E: "Wong Chuk Hang", name_UC: "黃竹坑", name_SC: "黄竹坑" }, "0");

AWS_Station[6] = new stationInfo("wgl", "22.182231", "114.303353", "", "", { name_E: "Waglan Island", name_UC: "橫瀾島", name_SC: "横澜岛" }, "0");

AWS_Station[7] = new stationInfo("gi", "22.284992", "114.112828", "", "", { name_E: "Green Island", name_UC: "青洲", name_SC: "青洲" }, "0");

AWS_Station[8] = new stationInfo("jkb", "22.315708", "114.255631", "", "", { name_E: "Tseung Kwan O", name_UC: "將軍澳", name_SC: "将军澳" }, "0");

AWS_Station[9] = new stationInfo("ccb", "22.210858", "114.029433", "", "", { name_E: "Cheung Chau Beach", name_UC: "長洲泳灘", name_SC: "长洲泳滩" }, "90");

AWS_Station[10] = new stationInfo("kp", "22.311897", "114.172878", "", "", { name_E: "King's Park", name_UC: "京士柏", name_SC: "京士柏" }, "0");

AWS_Station[11] = new stationInfo("plc", "22.475225", "114.237586", "", "", { name_E: "Tai Mei Tuk", name_UC: "大美督", name_SC: "大美督" }, "0");

AWS_Station[12] = new stationInfo("slw", "22.288000", "113.904167", "", "", { name_E: "Sha Lo Wan", name_UC: "沙螺灣", name_SC: "沙螺湾" }, "45");

AWS_Station[13] = new stationInfo("skg", "22.375575", "114.274436", "", "", { name_E: "Sai Kung", name_UC: "西貢", name_SC: "西贡" }, "0");

AWS_Station[14] = new stationInfo("tme", "22.4683333", "114.363056", "", "", { name_E: "Tap Mun", name_UC: "塔門", name_SC: "塔门" }, "0");

AWS_Station[15] = new stationInfo("tyw", "22.402825", "114.322992", "", "", { name_E: "Pak Tam Chung", name_UC: "北潭涌", name_SC: "北潭涌" }, "0");

AWS_Station[16] = new stationInfo("sek", "22.436219", "114.084642", "", "", { name_E: "Shek Kong", name_UC: "石崗", name_SC: "石岗" }, "0");

AWS_Station[17] = new stationInfo("tms", "22.410436", "114.124475", "", "", { name_E: "Tai Mo Shan", name_UC: "大帽山", name_SC: "大帽山" }, "0");

AWS_Station[18] = new stationInfo("hka", "22.309350", "113.921989", "22.316503", "113.911875", { name_E: "Chek Lap Kok", name_UC: "赤鱲角", name_SC: "赤鱲角" }, "0");

// 20180227 resume tc winds station same as tc temp station
// 20171114 - add tcm lat, lon
//  stationInfo("tc", "22.357769", "114.217831", "22.357053", "114.219697", { name_E: "Tate's Cairn", name_UC: "大老山", name_SC: "大老山" }, "0");
AWS_Station[19] = new stationInfo("tc", "22.357769", "114.217831", "", "", { name_E: "Tate's Cairn", name_UC: "大老山", name_SC: "大老山" }, "0");

AWS_Station[20] = new stationInfo("tpo", "22.445978", "114.178978", "", "", { name_E: "Tai Po", name_UC: "大埔", name_SC: "大埔" }, "0");

AWS_Station[21] = new stationInfo("ngp", "22.258533", "113.912694", "", "", { name_E: "Ngong Ping", name_UC: "昂坪", name_SC: "昂坪" }, "0");

AWS_Station[22] = new stationInfo("vp1", "22.264111", "114.155103", "", "", { name_E: "The Peak", name_UC: "山頂", name_SC: "山顶" }, "0");

AWS_Station[23] = new stationInfo("pen", "22.291231", "114.043444", "", "", { name_E: "Peng Chau", name_UC: "坪洲", name_SC: "坪洲" }, "0");

AWS_Station[24] = new stationInfo("ssh", "22.501897", "114.111097", "", "", { name_E: "Sheung Shui", name_UC: "上水", name_SC: "上水" }, "0");

AWS_Station[25] = new stationInfo("twn", "22.383633", "114.107817", "", "", { name_E: "Tsuen Wan Ho Koon", name_UC: "荃灣可觀", name_SC: "荃湾可观" }, "0");

AWS_Station[26] = new stationInfo("wlp", "22.466508", "114.008767", "", "", { name_E: "Wetland Park", name_UC: "濕地公園", name_SC: "湿地公园" }, "45");

AWS_Station[27] = new stationInfo("hkp", "22.278211", "114.162092", "", "", { name_E: "Hong Kong Park", name_UC: "香港公園", name_SC: "香港公园" }, "0");

AWS_Station[28] = new stationInfo("skw", "22.281664", "114.238839", "", "", { name_E: "Shau Kei Wan", name_UC: "筲箕灣", name_SC: "筲箕湾" }, "0");

AWS_Station[29] = new stationInfo("klt", "22.335114", "114.184717", "", "", { name_E: "Kowloon City", name_UC: "九龍城", name_SC: "九龙城" }, "135");

AWS_Station[30] = new stationInfo("hpv", "22.270625", "114.183575", "", "", { name_E: "Happy Valley", name_UC: "跑馬地", name_SC: "跑马地" }, "0");

AWS_Station[31] = new stationInfo("ksc", "22.370283", "114.312478", "", "", { name_E: "Kau Sai Chau", name_UC: "滘西洲", name_SC: "滘西洲" }, "0");

AWS_Station[32] = new stationInfo("wts", "22.339383", "114.205347", "", "", { name_E: "Wong Tai Sin", name_UC: "黃大仙", name_SC: "黄大仙" }, "0");

AWS_Station[33] = new stationInfo("sty", "22.214083", "114.218511", "22.197500", "114.211944", { name_E: "Stanley", name_UC: "赤柱", name_SC: "赤柱" }, "0");

AWS_Station[34] = new stationInfo("ktg", "22.318647", "114.224656", "", "", { name_E: "Kwun Tong", name_UC: "觀塘", name_SC: "观塘" }, "0");

AWS_Station[35] = new stationInfo("swh", "22.285555", "114.225833", "", "", { name_E: "Sai Wan Ho", name_UC: "西灣河", name_SC: "西湾河" }, "90");

AWS_Station[36] = new stationInfo("ssp", "22.335833", "114.136944", "", "", { name_E: "Sham Shui Po", name_UC: "深水埗", name_SC: "深水埗" }, "0");

AWS_Station[37] = new stationInfo("tw", "22.375658", "114.126664", "", "", { name_E: "Tsuen Wan Shing Mun Valley", name_UC: "荃灣城門谷", name_SC: "荃湾城门谷" }, "0");

AWS_Station[38] = new stationInfo("ty1", "22.344256", "114.110081", "22.345278", "114.086028", { name_E: "Tsing Yi", name_UC: "青衣", name_SC: "青衣" }, "0");

AWS_Station[39] = new stationInfo("tpk", "22.442606", "114.184031", "", "", { name_E: "Tai Po Kau", name_UC: "大埔滘", name_SC: "大埔滘" }, "45");

AWS_Station[40] = new stationInfo("kfb", "22.432708", "114.120805", "", "", { name_E: "Kadoorie Farm and Botanic Garden", name_UC: "嘉道理農場暨植物園", name_SC: "嘉道理农场暨植物园" }, "270");

AWS_Station[41] = new stationInfo("se", "22.309647", "114.213306", "", "", { name_E: "Kai Tak", name_UC: "啟德", name_SC: "启德" }, "0");

AWS_Station[42] = new stationInfo("sf", "22.293008", "114.168420", "", "", { name_E: "Star Ferry", name_UC: "天星碼頭", name_SC: "天星码头" }, "0");

AWS_Station[43] = new stationInfo("sc", "22.345911", "113.891061", "", "", { name_E: "Sha Chau", name_UC: "沙洲", name_SC: "沙洲" }, "0");

AWS_Station[44] = new stationInfo("cch", "22.201111", "114.026669", "", "", { name_E: "Cheung Chau", name_UC: "長洲", name_SC: "长洲" }, "360");

AWS_Station[45] = new stationInfo("cp1", "22.288888", "114.155833", "", "", { name_E: "Central", name_UC: "中環", name_SC: "中环" }, "90");

AWS_Station[46] = new stationInfo("hss", "22.218300", "114.214290", "", "", { name_E: "Hong Kong Sea School", name_UC: "香港航海學校", name_SC: "香港航海学校" }, "0");

AWS_Station[47] = new stationInfo("gsi", "22.265726", "114.160995", "", "", { name_E: "German Swiss International School", name_UC: "德瑞國際學校", name_SC: "德瑞国际学校" }, "180");

AWS_Station[48] = new stationInfo("tlc", "22.362778", "114.011111", "", "", { name_E: "Tai Lam Chung", name_UC: "大欖涌", name_SC: "大榄涌" }, "180");

AWS_Station[49] = new stationInfo("lam", "22.226228", "114.108639", "", "", { name_E: "Lamma Island", name_UC: "南丫島", name_SC: "南丫岛" }, "315");

AWS_Station[50] = new stationInfo("se1", "22.304722", "114.217222", "", "", { name_E: "Kai Tak Runway Park", name_UC: "啟德跑道公園", name_SC: "启德跑道公园" }, "0");

AWS_Station[51] = new stationInfo("ylp", "22.440800", "114.018200", "", "", { name_E: "Yuen Long Park", name_UC: "元朗公園", name_SC: "元朗公园" }, "0");

AWS_Station[52] = new stationInfo("elc", "22.492611", "114.124028", "", "", { name_E: "Elegantia College in Sheung Shui", name_UC: "上水風采中學", name_SC: "上水风采中学" }, "315");

AWS_Station[53] = new stationInfo("vpa", "22.276", "114.146", "", "", { name_E: "Victoria Peak", name_UC: "太平山", name_SC: "太平山" }, "90");

AWS_Station[54] = new stationInfo("vpb", "22.276", "114.146", "", "", { name_E: "Victoria Peak", name_UC: "太平山", name_SC: "太平山" }, "23");

//AWS_Station[55] = new stationInfo("cwa", "22.26333", "114.29972", "", "", { name_E: "Clear Water Bay", name_UC: "清水灣", name_SC: "清水湾" }, "90");
//AWS_Station[56] = new stationInfo("cwb", "22.26333", "114.29972", "", "", { name_E: "Clear Water Bay", name_UC: "清水灣", name_SC: "清水湾" }, "225");

// 20181213 - use CWA temp station lat lon
AWS_Station[55] = new stationInfo("cwa", "22.263389", "114.299769", "", "", { name_E: "Clear Water Bay", name_UC: "清水灣", name_SC: "清水湾" }, "90");

AWS_Station[56] = new stationInfo("cwb", "22.263389", "114.299769", "", "", { name_E: "Clear Water Bay", name_UC: "清水灣", name_SC: "清水湾" }, "225");

AWS_Station[57] = new stationInfo("ic1", "22.303056", "114.160278", "", "", { name_E: "International Commerce Centre", name_UC: "環球貿易廣場", name_SC: "环球贸易广场" }, "135");

AWS_Station[58] = new stationInfo("ic2", "22.303056", "114.160278", "", "", { name_E: "International Commerce Centre", name_UC: "環球貿易廣場", name_SC: "环球贸易广场" }, "225");

AWS_Station[59] = new stationInfo("np", "22.294444", "114.199722", "", "", { name_E: "North Point", name_UC: "北角", name_SC: "北角" }, "0");

var url;
var readings;
var wind_array = [];
var wind_name = [];
var wind_direction = [];
var wind_speed = [];
var wind_gust = [];

// Function to keep everything after a string.
function getNextPart(str,splitafter)
{
  return str.split(splitafter)[1];
}

var North = L.divIcon({
  className: 'north'
})
var Northeast = L.divIcon({
  className: 'northeast'
})
var East = L.divIcon({
  className: 'east'
})
var Southeast = L.divIcon({
  className: 'southeast'
})
var South = L.divIcon({
  className: 'south'
})
var Southwest = L.divIcon({
  className: 'southwest'
})
var West = L.divIcon({
  className: 'west'
})
var Northwest = L.divIcon({
  className: 'northwest'
})

var TestWind = L.divIcon({
  className: 'East',
  iconSize: [50, 50],
  iconAngle: 45
})

// Rounds to the nearest number divisible by 5.
function round5(x)
{
    return Math.round(x/5)*5;
}

async function weatherAsync() {
    // Uses the cors-anywhere to bypass the Cross-Origin permissions issue.
    url = "https://cors-anywhere.herokuapp.com/https://www.weather.gov.hk/en/wxinfo/ts/tsarchive/wxinfo_24hrs.shtml";

    let promise = $.get(url, function(response)
      {
        // Turns the received source code into a string.
        readings = JSON.stringify(response);

        // Keeps only the part of the string we are interested in (Wind).
        var firstvariable = '10-Minute Mean Wind';
        var secondvariable = 'Mean Sea Level Pressure';
        readings = readings.match(new RegExp(firstvariable + "(.*)" + secondvariable));

        // Turns the string into an array of wind station data.
        wind_array = readings[0].split("\\n");
        wind_array = wind_array.splice(0,(wind_array.length-2));

        // Gets the name variable from the array.
        for (i = 1; i < wind_array.length; i++)
        {
          for (z = 0; z < AWS_Station.length; z++)
          {
            if (wind_array[i].startsWith(AWS_Station[z].StationName.name_E))
            {
              if (AWS_Station[z].StationName.name_E == 'Central')
              {
                wind_array[i] = wind_array[i].slice(13,wind_array[i].length);
                wind_name[i-1] = 'Central Pier';
              } else {
                wind_array[i] = wind_array[i].slice(AWS_Station[z].StationName.name_E.length,wind_array[i].length);
                wind_name[i-1] = AWS_Station[z].StationName.name_E;
              }
            }
          }

          // Gets the wind direction variable from the array.
          var directions = ['North ','South ','East','West','Northeast','Northwest','Southeast','Southwest','Variable','Calm','N/A'];
          directions.forEach(function(d)
          {
            if (wind_array[i].includes(d) == true)
            {
              wind_direction[i-1] = d;
              wind_array[i] = getNextPart(wind_array[i],d).trim();
            }
          });

          // Gets the Wind Speed.
          var wind_speeds = wind_array[i].split(' ')[0];
          if (wind_speeds == '')
          {
            wind_speed[i-1] = 'N/A';
          } else
          {
            wind_speed[i-1] = wind_speeds;
          }

          // Gets the Wind Maximum Gust.
          wind_array[i] = wind_array[i].slice(wind_speed.length,wind_array[i].length).trim();
          if (wind_array[i] == '')
          {
            wind_gust[i-1] = 'N/A';
          } else
          {
            wind_gust[i-1] = wind_array[i];
          }
        }
      }
      )

      // wait until the promise returns us a value
      await promise;

      // Remove the loading text...
      $('#loading').text("");

      // Add the Weather stations with wind to the map.
      for(i = 0; i < AWS_Station.length; i++)
      {
        for(z = 0; z < wind_name.length; z++)
        {
          if(AWS_Station[i].StationName.name_E == wind_name[z])
          {
            L.marker([parseFloat(AWS_Station[i].latitude),parseFloat(AWS_Station[i].longitude)], {icon: TestWind}).addTo(mymap).bindPopup("<b>" + AWS_Station[i].StationName.name_UC + "</b><br>Wind Speed: " + wind_speed[z] + "<br> Wind Direction: " + wind_direction[z]);
          }
        }
      }
  }

weatherAsync();
