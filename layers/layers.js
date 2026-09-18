var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CTRY_DEC_2023_UK_BUC_1 = new ol.format.GeoJSON();
var features_CTRY_DEC_2023_UK_BUC_1 = format_CTRY_DEC_2023_UK_BUC_1.readFeatures(json_CTRY_DEC_2023_UK_BUC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CTRY_DEC_2023_UK_BUC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CTRY_DEC_2023_UK_BUC_1.addFeatures(features_CTRY_DEC_2023_UK_BUC_1);
var lyr_CTRY_DEC_2023_UK_BUC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CTRY_DEC_2023_UK_BUC_1, 
                style: style_CTRY_DEC_2023_UK_BUC_1,
                popuplayertitle: 'CTRY_DEC_2023_UK_BUC',
                interactive: false,
    title: 'CTRY_DEC_2023_UK_BUC<br />\
    <img src="styles/legend/CTRY_DEC_2023_UK_BUC_1_0.png" /> England<br />\
    <img src="styles/legend/CTRY_DEC_2023_UK_BUC_1_1.png" /> Northern Ireland<br />\
    <img src="styles/legend/CTRY_DEC_2023_UK_BUC_1_2.png" /> Scotland<br />\
    <img src="styles/legend/CTRY_DEC_2023_UK_BUC_1_3.png" /> Wales<br />\
    <img src="styles/legend/CTRY_DEC_2023_UK_BUC_1_4.png" /> <br />' });
var format_MSOAboundaries_2 = new ol.format.GeoJSON();
var features_MSOAboundaries_2 = format_MSOAboundaries_2.readFeatures(json_MSOAboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSOAboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSOAboundaries_2.addFeatures(features_MSOAboundaries_2);
var lyr_MSOAboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSOAboundaries_2, 
                style: style_MSOAboundaries_2,
                popuplayertitle: 'MSOA boundaries',
                interactive: false,
                title: '<img src="styles/legend/MSOAboundaries_2.png" /> MSOA boundaries'
            });
var format_AONB_3 = new ol.format.GeoJSON();
var features_AONB_3 = format_AONB_3.readFeatures(json_AONB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AONB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AONB_3.addFeatures(features_AONB_3);
var lyr_AONB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AONB_3, 
                style: style_AONB_3,
                popuplayertitle: 'AONB',
                interactive: false,
                title: '<img src="styles/legend/AONB_3.png" /> AONB'
            });
var format_registeredhistoricparksandgardens_4 = new ol.format.GeoJSON();
var features_registeredhistoricparksandgardens_4 = format_registeredhistoricparksandgardens_4.readFeatures(json_registeredhistoricparksandgardens_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_registeredhistoricparksandgardens_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_registeredhistoricparksandgardens_4.addFeatures(features_registeredhistoricparksandgardens_4);
var lyr_registeredhistoricparksandgardens_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_registeredhistoricparksandgardens_4, 
                style: style_registeredhistoricparksandgardens_4,
                popuplayertitle: 'registered historic parks and gardens',
                interactive: false,
                title: '<img src="styles/legend/registeredhistoricparksandgardens_4.png" /> registered historic parks and gardens'
            });
var format_ForestRecreationRoutes_5 = new ol.format.GeoJSON();
var features_ForestRecreationRoutes_5 = format_ForestRecreationRoutes_5.readFeatures(json_ForestRecreationRoutes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestRecreationRoutes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestRecreationRoutes_5.addFeatures(features_ForestRecreationRoutes_5);
var lyr_ForestRecreationRoutes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestRecreationRoutes_5, 
                style: style_ForestRecreationRoutes_5,
                popuplayertitle: 'Forest Recreation Routes',
                interactive: false,
                title: '<img src="styles/legend/ForestRecreationRoutes_5.png" /> Forest Recreation Routes'
            });
var format_WalesCoastalPath_6 = new ol.format.GeoJSON();
var features_WalesCoastalPath_6 = format_WalesCoastalPath_6.readFeatures(json_WalesCoastalPath_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalesCoastalPath_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalesCoastalPath_6.addFeatures(features_WalesCoastalPath_6);
var lyr_WalesCoastalPath_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalesCoastalPath_6, 
                style: style_WalesCoastalPath_6,
                popuplayertitle: 'Wales Coastal Path',
                interactive: false,
                title: '<img src="styles/legend/WalesCoastalPath_6.png" /> Wales Coastal Path'
            });
var format_NationalTrails_7 = new ol.format.GeoJSON();
var features_NationalTrails_7 = format_NationalTrails_7.readFeatures(json_NationalTrails_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalTrails_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalTrails_7.addFeatures(features_NationalTrails_7);
var lyr_NationalTrails_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalTrails_7, 
                style: style_NationalTrails_7,
                popuplayertitle: 'National Trails',
                interactive: false,
                title: '<img src="styles/legend/NationalTrails_7.png" /> National Trails'
            });
var format_ForestFurniture_8 = new ol.format.GeoJSON();
var features_ForestFurniture_8 = format_ForestFurniture_8.readFeatures(json_ForestFurniture_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestFurniture_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestFurniture_8.addFeatures(features_ForestFurniture_8);
var lyr_ForestFurniture_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestFurniture_8, 
                style: style_ForestFurniture_8,
                popuplayertitle: 'Forest Furniture ',
                interactive: false,
                title: '<img src="styles/legend/ForestFurniture_8.png" /> Forest Furniture '
            });
var format_ActivityPoint_9 = new ol.format.GeoJSON();
var features_ActivityPoint_9 = format_ActivityPoint_9.readFeatures(json_ActivityPoint_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActivityPoint_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActivityPoint_9.addFeatures(features_ActivityPoint_9);
var lyr_ActivityPoint_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActivityPoint_9, 
                style: style_ActivityPoint_9,
                popuplayertitle: 'Activity Point',
                interactive: false,
                title: '<img src="styles/legend/ActivityPoint_9.png" /> Activity Point'
            });
var format_CommunityGreenspaces_10 = new ol.format.GeoJSON();
var features_CommunityGreenspaces_10 = format_CommunityGreenspaces_10.readFeatures(json_CommunityGreenspaces_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityGreenspaces_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityGreenspaces_10.addFeatures(features_CommunityGreenspaces_10);
var lyr_CommunityGreenspaces_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityGreenspaces_10, 
                style: style_CommunityGreenspaces_10,
                popuplayertitle: 'Community Greenspaces',
                interactive: false,
                title: '<img src="styles/legend/CommunityGreenspaces_10.png" /> Community Greenspaces'
            });
var format_Artificialpitches_11 = new ol.format.GeoJSON();
var features_Artificialpitches_11 = format_Artificialpitches_11.readFeatures(json_Artificialpitches_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Artificialpitches_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Artificialpitches_11.addFeatures(features_Artificialpitches_11);
var lyr_Artificialpitches_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Artificialpitches_11, 
                style: style_Artificialpitches_11,
                popuplayertitle: 'Artificial pitches',
                interactive: false,
                title: '<img src="styles/legend/Artificialpitches_11.png" /> Artificial pitches'
            });
var format_ArtificialGrassPitches_12 = new ol.format.GeoJSON();
var features_ArtificialGrassPitches_12 = format_ArtificialGrassPitches_12.readFeatures(json_ArtificialGrassPitches_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtificialGrassPitches_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtificialGrassPitches_12.addFeatures(features_ArtificialGrassPitches_12);
var lyr_ArtificialGrassPitches_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtificialGrassPitches_12, 
                style: style_ArtificialGrassPitches_12,
                popuplayertitle: 'Artificial Grass Pitches',
                interactive: false,
                title: '<img src="styles/legend/ArtificialGrassPitches_12.png" /> Artificial Grass Pitches'
            });
var format_GrassFootballPitches_13 = new ol.format.GeoJSON();
var features_GrassFootballPitches_13 = format_GrassFootballPitches_13.readFeatures(json_GrassFootballPitches_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrassFootballPitches_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassFootballPitches_13.addFeatures(features_GrassFootballPitches_13);
var lyr_GrassFootballPitches_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassFootballPitches_13, 
                style: style_GrassFootballPitches_13,
                popuplayertitle: 'Grass Football Pitches',
                interactive: false,
                title: '<img src="styles/legend/GrassFootballPitches_13.png" /> Grass Football Pitches'
            });
var format_CommunitySportFacility_14 = new ol.format.GeoJSON();
var features_CommunitySportFacility_14 = format_CommunitySportFacility_14.readFeatures(json_CommunitySportFacility_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunitySportFacility_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunitySportFacility_14.addFeatures(features_CommunitySportFacility_14);
var lyr_CommunitySportFacility_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunitySportFacility_14, 
                style: style_CommunitySportFacility_14,
                popuplayertitle: 'Community Sport Facility',
                interactive: false,
                title: '<img src="styles/legend/CommunitySportFacility_14.png" /> Community Sport Facility'
            });
var format_LeisureCentres_15 = new ol.format.GeoJSON();
var features_LeisureCentres_15 = format_LeisureCentres_15.readFeatures(json_LeisureCentres_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeisureCentres_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeisureCentres_15.addFeatures(features_LeisureCentres_15);
var lyr_LeisureCentres_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeisureCentres_15, 
                style: style_LeisureCentres_15,
                popuplayertitle: 'Leisure Centres',
                interactive: false,
                title: '<img src="styles/legend/LeisureCentres_15.png" /> Leisure Centres'
            });
var format_CommunityEnterprise_16 = new ol.format.GeoJSON();
var features_CommunityEnterprise_16 = format_CommunityEnterprise_16.readFeatures(json_CommunityEnterprise_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityEnterprise_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityEnterprise_16.addFeatures(features_CommunityEnterprise_16);
var lyr_CommunityEnterprise_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityEnterprise_16, 
                style: style_CommunityEnterprise_16,
                popuplayertitle: 'Community Enterprise',
                interactive: false,
                title: '<img src="styles/legend/CommunityEnterprise_16.png" /> Community Enterprise'
            });
var format_CommunityHub_17 = new ol.format.GeoJSON();
var features_CommunityHub_17 = format_CommunityHub_17.readFeatures(json_CommunityHub_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityHub_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityHub_17.addFeatures(features_CommunityHub_17);
var lyr_CommunityHub_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityHub_17, 
                style: style_CommunityHub_17,
                popuplayertitle: 'Community Hub',
                interactive: false,
                title: '<img src="styles/legend/CommunityHub_17.png" /> Community Hub'
            });
var format_CommunityHallCentre_18 = new ol.format.GeoJSON();
var features_CommunityHallCentre_18 = format_CommunityHallCentre_18.readFeatures(json_CommunityHallCentre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityHallCentre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityHallCentre_18.addFeatures(features_CommunityHallCentre_18);
var lyr_CommunityHallCentre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityHallCentre_18, 
                style: style_CommunityHallCentre_18,
                popuplayertitle: 'Community Hall/Centre',
                interactive: false,
                title: '<img src="styles/legend/CommunityHallCentre_18.png" /> Community Hall/Centre'
            });
var format_LibrariesArchives_19 = new ol.format.GeoJSON();
var features_LibrariesArchives_19 = format_LibrariesArchives_19.readFeatures(json_LibrariesArchives_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LibrariesArchives_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LibrariesArchives_19.addFeatures(features_LibrariesArchives_19);
var lyr_LibrariesArchives_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LibrariesArchives_19, 
                style: style_LibrariesArchives_19,
                popuplayertitle: 'Libraries & Archives',
                interactive: false,
                title: '<img src="styles/legend/LibrariesArchives_19.png" /> Libraries & Archives'
            });
var format_CynraddPrimary_20 = new ol.format.GeoJSON();
var features_CynraddPrimary_20 = format_CynraddPrimary_20.readFeatures(json_CynraddPrimary_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CynraddPrimary_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CynraddPrimary_20.addFeatures(features_CynraddPrimary_20);
var lyr_CynraddPrimary_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CynraddPrimary_20, 
                style: style_CynraddPrimary_20,
                popuplayertitle: 'Cynradd (Primary)',
                interactive: false,
                title: '<img src="styles/legend/CynraddPrimary_20.png" /> Cynradd (Primary)'
            });
var format_Universities_21 = new ol.format.GeoJSON();
var features_Universities_21 = format_Universities_21.readFeatures(json_Universities_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universities_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_21.addFeatures(features_Universities_21);
var lyr_Universities_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universities_21, 
                style: style_Universities_21,
                popuplayertitle: 'Universities',
                interactive: false,
                title: '<img src="styles/legend/Universities_21.png" /> Universities'
            });
var format_MeithrinNursery_22 = new ol.format.GeoJSON();
var features_MeithrinNursery_22 = format_MeithrinNursery_22.readFeatures(json_MeithrinNursery_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeithrinNursery_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeithrinNursery_22.addFeatures(features_MeithrinNursery_22);
var lyr_MeithrinNursery_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeithrinNursery_22, 
                style: style_MeithrinNursery_22,
                popuplayertitle: 'Meithrin (Nursery)',
                interactive: false,
                title: '<img src="styles/legend/MeithrinNursery_22.png" /> Meithrin (Nursery)'
            });
var format_ArbennigSpecialSchool_23 = new ol.format.GeoJSON();
var features_ArbennigSpecialSchool_23 = format_ArbennigSpecialSchool_23.readFeatures(json_ArbennigSpecialSchool_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArbennigSpecialSchool_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArbennigSpecialSchool_23.addFeatures(features_ArbennigSpecialSchool_23);
var lyr_ArbennigSpecialSchool_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArbennigSpecialSchool_23, 
                style: style_ArbennigSpecialSchool_23,
                popuplayertitle: 'Arbennig (Special School)',
                interactive: false,
                title: '<img src="styles/legend/ArbennigSpecialSchool_23.png" /> Arbennig (Special School)'
            });
var format_CanolMiddleSchool_24 = new ol.format.GeoJSON();
var features_CanolMiddleSchool_24 = format_CanolMiddleSchool_24.readFeatures(json_CanolMiddleSchool_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanolMiddleSchool_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanolMiddleSchool_24.addFeatures(features_CanolMiddleSchool_24);
var lyr_CanolMiddleSchool_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanolMiddleSchool_24, 
                style: style_CanolMiddleSchool_24,
                popuplayertitle: 'Canol (Middle School)',
                interactive: false,
                title: '<img src="styles/legend/CanolMiddleSchool_24.png" /> Canol (Middle School)'
            });
var format_UwchraddSecondary_25 = new ol.format.GeoJSON();
var features_UwchraddSecondary_25 = format_UwchraddSecondary_25.readFeatures(json_UwchraddSecondary_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UwchraddSecondary_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UwchraddSecondary_25.addFeatures(features_UwchraddSecondary_25);
var lyr_UwchraddSecondary_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UwchraddSecondary_25, 
                style: style_UwchraddSecondary_25,
                popuplayertitle: 'Uwchradd (Secondary)',
                interactive: false,
                title: '<img src="styles/legend/UwchraddSecondary_25.png" /> Uwchradd (Secondary)'
            });
var format_Viewpoint_26 = new ol.format.GeoJSON();
var features_Viewpoint_26 = format_Viewpoint_26.readFeatures(json_Viewpoint_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viewpoint_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viewpoint_26.addFeatures(features_Viewpoint_26);
var lyr_Viewpoint_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viewpoint_26, 
                style: style_Viewpoint_26,
                popuplayertitle: 'Viewpoint',
                interactive: false,
                title: '<img src="styles/legend/Viewpoint_26.png" /> Viewpoint'
            });
var format_MuseumsCollections_27 = new ol.format.GeoJSON();
var features_MuseumsCollections_27 = format_MuseumsCollections_27.readFeatures(json_MuseumsCollections_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MuseumsCollections_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MuseumsCollections_27.addFeatures(features_MuseumsCollections_27);
var lyr_MuseumsCollections_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MuseumsCollections_27, 
                style: style_MuseumsCollections_27,
                popuplayertitle: 'Museums & Collections',
                interactive: false,
                title: '<img src="styles/legend/MuseumsCollections_27.png" /> Museums & Collections'
            });
var format_ArtsandHeritageCommunityAsset_28 = new ol.format.GeoJSON();
var features_ArtsandHeritageCommunityAsset_28 = format_ArtsandHeritageCommunityAsset_28.readFeatures(json_ArtsandHeritageCommunityAsset_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtsandHeritageCommunityAsset_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtsandHeritageCommunityAsset_28.addFeatures(features_ArtsandHeritageCommunityAsset_28);
var lyr_ArtsandHeritageCommunityAsset_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtsandHeritageCommunityAsset_28, 
                style: style_ArtsandHeritageCommunityAsset_28,
                popuplayertitle: 'Arts and Heritage Community Asset',
                interactive: false,
                title: '<img src="styles/legend/ArtsandHeritageCommunityAsset_28.png" /> Arts and Heritage Community Asset'
            });
var format_ArtsFacilities_29 = new ol.format.GeoJSON();
var features_ArtsFacilities_29 = format_ArtsFacilities_29.readFeatures(json_ArtsFacilities_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtsFacilities_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtsFacilities_29.addFeatures(features_ArtsFacilities_29);
var lyr_ArtsFacilities_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtsFacilities_29, 
                style: style_ArtsFacilities_29,
                popuplayertitle: 'Arts Facilities',
                interactive: false,
                title: '<img src="styles/legend/ArtsFacilities_29.png" /> Arts Facilities'
            });
var format_ArtGalleries_30 = new ol.format.GeoJSON();
var features_ArtGalleries_30 = format_ArtGalleries_30.readFeatures(json_ArtGalleries_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtGalleries_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtGalleries_30.addFeatures(features_ArtGalleries_30);
var lyr_ArtGalleries_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtGalleries_30, 
                style: style_ArtGalleries_30,
                popuplayertitle: 'Art Galleries',
                interactive: false,
                title: '<img src="styles/legend/ArtGalleries_30.png" /> Art Galleries'
            });
var format_Markets_31 = new ol.format.GeoJSON();
var features_Markets_31 = format_Markets_31.readFeatures(json_Markets_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Markets_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Markets_31.addFeatures(features_Markets_31);
var lyr_Markets_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Markets_31, 
                style: style_Markets_31,
                popuplayertitle: 'Markets',
                interactive: false,
                title: '<img src="styles/legend/Markets_31.png" /> Markets'
            });
var group_CulturalSpaces = new ol.layer.Group({
                                layers: [lyr_Viewpoint_26,lyr_MuseumsCollections_27,lyr_ArtsandHeritageCommunityAsset_28,lyr_ArtsFacilities_29,lyr_ArtGalleries_30,],
                                fold: 'open',
                                title: 'Cultural Spaces'});
var group_EducationalInstitutions = new ol.layer.Group({
                                layers: [lyr_CynraddPrimary_20,lyr_Universities_21,lyr_MeithrinNursery_22,lyr_ArbennigSpecialSchool_23,lyr_CanolMiddleSchool_24,lyr_UwchraddSecondary_25,],
                                fold: 'open',
                                title: 'Educational Institutions'});
var group_CommunityFacilities = new ol.layer.Group({
                                layers: [lyr_CommunityEnterprise_16,lyr_CommunityHub_17,lyr_CommunityHallCentre_18,lyr_LibrariesArchives_19,],
                                fold: 'open',
                                title: 'Community Facilities'});
var group_SportFacilities = new ol.layer.Group({
                                layers: [lyr_Artificialpitches_11,lyr_ArtificialGrassPitches_12,lyr_GrassFootballPitches_13,lyr_CommunitySportFacility_14,lyr_LeisureCentres_15,],
                                fold: 'open',
                                title: 'Sport Facilities'});
var group_OpenSpaces = new ol.layer.Group({
                                layers: [lyr_AONB_3,lyr_registeredhistoricparksandgardens_4,lyr_ForestRecreationRoutes_5,lyr_WalesCoastalPath_6,lyr_NationalTrails_7,lyr_ForestFurniture_8,lyr_ActivityPoint_9,lyr_CommunityGreenspaces_10,],
                                fold: 'open',
                                title: 'Open Spaces'});
var group_Backgrounds = new ol.layer.Group({
                                layers: [lyr_ESRIWorldImagery_0,lyr_CTRY_DEC_2023_UK_BUC_1,lyr_MSOAboundaries_2,],
                                fold: 'open',
                                title: 'Backgrounds'});

lyr_ESRIWorldImagery_0.setVisible(true);lyr_CTRY_DEC_2023_UK_BUC_1.setVisible(true);lyr_MSOAboundaries_2.setVisible(true);lyr_AONB_3.setVisible(true);lyr_registeredhistoricparksandgardens_4.setVisible(true);lyr_ForestRecreationRoutes_5.setVisible(true);lyr_WalesCoastalPath_6.setVisible(true);lyr_NationalTrails_7.setVisible(true);lyr_ForestFurniture_8.setVisible(true);lyr_ActivityPoint_9.setVisible(true);lyr_CommunityGreenspaces_10.setVisible(true);lyr_Artificialpitches_11.setVisible(true);lyr_ArtificialGrassPitches_12.setVisible(true);lyr_GrassFootballPitches_13.setVisible(true);lyr_CommunitySportFacility_14.setVisible(true);lyr_LeisureCentres_15.setVisible(true);lyr_CommunityEnterprise_16.setVisible(true);lyr_CommunityHub_17.setVisible(true);lyr_CommunityHallCentre_18.setVisible(true);lyr_LibrariesArchives_19.setVisible(true);lyr_CynraddPrimary_20.setVisible(true);lyr_Universities_21.setVisible(true);lyr_MeithrinNursery_22.setVisible(true);lyr_ArbennigSpecialSchool_23.setVisible(true);lyr_CanolMiddleSchool_24.setVisible(true);lyr_UwchraddSecondary_25.setVisible(true);lyr_Viewpoint_26.setVisible(true);lyr_MuseumsCollections_27.setVisible(true);lyr_ArtsandHeritageCommunityAsset_28.setVisible(true);lyr_ArtsFacilities_29.setVisible(true);lyr_ArtGalleries_30.setVisible(true);lyr_Markets_31.setVisible(true);
var layersList = [group_Backgrounds,group_OpenSpaces,group_SportFacilities,group_CommunityFacilities,group_EducationalInstitutions,group_CulturalSpaces,lyr_Markets_31];
lyr_CTRY_DEC_2023_UK_BUC_1.set('fieldAliases', {'CTRY23CD': 'CTRY23CD', 'CTRY23NM': 'CTRY23NM', 'CTRY23NMW': 'CTRY23NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'GlobalID': 'GlobalID', });
lyr_MSOAboundaries_2.set('fieldAliases', {'MSOA21CD': 'MSOA21CD', 'MSOA21NM': 'MSOA21NM', 'MSOA21NMW': 'MSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', });
lyr_AONB_3.set('fieldAliases', {'id': 'id', 'AONB_NAME': 'AONB_NAME', 'ISIS_ID': 'ISIS_ID', 'DESIG_DATE': 'DESIG_DATE', 'AREA_HA': 'AREA_HA', 'Last_Edit': 'Last_Edit', 'Creator_id': 'Creator_id', 'Checked': 'Checked', 'Centre_X': 'Centre_X', 'Centre_Y': 'Centre_Y', 'OSMM_date': 'OSMM_date', 'METADATA': 'METADATA', 'GlobalID': 'GlobalID', });
lyr_registeredhistoricparksandgardens_4.set('fieldAliases', {'FID': 'FID', 'reference_number': 'reference_number', 'site_name_en': 'site_name_en', 'site_name_cy': 'site_name_cy', 'designation_date': 'designation_date', 'main_phase_en': 'main_phase_en', 'main_phase_cy': 'main_phase_cy', 'site_type_en': 'site_type_en', 'site_type_cy': 'site_type_cy', 'la_en': 'la_en', 'la_cy': 'la_cy', 'community': 'community', 'report_en': 'report_en', 'report_cy': 'report_cy', 'grade_gradd': 'grade_gradd', });
lyr_ForestRecreationRoutes_5.set('fieldAliases', {'FID': 'FID', 'FEATURE_GUID': 'FEATURE_GUID', 'ROUTE_NAME': 'ROUTE_NAME', 'ROUTE_TYPE': 'ROUTE_TYPE', 'ROUTE_SUB_TYPE': 'ROUTE_SUB_TYPE', 'ROUTE_GRADE': 'ROUTE_GRADE', 'STATUS': 'STATUS', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'ROUTE_DESCRIPTION': 'ROUTE_DESCRIPTION', 'TRAIL_DESIGNER': 'TRAIL_DESIGNER', 'ROUTE_LENGTH': 'ROUTE_LENGTH', 'OBJECTID': 'OBJECTID', 'REC_ID': 'REC_ID', 'FOR_PUBLICATION': 'FOR_PUBLICATION', 'REASON_FOR_NOT_PUBLISHING': 'REASON_FOR_NOT_PUBLISHING', 'PUBLICATION_COMMENTS': 'PUBLICATION_COMMENTS', });
lyr_WalesCoastalPath_6.set('fieldAliases', {'FID': 'FID', 'objectid': 'objectid', 'localautho': 'localautho', 'status': 'status', 'length': 'length', 'globalid': 'globalid', });
lyr_NationalTrails_7.set('fieldAliases', {'FID': 'FID', 'name': 'name', 'status': 'status', 'id': 'id', });
lyr_ForestFurniture_8.set('fieldAliases', {'FID': 'FID', 'FEATURE_GUID': 'FEATURE_GUID', 'OBJECTID': 'OBJECTID', 'ASSET_GUID': 'ASSET_GUID', 'FEATURE_GUID_1': 'FEATURE_GUID_1', 'POINT_CATEGORY': 'POINT_CATEGORY', 'POINT_ASSET_TYPE': 'POINT_ASSET_TYPE', 'POINT_ASSET_SUBTYPE': 'POINT_ASSET_SUBTYPE', 'CONSTRUCTION': 'CONSTRUCTION', 'ASSET_NAME': 'ASSET_NAME', 'HEIGHT_ABOVE_GROUND': 'HEIGHT_ABOVE_GROUND', 'DATE_ACCURACY': 'DATE_ACCURACY', 'INSTALLATION_DATE': 'INSTALLATION_DATE', 'LIFESPAN': 'LIFESPAN', 'ACCESS_TO_ALL': 'ACCESS_TO_ALL', 'OBJECTID_1': 'OBJECTID_1', 'POINT_ACCURACY': 'POINT_ACCURACY', 'REC_ID': 'REC_ID', 'FOR_PUBLICATION': 'FOR_PUBLICATION', 'REASON_FOR_NOT_PUBLISHING': 'REASON_FOR_NOT_PUBLISHING', 'PUBLICATION_COMMENTS': 'PUBLICATION_COMMENTS', 'GLOBAL_ID_1': 'GLOBAL_ID_1', });
lyr_ActivityPoint_9.set('fieldAliases', {'FID': 'FID', 'FEATURE_GUID': 'FEATURE_GUID', 'OBJECTID': 'OBJECTID', 'ASSET_GUID': 'ASSET_GUID', 'FEATURE_GUID_1': 'FEATURE_GUID_1', 'POINT_CATEGORY': 'POINT_CATEGORY', 'POINT_ASSET_TYPE': 'POINT_ASSET_TYPE', 'POINT_ASSET_SUBTYPE': 'POINT_ASSET_SUBTYPE', 'CONSTRUCTION': 'CONSTRUCTION', 'ASSET_NAME': 'ASSET_NAME', 'HEIGHT_ABOVE_GROUND': 'HEIGHT_ABOVE_GROUND', 'DATE_ACCURACY': 'DATE_ACCURACY', 'INSTALLATION_DATE': 'INSTALLATION_DATE', 'LIFESPAN': 'LIFESPAN', 'ACCESS_TO_ALL': 'ACCESS_TO_ALL', 'OBJECTID_1': 'OBJECTID_1', 'POINT_ACCURACY': 'POINT_ACCURACY', 'REC_ID': 'REC_ID', 'FOR_PUBLICATION': 'FOR_PUBLICATION', 'REASON_FOR_NOT_PUBLISHING': 'REASON_FOR_NOT_PUBLISHING', 'PUBLICATION_COMMENTS': 'PUBLICATION_COMMENTS', 'GLOBAL_ID_1': 'GLOBAL_ID_1', });
lyr_CommunityGreenspaces_10.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Postcode3': 'Postcode3', 'Grid Reference': 'Grid Reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'notes': 'notes', 'Column1': 'Column1', 'Column2': 'Column2', });
lyr_Artificialpitches_11.set('fieldAliases', {'FID': 'FID', 'sw_id': 'sw_id', 'location': 'location', 'postcode': 'postcode', 'la_en': 'la_en', 'la_cy': 'la_cy', 'sector_en': 'sector_en', 'sector_cy': 'sector_cy', 'fifa_worldrugby': 'fifa_worldrugby', 'fifa_worldrugby_cy': 'fifa_worldrugby_cy', 'owner_operator': 'owner_operator', 'sport_en': 'sport_en', 'sport_cy': 'sport_cy', 'install_date': 'install_date', 'dimensions_en': 'dimensions_en', 'dimensions_cy': 'dimensions_cy', 'threeg_en': 'threeg_en', 'threeg_cy': 'threeg_cy', 'flood_lights_en': 'flood_lights_en', 'floodlights_cy': 'floodlights_cy', 'funding_source_en': 'funding_source_en', 'funding_source_cy': 'funding_source_cy', 'community_en': 'community_en', 'community_cy': 'community_cy', 'surface_type_en': 'surface_type_en', 'surface_type_cy': 'surface_type_cy', 'status_en': 'status_en', 'status_cy': 'status_cy', 'easting': 'easting', 'northing': 'northing', });
lyr_ArtificialGrassPitches_12.set('fieldAliases', {'FID': 'FID', 'sw_id': 'sw_id', 'location': 'location', 'postcode': 'postcode', 'la_en': 'la_en', 'la_cy': 'la_cy', 'sector_en': 'sector_en', 'sector_cy': 'sector_cy', 'fifa_worldrugby': 'fifa_worldrugby', 'fifa_worldrugby_cy': 'fifa_worldrugby_cy', 'owner_operator': 'owner_operator', 'sport_en': 'sport_en', 'sport_cy': 'sport_cy', 'install_date': 'install_date', 'dimensions_en': 'dimensions_en', 'dimensions_cy': 'dimensions_cy', 'threeg_en': 'threeg_en', 'threeg_cy': 'threeg_cy', 'flood_lights_en': 'flood_lights_en', 'floodlights_cy': 'floodlights_cy', 'funding_source_en': 'funding_source_en', 'funding_source_cy': 'funding_source_cy', 'community_en': 'community_en', 'community_cy': 'community_cy', 'surface_type_en': 'surface_type_en', 'surface_type_cy': 'surface_type_cy', 'status_en': 'status_en', 'status_cy': 'status_cy', 'easting': 'easting', 'northing': 'northing', });
lyr_GrassFootballPitches_13.set('fieldAliases', {'FID': 'FID', 'facility': 'facility', 'name': 'name', 'type': 'type', 'units': 'units', 'la': 'la', 'access': 'access', 'status': 'status', 'statws': 'statws', 'mynediad': 'mynediad', 'awdurdod': 'awdurdod', 'math': 'math', });
lyr_CommunitySportFacility_14.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Postcode3': 'Postcode3', 'Grid Reference': 'Grid Reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'notes': 'notes', 'Column1': 'Column1', 'Column2': 'Column2', });
lyr_LeisureCentres_15.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Column3': 'Column3', 'town': 'town', 'Postcode': 'Postcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'Type from source': 'Type from source', 'Status': 'Status', });
lyr_CommunityEnterprise_16.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Postcode3': 'Postcode3', 'Grid Reference': 'Grid Reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'notes': 'notes', 'Column1': 'Column1', 'Column2': 'Column2', });
lyr_CommunityHub_17.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Postcode3': 'Postcode3', 'Grid Reference': 'Grid Reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'notes': 'notes', 'Column1': 'Column1', 'Column2': 'Column2', });
lyr_CommunityHallCentre_18.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Postcode3': 'Postcode3', 'Grid Reference': 'Grid Reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'notes': 'notes', 'Column1': 'Column1', 'Column2': 'Column2', });
lyr_LibrariesArchives_19.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address 1': 'Address 1', 'Address 2': 'Address 2', 'Address 3': 'Address 3', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Grid reference': 'Grid reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', });
lyr_CynraddPrimary_20.set('fieldAliases', {'Asset_name': 'Asset_name', 'Sector': 'Sector', 'School type': 'School type', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Licence': 'Licence', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', });
lyr_Universities_21.set('fieldAliases', {'Name of Uni': 'Name of Uni', 'Postcode': 'Postcode', 'Long': 'Long', 'Lat': 'Lat', });
lyr_MeithrinNursery_22.set('fieldAliases', {'Asset_name': 'Asset_name', 'Sector': 'Sector', 'School type': 'School type', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Licence': 'Licence', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', });
lyr_ArbennigSpecialSchool_23.set('fieldAliases', {'Asset_name': 'Asset_name', 'Sector': 'Sector', 'School type': 'School type', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Licence': 'Licence', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', });
lyr_CanolMiddleSchool_24.set('fieldAliases', {'Asset_name': 'Asset_name', 'Sector': 'Sector', 'School type': 'School type', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Licence': 'Licence', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', });
lyr_UwchraddSecondary_25.set('fieldAliases', {'Asset_name': 'Asset_name', 'Sector': 'Sector', 'School type': 'School type', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Licence': 'Licence', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', });
lyr_Viewpoint_26.set('fieldAliases', {'FID': 'FID', 'FEATURE_GUID': 'FEATURE_GUID', 'OBJECTID': 'OBJECTID', 'ASSET_GUID': 'ASSET_GUID', 'FEATURE_GUID_1': 'FEATURE_GUID_1', 'POINT_CATEGORY': 'POINT_CATEGORY', 'POINT_ASSET_TYPE': 'POINT_ASSET_TYPE', 'POINT_ASSET_SUBTYPE': 'POINT_ASSET_SUBTYPE', 'CONSTRUCTION': 'CONSTRUCTION', 'ASSET_NAME': 'ASSET_NAME', 'HEIGHT_ABOVE_GROUND': 'HEIGHT_ABOVE_GROUND', 'DATE_ACCURACY': 'DATE_ACCURACY', 'INSTALLATION_DATE': 'INSTALLATION_DATE', 'LIFESPAN': 'LIFESPAN', 'ACCESS_TO_ALL': 'ACCESS_TO_ALL', 'OBJECTID_1': 'OBJECTID_1', 'POINT_ACCURACY': 'POINT_ACCURACY', 'REC_ID': 'REC_ID', 'FOR_PUBLICATION': 'FOR_PUBLICATION', 'REASON_FOR_NOT_PUBLISHING': 'REASON_FOR_NOT_PUBLISHING', 'PUBLICATION_COMMENTS': 'PUBLICATION_COMMENTS', 'GLOBAL_ID_1': 'GLOBAL_ID_1', });
lyr_MuseumsCollections_27.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address 1': 'Address 1', 'Address 2': 'Address 2', 'Address 3': 'Address 3', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Grid reference': 'Grid reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', });
lyr_ArtsandHeritageCommunityAsset_28.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Postcode3': 'Postcode3', 'Grid Reference': 'Grid Reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'notes': 'notes', 'Column1': 'Column1', 'Column2': 'Column2', });
lyr_ArtsFacilities_29.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address 1': 'Address 1', 'Address 2': 'Address 2', 'Address 3': 'Address 3', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Grid reference': 'Grid reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', });
lyr_ArtGalleries_30.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address 1': 'Address 1', 'Address 2': 'Address 2', 'Address 3': 'Address 3', 'Postcode': 'Postcode', 'Postcode2': 'Postcode2', 'Grid reference': 'Grid reference', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', });
lyr_Markets_31.set('fieldAliases', {'Asset_name': 'Asset_name', 'Core_category': 'Core_category', 'Address': 'Address', 'Postcode': 'Postcode', 'Lat,Lon': 'Lat,Lon', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Source_dataset': 'Source_dataset', 'Source_URL': 'Source_URL', 'Confidence': 'Confidence', 'Include_in_map': 'Include_in_map', });
lyr_CTRY_DEC_2023_UK_BUC_1.set('fieldImages', {'CTRY23CD': 'TextEdit', 'CTRY23NM': 'TextEdit', 'CTRY23NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_MSOAboundaries_2.set('fieldImages', {'MSOA21CD': 'TextEdit', 'MSOA21NM': 'TextEdit', 'MSOA21NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_AONB_3.set('fieldImages', {'id': 'TextEdit', 'AONB_NAME': 'TextEdit', 'ISIS_ID': 'Range', 'DESIG_DATE': 'DateTime', 'AREA_HA': 'TextEdit', 'Last_Edit': 'DateTime', 'Creator_id': 'TextEdit', 'Checked': 'TextEdit', 'Centre_X': 'Range', 'Centre_Y': 'Range', 'OSMM_date': 'DateTime', 'METADATA': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_registeredhistoricparksandgardens_4.set('fieldImages', {'FID': 'TextEdit', 'reference_number': 'TextEdit', 'site_name_en': 'TextEdit', 'site_name_cy': 'TextEdit', 'designation_date': 'DateTime', 'main_phase_en': 'TextEdit', 'main_phase_cy': 'TextEdit', 'site_type_en': 'TextEdit', 'site_type_cy': 'TextEdit', 'la_en': 'TextEdit', 'la_cy': 'TextEdit', 'community': 'TextEdit', 'report_en': 'TextEdit', 'report_cy': 'TextEdit', 'grade_gradd': 'TextEdit', });
lyr_ForestRecreationRoutes_5.set('fieldImages', {'FID': 'TextEdit', 'FEATURE_GUID': 'TextEdit', 'ROUTE_NAME': 'TextEdit', 'ROUTE_TYPE': 'Range', 'ROUTE_SUB_TYPE': 'Range', 'ROUTE_GRADE': 'Range', 'STATUS': 'Range', 'START_DATE': 'DateTime', 'END_DATE': 'TextEdit', 'ROUTE_DESCRIPTION': 'TextEdit', 'TRAIL_DESIGNER': 'TextEdit', 'ROUTE_LENGTH': 'TextEdit', 'OBJECTID': 'Range', 'REC_ID': 'TextEdit', 'FOR_PUBLICATION': 'CheckBox', 'REASON_FOR_NOT_PUBLISHING': 'TextEdit', 'PUBLICATION_COMMENTS': 'TextEdit', });
lyr_WalesCoastalPath_6.set('fieldImages', {'FID': 'TextEdit', 'objectid': 'Range', 'localautho': 'TextEdit', 'status': 'TextEdit', 'length': 'TextEdit', 'globalid': 'TextEdit', });
lyr_NationalTrails_7.set('fieldImages', {'FID': 'TextEdit', 'name': 'TextEdit', 'status': 'TextEdit', 'id': 'Range', });
lyr_ForestFurniture_8.set('fieldImages', {'FID': 'TextEdit', 'FEATURE_GUID': 'TextEdit', 'OBJECTID': 'Range', 'ASSET_GUID': 'TextEdit', 'FEATURE_GUID_1': 'TextEdit', 'POINT_CATEGORY': 'Range', 'POINT_ASSET_TYPE': 'Range', 'POINT_ASSET_SUBTYPE': 'Range', 'CONSTRUCTION': 'Range', 'ASSET_NAME': 'TextEdit', 'HEIGHT_ABOVE_GROUND': 'Range', 'DATE_ACCURACY': 'Range', 'INSTALLATION_DATE': 'DateTime', 'LIFESPAN': 'Range', 'ACCESS_TO_ALL': 'CheckBox', 'OBJECTID_1': 'TextEdit', 'POINT_ACCURACY': 'Range', 'REC_ID': 'TextEdit', 'FOR_PUBLICATION': 'CheckBox', 'REASON_FOR_NOT_PUBLISHING': 'TextEdit', 'PUBLICATION_COMMENTS': 'TextEdit', 'GLOBAL_ID_1': 'TextEdit', });
lyr_ActivityPoint_9.set('fieldImages', {'FID': 'TextEdit', 'FEATURE_GUID': 'TextEdit', 'OBJECTID': 'Range', 'ASSET_GUID': 'TextEdit', 'FEATURE_GUID_1': 'TextEdit', 'POINT_CATEGORY': 'Range', 'POINT_ASSET_TYPE': 'Range', 'POINT_ASSET_SUBTYPE': 'Range', 'CONSTRUCTION': 'Range', 'ASSET_NAME': 'TextEdit', 'HEIGHT_ABOVE_GROUND': 'Range', 'DATE_ACCURACY': 'Range', 'INSTALLATION_DATE': 'DateTime', 'LIFESPAN': 'Range', 'ACCESS_TO_ALL': 'CheckBox', 'OBJECTID_1': 'TextEdit', 'POINT_ACCURACY': 'Range', 'REC_ID': 'TextEdit', 'FOR_PUBLICATION': 'CheckBox', 'REASON_FOR_NOT_PUBLISHING': 'TextEdit', 'PUBLICATION_COMMENTS': 'TextEdit', 'GLOBAL_ID_1': 'TextEdit', });
lyr_CommunityGreenspaces_10.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Postcode3': 'TextEdit', 'Grid Reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', });
lyr_Artificialpitches_11.set('fieldImages', {'FID': 'TextEdit', 'sw_id': 'TextEdit', 'location': 'TextEdit', 'postcode': 'TextEdit', 'la_en': 'TextEdit', 'la_cy': 'TextEdit', 'sector_en': 'TextEdit', 'sector_cy': 'TextEdit', 'fifa_worldrugby': 'TextEdit', 'fifa_worldrugby_cy': 'TextEdit', 'owner_operator': 'TextEdit', 'sport_en': 'TextEdit', 'sport_cy': 'TextEdit', 'install_date': 'TextEdit', 'dimensions_en': 'TextEdit', 'dimensions_cy': 'TextEdit', 'threeg_en': 'TextEdit', 'threeg_cy': 'TextEdit', 'flood_lights_en': 'TextEdit', 'floodlights_cy': 'TextEdit', 'funding_source_en': 'TextEdit', 'funding_source_cy': 'TextEdit', 'community_en': 'TextEdit', 'community_cy': 'TextEdit', 'surface_type_en': 'TextEdit', 'surface_type_cy': 'TextEdit', 'status_en': 'TextEdit', 'status_cy': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_ArtificialGrassPitches_12.set('fieldImages', {'FID': 'TextEdit', 'sw_id': 'TextEdit', 'location': 'TextEdit', 'postcode': 'TextEdit', 'la_en': 'TextEdit', 'la_cy': 'TextEdit', 'sector_en': 'TextEdit', 'sector_cy': 'TextEdit', 'fifa_worldrugby': 'TextEdit', 'fifa_worldrugby_cy': 'TextEdit', 'owner_operator': 'TextEdit', 'sport_en': 'TextEdit', 'sport_cy': 'TextEdit', 'install_date': 'TextEdit', 'dimensions_en': 'TextEdit', 'dimensions_cy': 'TextEdit', 'threeg_en': 'TextEdit', 'threeg_cy': 'TextEdit', 'flood_lights_en': 'TextEdit', 'floodlights_cy': 'TextEdit', 'funding_source_en': 'TextEdit', 'funding_source_cy': 'TextEdit', 'community_en': 'TextEdit', 'community_cy': 'TextEdit', 'surface_type_en': 'TextEdit', 'surface_type_cy': 'TextEdit', 'status_en': 'TextEdit', 'status_cy': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_GrassFootballPitches_13.set('fieldImages', {'FID': 'TextEdit', 'facility': 'Range', 'name': 'TextEdit', 'type': 'TextEdit', 'units': 'Range', 'la': 'TextEdit', 'access': 'TextEdit', 'status': 'TextEdit', 'statws': 'TextEdit', 'mynediad': 'TextEdit', 'awdurdod': 'TextEdit', 'math': 'TextEdit', });
lyr_CommunitySportFacility_14.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Postcode3': 'TextEdit', 'Grid Reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', });
lyr_LeisureCentres_15.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Column3': 'TextEdit', 'town': 'TextEdit', 'Postcode': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'Type from source': 'TextEdit', 'Status': 'TextEdit', });
lyr_CommunityEnterprise_16.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Postcode3': 'TextEdit', 'Grid Reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', });
lyr_CommunityHub_17.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Postcode3': 'TextEdit', 'Grid Reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', });
lyr_CommunityHallCentre_18.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Postcode3': 'TextEdit', 'Grid Reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', });
lyr_LibrariesArchives_19.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address 1': 'TextEdit', 'Address 2': 'TextEdit', 'Address 3': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Grid reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', });
lyr_CynraddPrimary_20.set('fieldImages', {'Asset_name': 'TextEdit', 'Sector': 'TextEdit', 'School type': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Licence': 'DateTime', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', });
lyr_Universities_21.set('fieldImages', {'Name of Uni': 'TextEdit', 'Postcode': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', });
lyr_MeithrinNursery_22.set('fieldImages', {'Asset_name': 'TextEdit', 'Sector': 'TextEdit', 'School type': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Licence': 'DateTime', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', });
lyr_ArbennigSpecialSchool_23.set('fieldImages', {'Asset_name': 'TextEdit', 'Sector': 'TextEdit', 'School type': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Licence': 'DateTime', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', });
lyr_CanolMiddleSchool_24.set('fieldImages', {'Asset_name': 'TextEdit', 'Sector': 'TextEdit', 'School type': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Licence': 'DateTime', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', });
lyr_UwchraddSecondary_25.set('fieldImages', {'Asset_name': 'TextEdit', 'Sector': 'TextEdit', 'School type': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Licence': 'DateTime', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', });
lyr_Viewpoint_26.set('fieldImages', {'FID': 'TextEdit', 'FEATURE_GUID': 'TextEdit', 'OBJECTID': 'Range', 'ASSET_GUID': 'TextEdit', 'FEATURE_GUID_1': 'TextEdit', 'POINT_CATEGORY': 'Range', 'POINT_ASSET_TYPE': 'Range', 'POINT_ASSET_SUBTYPE': 'Range', 'CONSTRUCTION': 'Range', 'ASSET_NAME': 'TextEdit', 'HEIGHT_ABOVE_GROUND': 'Range', 'DATE_ACCURACY': 'Range', 'INSTALLATION_DATE': 'DateTime', 'LIFESPAN': 'Range', 'ACCESS_TO_ALL': 'CheckBox', 'OBJECTID_1': 'TextEdit', 'POINT_ACCURACY': 'Range', 'REC_ID': 'TextEdit', 'FOR_PUBLICATION': 'CheckBox', 'REASON_FOR_NOT_PUBLISHING': 'TextEdit', 'PUBLICATION_COMMENTS': 'TextEdit', 'GLOBAL_ID_1': 'TextEdit', });
lyr_MuseumsCollections_27.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address 1': 'TextEdit', 'Address 2': 'TextEdit', 'Address 3': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Grid reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', });
lyr_ArtsandHeritageCommunityAsset_28.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Postcode3': 'TextEdit', 'Grid Reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', });
lyr_ArtsFacilities_29.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address 1': 'TextEdit', 'Address 2': 'TextEdit', 'Address 3': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Grid reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', });
lyr_ArtGalleries_30.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address 1': 'TextEdit', 'Address 2': 'TextEdit', 'Address 3': 'TextEdit', 'Postcode': 'TextEdit', 'Postcode2': 'TextEdit', 'Grid reference': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', });
lyr_Markets_31.set('fieldImages', {'Asset_name': 'TextEdit', 'Core_category': 'TextEdit', 'Address': 'TextEdit', 'Postcode': 'TextEdit', 'Lat,Lon': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Source_dataset': 'TextEdit', 'Source_URL': 'TextEdit', 'Confidence': 'TextEdit', 'Include_in_map': 'TextEdit', });
lyr_CTRY_DEC_2023_UK_BUC_1.set('fieldLabels', {'CTRY23CD': 'no label', 'CTRY23NM': 'no label', 'CTRY23NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'GlobalID': 'no label', });
lyr_MSOAboundaries_2.set('fieldLabels', {'MSOA21CD': 'header label - visible with data', 'MSOA21NM': 'no label', 'MSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', });
lyr_AONB_3.set('fieldLabels', {'id': 'no label', 'AONB_NAME': 'no label', 'ISIS_ID': 'no label', 'DESIG_DATE': 'no label', 'AREA_HA': 'no label', 'Last_Edit': 'no label', 'Creator_id': 'no label', 'Checked': 'no label', 'Centre_X': 'no label', 'Centre_Y': 'no label', 'OSMM_date': 'no label', 'METADATA': 'no label', 'GlobalID': 'no label', });
lyr_registeredhistoricparksandgardens_4.set('fieldLabels', {'FID': 'no label', 'reference_number': 'no label', 'site_name_en': 'no label', 'site_name_cy': 'no label', 'designation_date': 'no label', 'main_phase_en': 'no label', 'main_phase_cy': 'no label', 'site_type_en': 'no label', 'site_type_cy': 'no label', 'la_en': 'no label', 'la_cy': 'no label', 'community': 'no label', 'report_en': 'no label', 'report_cy': 'no label', 'grade_gradd': 'no label', });
lyr_ForestRecreationRoutes_5.set('fieldLabels', {'FID': 'no label', 'FEATURE_GUID': 'no label', 'ROUTE_NAME': 'no label', 'ROUTE_TYPE': 'no label', 'ROUTE_SUB_TYPE': 'no label', 'ROUTE_GRADE': 'no label', 'STATUS': 'no label', 'START_DATE': 'no label', 'END_DATE': 'no label', 'ROUTE_DESCRIPTION': 'no label', 'TRAIL_DESIGNER': 'no label', 'ROUTE_LENGTH': 'no label', 'OBJECTID': 'no label', 'REC_ID': 'no label', 'FOR_PUBLICATION': 'no label', 'REASON_FOR_NOT_PUBLISHING': 'no label', 'PUBLICATION_COMMENTS': 'no label', });
lyr_WalesCoastalPath_6.set('fieldLabels', {'FID': 'no label', 'objectid': 'no label', 'localautho': 'no label', 'status': 'no label', 'length': 'no label', 'globalid': 'no label', });
lyr_NationalTrails_7.set('fieldLabels', {'FID': 'no label', 'name': 'no label', 'status': 'no label', 'id': 'no label', });
lyr_ForestFurniture_8.set('fieldLabels', {'FID': 'no label', 'FEATURE_GUID': 'no label', 'OBJECTID': 'no label', 'ASSET_GUID': 'no label', 'FEATURE_GUID_1': 'no label', 'POINT_CATEGORY': 'no label', 'POINT_ASSET_TYPE': 'no label', 'POINT_ASSET_SUBTYPE': 'no label', 'CONSTRUCTION': 'no label', 'ASSET_NAME': 'no label', 'HEIGHT_ABOVE_GROUND': 'no label', 'DATE_ACCURACY': 'no label', 'INSTALLATION_DATE': 'no label', 'LIFESPAN': 'no label', 'ACCESS_TO_ALL': 'no label', 'OBJECTID_1': 'no label', 'POINT_ACCURACY': 'no label', 'REC_ID': 'no label', 'FOR_PUBLICATION': 'no label', 'REASON_FOR_NOT_PUBLISHING': 'no label', 'PUBLICATION_COMMENTS': 'no label', 'GLOBAL_ID_1': 'no label', });
lyr_ActivityPoint_9.set('fieldLabels', {'FID': 'no label', 'FEATURE_GUID': 'no label', 'OBJECTID': 'no label', 'ASSET_GUID': 'no label', 'FEATURE_GUID_1': 'no label', 'POINT_CATEGORY': 'no label', 'POINT_ASSET_TYPE': 'no label', 'POINT_ASSET_SUBTYPE': 'no label', 'CONSTRUCTION': 'no label', 'ASSET_NAME': 'no label', 'HEIGHT_ABOVE_GROUND': 'no label', 'DATE_ACCURACY': 'no label', 'INSTALLATION_DATE': 'no label', 'LIFESPAN': 'no label', 'ACCESS_TO_ALL': 'no label', 'OBJECTID_1': 'no label', 'POINT_ACCURACY': 'no label', 'REC_ID': 'no label', 'FOR_PUBLICATION': 'no label', 'REASON_FOR_NOT_PUBLISHING': 'no label', 'PUBLICATION_COMMENTS': 'no label', 'GLOBAL_ID_1': 'no label', });
lyr_CommunityGreenspaces_10.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Postcode3': 'no label', 'Grid Reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', });
lyr_Artificialpitches_11.set('fieldLabels', {'FID': 'no label', 'sw_id': 'no label', 'location': 'no label', 'postcode': 'no label', 'la_en': 'no label', 'la_cy': 'no label', 'sector_en': 'no label', 'sector_cy': 'no label', 'fifa_worldrugby': 'no label', 'fifa_worldrugby_cy': 'no label', 'owner_operator': 'no label', 'sport_en': 'no label', 'sport_cy': 'no label', 'install_date': 'no label', 'dimensions_en': 'no label', 'dimensions_cy': 'no label', 'threeg_en': 'no label', 'threeg_cy': 'no label', 'flood_lights_en': 'no label', 'floodlights_cy': 'no label', 'funding_source_en': 'no label', 'funding_source_cy': 'no label', 'community_en': 'no label', 'community_cy': 'no label', 'surface_type_en': 'no label', 'surface_type_cy': 'no label', 'status_en': 'no label', 'status_cy': 'no label', 'easting': 'no label', 'northing': 'no label', });
lyr_ArtificialGrassPitches_12.set('fieldLabels', {'FID': 'no label', 'sw_id': 'no label', 'location': 'no label', 'postcode': 'no label', 'la_en': 'no label', 'la_cy': 'no label', 'sector_en': 'no label', 'sector_cy': 'no label', 'fifa_worldrugby': 'no label', 'fifa_worldrugby_cy': 'no label', 'owner_operator': 'no label', 'sport_en': 'no label', 'sport_cy': 'no label', 'install_date': 'no label', 'dimensions_en': 'no label', 'dimensions_cy': 'no label', 'threeg_en': 'no label', 'threeg_cy': 'no label', 'flood_lights_en': 'no label', 'floodlights_cy': 'no label', 'funding_source_en': 'no label', 'funding_source_cy': 'no label', 'community_en': 'no label', 'community_cy': 'no label', 'surface_type_en': 'no label', 'surface_type_cy': 'no label', 'status_en': 'no label', 'status_cy': 'no label', 'easting': 'no label', 'northing': 'no label', });
lyr_GrassFootballPitches_13.set('fieldLabels', {'FID': 'header label - visible with data', 'facility': 'no label', 'name': 'no label', 'type': 'no label', 'units': 'no label', 'la': 'no label', 'access': 'no label', 'status': 'no label', 'statws': 'no label', 'mynediad': 'no label', 'awdurdod': 'no label', 'math': 'no label', });
lyr_CommunitySportFacility_14.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Postcode3': 'no label', 'Grid Reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', });
lyr_LeisureCentres_15.set('fieldLabels', {'Asset_name': 'header label - visible with data', 'Core_category': 'no label', 'Column3': 'no label', 'town': 'no label', 'Postcode': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'Type from source': 'no label', 'Status': 'no label', });
lyr_CommunityEnterprise_16.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Postcode3': 'no label', 'Grid Reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', });
lyr_CommunityHub_17.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Postcode3': 'no label', 'Grid Reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', });
lyr_CommunityHallCentre_18.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Postcode3': 'no label', 'Grid Reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', });
lyr_LibrariesArchives_19.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address 1': 'no label', 'Address 2': 'no label', 'Address 3': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Grid reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', });
lyr_CynraddPrimary_20.set('fieldLabels', {'Asset_name': 'no label', 'Sector': 'no label', 'School type': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Licence': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', });
lyr_Universities_21.set('fieldLabels', {'Name of Uni': 'no label', 'Postcode': 'no label', 'Long': 'no label', 'Lat': 'no label', });
lyr_MeithrinNursery_22.set('fieldLabels', {'Asset_name': 'no label', 'Sector': 'no label', 'School type': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Licence': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', });
lyr_ArbennigSpecialSchool_23.set('fieldLabels', {'Asset_name': 'no label', 'Sector': 'no label', 'School type': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Licence': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', });
lyr_CanolMiddleSchool_24.set('fieldLabels', {'Asset_name': 'no label', 'Sector': 'no label', 'School type': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Licence': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', });
lyr_UwchraddSecondary_25.set('fieldLabels', {'Asset_name': 'no label', 'Sector': 'no label', 'School type': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Licence': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', });
lyr_Viewpoint_26.set('fieldLabels', {'FID': 'header label - visible with data', 'FEATURE_GUID': 'no label', 'OBJECTID': 'no label', 'ASSET_GUID': 'no label', 'FEATURE_GUID_1': 'no label', 'POINT_CATEGORY': 'no label', 'POINT_ASSET_TYPE': 'no label', 'POINT_ASSET_SUBTYPE': 'no label', 'CONSTRUCTION': 'no label', 'ASSET_NAME': 'no label', 'HEIGHT_ABOVE_GROUND': 'no label', 'DATE_ACCURACY': 'no label', 'INSTALLATION_DATE': 'no label', 'LIFESPAN': 'no label', 'ACCESS_TO_ALL': 'no label', 'OBJECTID_1': 'no label', 'POINT_ACCURACY': 'no label', 'REC_ID': 'no label', 'FOR_PUBLICATION': 'no label', 'REASON_FOR_NOT_PUBLISHING': 'no label', 'PUBLICATION_COMMENTS': 'no label', 'GLOBAL_ID_1': 'no label', });
lyr_MuseumsCollections_27.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address 1': 'no label', 'Address 2': 'no label', 'Address 3': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Grid reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', });
lyr_ArtsandHeritageCommunityAsset_28.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Postcode3': 'no label', 'Grid Reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', });
lyr_ArtsFacilities_29.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address 1': 'no label', 'Address 2': 'no label', 'Address 3': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Grid reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', });
lyr_ArtGalleries_30.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address 1': 'no label', 'Address 2': 'no label', 'Address 3': 'no label', 'Postcode': 'no label', 'Postcode2': 'no label', 'Grid reference': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', });
lyr_Markets_31.set('fieldLabels', {'Asset_name': 'no label', 'Core_category': 'no label', 'Address': 'no label', 'Postcode': 'no label', 'Lat,Lon': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Source_dataset': 'no label', 'Source_URL': 'no label', 'Confidence': 'no label', 'Include_in_map': 'no label', });
lyr_Markets_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});