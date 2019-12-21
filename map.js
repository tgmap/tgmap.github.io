var hong_kong_center = [22.3693,114.1694];

var mymap = L.map('mapid').setView(hong_kong_center, 12);

var wms_server = "http://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer?";
var wms_options = { layers: "0", format: "image/png", attribution: "USGS"}

var topographic = L.tileLayer.wms(wms_server, wms_options);

topographic.addTo(mymap);
