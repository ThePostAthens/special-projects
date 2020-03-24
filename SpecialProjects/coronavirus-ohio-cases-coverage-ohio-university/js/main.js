mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/johnstont05/ck7o27avw1t511jqrkwe48lxs', // stylesheet location
    center: [-82.849, 40.239],
    zoom: 6
});

map.on('load', function() {

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
                0, '#cacaca',
                1, '#fee5d9',
                150, '#de2d26',

            ],
            'fill-opacity': 0.5,
            'fill-outline-color': 'black'
        }
    });

    map.addSource('pointsSource', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-82.101363, 39.324488]
                },
                "properties": {
                    "location": "Ohio University",
                }
            }]
        }
    });

    map.addLayer({
        id: 'points',
        source: 'pointsSource',
        type: 'circle',
        paint: {
            'circle-radius': 6,
            'circle-color': 'black',
            'circle-opacity': 0.85,
            'circle-stroke-color': '#000',
            'circle-stroke-width': 1
        }
    });

    // When a click event occurs on a feature in the countiess layer, open a popup at the
    // location of the click, with description HTML from its properties.
    map.on('click', 'counties-layer', function(e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<div class="county-name">' + e.features[0].properties.NAME + ' ' + 'County' + '</div><div class="county-case">' + 'Confirmed cases:' + ' ' +  e.features[0].properties.CASES + '</div>')
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


});
