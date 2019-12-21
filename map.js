var hong_kong_center = [22.3693,114.1694];

var mymap = L.map('mapid').setView(hong_kong_center, 12);

var Stamen_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   maxZoom: 20,
   ext: 'png'
});

mymap.addLayer(Stamen_Toner);
