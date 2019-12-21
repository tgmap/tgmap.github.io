var hong_kong_center = [22.3693,114.1694];

var mymap = L.map('mapid').setView(hong_kong_center, 12);

var wms_server = "https://api.hkmapservice.gov.hk/ags/map/basemap/WGS84r?";
var wms_options = { layers: "0", format: "image/png"}

var topographic = L.tileLayer.wms(wms_server, wms_options);

topographic.addTo(mymap);
