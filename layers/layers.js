var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FiberLight_DCs_1 = new ol.format.GeoJSON();
var features_FiberLight_DCs_1 = format_FiberLight_DCs_1.readFeatures(json_FiberLight_DCs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiberLight_DCs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiberLight_DCs_1.addFeatures(features_FiberLight_DCs_1);
var lyr_FiberLight_DCs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FiberLight_DCs_1, 
                style: style_FiberLight_DCs_1,
                popuplayertitle: 'FiberLight_DCs',
                interactive: true,
                title: '<img src="styles/legend/FiberLight_DCs_1.png" /> FiberLight_DCs'
            });
var format_Arelion_DCs_2 = new ol.format.GeoJSON();
var features_Arelion_DCs_2 = format_Arelion_DCs_2.readFeatures(json_Arelion_DCs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arelion_DCs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arelion_DCs_2.addFeatures(features_Arelion_DCs_2);
var lyr_Arelion_DCs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arelion_DCs_2, 
                style: style_Arelion_DCs_2,
                popuplayertitle: 'Arelion_DCs',
                interactive: true,
                title: '<img src="styles/legend/Arelion_DCs_2.png" /> Arelion_DCs'
            });
var format_Spectrum_DCs_3 = new ol.format.GeoJSON();
var features_Spectrum_DCs_3 = format_Spectrum_DCs_3.readFeatures(json_Spectrum_DCs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spectrum_DCs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spectrum_DCs_3.addFeatures(features_Spectrum_DCs_3);
var lyr_Spectrum_DCs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spectrum_DCs_3, 
                style: style_Spectrum_DCs_3,
                popuplayertitle: 'Spectrum_DCs',
                interactive: true,
                title: '<img src="styles/legend/Spectrum_DCs_3.png" /> Spectrum_DCs'
            });
var format_Uniti_DCs_4 = new ol.format.GeoJSON();
var features_Uniti_DCs_4 = format_Uniti_DCs_4.readFeatures(json_Uniti_DCs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uniti_DCs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uniti_DCs_4.addFeatures(features_Uniti_DCs_4);
var lyr_Uniti_DCs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uniti_DCs_4, 
                style: style_Uniti_DCs_4,
                popuplayertitle: 'Uniti_DCs',
                interactive: true,
                title: '<img src="styles/legend/Uniti_DCs_4.png" /> Uniti_DCs'
            });
var format_Comcast_DCs_5 = new ol.format.GeoJSON();
var features_Comcast_DCs_5 = format_Comcast_DCs_5.readFeatures(json_Comcast_DCs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comcast_DCs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comcast_DCs_5.addFeatures(features_Comcast_DCs_5);
var lyr_Comcast_DCs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comcast_DCs_5, 
                style: style_Comcast_DCs_5,
                popuplayertitle: 'Comcast_DCs',
                interactive: true,
                title: '<img src="styles/legend/Comcast_DCs_5.png" /> Comcast_DCs'
            });
var format_Verizon_DCs_6 = new ol.format.GeoJSON();
var features_Verizon_DCs_6 = format_Verizon_DCs_6.readFeatures(json_Verizon_DCs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verizon_DCs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verizon_DCs_6.addFeatures(features_Verizon_DCs_6);
var lyr_Verizon_DCs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verizon_DCs_6, 
                style: style_Verizon_DCs_6,
                popuplayertitle: 'Verizon_DCs',
                interactive: true,
                title: '<img src="styles/legend/Verizon_DCs_6.png" /> Verizon_DCs'
            });
var format_ATT_DCs_7 = new ol.format.GeoJSON();
var features_ATT_DCs_7 = format_ATT_DCs_7.readFeatures(json_ATT_DCs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATT_DCs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATT_DCs_7.addFeatures(features_ATT_DCs_7);
var lyr_ATT_DCs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATT_DCs_7, 
                style: style_ATT_DCs_7,
                popuplayertitle: 'AT&T_DCs',
                interactive: true,
                title: '<img src="styles/legend/ATT_DCs_7.png" /> AT&T_DCs'
            });
var format_Cogent_DCs_8 = new ol.format.GeoJSON();
var features_Cogent_DCs_8 = format_Cogent_DCs_8.readFeatures(json_Cogent_DCs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cogent_DCs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cogent_DCs_8.addFeatures(features_Cogent_DCs_8);
var lyr_Cogent_DCs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cogent_DCs_8, 
                style: style_Cogent_DCs_8,
                popuplayertitle: 'Cogent_DCs',
                interactive: true,
                title: '<img src="styles/legend/Cogent_DCs_8.png" /> Cogent_DCs'
            });
var format_Zayo_DCs_9 = new ol.format.GeoJSON();
var features_Zayo_DCs_9 = format_Zayo_DCs_9.readFeatures(json_Zayo_DCs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zayo_DCs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zayo_DCs_9.addFeatures(features_Zayo_DCs_9);
var lyr_Zayo_DCs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zayo_DCs_9, 
                style: style_Zayo_DCs_9,
                popuplayertitle: 'Zayo_DCs',
                interactive: true,
                title: '<img src="styles/legend/Zayo_DCs_9.png" /> Zayo_DCs'
            });
var format_Lumen_DCs_10 = new ol.format.GeoJSON();
var features_Lumen_DCs_10 = format_Lumen_DCs_10.readFeatures(json_Lumen_DCs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumen_DCs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumen_DCs_10.addFeatures(features_Lumen_DCs_10);
var lyr_Lumen_DCs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumen_DCs_10, 
                style: style_Lumen_DCs_10,
                popuplayertitle: 'Lumen_DCs',
                interactive: true,
                title: '<img src="styles/legend/Lumen_DCs_10.png" /> Lumen_DCs'
            });
var format_AllDataCenters_11 = new ol.format.GeoJSON();
var features_AllDataCenters_11 = format_AllDataCenters_11.readFeatures(json_AllDataCenters_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllDataCenters_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllDataCenters_11.addFeatures(features_AllDataCenters_11);
var lyr_AllDataCenters_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllDataCenters_11, 
                style: style_AllDataCenters_11,
                popuplayertitle: 'All Data Centers',
                interactive: true,
                title: '<img src="styles/legend/AllDataCenters_11.png" /> All Data Centers'
            });
var group_Carriers = new ol.layer.Group({
                                layers: [lyr_FiberLight_DCs_1,lyr_Arelion_DCs_2,lyr_Spectrum_DCs_3,lyr_Uniti_DCs_4,lyr_Comcast_DCs_5,lyr_Verizon_DCs_6,lyr_ATT_DCs_7,lyr_Cogent_DCs_8,lyr_Zayo_DCs_9,lyr_Lumen_DCs_10,],
                                fold: 'open',
                                title: 'Carriers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_FiberLight_DCs_1.setVisible(true);lyr_Arelion_DCs_2.setVisible(true);lyr_Spectrum_DCs_3.setVisible(true);lyr_Uniti_DCs_4.setVisible(true);lyr_Comcast_DCs_5.setVisible(true);lyr_Verizon_DCs_6.setVisible(true);lyr_ATT_DCs_7.setVisible(true);lyr_Cogent_DCs_8.setVisible(true);lyr_Zayo_DCs_9.setVisible(true);lyr_Lumen_DCs_10.setVisible(true);lyr_AllDataCenters_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Carriers,lyr_AllDataCenters_11];
lyr_FiberLight_DCs_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Arelion_DCs_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Spectrum_DCs_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Uniti_DCs_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Comcast_DCs_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Verizon_DCs_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_ATT_DCs_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Cogent_DCs_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Zayo_DCs_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Lumen_DCs_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_AllDataCenters_11.set('fieldAliases', {'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_FiberLight_DCs_1.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Arelion_DCs_2.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Spectrum_DCs_3.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Uniti_DCs_4.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Comcast_DCs_5.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Verizon_DCs_6.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_ATT_DCs_7.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Cogent_DCs_8.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Zayo_DCs_9.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Lumen_DCs_10.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_AllDataCenters_11.set('fieldImages', {'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_FiberLight_DCs_1.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Arelion_DCs_2.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Spectrum_DCs_3.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Uniti_DCs_4.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Comcast_DCs_5.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Verizon_DCs_6.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_ATT_DCs_7.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Cogent_DCs_8.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Zayo_DCs_9.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Lumen_DCs_10.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_AllDataCenters_11.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_AllDataCenters_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});