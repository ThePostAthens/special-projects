mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-82.0951678, 39.334115], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

map.on('load', () => {

    map.addSource('pointsSource', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "929 E State St., Athens, OH 45701",
                        "title": "Theft",
                        "copy": "APD officers responded to Walmart for a report of a about $50 of merchadise stolen. A woman was cited for theft and released.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "929 E State St., Athens, OH 45701",
                        "title": "Criminal Trespass",
                        "copy": "Officers responded to Walmart for a trespassing complaint. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0984085, 39.3301589]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "0 Kern/Mill, Athens, OH 45701",
                        "title": "Underage consumption of alcohol/obstructing offical business",
                        "copy": "Athens Mounted Patrol Units made contact with a man who had an open container of alcohol. He was charged with underage alcohol consumption and obstructing official business.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028666, 39.3279448]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "Bromley Hall, 35 S. Congress St., Athens, OH 45701",
                        "title": "Destruction Property",
                        "copy": "A report was taken for reference ceiling tile damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-80.3546356, 27.3540477]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "Oxbow Trail/Drive",
                        "title": "Accident Report Damage",
                        "copy": "Report was taken in reference to a vehicle property damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1050572, 39.3246251]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "James Hall, 97 West Green Dr., Athens, OH 45701",
                        "title": "Alcohol",
                        "copy": "A man was arrested for disporderly conduct by intoxication. He was transported to OhioHealth O'Bleness Hosipital by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0965688, 39.3227749]
                    },
                    "properties": {
                        "date": "8/23/2019",
                        "location": "Tanaka Hall, 121 South Green Dr., Athens, OH 45701",
                        "title": "Destruction Property",
                        "copy": "A resident assitant reported damage to a light pole outside of Tanaka Hall",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.6151737, 37.0378733]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "Union Street",
                        "title": "Traffic",
                        "copy": "A citation was issued to a man for reckless operation. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-118.4399613, 34.0288494]
                    },
                    "properties": {
                        "date": "8/24/0201",
                        "location": "Richland Avenue",
                        "title": "Traffic",
                        "copy": "A citation was issued for operating a motor vehicle without a valid license",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.094779, 39.3248657]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "Brown Hall, 69 South Green Dr. Athens, OH 45701",
                        "title": "Theft",
                        "copy": "A report was taken for reference of theft of \"Welcome\" banner.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-119.064721, 35.33761]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "South Green",
                        "title": "Operations",
                        "copy": "EDC Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1045397, 39.3261479]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "Boyd dining Hall, 100 West Green Dr., Athens, OH 45701",
                        "title": "Theft",
                        "copy": "Officers took a report of a theft of a purse",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0987955, 39.3282558]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "Hudson Health Center, 2 Health Center Dr, Athens, OH 45701",
                        "title": "Alcohol",
                        "copy": "A man was arrested for underage alcohol consumption, intoxication and possession of a fake ID. He was transported to Southeastern Ohio Regional Jail. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0984109, 39.3242396]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "Ohio University Police Department, 135 Scott Quad, Athens, OH 45701",
                        "title": "Fictitious/altered ID",
                        "copy": "OUPD took a report related to a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.2311052, 36.8747293]
                    },
                    "properties": {
                        "date": "8/24/2019",
                        "location": "Shafer Street",
                        "title": "Traffic",
                        "copy": "A charge was issued to a man for driving under court suspension.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-73.996527, 40.68106]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Court Street",
                        "title": "Alcohol",
                        "copy": "A man was arrested for underage alcohol consumption, intoxication and possession of a fake ID. He was transported to Southeastern Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-71.0504512, 42.3516043]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Congress Street",
                        "title": "Alcohol",
                        "copy": "A man was arrested for disorderly conduct by intoxication and open container. He was transported to Southeastern Ohio Regional Jail. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1050572, 39.3246251]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "James Hall Garage, 97 West Green Dr., Athens, OH 45701",
                        "title": "Alcohol",
                        "copy": "A woman was cited for disorderly conduct by intoxication. She was transported to OhioHealth O'Bleness Hospital by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1045397, 39.3261479]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Boyd Hall, 100 West Green Dr., Athens, OH 45701",
                        "title": "Alcohol",
                        "copy": "A man was arrested for disporderly conduct by intoxication. He was transported to Southeastern Ohio Regional Jail. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-118.4399613, 34.0288494]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Richland Avenue",
                        "title": "Traffic",
                        "copy": "Citation issued to a man for driving on the sidewalk",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056916, 39.323245]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Convocation Center, 95 Richland Ave., Athens, OH 45701",
                        "title": "Operations",
                        "copy": "EDC Deployment; canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028666, 39.3279448]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Bromley Hall, 35 S. Congress St., Athens, OH 45701",
                        "title": "Emotionally Disturbed Person",
                        "copy": "Complainant requested an officer for a well-being check.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0965761, 39.3248886]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "Tiffin Hall, 60 East Green Dr., Athens, OH 45701",
                        "title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a student.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0875414, 39.3372783]
                    },
                    "properties": {
                        "date": "8/25/2019",
                        "location": "319 E. State Street, Athens, OH 45701",
                        "title": "Aggravated menacing/vandalism",
                        "copy": "APD received a call about a suspicious person at Speedway on E. State St. A report was taken and a man was arrested for vandalism and aggravated menacing. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1030602, 39.3285704]
                    },
                    "properties": {
                        "date": "8/22/2019",
                        "location": "19 S. Congress St., Athens, OH 45701",
                        "title": "Theft",
                        "copy": "A woman came to APD to file a theft report. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1078545, 39.3302817]
                    },
                    "properties": {
                        "date": "8/26/2019",
                        "location": "West Union St. Office Center",
                        "title": "Recovered property",
                        "copy": "A bicycle was reported propped up against a building. The owner was unable to be contacted, and the bicycle was take to OUPD.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951223, 39.3238449]
                    },
                    "properties": {
                        "date": "8/26/2019",
                        "location": "Crawford Hall, 71 South Green Dr., Athens, OH 45701",
                        "title": "Theft",
                        "copy": "OUPD took information related to a reported theft",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1020049, 39.3269613]
                    },
                    "properties": {
                        "date": "8/26/2019",
                        "location": "Phil and Pat Muck Business Annex, 3 President St, Athens, OH 45701",
                        "title": "Fictitious/altered ID",
                        "copy": "OUPD received an ID in the lost and found that turned out to be a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1010284, 39.3288307]
                    },
                    "properties": {
                        "date": "8/26/2019",
                        "location": "10 S. Court Street, Athens, OH 45701",
                        "title": "Theft",
                        "copy": "A six pack of Mystic Mama beer was stolen from Big Mamma's Burritos.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0749529, 39.342354]
                    },
                    "properties": {
                        "date": "8/26/2019",
                        "location": "56 Avon St., Athens, OH 45701",
                        "title": "Theft/Misuse of credit card",
                        "copy": "APD responded to a complaint of a stolen credit card.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974951, 39.3250068]
                    },
                    "properties": {
                        "date": "8/27/2019",
                        "location": "Shively Hall, 59 East Green Dr., Athens, OH 45701",
                        "title": "Bicycle Complaint",
                        "copy": "Complainant reported bicycle secured to handicap railing. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.7107214, 37.0557152]
                    },
                    "properties": {
                        "date": "8/27/2019",
                        "location": "Mail Services",
                        "title": "Operations",
                        "copy": "Canine deplotment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1045397, 39.3261479]
                    },
                    "properties": {
                        "date": "8/27/2019",
                        "location": "Boyd Hall, 100 West Green Dr., Athens, OH 45701",
                        "title": "Telecommunication Harassment",
                        "copy": "Complainant reported harassment from an ex boyfriend.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0981614, 39.3228632]
                    },
                    "properties": {
                        "date": "8/27/2019",
                        "location": "Carr Hall, 97 South Green Dr., Athens, OH 45701",
                        "title": "Service Call",
                        "copy": "Complainent requested ACEMS for a report of a seizure.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1008158, 39.3312734]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "Stephen's Bar, 66 N. Court St., Athens, OH 45701",
                        "title": "Assault",
                        "copy": "Officers took a report of an assualt that occured at Stephen's Bar. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0934589, 39.3284987]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "10 Milliron, Athens, OH 45701",
                        "title": "Criminal Damaging/Endangering",
                        "copy": "APD responded to a report of a vehicle being damaged on Milliron. A report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0965761, 39.3248886]
                    },
                    "properties": {
                        "date": "8/28/2019",
                        "location": "Tiffin Hall, 60 East Green Dr., Athens, OH 45701",
                        "title": "Emotionally Disturbed Person",
                        "copy": "Subject taken into custody for a mental health evaluation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.094779, 39.3248657]
                    },
                    "properties": {
                        "date": "8/28/2019",
                        "location": "Brown Hall, 69 South Green Dr. Athens, OH 45701",
                        "title": "Destruction Property",
                        "copy": "Complaint reported damage to the area",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1045397, 39.3261479]
                    },
                    "properties": {
                        "date": "8/28/2019",
                        "location": "Boyd Hall, 100 West Green Dr., Athens, OH 45701",
                        "title": "Theft",
                        "copy": "A report was taken in reference to the theft of a roomy key. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1286988, 39.3583709]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "State Route 682",
                        "title": "Sex offense",
                        "copy": "Citiations were issued to a man for public indecency and underage consumption of alcohol",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0987955, 39.3282558]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "Counseling and Psychological Services, 2 Health Center Dr, Athens, OH 45701",
                        "title": "Emotionally Disturbed Person",
                        "copy": "CPS requested an officer to transport a person for a mental health evalutation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-89.0133548, 42.2646152]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "East State Street",
                        "title": "Service Call",
                        "copy": "OUPD assisted APD by responding to a non-injury traffic crash.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-118.4399613, 34.0288494]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "Richland Avenue",
                        "title": "Traffic",
                        "copy": "A citation was issued to a man for driving under a non-compliance suspension. The man was transported to Southeastern Ohio Regional Jail for a warrent in Morgan County Sheriff's Office.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1053563, 39.326342]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "location": "Ryors Hall, 101 West Green Dr., Athens, OH 45701",
                        "title": "Sex offense",
                        "copy": "A man was charged with sexual imposition. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1012299, 39.3307719]
                    },
                    "properties": {
                        "date": "8/31/2019",
                        "location": "0 West State Street, Athens, OH 45701",
                        "title": "Sexual Battery",
                        "copy": "A 21-year-old woman reported she was a victim of sexual assault on the city's west end by an unknown subject. The matter is currently under investigation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0998777, 39.3302591]
                    },
                    "properties": {
                        "date": "8/31/2019",
                        "location": "25 Mill Street, Athens, OH 45701",
                        "title": "Criminal Trespass/Disorderly Conduct by Intoxication",
                        "copy": "Officers responded to a Mill Street resudence in reference to an unknown man in the residence. The man was arrested for criminal trespass and disordely conduct by intoxication.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102244, 39.3340069]
                    },
                    "properties": {
                        "date": "9/1/2019",
                        "location": "0 Congress/State Streets, Athens, OH 45701",
                        "title": "Arson",
                        "copy": "Officers lcoated a man trying to light a couch on fire. No suspects were apprehended, and a report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1012554, 39.3292396]
                    },
                    "properties": {
                        "date": "9/1/2019",
                        "location": "Athens, OH 45701",
                        "title": "Rape",
                        "copy": "A 21-year-old woman reported she was the victim of rape on the south end of the city by a known suspect. The matter is under investigation, and no further information will be released at this time. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102244, 39.3340069]
                    },
                    "properties": {
                        "date": "9/2/2019",
                        "location": "0 Congress/Rose St., Athens, OH 45701",
                        "title": "Arson",
                        "copy": "Officers located a recliner on fire in the street. A report was taken.",
                        "category": "APD"
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
            'circle-color': '#329ce8',
            'circle-opacity': 0.85,
            'circle-stroke-color': '#FFFFFF',
            'circle-stroke-width': 1
        }
    });


    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'points', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.copy;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(title)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'points', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'points', function() {
        map.getCanvas().style.cursor = '';
    });
});

map.scrollZoom.disable(); // disable scroll zoom
map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
