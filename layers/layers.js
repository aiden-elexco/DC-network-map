var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DataCenterFiberCarriers_1 = new ol.format.GeoJSON();
var features_DataCenterFiberCarriers_1 = format_DataCenterFiberCarriers_1.readFeatures(json_DataCenterFiberCarriers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataCenterFiberCarriers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataCenterFiberCarriers_1.addFeatures(features_DataCenterFiberCarriers_1);
var lyr_DataCenterFiberCarriers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataCenterFiberCarriers_1, 
                style: style_DataCenterFiberCarriers_1,
                popuplayertitle: 'Data Center Fiber Carriers',
                interactive: true,
                title: '<img src="styles/legend/DataCenterFiberCarriers_1.png" /> Data Center Fiber Carriers'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DataCenterFiberCarriers_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DataCenterFiberCarriers_1];
lyr_DataCenterFiberCarriers_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_DataCenterFiberCarriers_1.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_DataCenterFiberCarriers_1.set('fieldLabels', {'operator': 'header label - always visible', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - always visible', });
lyr_DataCenterFiberCarriers_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});