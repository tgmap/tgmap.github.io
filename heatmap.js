
  var heat = L.heatLayer(
    heat_map_variables
  , {radius:25}).addTo(mymap);

// Runs the locationParser function that gets the wind data.
  locationParser();

  function addWindStations() {
    // Add the Weather stations with wind to the map.
    for(i = 0; i < AWS_Station.length; i++)
    {
      for(z = 0; z < wind_name.length; z++)
      {
        if(AWS_Station[i].StationName.name_E == wind_name[z])
        {
          L.marker([parseFloat(AWS_Station[i].latitude),parseFloat(AWS_Station[i].longitude)]).addTo(mymap).bindPopup("<b>" + AWS_Station[i].StationName.name_UC + "</b><br>Wind Speed: " + wind_speed[z] + "<br> Wind Direction: " + wind_direction[z]);
        }
      }
    }
  }
