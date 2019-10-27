mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-82.09997, 39.33019],
    zoom: 14,
    minZoom: 13
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
                        "Fraternity": "ACACIA",
                        "Address": 36,
                        "Street": "East State Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "36 East State Street  OH 45701 ",
                        "Incident Date": "8/31/19",
                        "Incident Time": "Around 12:30 a.m.",
                        "Description": "A man was found passed out behind the residence and was cited"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028642, 39.3283538]
                    },
                    "properties": {
                        "Fraternity": "Beta Theta Pi",
                        "Address": 23,
                        "Street": "South Congress Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "23 South Congress Street  OH 45701 ",
                        "Incident Date": "9/12/19",
                        "Incident Time": "Around 12:30 a.m.",
                        "Description": "A woman said she was assaulted near 23 S Congress (check previous PST reports)"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0971011, 39.3328641]
                    },
                    "properties": {
                        "Fraternity": "Theta Chi",
                        "Address": 117,
                        "Street": "East State Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "117 East State Street  OH 45701 ",
                        "Incident Date": "7/4/19",
                        "Incident Time": "10:56 a.m",
                        "Description": "APD took a report for a stolen purse"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0992968, 39.3301741]
                    },
                    "properties": {
                        "Fraternity": "Pi Kappa Phi",
                        "Address": 32,
                        "Street": "North College Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "32 North College Street  OH 45701 ",
                        "Incident Date": "3/23/19",
                        "Incident Time": "2:14 a.m.",
                        "Description": "APD took a report for criminal damaging, but details were not available"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988593, 39.3311806]
                    },
                    "properties": {
                        "Fraternity": "Phi Kappa Tau",
                        "Address": 50,
                        "Street": "East State Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "50 East State Street  OH 45701 ",
                        "Incident Date": "9/28/19",
                        "Incident Time": "1:00 a.m.",
                        "Description": "Three subjects were assaulted outside of the residence, and two of them were taken to O'Bleness"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0994524, 39.3293908]
                    },
                    "properties": {
                        "Fraternity": "Phi Kappa Psi",
                        "Address": 8,
                        "Street": "North College Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 North College Street  OH 45701 ",
                        "Incident Date": "3/23/19",
                        "Incident Time": "11:00 p.m.",
                        "Description": "A man reported that his ATM card was stolen and used at two local ATMs"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985775, 39.3294648]
                    },
                    "properties": {
                        "Fraternity": "Alpha Omnicron Pi",
                        "Address": 8,
                        "Street": "Church Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 Church Street  OH 45701 ",
                        "Incident Date": "9/14/19",
                        "Incident Time": "3:02 a.m.",
                        "Description": "An underage consumption was reported outside of the residence. An 18-year-old man was arrested."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993059, 39.3307881]
                    },
                    "properties": {
                        "Fraternity": "Delta Gamma",
                        "Address": 40,
                        "Street": "North College Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "40 North College Street  OH 45701 ",
                        "Incident Date": "9/8/18",
                        "Incident Time": "2:50 a.m.",
                        "Description": "An assault was reported and the primary aggressor was identified and charged."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993059, 39.3307881]
                    },
                    "properties": {
                        "Fraternity": "Delta Gamma",
                        "Address": 40,
                        "Street": "North College Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "40 North College Street  OH 45701 ",
                        "Incident Date": "1/26/19",
                        "Incident Time": "3:23 a.m.",
                        "Description": "A man was found on the porch after someone complained about him banging on the front door. He was found to be intoxicated."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "Fraternity": "Delta Zeta",
                        "Address": 55,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Mill Street  OH 45701 ",
                        "Incident Date": "10/21/2018",
                        "Incident Time": "11:04 a.m",
                        "Description": "APD took a report of a man's Subaru's rear windshield wiper being damaged."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "Fraternity": "Delta Zeta",
                        "Address": 55,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Mill Street  OH 45701 ",
                        "Incident Date": "11/18/18",
                        "Incident Time": "2:30 a.m.",
                        "Description": " A man was seen taking seat cushions and then running from police."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "Fraternity": "Delta Zeta",
                        "Address": 55,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Mill Street  OH 45701 ",
                        "Incident Date": "5/10/19",
                        "Incident Time": "8 p.m.",
                        "Description": "APD investigated a report of doors being damaged."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "Fraternity": "Delta Zeta",
                        "Address": 55,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Mill Street  OH 45701 ",
                        "Incident Date": "5/26/19",
                        "Incident Time": "2:30 a.m.",
                        "Description": "A man was seen carrying a can outside of the house, and he dropped it when an officer tried to talk with him."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985068, 39.3299292]
                    },
                    "properties": {
                        "Fraternity": "Delta Zeta",
                        "Address": 55,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Mill Street  OH 45701 ",
                        "Incident Date": "7/13/19",
                        "Incident Time": "12:00 a.m.",
                        "Description": "Criminal mischief was reported, but a description was not available."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0994853, 39.3289171]
                    },
                    "properties": {
                        "Fraternity": "Pi Beta Phi",
                        "Address": 6,
                        "Street": "South College Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "6 South College Street  OH 45701 ",
                        "Incident Date": "11/4/18",
                        "Incident Time": "9:46 p.m.",
                        "Description": "Officers responded to the residence for suspected drugs being located."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098786, 39.3300646]
                    },
                    "properties": {
                        "Fraternity": "Sigma Pi",
                        "Address": 45,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 Mill Street  OH 45701 ",
                        "Incident Date": "9/9/18",
                        "Incident Time": "2:17 a.m.",
                        "Description": "Officers were at the house for a noise complaint. The residents turned down the music, but then one of the residents starte arguing with one of the officers."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098786, 39.3300646]
                    },
                    "properties": {
                        "Fraternity": "Sigma Pi",
                        "Address": 45,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 Mill Street  OH 45701 ",
                        "Incident Date": "11/12/18",
                        "Incident Time": "2:48 a.m.",
                        "Description": "APD responded to an unresponsive male, Collin Wiant, who was transported to the hospital and was later pronounced dead."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098786, 39.3300646]
                    },
                    "properties": {
                        "Fraternity": "Sigma Pi",
                        "Address": 45,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 Mill Street  OH 45701 ",
                        "Incident Date": "12/14/18",
                        "Incident Time": "2:08 a.m.",
                        "Description": "A man was urinating o nthe sidewalk in front of 45 Mill St. He smelled like alcohol and was found to be 20 years old. He was found with a fake ID, which was seized and destroyed."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098786, 39.3300646]
                    },
                    "properties": {
                        "Fraternity": "ACACIA (annex)",
                        "Address": 45,
                        "Street": "Mill Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 Mill Street  OH 45701 ",
                        "Incident Date": "8/19/19",
                        "Incident Time": "9:37 p.m.",
                        "Description": "An aggravated possession of drugs was reported, but details were not given."
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028642, 39.3283538]
                    },
                    "properties": {
                        "Fraternity": "Beta Theta Pi",
                        "Address": 23,
                        "Street": "South Congress Street",
                        "City": "",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "23 South Congress Street  OH 45701 ",
                        "Incident Date": "9/15/19",
                        "Incident Time": "12:00 a.m.",
                        "Description": "Police receive a report of a stolen cell phone."
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
            'circle-radius': 5,
            'circle-color': '#c7002b',
            'circle-opacity': 0.85,
            'circle-stroke-color': '#FFFFFF',
            'circle-stroke-width': 1
        }
    });


    map.on('click', 'points', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['points']
        })
        var props = features[0].properties;
        var html = `<div class="pop-place">${props.Fraternity}</div>`
        for (f of features) {
            props = f.properties;
            html += `<div class="pop-date">${props['Incident Date']}</div>
          <div class="pop-cat">${props['Incident Time']}</div>
          <div class="pop-title">${props.Description}</div>`;
        }
        
        popup
        .setLngLat(coordinates)
            .setHTML(html)
            .addTo(map);
    });

    map.scrollZoom.disable(); // disable scroll zoom
    map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
});
