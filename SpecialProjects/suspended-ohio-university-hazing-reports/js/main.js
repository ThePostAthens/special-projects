mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-82.09831, 39.33083],
    zoom: 15.3
});

var popup = new mapboxgl.Popup({
    closeOnClick: false
})

map.on('load', () => {

    map.addSource('pointsSource', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0996144, 39.3309472]
                    },
                    "properties": {
                        "house": "ACACIA",
                        "address": 36,
                        "street": "East State Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "36 East State Street  OH 45701 ",
                        "date": "Aug. 31, 2019",
                        "time": "12:32 a.m.",
                        "description": "A man was found passed out behind the residence and was cited.",
                        "image": "acacia_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028642, 39.3283538]
                    },
                    "properties": {
                        "house": "Beta Theta Pi",
                        "address": 23,
                        "street": "South Congress Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "23 South Congress Street  OH 45701 ",
                        "date": "Sept. 12, 2019",
                        "time": "around 12:30 a.m.",
                        "description": "A woman said she was assaulted near 23 S. Congress St. The offender was suspected of using alcohol.",
                        "image": "beta-theta-pi_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0971011, 39.3328641]
                    },
                    "properties": {
                        "house": "Theta Chi",
                        "address": 117,
                        "street": "East State Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "117 East State Street  OH 45701 ",
                        "date": "July 4, 2019",
                        "time": "10:56 a.m.",
                        "description": "APD took a report for a stolen purse.",
                        "image": "theta-chi_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0992968, 39.3301741]
                    },
                    "properties": {
                        "house": "Pi Kappa Phi",
                        "address": 32,
                        "street": "North College Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "32 North College Street  OH 45701 ",
                        "date": "Mar. 23, 2019",
                        "time": "2:14 a.m.",
                        "description": "APD took a report for criminal damaging, but details were not available.",
                        "image": "pi-kappa-phi_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988593, 39.3311806]
                    },
                    "properties": {
                        "house": "Phi Kappa Tau",
                        "address": 50,
                        "street": "East State Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "50 East State Street  OH 45701 ",
                        "date": "Sept. 28, 2019",
                        "time": "around 1:00 a.m.",
                        "description": "Three subjects were assaulted outside of the residence, and two of them were taken to O'Bleness.",
                        "image": "phi-kappa-tau_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0994524, 39.3293908]
                    },
                    "properties": {
                        "house": "Phi Kappa Psi",
                        "address": 8,
                        "street": "North College Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "8 North College Street  OH 45701 ",
                        "date": "Mar. 23, 2019",
                        "time": "2:09 p.m.",
                        "description": "A man reported that his ATM card was stolen and used at two local ATMs.",
                        "image": "phi-kappa-psi_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985775, 39.3294648]
                    },
                    "properties": {
                        "house": "Alpha Omnicron Pi",
                        "address": 8,
                        "street": "Church Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "8 Church Street  OH 45701 ",
                        "date": "Sept. 14, 2019",
                        "time": "3:02 a.m.",
                        "description": "An underage consumption was reported outside of the residence. An 18-year-old man was arrested.",
                        "image": "alpha-omicron-pi_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993059, 39.3307881]
                    },
                    "properties": {
                        "house": "Delta Gamma",
                        "address": 40,
                        "street": "North College Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "40 North College Street  OH 45701 ",
                        "date": "Sept. 8, 2018",
                        "time": "around 2:50 a.m.",
                        "description": "An assault was reported and the primary aggressor was identified and charged.",
                        "image": "delta-gamma_1.jpg"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993059, 39.3307881]
                    },
                    "properties": {
                        "house": "Delta Gamma",
                        "address": 40,
                        "street": "North College Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "40 North College Street  OH 45701 ",
                        "date": "Jan. 26, 2019",
                        "time": "3:23 a.m.",
                        "description": "A man was found on the porch after someone complained about him banging on the front door. He was found to be intoxicated.",
                        "image": "delta-gamma_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "house": "Delta Zeta",
                        "address": 55,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "55 Mill Street  OH 45701 ",
                        "date": "Oct. 21, 2018",
                        "time": "11:04 a.m",
                        "description": "APD took a report of a man's Subaru's rear windshield wiper being damaged.",
                        "image": "delta-zeta_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "house": "Delta Zeta",
                        "address": 55,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "55 Mill Street  OH 45701 ",
                        "date": "Nov. 18, 2018",
                        "time": " around 2:30 a.m.",
                        "description": "A man was seen taking seat cushions and then running from police.",
                        "image": "delta-zeta_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "house": "Delta Zeta",
                        "address": 55,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "55 Mill Street  OH 45701 ",
                        "date": "May 24, 2019",
                        "time": "7:28 p.m.",
                        "description": "APD investigated a report of doors being damaged.",
                        "image": "delta-zeta_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "house": "Delta Zeta",
                        "address": 55,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "55 Mill Street  OH 45701 ",
                        "date": "May 26, 2019",
                        "time": "around 2:30 a.m.",
                        "description": "A man was seen carrying a can outside of the house, and he dropped it when an officer tried to talk with him.",
                        "image": "delta-zeta_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "house": "Delta Zeta",
                        "address": 55,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "55 Mill Street  OH 45701 ",
                        "date": "July 13, 2019",
                        "time": "12:00 a.m.",
                        "description": "Criminal mischief was reported, a fence spindle was broken off.",
                        "image": "delta-zeta_2.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0994853, 39.3289171]
                    },
                    "properties": {
                        "house": "Pi Beta Phi",
                        "address": 6,
                        "street": "South College Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "6 South College Street  OH 45701 ",
                        "date": "Nov. 4, 2018",
                        "time": "9:46 p.m.",
                        "description": "Officers responded to the residence for suspected drugs being located.",
                        "image": "pi-beta-phi.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098863, 39.330173]
                    },
                    "properties": {
                        "house": "Sigma Pi",
                        "address": 45,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "45 Mill Street  OH 45701 ",
                        "date": "Sept. 9, 2018",
                        "time": "around 2:17 a.m.",
                        "description": "Officers were at the house for a noise complaint. The residents turned down the music, but then one of the residents started arguing with one of the officers.",
                        "image": "45-mill_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098863, 39.330173]
                    },
                    "properties": {
                        "house": "Sigma Pi",
                        "address": 45,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "45 Mill Street  OH 45701 ",
                        "date": "Nov. 12, 2018",
                        "time": "around 2:48 a.m.",
                        "description": "APD responded to an unresponsive male, Collin Wiant, who was transported to the hospital and was later pronounced dead.",
                        "image": "45-mill_1.jpg"

                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098863, 39.330173]
                    },
                    "properties": {
                        "house": "Sigma Pi",
                        "address": 45,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "45 Mill Street  OH 45701 ",
                        "date": "Dec. 14, 2018",
                        "time": "around 2:08 a.m.",
                        "description": "A man was urinating on the sidewalk in front of 45 Mill St. He smelled like alcohol and was found to be 20 years old. He was found with a fake ID, which was seized and destroyed.",
                        "image": "45-mill_1.jpg"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098639, 39.330150]
                    },
                    "properties": {
                        "house": "ACACIA (annex)",
                        "address": 45,
                        "street": "Mill Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "45 Mill Street  OH 45701 ",
                        "date": "Aug. 19, 2019",
                        "time": "9:37 p.m.",
                        "description": "An aggravated possession of drugs was reported, but details were not given.",
                        "image": "45-mill_1.jpg"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028642, 39.3283538]
                    },
                    "properties": {
                        "house": "Beta Theta Pi",
                        "address": 23,
                        "street": "South Congress Street",
                        "city": "",
                        "state": "OH",
                        "zip": 45701,
                        "full-address": "23 South Congress Street  OH 45701 ",
                        "date": "Sept. 15, 2019",
                        "time": "around 12:00 a.m. - 2:30 a.m.",
                        "description": "Police receive a report of a stolen cell phone.",
                        "image": "beta-theta-pi_2.jpg"
                    }
                }
            ]
        }

    });

    map.addLayer({
        id: 'points',
        source: 'pointsSource',
        type: 'circle',
        paint: {
            'circle-radius': 6,
            'circle-color': '#ffcc00',
            'circle-opacity': 0.85,
            'circle-stroke-color': '#000',
            'circle-stroke-width': 1
        }
    });

    map.on('click', 'points', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['points']
        });

        var props = features[0].properties;

        var html = `
        <img class="map-img" src="img/${props.image}">
        <div id="house">${props.house}</div>
        <div id="map-addr">${props.address} ${props.street}</div>
        <hr class="map">

        `;

        for (f of features) {
            props = f.properties;
            html += `
            <div id="map-date"> ${props.date} at ${props.time}</div>
            <div id="map-desc">${props.description}</div>
          `;
        }

        $('.sidebar').html(html);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'points', function () {
    map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'points', function () {
    map.getCanvas().style.cursor = '';
    });
});


function updateInfo(feature) {
    $('#frat').text(feature.properties.Fraternity);
}

map.scrollZoom.disable(); // disable scroll zoom
map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
;
