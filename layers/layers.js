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
var format_WisconsinIndependentNetwork_1 = new ol.format.GeoJSON();
var features_WisconsinIndependentNetwork_1 = format_WisconsinIndependentNetwork_1.readFeatures(json_WisconsinIndependentNetwork_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WisconsinIndependentNetwork_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WisconsinIndependentNetwork_1.addFeatures(features_WisconsinIndependentNetwork_1);
var lyr_WisconsinIndependentNetwork_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WisconsinIndependentNetwork_1, 
                style: style_WisconsinIndependentNetwork_1,
                popuplayertitle: 'Wisconsin Independent Network',
                interactive: true,
    title: 'Wisconsin Independent Network<br />\
    <img src="styles/legend/WisconsinIndependentNetwork_1_0.png" /> 1-3<br />\
    <img src="styles/legend/WisconsinIndependentNetwork_1_1.png" /> 3-9<br />\
    <img src="styles/legend/WisconsinIndependentNetwork_1_2.png" /> 10-31<br />\
    <img src="styles/legend/WisconsinIndependentNetwork_1_3.png" /> 32+<br />' });
var format_Bluebird_2 = new ol.format.GeoJSON();
var features_Bluebird_2 = format_Bluebird_2.readFeatures(json_Bluebird_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bluebird_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bluebird_2.addFeatures(features_Bluebird_2);
var lyr_Bluebird_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bluebird_2, 
                style: style_Bluebird_2,
                popuplayertitle: 'Bluebird',
                interactive: true,
    title: 'Bluebird<br />\
    <img src="styles/legend/Bluebird_2_0.png" /> 1-3<br />\
    <img src="styles/legend/Bluebird_2_1.png" /> 3-9<br />\
    <img src="styles/legend/Bluebird_2_2.png" /> 10-31<br />\
    <img src="styles/legend/Bluebird_2_3.png" /> 32+<br />' });
var format_Arelion_3 = new ol.format.GeoJSON();
var features_Arelion_3 = format_Arelion_3.readFeatures(json_Arelion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arelion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arelion_3.addFeatures(features_Arelion_3);
var lyr_Arelion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arelion_3, 
                style: style_Arelion_3,
                popuplayertitle: 'Arelion',
                interactive: true,
    title: 'Arelion<br />\
    <img src="styles/legend/Arelion_3_0.png" /> 1-3<br />\
    <img src="styles/legend/Arelion_3_1.png" /> 3-9<br />\
    <img src="styles/legend/Arelion_3_2.png" /> 10-31<br />\
    <img src="styles/legend/Arelion_3_3.png" /> 32+<br />' });
var format_Spectrum_4 = new ol.format.GeoJSON();
var features_Spectrum_4 = format_Spectrum_4.readFeatures(json_Spectrum_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spectrum_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spectrum_4.addFeatures(features_Spectrum_4);
var lyr_Spectrum_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spectrum_4, 
                style: style_Spectrum_4,
                popuplayertitle: 'Spectrum',
                interactive: true,
    title: 'Spectrum<br />\
    <img src="styles/legend/Spectrum_4_0.png" /> 1-3<br />\
    <img src="styles/legend/Spectrum_4_1.png" /> 3-9<br />\
    <img src="styles/legend/Spectrum_4_2.png" /> 10-31<br />\
    <img src="styles/legend/Spectrum_4_3.png" /> 32+<br />' });
var format_Uniti_5 = new ol.format.GeoJSON();
var features_Uniti_5 = format_Uniti_5.readFeatures(json_Uniti_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uniti_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uniti_5.addFeatures(features_Uniti_5);
var lyr_Uniti_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uniti_5, 
                style: style_Uniti_5,
                popuplayertitle: 'Uniti',
                interactive: true,
    title: 'Uniti<br />\
    <img src="styles/legend/Uniti_5_0.png" /> 1-3<br />\
    <img src="styles/legend/Uniti_5_1.png" /> 3-9<br />\
    <img src="styles/legend/Uniti_5_2.png" /> 10-31<br />\
    <img src="styles/legend/Uniti_5_3.png" /> 32+<br />' });
var format_Comcast_6 = new ol.format.GeoJSON();
var features_Comcast_6 = format_Comcast_6.readFeatures(json_Comcast_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comcast_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comcast_6.addFeatures(features_Comcast_6);
var lyr_Comcast_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comcast_6, 
                style: style_Comcast_6,
                popuplayertitle: 'Comcast',
                interactive: true,
    title: 'Comcast<br />\
    <img src="styles/legend/Comcast_6_0.png" /> 1-3<br />\
    <img src="styles/legend/Comcast_6_1.png" /> 3-9<br />\
    <img src="styles/legend/Comcast_6_2.png" /> 10-31<br />\
    <img src="styles/legend/Comcast_6_3.png" /> 32+<br />' });
var format_Verizon_7 = new ol.format.GeoJSON();
var features_Verizon_7 = format_Verizon_7.readFeatures(json_Verizon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verizon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verizon_7.addFeatures(features_Verizon_7);
var lyr_Verizon_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verizon_7, 
                style: style_Verizon_7,
                popuplayertitle: 'Verizon',
                interactive: true,
    title: 'Verizon<br />\
    <img src="styles/legend/Verizon_7_0.png" /> 1-3<br />\
    <img src="styles/legend/Verizon_7_1.png" /> 3-9<br />\
    <img src="styles/legend/Verizon_7_2.png" /> 10-31<br />\
    <img src="styles/legend/Verizon_7_3.png" /> 32+<br />' });
var format_Cogent_8 = new ol.format.GeoJSON();
var features_Cogent_8 = format_Cogent_8.readFeatures(json_Cogent_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cogent_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cogent_8.addFeatures(features_Cogent_8);
var lyr_Cogent_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cogent_8, 
                style: style_Cogent_8,
                popuplayertitle: 'Cogent',
                interactive: true,
    title: 'Cogent<br />\
    <img src="styles/legend/Cogent_8_0.png" /> 1-3<br />\
    <img src="styles/legend/Cogent_8_1.png" /> 3-9<br />\
    <img src="styles/legend/Cogent_8_2.png" /> 10-31<br />\
    <img src="styles/legend/Cogent_8_3.png" /> 32+<br />' });
var format_ATT_9 = new ol.format.GeoJSON();
var features_ATT_9 = format_ATT_9.readFeatures(json_ATT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATT_9.addFeatures(features_ATT_9);
var lyr_ATT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATT_9, 
                style: style_ATT_9,
                popuplayertitle: 'AT&T',
                interactive: true,
    title: 'AT&T<br />\
    <img src="styles/legend/ATT_9_0.png" /> 1-3<br />\
    <img src="styles/legend/ATT_9_1.png" /> 3-9<br />\
    <img src="styles/legend/ATT_9_2.png" /> 10-31<br />\
    <img src="styles/legend/ATT_9_3.png" /> 32+<br />' });
var format_Zayo_10 = new ol.format.GeoJSON();
var features_Zayo_10 = format_Zayo_10.readFeatures(json_Zayo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zayo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zayo_10.addFeatures(features_Zayo_10);
var lyr_Zayo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zayo_10, 
                style: style_Zayo_10,
                popuplayertitle: 'Zayo',
                interactive: true,
    title: 'Zayo<br />\
    <img src="styles/legend/Zayo_10_0.png" /> 1-3<br />\
    <img src="styles/legend/Zayo_10_1.png" /> 3-9<br />\
    <img src="styles/legend/Zayo_10_2.png" /> 10-31<br />\
    <img src="styles/legend/Zayo_10_3.png" /> 32+<br />' });
var format_Lumen_11 = new ol.format.GeoJSON();
var features_Lumen_11 = format_Lumen_11.readFeatures(json_Lumen_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumen_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumen_11.addFeatures(features_Lumen_11);
var lyr_Lumen_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumen_11, 
                style: style_Lumen_11,
                popuplayertitle: 'Lumen',
                interactive: true,
    title: 'Lumen<br />\
    <img src="styles/legend/Lumen_11_0.png" /> 1-3<br />\
    <img src="styles/legend/Lumen_11_1.png" /> 3-9<br />\
    <img src="styles/legend/Lumen_11_2.png" /> 10-31<br />\
    <img src="styles/legend/Lumen_11_3.png" /> 32+<br />' });
var format_AllDataCenters_12 = new ol.format.GeoJSON();
var features_AllDataCenters_12 = format_AllDataCenters_12.readFeatures(json_AllDataCenters_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllDataCenters_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllDataCenters_12.addFeatures(features_AllDataCenters_12);
var lyr_AllDataCenters_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllDataCenters_12, 
                style: style_AllDataCenters_12,
                popuplayertitle: 'All Data Centers',
                interactive: true,
    title: 'All Data Centers<br />\
    <img src="styles/legend/AllDataCenters_12_0.png" /> 1-3<br />\
    <img src="styles/legend/AllDataCenters_12_1.png" /> 3-9<br />\
    <img src="styles/legend/AllDataCenters_12_2.png" /> 10-31<br />\
    <img src="styles/legend/AllDataCenters_12_3.png" /> 32+<br />' });
var group_Carriers = new ol.layer.Group({
                                layers: [lyr_WisconsinIndependentNetwork_1,lyr_Bluebird_2,lyr_Arelion_3,lyr_Spectrum_4,lyr_Uniti_5,lyr_Comcast_6,lyr_Verizon_7,lyr_Cogent_8,lyr_ATT_9,lyr_Zayo_10,lyr_Lumen_11,],
                                fold: 'open',
                                title: 'Carriers'});

lyr_OpenStreetMap_0.setVisible(true);lyr_WisconsinIndependentNetwork_1.setVisible(true);lyr_Bluebird_2.setVisible(true);lyr_Arelion_3.setVisible(true);lyr_Spectrum_4.setVisible(true);lyr_Uniti_5.setVisible(true);lyr_Comcast_6.setVisible(true);lyr_Verizon_7.setVisible(true);lyr_Cogent_8.setVisible(true);lyr_ATT_9.setVisible(true);lyr_Zayo_10.setVisible(true);lyr_Lumen_11.setVisible(true);lyr_AllDataCenters_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Carriers,lyr_AllDataCenters_12];
lyr_WisconsinIndependentNetwork_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Shortlist': 'Shortlist', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Bluebird_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Shortlist': 'Shortlist', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Arelion_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Spectrum_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Uniti_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Comcast_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Verizon_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Cogent_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_ATT_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Zayo_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Lumen_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_AllDataCenters_12.set('fieldAliases', {'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Shortlist': 'Shortlist', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_WisconsinIndependentNetwork_1.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Shortlist': '', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Bluebird_2.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Shortlist': '', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Arelion_3.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Spectrum_4.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Uniti_5.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Comcast_6.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Verizon_7.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Cogent_8.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_ATT_9.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Zayo_10.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Lumen_11.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_AllDataCenters_12.set('fieldImages', {'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Shortlist': 'TextEdit', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': 'TextEdit', 'Whitespace.SQFT': 'Range', });
lyr_WisconsinIndependentNetwork_1.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Shortlist': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Bluebird_2.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Shortlist': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Arelion_3.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Spectrum_4.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Uniti_5.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Comcast_6.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Verizon_7.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Cogent_8.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_ATT_9.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Zayo_10.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Lumen_11.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_AllDataCenters_12.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Shortlist': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_AllDataCenters_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});