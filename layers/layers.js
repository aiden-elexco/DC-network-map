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
var format_Arelion_1 = new ol.format.GeoJSON();
var features_Arelion_1 = format_Arelion_1.readFeatures(json_Arelion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arelion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arelion_1.addFeatures(features_Arelion_1);
var lyr_Arelion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arelion_1, 
                style: style_Arelion_1,
                popuplayertitle: 'Arelion',
                interactive: true,
    title: 'Arelion<br />\
    <img src="styles/legend/Arelion_1_0.png" /> 1-3<br />\
    <img src="styles/legend/Arelion_1_1.png" /> 3-9<br />\
    <img src="styles/legend/Arelion_1_2.png" /> 10-31<br />\
    <img src="styles/legend/Arelion_1_3.png" /> 32+<br />' });
var format_Spectrum_2 = new ol.format.GeoJSON();
var features_Spectrum_2 = format_Spectrum_2.readFeatures(json_Spectrum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spectrum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spectrum_2.addFeatures(features_Spectrum_2);
var lyr_Spectrum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spectrum_2, 
                style: style_Spectrum_2,
                popuplayertitle: 'Spectrum',
                interactive: true,
    title: 'Spectrum<br />\
    <img src="styles/legend/Spectrum_2_0.png" /> 1-3<br />\
    <img src="styles/legend/Spectrum_2_1.png" /> 3-9<br />\
    <img src="styles/legend/Spectrum_2_2.png" /> 10-31<br />\
    <img src="styles/legend/Spectrum_2_3.png" /> 32+<br />' });
var format_Uniti_3 = new ol.format.GeoJSON();
var features_Uniti_3 = format_Uniti_3.readFeatures(json_Uniti_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uniti_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uniti_3.addFeatures(features_Uniti_3);
var lyr_Uniti_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uniti_3, 
                style: style_Uniti_3,
                popuplayertitle: 'Uniti',
                interactive: true,
    title: 'Uniti<br />\
    <img src="styles/legend/Uniti_3_0.png" /> 1-3<br />\
    <img src="styles/legend/Uniti_3_1.png" /> 3-9<br />\
    <img src="styles/legend/Uniti_3_2.png" /> 10-31<br />\
    <img src="styles/legend/Uniti_3_3.png" /> 32+<br />' });
var format_Comcast_4 = new ol.format.GeoJSON();
var features_Comcast_4 = format_Comcast_4.readFeatures(json_Comcast_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comcast_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comcast_4.addFeatures(features_Comcast_4);
var lyr_Comcast_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comcast_4, 
                style: style_Comcast_4,
                popuplayertitle: 'Comcast',
                interactive: true,
    title: 'Comcast<br />\
    <img src="styles/legend/Comcast_4_0.png" /> 1-3<br />\
    <img src="styles/legend/Comcast_4_1.png" /> 3-9<br />\
    <img src="styles/legend/Comcast_4_2.png" /> 10-31<br />\
    <img src="styles/legend/Comcast_4_3.png" /> 32+<br />' });
var format_Verizon_5 = new ol.format.GeoJSON();
var features_Verizon_5 = format_Verizon_5.readFeatures(json_Verizon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verizon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verizon_5.addFeatures(features_Verizon_5);
var lyr_Verizon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verizon_5, 
                style: style_Verizon_5,
                popuplayertitle: 'Verizon',
                interactive: true,
    title: 'Verizon<br />\
    <img src="styles/legend/Verizon_5_0.png" /> 1-3<br />\
    <img src="styles/legend/Verizon_5_1.png" /> 3-9<br />\
    <img src="styles/legend/Verizon_5_2.png" /> 10-31<br />\
    <img src="styles/legend/Verizon_5_3.png" /> 32+<br />' });
var format_Cogent_6 = new ol.format.GeoJSON();
var features_Cogent_6 = format_Cogent_6.readFeatures(json_Cogent_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cogent_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cogent_6.addFeatures(features_Cogent_6);
var lyr_Cogent_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cogent_6, 
                style: style_Cogent_6,
                popuplayertitle: 'Cogent',
                interactive: true,
    title: 'Cogent<br />\
    <img src="styles/legend/Cogent_6_0.png" /> 1-3<br />\
    <img src="styles/legend/Cogent_6_1.png" /> 3-9<br />\
    <img src="styles/legend/Cogent_6_2.png" /> 10-31<br />\
    <img src="styles/legend/Cogent_6_3.png" /> 32+<br />' });
var format_ATT_7 = new ol.format.GeoJSON();
var features_ATT_7 = format_ATT_7.readFeatures(json_ATT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATT_7.addFeatures(features_ATT_7);
var lyr_ATT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATT_7, 
                style: style_ATT_7,
                popuplayertitle: 'AT&T',
                interactive: true,
    title: 'AT&T<br />\
    <img src="styles/legend/ATT_7_0.png" /> 1-3<br />\
    <img src="styles/legend/ATT_7_1.png" /> 3-9<br />\
    <img src="styles/legend/ATT_7_2.png" /> 10-31<br />\
    <img src="styles/legend/ATT_7_3.png" /> 32+<br />' });
var format_Zayo_8 = new ol.format.GeoJSON();
var features_Zayo_8 = format_Zayo_8.readFeatures(json_Zayo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zayo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zayo_8.addFeatures(features_Zayo_8);
var lyr_Zayo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zayo_8, 
                style: style_Zayo_8,
                popuplayertitle: 'Zayo',
                interactive: true,
    title: 'Zayo<br />\
    <img src="styles/legend/Zayo_8_0.png" /> 1-3<br />\
    <img src="styles/legend/Zayo_8_1.png" /> 3-9<br />\
    <img src="styles/legend/Zayo_8_2.png" /> 10-31<br />\
    <img src="styles/legend/Zayo_8_3.png" /> 32+<br />' });
var format_Lumen_9 = new ol.format.GeoJSON();
var features_Lumen_9 = format_Lumen_9.readFeatures(json_Lumen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumen_9.addFeatures(features_Lumen_9);
var lyr_Lumen_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumen_9, 
                style: style_Lumen_9,
                popuplayertitle: 'Lumen',
                interactive: true,
    title: 'Lumen<br />\
    <img src="styles/legend/Lumen_9_0.png" /> 1-3<br />\
    <img src="styles/legend/Lumen_9_1.png" /> 3-9<br />\
    <img src="styles/legend/Lumen_9_2.png" /> 10-31<br />\
    <img src="styles/legend/Lumen_9_3.png" /> 32+<br />' });
var format_AllDataCenters_10 = new ol.format.GeoJSON();
var features_AllDataCenters_10 = format_AllDataCenters_10.readFeatures(json_AllDataCenters_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllDataCenters_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllDataCenters_10.addFeatures(features_AllDataCenters_10);
var lyr_AllDataCenters_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllDataCenters_10, 
                style: style_AllDataCenters_10,
                popuplayertitle: 'All Data Centers',
                interactive: true,
    title: 'All Data Centers<br />\
    <img src="styles/legend/AllDataCenters_10_0.png" /> 1-3<br />\
    <img src="styles/legend/AllDataCenters_10_1.png" /> 3-9<br />\
    <img src="styles/legend/AllDataCenters_10_2.png" /> 10-31<br />\
    <img src="styles/legend/AllDataCenters_10_3.png" /> 32+<br />' });
var group_Carriers = new ol.layer.Group({
                                layers: [lyr_Arelion_1,lyr_Spectrum_2,lyr_Uniti_3,lyr_Comcast_4,lyr_Verizon_5,lyr_Cogent_6,lyr_ATT_7,lyr_Zayo_8,lyr_Lumen_9,],
                                fold: 'open',
                                title: 'Carriers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Arelion_1.setVisible(true);lyr_Spectrum_2.setVisible(true);lyr_Uniti_3.setVisible(true);lyr_Comcast_4.setVisible(true);lyr_Verizon_5.setVisible(true);lyr_Cogent_6.setVisible(true);lyr_ATT_7.setVisible(true);lyr_Zayo_8.setVisible(true);lyr_Lumen_9.setVisible(true);lyr_AllDataCenters_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Carriers,lyr_AllDataCenters_10];
lyr_Arelion_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Spectrum_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Uniti_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Comcast_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Verizon_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Cogent_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_ATT_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Zayo_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Lumen_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_AllDataCenters_10.set('fieldAliases', {'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Arelion_1.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Spectrum_2.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Uniti_3.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Comcast_4.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Verizon_5.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Cogent_6.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_ATT_7.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Zayo_8.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Lumen_9.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_AllDataCenters_10.set('fieldImages', {'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': 'TextEdit', 'Whitespace.SQFT': 'Range', });
lyr_Arelion_1.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Spectrum_2.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Uniti_3.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Comcast_4.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Verizon_5.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Cogent_6.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_ATT_7.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Zayo_8.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Lumen_9.set('fieldLabels', {'fid': 'no label', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_AllDataCenters_10.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_AllDataCenters_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});