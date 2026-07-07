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
var format_Lumen_DCs_2 = new ol.format.GeoJSON();
var features_Lumen_DCs_2 = format_Lumen_DCs_2.readFeatures(json_Lumen_DCs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumen_DCs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumen_DCs_2.addFeatures(features_Lumen_DCs_2);
var lyr_Lumen_DCs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumen_DCs_2, 
                style: style_Lumen_DCs_2,
                popuplayertitle: 'Lumen_DCs',
                interactive: true,
                title: '<img src="styles/legend/Lumen_DCs_2.png" /> Lumen_DCs'
            });
var format_ZayoDCs_3 = new ol.format.GeoJSON();
var features_ZayoDCs_3 = format_ZayoDCs_3.readFeatures(json_ZayoDCs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZayoDCs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZayoDCs_3.addFeatures(features_ZayoDCs_3);
var lyr_ZayoDCs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZayoDCs_3, 
                style: style_ZayoDCs_3,
                popuplayertitle: 'Zayo-DCs',
                interactive: true,
                title: '<img src="styles/legend/ZayoDCs_3.png" /> Zayo-DCs'
            });
var format_ATTDCs_4 = new ol.format.GeoJSON();
var features_ATTDCs_4 = format_ATTDCs_4.readFeatures(json_ATTDCs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATTDCs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATTDCs_4.addFeatures(features_ATTDCs_4);
var lyr_ATTDCs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATTDCs_4, 
                style: style_ATTDCs_4,
                popuplayertitle: 'AT&T DCs',
                interactive: true,
                title: '<img src="styles/legend/ATTDCs_4.png" /> AT&T DCs'
            });
var format_Cogent_DCs_5 = new ol.format.GeoJSON();
var features_Cogent_DCs_5 = format_Cogent_DCs_5.readFeatures(json_Cogent_DCs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cogent_DCs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cogent_DCs_5.addFeatures(features_Cogent_DCs_5);
var lyr_Cogent_DCs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cogent_DCs_5, 
                style: style_Cogent_DCs_5,
                popuplayertitle: 'Cogent_DCs',
                interactive: true,
                title: '<img src="styles/legend/Cogent_DCs_5.png" /> Cogent_DCs'
            });
var format_Comcast_DCs_6 = new ol.format.GeoJSON();
var features_Comcast_DCs_6 = format_Comcast_DCs_6.readFeatures(json_Comcast_DCs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comcast_DCs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comcast_DCs_6.addFeatures(features_Comcast_DCs_6);
var lyr_Comcast_DCs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comcast_DCs_6, 
                style: style_Comcast_DCs_6,
                popuplayertitle: 'Comcast_DCs',
                interactive: true,
                title: '<img src="styles/legend/Comcast_DCs_6.png" /> Comcast_DCs'
            });
var format_Verizon_DCs_7 = new ol.format.GeoJSON();
var features_Verizon_DCs_7 = format_Verizon_DCs_7.readFeatures(json_Verizon_DCs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verizon_DCs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verizon_DCs_7.addFeatures(features_Verizon_DCs_7);
var lyr_Verizon_DCs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verizon_DCs_7, 
                style: style_Verizon_DCs_7,
                popuplayertitle: 'Verizon_DCs',
                interactive: true,
                title: '<img src="styles/legend/Verizon_DCs_7.png" /> Verizon_DCs'
            });
var format_Crown_Castle_DCs_8 = new ol.format.GeoJSON();
var features_Crown_Castle_DCs_8 = format_Crown_Castle_DCs_8.readFeatures(json_Crown_Castle_DCs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crown_Castle_DCs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crown_Castle_DCs_8.addFeatures(features_Crown_Castle_DCs_8);
var lyr_Crown_Castle_DCs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crown_Castle_DCs_8, 
                style: style_Crown_Castle_DCs_8,
                popuplayertitle: 'Crown_Castle_DCs',
                interactive: true,
                title: '<img src="styles/legend/Crown_Castle_DCs_8.png" /> Crown_Castle_DCs'
            });
var format_Windstream_DCs_9 = new ol.format.GeoJSON();
var features_Windstream_DCs_9 = format_Windstream_DCs_9.readFeatures(json_Windstream_DCs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windstream_DCs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windstream_DCs_9.addFeatures(features_Windstream_DCs_9);
var lyr_Windstream_DCs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Windstream_DCs_9, 
                style: style_Windstream_DCs_9,
                popuplayertitle: 'Windstream_DCs',
                interactive: true,
                title: '<img src="styles/legend/Windstream_DCs_9.png" /> Windstream_DCs'
            });
var format_Arelion_DCs_10 = new ol.format.GeoJSON();
var features_Arelion_DCs_10 = format_Arelion_DCs_10.readFeatures(json_Arelion_DCs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arelion_DCs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arelion_DCs_10.addFeatures(features_Arelion_DCs_10);
var lyr_Arelion_DCs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arelion_DCs_10, 
                style: style_Arelion_DCs_10,
                popuplayertitle: 'Arelion_DCs',
                interactive: true,
                title: '<img src="styles/legend/Arelion_DCs_10.png" /> Arelion_DCs'
            });
var format_XO_DCs_11 = new ol.format.GeoJSON();
var features_XO_DCs_11 = format_XO_DCs_11.readFeatures(json_XO_DCs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XO_DCs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XO_DCs_11.addFeatures(features_XO_DCs_11);
var lyr_XO_DCs_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XO_DCs_11, 
                style: style_XO_DCs_11,
                popuplayertitle: 'XO_DCs',
                interactive: true,
                title: '<img src="styles/legend/XO_DCs_11.png" /> XO_DCs'
            });
var group_Carriers = new ol.layer.Group({
                                layers: [lyr_Lumen_DCs_2,lyr_ZayoDCs_3,lyr_ATTDCs_4,lyr_Cogent_DCs_5,lyr_Comcast_DCs_6,lyr_Verizon_DCs_7,lyr_Crown_Castle_DCs_8,lyr_Windstream_DCs_9,lyr_Arelion_DCs_10,lyr_XO_DCs_11,],
                                fold: 'open',
                                title: 'Carriers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_DataCenterFiberCarriers_1.setVisible(true);lyr_Lumen_DCs_2.setVisible(true);lyr_ZayoDCs_3.setVisible(true);lyr_ATTDCs_4.setVisible(true);lyr_Cogent_DCs_5.setVisible(true);lyr_Comcast_DCs_6.setVisible(true);lyr_Verizon_DCs_7.setVisible(true);lyr_Crown_Castle_DCs_8.setVisible(true);lyr_Windstream_DCs_9.setVisible(true);lyr_Arelion_DCs_10.setVisible(true);lyr_XO_DCs_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DataCenterFiberCarriers_1,group_Carriers];
lyr_DataCenterFiberCarriers_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Lumen_DCs_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_ZayoDCs_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_ATTDCs_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Cogent_DCs_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Comcast_DCs_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Verizon_DCs_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Crown_Castle_DCs_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Windstream_DCs_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_Arelion_DCs_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_XO_DCs_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', });
lyr_DataCenterFiberCarriers_1.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Lumen_DCs_2.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_ZayoDCs_3.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_ATTDCs_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Cogent_DCs_5.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Comcast_DCs_6.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Verizon_DCs_7.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Crown_Castle_DCs_8.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Windstream_DCs_9.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_Arelion_DCs_10.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_XO_DCs_11.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', });
lyr_DataCenterFiberCarriers_1.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Lumen_DCs_2.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_ZayoDCs_3.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_ATTDCs_4.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Cogent_DCs_5.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Comcast_DCs_6.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Verizon_DCs_7.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Crown_Castle_DCs_8.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Windstream_DCs_9.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_Arelion_DCs_10.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_XO_DCs_11.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', });
lyr_XO_DCs_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});