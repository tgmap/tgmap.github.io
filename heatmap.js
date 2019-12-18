
  var heat = L.heatLayer(
    heat_map_variables
  , {radius:25}).addTo(mymap);

// Runs the locationParser function that gets the wind data.
  locationParser();
