mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/johnstont05/ck7o27avw1t511jqrkwe48lxs', // stylesheet location
    center: [-82.849, 40.239],
    zoom: 6.4

});

map.on('load', function() {
  var layers = ['0', '1-2', '3-6'];
        var colors = ['#ffeda0', '#feb24c', '#f03b20'];

            for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}
    // Add a source for the counties polygons.
    map.addSource('counties', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/ThePostAthens/thepostathens.github.io/master/SpecialProjects/coronavirus-ohio-cases-coverage-ohio-university/data/counties.geojson'
    });
    map.addLayer({
        'id': 'counties-layer',
        'type': 'fill',
        'source': 'counties',
        'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'CASES']],
        0, '#ffeda0',
        2, '#feb24c',
        5, '#f03b20',
      ],
      'fill-opacity': 0.5,
      'fill-outline-color': 'black'
    }
    });

    // When a click event occurs on a feature in the countiess layer, open a popup at the
    // location of the click, with description HTML from its properties.
    map.on('click', 'counties-layer', function(e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<h3>' + e.features[0].properties.NAME + '</h3><p>' + e.features[0].properties.CASES + '</p>')
            .addTo(map);
    });


    // Change the cursor to a pointer when the mouse is over the countiess layer.
    map.on('mouseenter', 'counties-layer', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'counties-layer', function() {
        map.getCanvas().style.cursor = '';
    });

    map.scrollZoom.disable(); // disable scroll zoom
    map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
    ;
});
