// Google Map activation

'use strict';

(function() {

  // Options for map style
  var mapStyle = [
      {
          'featureType': 'landscape',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 50
              },
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'poi',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 40
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 20
              },
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 30
              },
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'transit',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'administrative.province',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [
              {
                  'visibility': 'on'
              },
              {
                  'lightness': -0
              },
              {
                  'saturation': -0
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
              {
                  'hue': '#00baff'
              },
              {
                  'lightness': -10
              },
              {
                  'saturation': -95
              }
          ]
      }
  ];

  // Checking viewport width
  // If it less then desktop breakpoint(960px) then map is not draggable
  var draggableOption;

  if (document.documentElement.clientWidth < 960) {
    draggableOption = false;
  } else {
    draggableOption = true;
  }

  // Create & activate Gmap
  var map = new GMaps({
    div: '#map',
    lat: 59.962556,
    lng: 30.321820,
    scrollwheel: false,
    draggable: draggableOption,
    zoom: 16,
    zoomControl: true,
    zoomControlOpt: {
      style: 'SMALL',
      position: 'LEFT_CENTER'
    },
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false,
    styles: mapStyle
  });

  map.addMarker({
    lat: 59.962556,
    lng: 30.321820,
    icon: 'images/marker-icon.png',
    infoWindow: {
      content: '<p>Bolshaya Monetnaya, 16</p>'
    }
  });

})();
