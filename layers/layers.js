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
var format_Comcast_3 = new ol.format.GeoJSON();
var features_Comcast_3 = format_Comcast_3.readFeatures(json_Comcast_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comcast_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comcast_3.addFeatures(features_Comcast_3);
var lyr_Comcast_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comcast_3, 
                style: style_Comcast_3,
                popuplayertitle: 'Comcast',
                interactive: true,
    title: 'Comcast<br />\
    <img src="styles/legend/Comcast_3_0.png" /> 1-3<br />\
    <img src="styles/legend/Comcast_3_1.png" /> 3-9<br />\
    <img src="styles/legend/Comcast_3_2.png" /> 10-31<br />\
    <img src="styles/legend/Comcast_3_3.png" /> 32+<br />' });
var format_BluebirdWavelengthNetwork_4 = new ol.format.GeoJSON();
var features_BluebirdWavelengthNetwork_4 = format_BluebirdWavelengthNetwork_4.readFeatures(json_BluebirdWavelengthNetwork_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BluebirdWavelengthNetwork_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BluebirdWavelengthNetwork_4.addFeatures(features_BluebirdWavelengthNetwork_4);
var lyr_BluebirdWavelengthNetwork_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BluebirdWavelengthNetwork_4, 
                style: style_BluebirdWavelengthNetwork_4,
                popuplayertitle: 'Bluebird Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/BluebirdWavelengthNetwork_4.png" /> Bluebird Wavelength Network'
            });
var format_Bluebird_5 = new ol.format.GeoJSON();
var features_Bluebird_5 = format_Bluebird_5.readFeatures(json_Bluebird_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bluebird_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bluebird_5.addFeatures(features_Bluebird_5);
var lyr_Bluebird_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bluebird_5, 
                style: style_Bluebird_5,
                popuplayertitle: 'Bluebird',
                interactive: true,
    title: 'Bluebird<br />\
    <img src="styles/legend/Bluebird_5_0.png" /> 1-3<br />\
    <img src="styles/legend/Bluebird_5_1.png" /> 3-9<br />\
    <img src="styles/legend/Bluebird_5_2.png" /> 10-31<br />\
    <img src="styles/legend/Bluebird_5_3.png" /> 32+<br />' });
var format_ArelionWavelengthNetwork_6 = new ol.format.GeoJSON();
var features_ArelionWavelengthNetwork_6 = format_ArelionWavelengthNetwork_6.readFeatures(json_ArelionWavelengthNetwork_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArelionWavelengthNetwork_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArelionWavelengthNetwork_6.addFeatures(features_ArelionWavelengthNetwork_6);
var lyr_ArelionWavelengthNetwork_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArelionWavelengthNetwork_6, 
                style: style_ArelionWavelengthNetwork_6,
                popuplayertitle: 'Arelion Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/ArelionWavelengthNetwork_6.png" /> Arelion Wavelength Network'
            });
var format_Arelion_7 = new ol.format.GeoJSON();
var features_Arelion_7 = format_Arelion_7.readFeatures(json_Arelion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arelion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arelion_7.addFeatures(features_Arelion_7);
var lyr_Arelion_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arelion_7, 
                style: style_Arelion_7,
                popuplayertitle: 'Arelion',
                interactive: true,
    title: 'Arelion<br />\
    <img src="styles/legend/Arelion_7_0.png" /> 1-3<br />\
    <img src="styles/legend/Arelion_7_1.png" /> 3-9<br />\
    <img src="styles/legend/Arelion_7_2.png" /> 10-31<br />\
    <img src="styles/legend/Arelion_7_3.png" /> 32+<br />' });
var format_UnitiWavelengthNetwork_8 = new ol.format.GeoJSON();
var features_UnitiWavelengthNetwork_8 = format_UnitiWavelengthNetwork_8.readFeatures(json_UnitiWavelengthNetwork_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnitiWavelengthNetwork_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnitiWavelengthNetwork_8.addFeatures(features_UnitiWavelengthNetwork_8);
var lyr_UnitiWavelengthNetwork_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnitiWavelengthNetwork_8, 
                style: style_UnitiWavelengthNetwork_8,
                popuplayertitle: 'Uniti Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/UnitiWavelengthNetwork_8.png" /> Uniti Wavelength Network'
            });
var format_Uniti_9 = new ol.format.GeoJSON();
var features_Uniti_9 = format_Uniti_9.readFeatures(json_Uniti_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uniti_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uniti_9.addFeatures(features_Uniti_9);
var lyr_Uniti_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uniti_9, 
                style: style_Uniti_9,
                popuplayertitle: 'Uniti',
                interactive: true,
    title: 'Uniti<br />\
    <img src="styles/legend/Uniti_9_0.png" /> 1-3<br />\
    <img src="styles/legend/Uniti_9_1.png" /> 3-9<br />\
    <img src="styles/legend/Uniti_9_2.png" /> 10-31<br />\
    <img src="styles/legend/Uniti_9_3.png" /> 32+<br />' });
var format_VerizonWavelengthNetwork_10 = new ol.format.GeoJSON();
var features_VerizonWavelengthNetwork_10 = format_VerizonWavelengthNetwork_10.readFeatures(json_VerizonWavelengthNetwork_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VerizonWavelengthNetwork_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VerizonWavelengthNetwork_10.addFeatures(features_VerizonWavelengthNetwork_10);
var lyr_VerizonWavelengthNetwork_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VerizonWavelengthNetwork_10, 
                style: style_VerizonWavelengthNetwork_10,
                popuplayertitle: 'Verizon Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/VerizonWavelengthNetwork_10.png" /> Verizon Wavelength Network'
            });
var format_Verizon_11 = new ol.format.GeoJSON();
var features_Verizon_11 = format_Verizon_11.readFeatures(json_Verizon_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verizon_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verizon_11.addFeatures(features_Verizon_11);
var lyr_Verizon_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verizon_11, 
                style: style_Verizon_11,
                popuplayertitle: 'Verizon',
                interactive: true,
    title: 'Verizon<br />\
    <img src="styles/legend/Verizon_11_0.png" /> 1-3<br />\
    <img src="styles/legend/Verizon_11_1.png" /> 3-9<br />\
    <img src="styles/legend/Verizon_11_2.png" /> 10-31<br />\
    <img src="styles/legend/Verizon_11_3.png" /> 32+<br />' });
var format_CogentWavelengthNetwork_12 = new ol.format.GeoJSON();
var features_CogentWavelengthNetwork_12 = format_CogentWavelengthNetwork_12.readFeatures(json_CogentWavelengthNetwork_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CogentWavelengthNetwork_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CogentWavelengthNetwork_12.addFeatures(features_CogentWavelengthNetwork_12);
var lyr_CogentWavelengthNetwork_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CogentWavelengthNetwork_12, 
                style: style_CogentWavelengthNetwork_12,
                popuplayertitle: 'Cogent Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/CogentWavelengthNetwork_12.png" /> Cogent Wavelength Network'
            });
var format_Cogent_13 = new ol.format.GeoJSON();
var features_Cogent_13 = format_Cogent_13.readFeatures(json_Cogent_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cogent_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cogent_13.addFeatures(features_Cogent_13);
var lyr_Cogent_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cogent_13, 
                style: style_Cogent_13,
                popuplayertitle: 'Cogent',
                interactive: true,
    title: 'Cogent<br />\
    <img src="styles/legend/Cogent_13_0.png" /> 1-3<br />\
    <img src="styles/legend/Cogent_13_1.png" /> 3-9<br />\
    <img src="styles/legend/Cogent_13_2.png" /> 10-31<br />\
    <img src="styles/legend/Cogent_13_3.png" /> 32+<br />' });
var format_ATT400GMetro_14 = new ol.format.GeoJSON();
var features_ATT400GMetro_14 = format_ATT400GMetro_14.readFeatures(json_ATT400GMetro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATT400GMetro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATT400GMetro_14.addFeatures(features_ATT400GMetro_14);
var lyr_ATT400GMetro_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATT400GMetro_14, 
                style: style_ATT400GMetro_14,
                popuplayertitle: 'AT&T 400G Metro',
                interactive: true,
                title: '<img src="styles/legend/ATT400GMetro_14.png" /> AT&T 400G Metro'
            });
var format_ATTWavelengthNetwork_15 = new ol.format.GeoJSON();
var features_ATTWavelengthNetwork_15 = format_ATTWavelengthNetwork_15.readFeatures(json_ATTWavelengthNetwork_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATTWavelengthNetwork_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATTWavelengthNetwork_15.addFeatures(features_ATTWavelengthNetwork_15);
var lyr_ATTWavelengthNetwork_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATTWavelengthNetwork_15, 
                style: style_ATTWavelengthNetwork_15,
                popuplayertitle: 'AT&T Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/ATTWavelengthNetwork_15.png" /> AT&T Wavelength Network'
            });
var format_ATT_16 = new ol.format.GeoJSON();
var features_ATT_16 = format_ATT_16.readFeatures(json_ATT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATT_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATT_16.addFeatures(features_ATT_16);
var lyr_ATT_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATT_16, 
                style: style_ATT_16,
                popuplayertitle: 'AT&T',
                interactive: true,
    title: 'AT&T<br />\
    <img src="styles/legend/ATT_16_0.png" /> 1-3<br />\
    <img src="styles/legend/ATT_16_1.png" /> 3-9<br />\
    <img src="styles/legend/ATT_16_2.png" /> 10-31<br />\
    <img src="styles/legend/ATT_16_3.png" /> 32+<br />' });
var format_ZayoWavelengthNetwork_17 = new ol.format.GeoJSON();
var features_ZayoWavelengthNetwork_17 = format_ZayoWavelengthNetwork_17.readFeatures(json_ZayoWavelengthNetwork_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZayoWavelengthNetwork_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZayoWavelengthNetwork_17.addFeatures(features_ZayoWavelengthNetwork_17);
var lyr_ZayoWavelengthNetwork_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZayoWavelengthNetwork_17, 
                style: style_ZayoWavelengthNetwork_17,
                popuplayertitle: 'Zayo Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/ZayoWavelengthNetwork_17.png" /> Zayo Wavelength Network'
            });
var format_Zayo_18 = new ol.format.GeoJSON();
var features_Zayo_18 = format_Zayo_18.readFeatures(json_Zayo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zayo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zayo_18.addFeatures(features_Zayo_18);
var lyr_Zayo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zayo_18, 
                style: style_Zayo_18,
                popuplayertitle: 'Zayo',
                interactive: true,
    title: 'Zayo<br />\
    <img src="styles/legend/Zayo_18_0.png" /> 1-3<br />\
    <img src="styles/legend/Zayo_18_1.png" /> 3-9<br />\
    <img src="styles/legend/Zayo_18_2.png" /> 10-31<br />\
    <img src="styles/legend/Zayo_18_3.png" /> 32+<br />' });
var format_LumenWavelengthNetwork_19 = new ol.format.GeoJSON();
var features_LumenWavelengthNetwork_19 = format_LumenWavelengthNetwork_19.readFeatures(json_LumenWavelengthNetwork_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LumenWavelengthNetwork_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LumenWavelengthNetwork_19.addFeatures(features_LumenWavelengthNetwork_19);
var lyr_LumenWavelengthNetwork_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LumenWavelengthNetwork_19, 
                style: style_LumenWavelengthNetwork_19,
                popuplayertitle: 'Lumen Wavelength Network',
                interactive: true,
                title: '<img src="styles/legend/LumenWavelengthNetwork_19.png" /> Lumen Wavelength Network'
            });
var format_Lumen_20 = new ol.format.GeoJSON();
var features_Lumen_20 = format_Lumen_20.readFeatures(json_Lumen_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumen_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumen_20.addFeatures(features_Lumen_20);
var lyr_Lumen_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumen_20, 
                style: style_Lumen_20,
                popuplayertitle: 'Lumen',
                interactive: true,
    title: 'Lumen<br />\
    <img src="styles/legend/Lumen_20_0.png" /> 1-3<br />\
    <img src="styles/legend/Lumen_20_1.png" /> 3-9<br />\
    <img src="styles/legend/Lumen_20_2.png" /> 10-31<br />\
    <img src="styles/legend/Lumen_20_3.png" /> 32+<br />' });
var format_AllDataCenters_21 = new ol.format.GeoJSON();
var features_AllDataCenters_21 = format_AllDataCenters_21.readFeatures(json_AllDataCenters_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllDataCenters_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllDataCenters_21.addFeatures(features_AllDataCenters_21);
var lyr_AllDataCenters_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllDataCenters_21, 
                style: style_AllDataCenters_21,
                popuplayertitle: 'All Data Centers',
                interactive: true,
    title: 'All Data Centers<br />\
    <img src="styles/legend/AllDataCenters_21_0.png" /> 1-3<br />\
    <img src="styles/legend/AllDataCenters_21_1.png" /> 3-9<br />\
    <img src="styles/legend/AllDataCenters_21_2.png" /> 10-31<br />\
    <img src="styles/legend/AllDataCenters_21_3.png" /> 32+<br />' });
var group_Lumen = new ol.layer.Group({
                                layers: [lyr_LumenWavelengthNetwork_19,lyr_Lumen_20,],
                                fold: 'close',
                                title: 'Lumen'});
var group_Zayo = new ol.layer.Group({
                                layers: [lyr_ZayoWavelengthNetwork_17,lyr_Zayo_18,],
                                fold: 'close',
                                title: 'Zayo'});
var group_ATT = new ol.layer.Group({
                                layers: [lyr_ATT400GMetro_14,lyr_ATTWavelengthNetwork_15,lyr_ATT_16,],
                                fold: 'close',
                                title: 'AT&T'});
var group_Cogent = new ol.layer.Group({
                                layers: [lyr_CogentWavelengthNetwork_12,lyr_Cogent_13,],
                                fold: 'close',
                                title: 'Cogent'});
var group_Verizon = new ol.layer.Group({
                                layers: [lyr_VerizonWavelengthNetwork_10,lyr_Verizon_11,],
                                fold: 'close',
                                title: 'Verizon'});
var group_Uniti = new ol.layer.Group({
                                layers: [lyr_UnitiWavelengthNetwork_8,lyr_Uniti_9,],
                                fold: 'close',
                                title: 'Uniti'});
var group_Arelion = new ol.layer.Group({
                                layers: [lyr_ArelionWavelengthNetwork_6,lyr_Arelion_7,],
                                fold: 'close',
                                title: 'Arelion'});
var group_Bluebird = new ol.layer.Group({
                                layers: [lyr_BluebirdWavelengthNetwork_4,lyr_Bluebird_5,],
                                fold: 'close',
                                title: 'Bluebird'});
var group_Util = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Util'});

lyr_OpenStreetMap_0.setVisible(true);lyr_WisconsinIndependentNetwork_1.setVisible(true);lyr_Spectrum_2.setVisible(true);lyr_Comcast_3.setVisible(true);lyr_BluebirdWavelengthNetwork_4.setVisible(true);lyr_Bluebird_5.setVisible(true);lyr_ArelionWavelengthNetwork_6.setVisible(true);lyr_Arelion_7.setVisible(true);lyr_UnitiWavelengthNetwork_8.setVisible(true);lyr_Uniti_9.setVisible(true);lyr_VerizonWavelengthNetwork_10.setVisible(true);lyr_Verizon_11.setVisible(true);lyr_CogentWavelengthNetwork_12.setVisible(true);lyr_Cogent_13.setVisible(true);lyr_ATT400GMetro_14.setVisible(true);lyr_ATTWavelengthNetwork_15.setVisible(true);lyr_ATT_16.setVisible(true);lyr_ZayoWavelengthNetwork_17.setVisible(true);lyr_Zayo_18.setVisible(true);lyr_LumenWavelengthNetwork_19.setVisible(true);lyr_Lumen_20.setVisible(true);lyr_AllDataCenters_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WisconsinIndependentNetwork_1,lyr_Spectrum_2,lyr_Comcast_3,group_Bluebird,group_Arelion,group_Uniti,group_Verizon,group_Cogent,group_ATT,group_Zayo,group_Lumen,lyr_AllDataCenters_21];
lyr_WisconsinIndependentNetwork_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Shortlist': 'Shortlist', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Spectrum_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_Comcast_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_BluebirdWavelengthNetwork_4.set('fieldAliases', {'fid': 'fid', });
lyr_Bluebird_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Shortlist': 'Shortlist', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_ArelionWavelengthNetwork_6.set('fieldAliases', {'fid': 'fid', });
lyr_Arelion_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_UnitiWavelengthNetwork_8.set('fieldAliases', {'fid': 'fid', });
lyr_Uniti_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_VerizonWavelengthNetwork_10.set('fieldAliases', {'fid': 'fid', });
lyr_Verizon_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_CogentWavelengthNetwork_12.set('fieldAliases', {'fid': 'fid', });
lyr_Cogent_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_ATT400GMetro_14.set('fieldAliases', {'fid': 'fid', });
lyr_ATTWavelengthNetwork_15.set('fieldAliases', {'fid': 'fid', });
lyr_ATT_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_ZayoWavelengthNetwork_17.set('fieldAliases', {'fid': 'fid', });
lyr_Zayo_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_LumenWavelengthNetwork_19.set('fieldAliases', {'fid': 'fid', });
lyr_Lumen_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Top_9': 'Top_9', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_AllDataCenters_21.set('fieldAliases', {'id': 'id', 'state': 'state', 'state_abb': 'state_abb', 'state_id': 'state_id', 'county': 'county', 'county_id': 'county_id', 'operator': 'operator', 'ref': 'ref', 'name': 'name', 'sqft': 'sqft', 'lon': 'lon', 'lat': 'lat', 'type': 'type', 'Fiber_Carriers': 'Fiber_Carriers', 'Char_Length': 'Char_Length', 'Shortlist': 'Shortlist', 'Num_Carriers': 'Num_Carriers', 'Max_Power_Capacity.MW': 'Max_Power_Capacity.MW', 'Whitespace.SQFT': 'Whitespace.SQFT', });
lyr_WisconsinIndependentNetwork_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Shortlist': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': 'TextEdit', 'Whitespace.SQFT': 'Range', });
lyr_Spectrum_2.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_Comcast_3.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_BluebirdWavelengthNetwork_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_Bluebird_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Shortlist': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': 'TextEdit', 'Whitespace.SQFT': 'Range', });
lyr_ArelionWavelengthNetwork_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_Arelion_7.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_UnitiWavelengthNetwork_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_Uniti_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': 'TextEdit', 'Whitespace.SQFT': 'Range', });
lyr_VerizonWavelengthNetwork_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_Verizon_11.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_CogentWavelengthNetwork_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_Cogent_13.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_ATT400GMetro_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_ATTWavelengthNetwork_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_ATT_16.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_ZayoWavelengthNetwork_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_Zayo_18.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_LumenWavelengthNetwork_19.set('fieldImages', {'fid': 'TextEdit', });
lyr_Lumen_20.set('fieldImages', {'fid': '', 'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Top_9': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': '', 'Whitespace.SQFT': '', });
lyr_AllDataCenters_21.set('fieldImages', {'id': 'Hidden', 'state': 'Hidden', 'state_abb': 'Hidden', 'state_id': 'Hidden', 'county': 'Hidden', 'county_id': 'Hidden', 'operator': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'sqft': 'Hidden', 'lon': 'Hidden', 'lat': 'Hidden', 'type': 'Hidden', 'Fiber_Carriers': 'TextEdit', 'Char_Length': 'Hidden', 'Shortlist': 'Hidden', 'Num_Carriers': 'Range', 'Max_Power_Capacity.MW': 'TextEdit', 'Whitespace.SQFT': 'Range', });
lyr_WisconsinIndependentNetwork_1.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Spectrum_2.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_Comcast_3.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_BluebirdWavelengthNetwork_4.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Bluebird_5.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_ArelionWavelengthNetwork_6.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Arelion_7.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_UnitiWavelengthNetwork_8.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Uniti_9.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_VerizonWavelengthNetwork_10.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Verizon_11.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_CogentWavelengthNetwork_12.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Cogent_13.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_ATT400GMetro_14.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_ATTWavelengthNetwork_15.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_ATT_16.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_ZayoWavelengthNetwork_17.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Zayo_18.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_LumenWavelengthNetwork_19.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Lumen_20.set('fieldLabels', {'fid': 'header label - visible with data', 'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_AllDataCenters_21.set('fieldLabels', {'operator': 'header label - visible with data', 'ref': 'header label - visible with data', 'name': 'header label - visible with data', 'Fiber_Carriers': 'header label - visible with data', 'Num_Carriers': 'header label - visible with data', 'Max_Power_Capacity.MW': 'header label - visible with data', 'Whitespace.SQFT': 'header label - visible with data', });
lyr_AllDataCenters_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});