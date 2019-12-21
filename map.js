var hong_kong_center = [22.3693,114.1694];

var mymap = L.map('mapid').setView(hong_kong_center, 12);

var apikey = '584b2fa686f14ba283874318b3b8d6b0'

L.tileLayer('https://api.hkmapservice.gov.hk/osm/xyz/label-tc/WGS84/tile/{z}/{x}/{y}.png?key=' + apikey, {
  maxZoom: 20,
  id: 'APIKEY'
}).addTo(mymap);
