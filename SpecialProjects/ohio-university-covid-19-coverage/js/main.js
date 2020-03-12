mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v10', // stylesheet location
    center: [-82.849, 40.239],
    zoom: 6.4

});

map.on('load', function() {
    // Add a source for the counties polygons.
    map.addSource('counties', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/ThePostAthens/thepostathens.github.io/master/SpecialProjects/ohio-university-covid-19-coverage/data/counties.geojson'
    });
    map.addLayer({
        'id': 'counties-layer',
        'type': 'fill',
        'source': 'counties',
        'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
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
});
