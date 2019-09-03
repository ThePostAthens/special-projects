mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-82.0951678, 39.334115], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


// map.scrollZoom.disable(); // disable scroll zoom
// map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
//
// map.on('load', function () {

  // // When a click event occurs on a feature in the places layer, open a popup at the
  // // location of the feature, with description HTML from its properties.
  // map.on('click', 'data', function (e) {
  //     var coordinates = e.features[0].geometry.coordinates.slice();
  // //        var description = e.features[0].properties.description;
  //     console.log(e);
  //     var lat = e.features[0].properties['Latitude'];
  //     var lng = e.features[0].properties['Longitude'];
  //     // var violations =  '<p class="pop">' + e.features[0].properties['Bar Name'];
  //     // violations  += '<br>' + e.features[0].properties['Address'];
  //     // violations  += '<br>' + e.features[0].properties['City'];
  //     // violations  += '<br>' + e.features[0].properties['Violation'] + ' violation(s)</p>';
  //     // Ensure that if the map is zoomed out such that multiple
  //     // copies of the feature are visible, the popup appears
  //     // over the copy being pointed to.
  // //        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  // //            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  // //        }
  // //
  //     new mapboxgl.Popup()
  //         .setLngLat([Longitude,Latitude])
  //         // .setHTML(violations)
  //         .addTo(map);
  // });
