var hong_kong_center = [22.3693,114.1694];

var mymap = L.map('mapid').setView(hong_kong_center, 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  Zoom: 20,
  maxZoom: 20,
  id: 'mapbox.mapbox-terrain-v2'
}).addTo(mymap);

// Add the Weather stations with wind to the map.
for(i = 0; i < AWS_Station.length; i++)
{
  for(z = 0; z < wind_name.length; z++)
  {
    if(AWS_Station[i].StationName.name_E == wind_name[z])
    {
      L.marker([parseFloat(AWS_Station[i].latitude),parseFloat(AWS_Station[i].longitude)]).addTo(mymap)
      .bindPopup("<b>" + AWS_Station[i].StationName.name_UC + "</b>Wind Speed: " + wind_speed[z] + "<br> Wind Direction: " + wind_direction[z]);
    }
  }
}
