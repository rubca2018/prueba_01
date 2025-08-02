var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ctastro_2 = new ol.format.GeoJSON();
var features_ctastro_2 = format_ctastro_2.readFeatures(json_ctastro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ctastro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ctastro_2.addFeatures(features_ctastro_2);
var lyr_ctastro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ctastro_2, 
                style: style_ctastro_2,
                popuplayertitle: 'ctastro',
                interactive: true,
    title: 'ctastro<br />\
    <img src="styles/legend/ctastro_2_0.png" /> 16A<br />\
    <img src="styles/legend/ctastro_2_1.png" /> 16B<br />\
    <img src="styles/legend/ctastro_2_2.png" /> 17A<br />\
    <img src="styles/legend/ctastro_2_3.png" /> 17B<br />\
    <img src="styles/legend/ctastro_2_4.png" /> <br />' });
var format_camino_3 = new ol.format.GeoJSON();
var features_camino_3 = format_camino_3.readFeatures(json_camino_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camino_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camino_3.addFeatures(features_camino_3);
var lyr_camino_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camino_3, 
                style: style_camino_3,
                popuplayertitle: 'camino',
                interactive: true,
                title: '<img src="styles/legend/camino_3.png" /> camino'
            });

lyr_OSMStandard_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_ctastro_2.setVisible(true);lyr_camino_3.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_ctastro_2,lyr_camino_3];
lyr_ctastro_2.set('fieldAliases', {'CAMPO': 'CAMPO', 'EMPRESA': 'EMPRESA', 'CPO_EMPRES': 'CPO_EMPRES', 'TIPO_USO': 'TIPO_USO', 'Lote': 'Lote', 'Parcela': 'Parcela', 'Sup_Lote': 'Sup_Lote', 'Secc': 'Secc', 'Partida': 'Partida', 'Mpio': 'Mpio', 'Matric': 'Matric', 'Escritura': 'Escritura', 'Propietari': 'Propietari', 'OBSERV': 'OBSERV', 'Sup_GIS': 'Sup_GIS', 'Certificad': 'Certificad', 'HA_EMPRESA': 'HA_EMPRESA', });
lyr_camino_3.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Propietari': 'Propietari', 'Jerarquia': 'Jerarquia', 'Material': 'Material', 'Ancho': 'Ancho', 'Longitud': 'Longitud', 'Estacional': 'Estacional', 'Tiempo': 'Tiempo', 'Uso_Forest': 'Uso_Forest', 'Juridiccio': 'Juridiccio', 'Despeje': 'Despeje', });
lyr_ctastro_2.set('fieldImages', {'CAMPO': 'TextEdit', 'EMPRESA': 'TextEdit', 'CPO_EMPRES': 'TextEdit', 'TIPO_USO': 'TextEdit', 'Lote': 'TextEdit', 'Parcela': 'TextEdit', 'Sup_Lote': 'TextEdit', 'Secc': 'TextEdit', 'Partida': 'TextEdit', 'Mpio': 'TextEdit', 'Matric': 'TextEdit', 'Escritura': 'TextEdit', 'Propietari': 'TextEdit', 'OBSERV': 'TextEdit', 'Sup_GIS': 'TextEdit', 'Certificad': 'TextEdit', 'HA_EMPRESA': 'TextEdit', });
lyr_camino_3.set('fieldImages', {'Id': '', 'Nombre': '', 'Tipo': '', 'Propietari': '', 'Jerarquia': '', 'Material': '', 'Ancho': '', 'Longitud': '', 'Estacional': '', 'Tiempo': '', 'Uso_Forest': '', 'Juridiccio': '', 'Despeje': '', });
lyr_ctastro_2.set('fieldLabels', {'CAMPO': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'CPO_EMPRES': 'hidden field', 'TIPO_USO': 'inline label - visible with data', 'Lote': 'inline label - visible with data', 'Parcela': 'inline label - visible with data', 'Sup_Lote': 'inline label - visible with data', 'Secc': 'inline label - visible with data', 'Partida': 'hidden field', 'Mpio': 'inline label - always visible', 'Matric': 'inline label - visible with data', 'Escritura': 'hidden field', 'Propietari': 'inline label - visible with data', 'OBSERV': 'hidden field', 'Sup_GIS': 'inline label - visible with data', 'Certificad': 'hidden field', 'HA_EMPRESA': 'inline label - visible with data', });
lyr_camino_3.set('fieldLabels', {'Id': 'hidden field', 'Nombre': 'hidden field', 'Tipo': 'inline label - always visible', 'Propietari': 'hidden field', 'Jerarquia': 'hidden field', 'Material': 'inline label - always visible', 'Ancho': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Estacional': 'hidden field', 'Tiempo': 'hidden field', 'Uso_Forest': 'hidden field', 'Juridiccio': 'hidden field', 'Despeje': 'inline label - always visible', });
lyr_camino_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});