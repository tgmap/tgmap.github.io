var hong_kong_center = [22.3693,114.1694];

var mymap = L.map('mapid').setView(hong_kong_center, 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  Zoom: 20,
  maxZoom: 20,
  id: 'mapbox.mapbox-terrain-v2'
}).addTo(mymap);
