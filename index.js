// Debug script loader - see `src/index.js` for the app's main js file.
document.write('<script src="/loader.js"></script>' +
    '<script src="_index.js"></script>');
var url = 'http://student.ifip.tuwien.ac.at/geoserver/wfs';
var layer = 'feedback';
var prefix = 'ifip_2015'; // Ersetzen durch euren Arbeitsbereich-Namen
var featureNS = 'http://ifip/2015'; // Ersetzen durch eure Namensraum-URI
var form = document.getElementById('feedback');

var feature = new ol.Feature();
feature.setGeometryName('geom');
feature.setGeometry(new ol.geom.Point(map.getView().getCenter()));

var send = require('./feedback_send');
send(form, feature, url, {
  featureType: layer,
  featurePrefix: prefix,
  featureNS: featureNS,
  srsName: map.getView().getProjection().getCode()
});
