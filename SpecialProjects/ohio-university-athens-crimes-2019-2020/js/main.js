mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnN0b250MDUiLCJhIjoiY2pkeG96ajVoNG5wZzJ3cDBnMHJtdmUwMiJ9.aMosLr-Y_82V50tp2mgpYw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-82.1002, 39.32425], // starting position [lng, lat]
    zoom: 13.3,
    hash: true // starting zoom
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
                        "coordinates": [-82.103803, 39.3103532]
                    },
                    "properties": {
                        "date": "8/15/2019",
                        "Place": "",
                        "Address": "454 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 454 Richland Ave. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD took a report of a leaf blower that was stolen. ",
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
                        "Place": "",
                        "Address": "19 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 19 S. Congress St. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "A woman came to APD to file a theft report. A report was taken.",
                        "category": "APD"
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
                        "Place": "James Hall",
                        "Address": "97 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "James Hall 97 West Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was arrested for disporderly conduct by intoxication. He was transported to OhioHealth O'Bleness Hosipital by ACEMS.",
                        "category": "OUPD"
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
                        "Place": "",
                        "Address": "929 E State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 929 E State St. Athens OH 45701 ",
                        "Title": "Criminal Trespass",
                        "copy": "Officers responded to Walmart for a trespassing complaint. A report was taken.",
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
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "A report was taken for reference ceiling tile damage.",
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
                        "Place": "Tanaka Hall",
                        "Address": "121 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tanaka Hall 121 South Green Dr. Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "A resident assitant reported damage to a light pole outside of Tanaka Hall",
                        "category": "OUPD"
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
                        "Place": "",
                        "Address": "929 E State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 929 E State St. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD officers responded to Walmart for a report of a about $50 of merchadise stolen. A woman was cited for theft and released.",
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
                        "Place": "",
                        "Address": "0 Kern/Mill",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 0 Kern/Mill Athens OH 45701 ",
                        "Title": "Underage consumption of alcohol/obstructing offical business",
                        "copy": "Athens Mounted Patrol Units made contact with a man who had an open container of alcohol. He was charged with underage alcohol consumption and obstructing official business.",
                        "category": "APD"
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
                        "Place": "Hudson Health Center",
                        "Address": "2 Health Center Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Hudson Health Center 2 Health Center Dr Athens OH 45701 ",
                        "Title": "Alcohol",
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
                        "Place": "Ohio University Police Department",
                        "Address": "135 Scott Quad",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ohio University Police Department 135 Scott Quad Athens OH 45701 ",
                        "Title": "Fictitious/altered ID",
                        "copy": "OUPD took a report related to a fake ID.",
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
                        "Place": "Brown Hall",
                        "Address": "69 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Brown Hall 69 South Green Dr.  Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "A report was taken for reference of theft of \"Welcome\" banner.",
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
                        "Place": "Boyd dining Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd dining Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "Officers took a report of a theft of a purse",
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
                        "Place": "",
                        "Address": "319 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 319 E. State Street Athens OH 45701 ",
                        "Title": "Aggravated menacing/vandalism",
                        "copy": "APD received a call about a suspicious person at Speedway on E. State St. A report was taken and a man was arrested for vandalism and aggravated menacing. ",
                        "category": "APD"
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
                        "Place": "James Hall Garage",
                        "Address": "97 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "James Hall Garage 97 West Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
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
                        "Place": "Boyd Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was arrested for disporderly conduct by intoxication. He was transported to Southeastern Ohio Regional Jail. ",
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
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "Complainant requested an officer for a well-being check.",
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
                        "Place": "The Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The Convocation Center 95 Richland Ave. Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "EDC Deployment; canine deployment",
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
                        "Place": "Tiffin Hall",
                        "Address": "60 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tiffin Hall 60 East Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a student.",
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
                        "Place": "Phil and Pat Muck Business Annex",
                        "Address": "3 President St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Phil and Pat Muck Business Annex 3 President St Athens OH 45701 ",
                        "Title": "Fictitious/altered ID",
                        "copy": "OUPD received an ID in the lost and found that turned out to be a fake ID.",
                        "category": "OUPD"
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
                        "Place": "West Union St. Office Center",
                        "Address": "160 W. Union Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "West Union St. Office Center 160 W. Union Street Athens OH 45701 ",
                        "Title": "Recovered property",
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
                        "Place": "Crawford Hall",
                        "Address": "71 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Crawford Hall 71 South Green Dr. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "OUPD took information related to a reported theft",
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
                        "Place": "",
                        "Address": "10 S. Court Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 10 S. Court Street Athens OH 45701 ",
                        "Title": "Theft",
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
                        "Place": "",
                        "Address": "56 Avon St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 56 Avon St. Athens OH 45701 ",
                        "Title": "Theft/Misuse of credit card",
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
                        "Place": "Shively Hall",
                        "Address": "59 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Shively Hall 59 East Green Dr. Athens OH 45701 ",
                        "Title": "Bicycle Complaint",
                        "copy": "Complainant reported bicycle secured to handicap railing. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "8/27/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
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
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "Complainent requested ACEMS for a report of a seizure.",
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
                        "Place": "Boyd Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Telecommunication Harassment",
                        "copy": "Complainant reported harassment from an ex boyfriend.",
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
                        "date": "8/28/2019",
                        "Place": "Brown Hall",
                        "Address": "69 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Brown Hall 69 South Green Dr. Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "Complaint reported damage to the area",
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
                        "Place": "Tiffin Hall",
                        "Address": "60 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tiffin Hall 60 East Green Dr. Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "Subject taken into custody for a mental health evaluation.",
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
                        "Place": "Boyd Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "A report was taken in reference to the theft of a roomy key. ",
                        "category": "APD"
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
                        "Place": "Stephen's Bar",
                        "Address": "66 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Stephen's Bar 66 N. Court St. Athens OH 45701 ",
                        "Title": "Assault",
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
                        "Place": "",
                        "Address": "10 Milliron",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 10 Milliron Athens OH 45701 ",
                        "Title": "Criminal Damaging/Endangering",
                        "copy": "APD responded to a report of a vehicle being damaged on Milliron. A report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0939335, 39.3324119]
                    },
                    "properties": {
                        "date": "8/29/2019",
                        "Place": "Counseling and Psychological Services",
                        "Address": "2 Health Center Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Counseling and Psychological Services 2 Health Center Dr Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "CPS requested an officer to transport a person for a mental health evalutation.",
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
                        "Place": "Ryors Hall",
                        "Address": "101 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ryors Hall 101 West Green Dr. Athens OH 45701 ",
                        "Title": "Sex offense",
                        "copy": "A man was charged with sexual imposition. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1047246, 39.3251936]
                    },
                    "properties": {
                        "date": "8/30/2019",
                        "Place": "Sargent Hall",
                        "Address": "98 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Sargent Hall 98 West Green Dr. Athens OH 45701 ",
                        "Title": "Ficiticious ID",
                        "copy": "A student was issued a citation for possession of a fake ID",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0955077, 39.3260372]
                    },
                    "properties": {
                        "date": "8/30/2019",
                        "Place": "Washington Hall",
                        "Address": "49 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Washington Hall 49 East Green Dr. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "Report taken in reference to theft of wallet and key. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993864, 39.3257807]
                    },
                    "properties": {
                        "date": "8/31/2019",
                        "Place": "Ellis Hall",
                        "Address": "45 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ellis Hall 45 University Terrace Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A student was issued a citation for underage consumption intoxication and transported to Southeastern Ohio Regional Jail.",
                        "category": "OUPD"
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
                        "Place": "",
                        "Address": "25 Mill Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 25 Mill Street Athens OH 45701 ",
                        "Title": "Criminal Trespass/Disorderly Conduct by Intoxication",
                        "copy": "Officers responded to a Mill Street resudence in reference to an unknown man in the residence. The man was arrested for criminal trespass and disordely conduct by intoxication.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029537, 39.3210165]
                    },
                    "properties": {
                        "date": "8/31/2019",
                        "Place": "Peden Stadium",
                        "Address": "200 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Peden Stadium 200 Richland Ave Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1128182, 39.3335809]
                    },
                    "properties": {
                        "date": "8/31/2019",
                        "Place": "",
                        "Address": "0 West State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 0 West State Street Athens OH 45701 ",
                        "Title": "Sexual Battery",
                        "copy": "A 21-year-old woman reported she was a victim of sexual assault on the city's west end by an unknown subject. The matter is currently under investigation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1047246, 39.3251936]
                    },
                    "properties": {
                        "date": "9/1/2019",
                        "Place": "Sargent Hall",
                        "Address": "98 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Sargent Hall 98 West Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A student was issued a citationf for disorderly conduct by intoxication. ",
                        "category": "OUPD"
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
                        "Place": "",
                        "Address": "0 Congress/State Streets",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 0 Congress/State Streets Athens OH 45701 ",
                        "Title": "Arson",
                        "copy": "Officers lcoated a man trying to light a couch on fire. No suspects were apprehended, and a report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988667, 39.3210769]
                    },
                    "properties": {
                        "date": "9/1/2019",
                        "Place": "Ping Recreation Center",
                        "Address": "82 S Green Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ping Recreation Center 82 S Green Dr Athens OH 45701 ",
                        "Title": "Vandalism",
                        "copy": "Complaintant reported damage to bike path lights.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1136, 39.3339397]
                    },
                    "properties": {
                        "date": "9/2/2019",
                        "Place": "",
                        "Address": "300 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 300 W. State St. Athens OH 45701 ",
                        "Title": "Aggravated Menacing",
                        "copy": "Officiers responded to W. State St. in reference to a fight. ",
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
                        "Place": "",
                        "Address": "0 Congress/Rose St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 0 Congress/Rose St. Athens OH 45701 ",
                        "Title": "Arson",
                        "copy": "Officers located a recliner on fire in the street. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1136, 39.3339397]
                    },
                    "properties": {
                        "date": "9/2/2019",
                        "Place": "",
                        "Address": "300 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 300 W. State St. Athens OH 45701 ",
                        "Title": "Felonious Assault",
                        "copy": "APD responsded to a fight. A report was taken and charges are pending for multiple parties.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0987742, 39.3327861]
                    },
                    "properties": {
                        "date": "9/2/2019",
                        "Place": "",
                        "Address": "19 Franklin St. Athens",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 19 Franklin St. Athens Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD responde to a complaint of theft from a vehicle. A report was taken. The matter is closed to a lack of viable investigative leads.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988667, 39.3210769]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Ping Recreation Center",
                        "Address": "82 S Green Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ping Recreation Center 82 S Green Dr Athens OH 45701 ",
                        "Title": "Assault",
                        "copy": "A coplaintant was injured by an unknown perosn during a basketball game.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Forgery",
                        "copy": "Complaint reports receving possible fradulent checks",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A citation was issued to a man for theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0948219, 39.3220127]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Hoover House",
                        "Address": "136 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Hoover House 136 South Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "Complaintant reported a bicule taken from the area.",
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
                        "date": "9/3/2019",
                        "Place": "Ryors Hall",
                        "Address": "101 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ryors Hall 101 West Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A report was taken in reference to a bicycle theft",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091822, 39.322881]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Parking Lot 56",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 56  Athens OH 45701 ",
                        "Title": "Rape",
                        "copy": "A female student reported unwanted sexual conduct between her and a known male suspect. The incident occurred in 2017.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091822, 39.322881]
                    },
                    "properties": {
                        "date": "9/3/2019",
                        "Place": "Parking Lot 56",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 56  Athens OH 45701 ",
                        "Title": "Theft motor vehucle",
                        "copy": "A report was taken in reference to a motor vehicle theft. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.105119, 39.322918]
                    },
                    "properties": {
                        "date": "9/4/2019",
                        "Place": "Parking Lot 129",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 129  Athens OH 45701 ",
                        "Title": "Crash, Traffic",
                        "copy": "Complainant reports damage to a vehicle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/4/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "ACEMS arrived on scene. No transport was needed",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1142858, 39.3273729]
                    },
                    "properties": {
                        "date": "9/5/2019",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "OhioHealth O'Bleness Hospital 55 Hospital Dr Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD assisted O'Bleness security staff with a combative individual in their parking lot. A man was taken into protective custody and transported to the emergency room.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1006882, 39.3303786]
                    },
                    "properties": {
                        "date": "9/6/2019",
                        "Place": "",
                        "Address": "5 Mill St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 5 Mill St. Athens OH 45701 ",
                        "Title": "Aggravated Assault",
                        "copy": "APD took a report of an aggravated assault. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1036949, 39.3122399]
                    },
                    "properties": {
                        "date": "9/6/2019",
                        "Place": "",
                        "Address": "113 Carriage Hill Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 113 Carriage Hill Drive Athens OH 45701 ",
                        "Title": "Domestic Trouble",
                        "copy": "Officers responded to Carriage Hill Drive in reference to a 911 hang up call.",
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
                        "date": "9/6/2019",
                        "Place": "Shively Hall",
                        "Address": "59 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Shively Hall 59 East Green Dr. Athens OH 45701 ",
                        "Title": "Menacing",
                        "copy": "A woman reported an unknown man threatened her. A report was taken. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "9/6/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974951, 39.3250068]
                    },
                    "properties": {
                        "date": "9/6/2019",
                        "Place": "Shively Hall",
                        "Address": "59 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Shively Hall 59 East Green Dr. Athens OH 45701 ",
                        "Title": "Rape",
                        "copy": "OUPD received a report from a woman that a man engaged her in sexual conduct without consent in an unknown room at Shively Hall. The victim reported being hit on her head at some point during the incident and sustained minor phsycial injuries. The case is under investigation by OUPD",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973003, 39.325538]
                    },
                    "properties": {
                        "date": "9/6/2019",
                        "Place": "Perkins Hall",
                        "Address": "57 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Perkins Hall 57 East Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A verbal altercation was reported, but no criminal activity was found. Subjects would separate if necessary.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "9/6/2019",
                        "Place": "",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 929 E. State St. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD responded to Walmart for a report of a shoplifter. A man was served a charge for theft and trespassed from Walmart. He was arrested on an active warrent through APD and was transported to court. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1047246, 39.3251936]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "Sargent Hall",
                        "Address": "98 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Sargent Hall 98 West Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was charged with undrage consumption of alcohol and transported to OhioHealth O'Bleness Hospital by ACEMS",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1015846, 39.3279615]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "Chipotle Mexican Grill",
                        "Address": "41 S Court St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Chipotle Mexican Grill 41 S Court St Athens OH 45701 ",
                        "Title": "Criminal Trespass",
                        "copy": "Officers responded to a report of an unknown person inside Chipotle after hours.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1061822, 39.3254116]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "Wilson Hall",
                        "Address": "104 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Wilson Hall 104 West Green Dr. Athens OH 45701 ",
                        "Title": "Death",
                        "copy": "OUPD investigated an unattended death.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0927393, 39.3226014]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "True House",
                        "Address": "32 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "True House 32 South Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A report was taken in reference to a stolen bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1128196, 39.3214629]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "The Ridges",
                        "Address": "172 Water Tower Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The Ridges 172 Water Tower Dr Athens OH 45701 ",
                        "Title": "Menacing",
                        "copy": "OUPD responded to a reported distrubance in the cemetary area of The Ridges. Officers checked the area and found no signs of criminal activity. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0944598, 39.3253181]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "Pickering Hall",
                        "Address": "68 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Pickering Hall 68 South Green Dr. Athens OH 45701 ",
                        "Title": "Menancing",
                        "copy": "A complaintant reported that a man threatened her. A report was taken. ",
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
                        "date": "9/7/2019",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Menancing",
                        "copy": "A complaintant reported people urinating on dorm room doors.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E Union St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Templeton-Blackburn Alumni Memorial Auditorium 47 E Union St Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "EDC Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1008158, 39.3308303]
                    },
                    "properties": {
                        "date": "9/7/2019",
                        "Place": "",
                        "Address": "50 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 50 N. Court St. Athens OH 45701 ",
                        "Title": "Underage consumption of alcohol/criminal trespass",
                        "copy": "Officers responded to Dale's Valero in reference to an intoxicated man. The man was arrested and charged with underage consumption of alcohol and criminal trespass. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0752864, 39.336582]
                    },
                    "properties": {
                        "date": "9/8/2019",
                        "Place": "Athens Community Center",
                        "Address": "701 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Athens Community Center 701 E. State St. Athens OH 45701 ",
                        "Title": "Criminal Damaging/Endangering and Theft",
                        "copy": "Officers responded to a complaint of a theft from a vehicle. The passengers window was broken and $20 was stolen from the victim's wallet. A report was taken. ",
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
                        "date": "9/8/2019",
                        "Place": "Brown Hall",
                        "Address": "69 South Green Dr. Athens",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Brown Hall 69 South Green Dr. Athens Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "A complaint reported damage to an exit sign.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0970425, 39.3223306]
                    },
                    "properties": {
                        "date": "9/8/2019",
                        "Place": "Luchs Hall",
                        "Address": "115 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Luchs Hall 115 South Green Dr. Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "OUPD responded to a report of suspicious activity in the hall. Information was taken for a report. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1061822, 39.3254116]
                    },
                    "properties": {
                        "date": "9/8/2019",
                        "Place": "Wilson Hall",
                        "Address": "104 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Wilson Hall 104 West Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "Residental Hall was concerned about a student's well-being. Officers located the student. No action was necessary and resources were provided to the student.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0908726, 39.3375763]
                    },
                    "properties": {
                        "date": "9/8/2019",
                        "Place": "Kindred Market",
                        "Address": "284 E. State St. Athens",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Kindred Market 284 E. State St. Athens Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD took a report of shoplifting worth about $50. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "Nelson Commons",
                        "Address": "10 N McKinley Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Nelson Commons 10 N McKinley Ave Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was arrested for underage consumtion of alcohol and transported to Southeastern Ohio Regional Jail. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1255866, 39.3312034]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "",
                        "Address": "560 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 560 W. Union St. Athens OH 45701 ",
                        "Title": "Domestic Violence",
                        "copy": "Officers responded to a report of domestic violence. A man was arrested, taken to court and released by a judge. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988667, 39.3210769]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "Ping Recreation Center",
                        "Address": "82 S Green Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ping Recreation Center 82 S Green Dr Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A person reported items were taken from the area.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Menacing",
                        "copy": "OUPD met with a staff member in reference to a concerning email.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1078545, 39.3302817]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "West Union Street Office Center",
                        "Address": "160 W Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "West Union Street Office Center 160 W Union St. Athens OH 45701 ",
                        "Title": "Menacing",
                        "copy": "OUPD responded and took information related to a reported incident of menancing by stalking.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walmart 929 E. State St. Athens OH 45701 ",
                        "Title": "Menacing by stalking",
                        "copy": "Officers took a menacing by stalking report",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1079694, 39.3151204]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "",
                        "Address": "363 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 363 Richland Ave. Athens OH 45701 ",
                        "Title": "Telecommunication Harassment",
                        "copy": "A woman came to APD to file a harassment complaint. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0454807, 39.3367888]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "",
                        "Address": "904 Hope Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 904 Hope Drive Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD took a report of a stolen engagement ring and mood ring from a residence at Hope Drive Apartments.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "9/9/2019",
                        "Place": "The Convocation Center Garage",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The Convocation Center Garage 95 Richland Ave. Athens OH 45701 ",
                        "Title": "Traffic",
                        "copy": "A citation was issued for expired vehicle registration.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.108639, 39.329787]
                    },
                    "properties": {
                        "date": "9/10/2019",
                        "Place": "Parking Lot 154",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 154  Athens OH 45701 ",
                        "Title": "Crash, Traffic",
                        "copy": "A report was taken in reference to vehicle property damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "9/10/2019",
                        "Place": "Adams Hall",
                        "Address": "63 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A person reports items being taken from her room. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0944598, 39.3253181]
                    },
                    "properties": {
                        "date": "9/10/2019",
                        "Place": "Pickering Hall",
                        "Address": "68 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Pickering Hall 68 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A report was taken in reference to a missing person.The person was located by a parent and was in no distress.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.099422, 39.324214]
                    },
                    "properties": {
                        "date": "9/11/2019",
                        "Place": "Parking Lot 2",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 2  Athens OH 45701 ",
                        "Title": "Crash, Traffic",
                        "copy": "A report was taken in reference to vehicle property damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973367, 39.3241494]
                    },
                    "properties": {
                        "date": "9/11/2019",
                        "Place": "Morton Hall",
                        "Address": "24 Race St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Morton Hall 24 Race St Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "A person reported an unknown person wrote on a desk.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/11/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "larceny-Theft",
                        "copy": "A report was taken for a theft of a bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "9/12/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "EDC deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098851, 39.323134]
                    },
                    "properties": {
                        "date": "9/12/2019",
                        "Place": "Parking Lot 83",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 83  Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD responded to a report of a non-injury motor vehicle accident.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1159617, 39.3335273]
                    },
                    "properties": {
                        "date": "9/13/2019",
                        "Place": "",
                        "Address": "343 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 343 W. State St. Athens OH 45701 ",
                        "Title": "Criminal Damaging",
                        "copy": "APD responded for a criminal damaging complaint. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1010556, 39.3286324]
                    },
                    "properties": {
                        "date": "9/13/2019",
                        "Place": "Jimmy Johns Lot",
                        "Address": "16 S Court St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Jimmy Johns Lot 16 S Court St Athens OH 45701 ",
                        "Title": "Criminal Damaging/Endangering",
                        "copy": "APD took a report of a criminal damaging complaint. A report was filed. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951588, 39.3307677]
                    },
                    "properties": {
                        "date": "9/13/2019",
                        "Place": "",
                        "Address": "19 Palmer St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 19 Palmer St. Athens OH 45701 ",
                        "Title": "Criminal Mischief",
                        "copy": "APD responded to a report that a man fell from an electric pole. He was transported to OhioHealth O'Bleness Hospital by ACEMS.",
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
                        "date": "9/13/2019",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "OUPD took information related to a reported incident of vandalism. ",
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
                        "date": "9/13/2019",
                        "Place": "Tanaka Hall",
                        "Address": "121 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tanaka Hall 121 South Green Dr. Athens OH 45701 ",
                        "Title": "Recovered property",
                        "copy": "Drug paraphernalia was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106574, 39.325277]
                    },
                    "properties": {
                        "date": "9/13/2019",
                        "Place": "Parking Lot 114",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 114  Athens OH 45701 ",
                        "Title": "Recovered property",
                        "copy": "Contraband collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/13/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD and ACEMS responded for a report of a medical emergency. The person declined treatment and transportation by EMS.",
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
                        "date": "9/13/2019",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "ACEMS cleared woman after a notificaiton from 911. No transport was needed.",
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
                        "date": "9/14/2019",
                        "Place": "The Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The Convocation Center 95 Richland Ave. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was charged with disorderly conduct by intoxicated and transported to Southeasten Ohio Regional Jail. ",
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
                        "date": "9/14/2019",
                        "Place": "Ryors Hall",
                        "Address": "101 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ryors Hall 101 West Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was transported to Southeastern Ohio Regional Jail for underage consumption of alcohol and possession of a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0959152, 39.3266347]
                    },
                    "properties": {
                        "date": "9/14/2019",
                        "Place": "Read Hall",
                        "Address": "48 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Read Hall 48 East Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A citation was issued to a woman for underage consumption of alcohol",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988805, 39.3242332]
                    },
                    "properties": {
                        "date": "9/14/2019",
                        "Place": "Scott Quadrangle",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Scott Quadrangle  Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was issued a citation for disorderly conduct by intoxicaiton. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0962667, 39.3271412]
                    },
                    "properties": {
                        "date": "9/14/2019",
                        "Place": "Jefferson Hall",
                        "Address": "46 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Jefferson Hall 46 East Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was arrested for underage consumption of alochol and intoxication.",
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
                        "date": "9/14/2019",
                        "Place": "Brown Hall",
                        "Address": "69 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Brown Hall 69 South Green Dr. Athens Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A man was transported to OhioHealth O'Bleness Hospital for an evalutaion.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1001665, 39.3254304]
                    },
                    "properties": {
                        "date": "9/16/2019",
                        "Place": "Vernon R. Alden Library",
                        "Address": "30 Park Pl",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Vernon R. Alden Library 30 Park Pl Athens OH 45701 ",
                        "Title": "larceny-Theft",
                        "copy": "A person reports several items were taken from the area.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1040907, 39.339713]
                    },
                    "properties": {
                        "date": "9/16/2019",
                        "Place": "",
                        "Address": "70 Columbus Road",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 70 Columbus Road Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD took a report of of a scam that resulted in a theft. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.100046, 39.325877]
                    },
                    "properties": {
                        "date": "9/17/2019",
                        "Place": "Wolfe Garden (between Alden and Culter Hall)",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Wolfe Garden (between Alden and Culter Hall)  Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "A person reported an unapproved art installation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0604328, 39.3364058]
                    },
                    "properties": {
                        "date": "9/17/2019",
                        "Place": "",
                        "Address": "968 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": " 968 E. State St. Athens OH 45701 ",
                        "Title": "Receiving Stolen Property",
                        "copy": "APD took a report.",
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
                        "date": "9/17/2019",
                        "Place": "Brown Hall",
                        "Address": "69 South Green Dr. Athens",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Brown Hall 69 South Green Dr. Athens Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A person requested a welfare check for a woman. Officers spoke to her, and she said everything was OK. There were no signs of emergency or criminal activity.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1673979, 39.4030189]
                    },
                    "properties": {
                        "date": "9/17/2019",
                        "Place": "Wayne National Forest Headquarters",
                        "Address": "13700 US 33",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Wayne National Forest Headquarters 13700 US 33 Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD responded to a report of a city parking meter courtsey box found in a trash can.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.108077, 39.3274444]
                    },
                    "properties": {
                        "date": "9/17/2019",
                        "Place": "Parking Services",
                        "Address": "100 Factory Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Services 100 Factory Street Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "A person reports university services purchased with stolen credit card.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "9/18/2019",
                        "Place": "Adams Hall",
                        "Address": "63 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A woman was transported to OhioHealth O'Bleness Hospital for emergency pre-screen.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1021605, 39.3263824]
                    },
                    "properties": {
                        "date": "9/18/2019",
                        "Place": "Bentley Hall",
                        "Address": "4 President St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bentley Hall 4 President St Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A report was taken for a stolen backpack.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1041394, 39.3255393]
                    },
                    "properties": {
                        "date": "9/18/2019",
                        "Place": "Treudley Hall",
                        "Address": "99 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Treudley Hall 99 West Green Dr. Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "A report was taken for a possible fraud.",
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
                        "date": "9/19/2019",
                        "Place": "Boyd Dining Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Dining Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Burglary",
                        "copy": "A man was located inside Boyd Markey when officers responded to an alarm activation. The incident is under investigation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0961568, 39.3479241]
                    },
                    "properties": {
                        "date": "9/19/2019",
                        "Place": "New-to-You",
                        "Address": "90 Columbus Road",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "New-to-You 90 Columbus Road Athens OH 45701 ",
                        "Title": "Criminal Damaging/Endangering",
                        "copy": "APD responded to New-to-You to take a report of damaging to a Pepsi vending machine",
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
                        "date": "9/19/2019",
                        "Place": "Boyd Dining Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Dining Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A man was transported to OhioHealth O'Bleness Hospital for an evalutaion.",
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
                        "date": "9/19/2019",
                        "Place": "Hudson Health Center",
                        "Address": "2 Health Center Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Hudson Health Center 2 Health Center Dr Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "Counseling and Pyschological Services requested an officer for an emergency pre-screen.",
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
                        "date": "9/19/2019",
                        "Place": "Boyd Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Fictitious/altered ID",
                        "copy": "A fake ID was collected for destruction",
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
                        "date": "9/19/2019",
                        "Place": "Tiffin Hall",
                        "Address": "60 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tiffin Hall 60 East Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A person reported a theft of a wallet",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.100838, 39.3283951]
                    },
                    "properties": {
                        "date": "9/19/2019",
                        "Place": "Athena Cinema",
                        "Address": "20 S Court St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Athena Cinema 20 S Court St Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "9/19/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "Canine sweep",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1142858, 39.3273729]
                    },
                    "properties": {
                        "date": "9/19/2019",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "OhioHealth O'Bleness Hospital 55 Hospital Dr Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A SANE Kit was collected and taken to APD.",
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
                        "date": "9/20/2019",
                        "Place": "The Convocation Center",
                        "Address": "95 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The Convocation Center 95 Richland Ave Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "Two men were charged with criminal mischief. Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0944598, 39.3253181]
                    },
                    "properties": {
                        "date": "9/20/2019",
                        "Place": "Pickering Hall",
                        "Address": "68 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Pickering Hall 68 South Green Dr. Athens OH 45701 ",
                        "Title": "Ficiticious/altered ID",
                        "copy": "A fake ID was collected for destruction",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1060054, 39.3266594]
                    },
                    "properties": {
                        "date": "9/20/2019",
                        "Place": "Academic Research Center",
                        "Address": "61 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Academic Research Center 61 Oxbow Trail Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A report was taken for a theft of a bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "9/20/2019",
                        "Place": "Adams Hall",
                        "Address": "63 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "OUPD met with Housing and Pro Staff on duty at Adams Hall in reference to a concern over an item of contraband. No criminal activity was noted.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1010919, 39.3317879]
                    },
                    "properties": {
                        "date": "9/21/2019",
                        "Place": "Courtside Pizza",
                        "Address": "85 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Courtside Pizza 85 N. Court St. Athens OH 45701 ",
                        "Title": "Criminal Damaging/Endangering",
                        "copy": "APD took a report to damage done to a vehicle's windshield whipper. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0984109, 39.3242396]
                    },
                    "properties": {
                        "date": "9/21/2019",
                        "Place": "Ohio University Police Department",
                        "Address": "135 Scott Quad",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ohio University Police Department 135 Scott Quad Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A person was transported to OhioHealth O'Bleness Hospital for an evaluation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "9/21/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E Union St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Templeton-Blackburn Alumni Memorial Auditorium 47 E Union St Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "EDC Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1050143, 39.3219546]
                    },
                    "properties": {
                        "date": "9/21/2019",
                        "Place": "Bingham House",
                        "Address": "97 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bingham House 97 Richland Ave Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "ACEMS responded to a report of a broken ankle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.087663, 39.3372252]
                    },
                    "properties": {
                        "date": "9/21/2019",
                        "Place": "Speedway",
                        "Address": "319 E State St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Speedway 319 E State St Athens OH 45701 ",
                        "Title": "Trafficking in Cocaine and Trafficking in Marijuana",
                        "copy": "APD was assisted by the Athens County Sheriff's Office to arrest two men who were in possession of cocaine and marijuana. The men were taken to Southeastern Ohio Regional Jail.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988805, 39.3242332]
                    },
                    "properties": {
                        "date": "9/22/2019",
                        "Place": "Scott Quadrangle",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Scott Quadrangle  Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "OUPD took a report for information related to a incident of criminal mischief",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974951, 39.3250068]
                    },
                    "properties": {
                        "date": "9/22/2019",
                        "Place": "Shively Hall",
                        "Address": "59 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Shively Hall 59 East Green Dr. Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "OUPD transported a person to OhioHealth O'Bleness Hosipital for an evalutation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0975068, 39.3269364]
                    },
                    "properties": {
                        "date": "9/22/2019",
                        "Place": "Lincoln Hall",
                        "Address": "45 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Lincoln Hall 45 East Green Dr. Athens OH 45701 ",
                        "Title": "Extortion",
                        "copy": "A person reported being backmailed via Facebook Messenger.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0986173, 39.3265007]
                    },
                    "properties": {
                        "date": "9/23/2019",
                        "Place": "Bryan Hall",
                        "Address": "22 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bryan Hall 22 University Terrace Athens OH 45701 ",
                        "Title": "Computer Crime",
                        "copy": "Officers took information related to an alleged incident of a computer crime. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097807, 39.3223797]
                    },
                    "properties": {
                        "date": "9/23/2019",
                        "Place": "Sowle Hall",
                        "Address": "105 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Sowle Hall 105 South Green Dr. Athens OH 45701 ",
                        "Title": "Drugs",
                        "copy": "OUPD collected marijuana drug paraphanelia for destruction.",
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
                        "date": "9/23/2019",
                        "Place": "Boyd Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall 100 West Green Dr. Athens OH 45701 ",
                        "Title": "Drugs",
                        "copy": "OUPD responded to Boyd Hall at the request of Housing and Residence Life staff adn secured items of contrabrand. ",
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
                        "date": "9/23/2019",
                        "Place": "James Hall",
                        "Address": "97 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "James Hall 97 West Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "Officers conducted a well-being check on a resident of James Hall. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1044654, 39.3327877]
                    },
                    "properties": {
                        "date": "9/24/2019",
                        "Place": "",
                        "Address": "46 Lancaster St. ",
                        "City": "Athens",
                        "State": "OH ",
                        "Zip": 45701,
                        "Full Address": "46 Lancaster St. Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "Two women reported that their apartment was entered overnight and items were stolen ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0965688, 39.3227749]
                    },
                    "properties": {
                        "date": "9/24/2019",
                        "Place": "Tanaka Hall",
                        "Address": "121 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tanaka Hall 121 South Green Dr. Athens OH 45701 ",
                        "Title": "Drugs",
                        "copy": "A report was complete concerning the collection of contrabanf",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974951, 39.3250068]
                    },
                    "properties": {
                        "date": "9/24/2019",
                        "Place": "Shively Hall",
                        "Address": "59 East Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Shively Hall 59 East Green Dr. Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A woman was transported to OhioHealth O'Bleness Hospital for an evalutaiton.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0969441, 39.3211206]
                    },
                    "properties": {
                        "date": "9/24/2019",
                        "Place": "Ohio University Golf and Tennis Center",
                        "Address": "106 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ohio University Golf and Tennis Center 106 S. Green Dr. Athens, OH 45701",
                        "Title": "Larceny-Theft",
                        "copy": "OUPD took information related to a theft",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1002226, 39.3295467]
                    },
                    "properties": {
                        "date": "9/24/2019",
                        "Place": "Athens Police Department",
                        "Address": "11 N. College St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Athens Police Department 11 N. College St. Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD assisted with a wefare check of an OU student. ",
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
                        "date": "9/24/2019",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD and ACEMS repsponded to the hall for a reported medical emergency.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1001665, 39.3254304]
                    },
                    "properties": {
                        "date": "9/25/2019",
                        "Place": "Alden Library",
                        "Address": "30 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Vernon R. Alden Library, 30 Park Place Athens, OH 45701",
                        "Title": "Destruction Property",
                        "copy": "A complainant reports writing on the wall. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097955, 39.321917]
                    },
                    "properties": {
                        "date": "9/25/2019",
                        "Place": "Parking Lot 87",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 87",
                        "Title": "Destruction Property",
                        "copy": "An officer located a damaged light pole.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "9/25/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0962667, 39.3271412]
                    },
                    "properties": {
                        "date": "9/25/2019",
                        "Place": "Jefferson Hall",
                        "Address": "46 East Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Jefferson Hall 46 East Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A person requested a welfare check. The person was transported to OhioHealth O'Bleness Hospital by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106646, 39.323560]
                    },
                    "properties": {
                        "date": "9/26/2019",
                        "Place": "Parking Lot 128",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 128",
                        "Title": "Crash, Traffic",
                        "copy": "OUPD responded to a reported non-injury vehicle accident. Information taken for a report.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "9/26/2019",
                        "Place": "Adams Hall",
                        "Address": "63 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Menacing",
                        "copy": "A person reported a fight between two men. It is under investigation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/26/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Sevice Call",
                        "copy": "OUPD and ACEMS repsoonded to Baker Center for a reported medical emergency. The subject decline treatment and transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0948541, 39.3242702]
                    },
                    "properties": {
                        "date": "9/27/2019",
                        "Place": "Mackinnon Hall",
                        "Address": "70 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "MacKinnon Hall 70 South Green Dr., Athens, OH 45701",
                        "Title": "Drugs",
                        "copy": "Resident Assistant reported finding contraband while doing a room inspection.",
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
                        "date": "9/27/2019",
                        "Place": "Crawford Hall",
                        "Address": "71 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Crawford Hall 71 South Green Dr. Athens OH 45701 ",
                        "Title": "larceny-Theft",
                        "copy": "OUPD took information related to reported theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "9/27/2019",
                        "Place": "Nelson Hall",
                        "Address": "10 N McKinley Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Nelson Commons 10 N McKinley Ave Athens OH 45701 ",
                        "Title": "Recovered property",
                        "copy": "OUPD met with a subject who located property outside of Nelson Commons. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0948541, 39.3242702]
                    },
                    "properties": {
                        "date": "9/28/2019",
                        "Place": "Mackinnon Hall",
                        "Address": "70 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "MacKinnon Hall 70 South Green Dr., Athens, OH 45701",
                        "Title": "Alcohol",
                        "copy": "A man was charger with underage consumption of alcohol and intoxication. He was transported to Southeastern Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988593, 39.3311806]
                    },
                    "properties": {
                        "date": "9/28/2019",
                        "Place": "",
                        "Address": "50 East State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "50 East State Street, Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD was dispatched to an assuault. Three subjects were assault, and two were transported to OhioHealth O'Bleness Hospital by ACEMS. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/28/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Trespass",
                        "copy": "A report was taken for criminal trespassing for a person sleeping in a building. ",
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
                        "date": "9/29/2019",
                        "Place": "Ryors Hall",
                        "Address": "101 West Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ryors Hall 101 West Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A complainant reuqested a welfare check for a man. Everything wa OK and there were no signs of emergency or criminal activity.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964634, 39.3255027]
                    },
                    "properties": {
                        "date": "9/29/2019",
                        "Place": "Gamersfelder Hall",
                        "Address": "58 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Gamerstfelder Hall 58 East Green Dr.",
                        "Title": "Service Call",
                        "copy": "Welfare check of a woman. Officers spoke with the woman and everything was OK. There were no signs of emergency or criminal activity. ",
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
                        "date": "9/29/2019",
                        "Place": "James Hall",
                        "Address": "97 West Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "James Hall 97 West Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "Welfare check of a woman. Officers spoke with the woman, and there were no signs of emergency or criminal activity.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/29/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD and ACEMS responded to Baker Center for a reporteed medical emergency. The subject declined transport to the hospital by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0939335, 39.3324119]
                    },
                    "properties": {
                        "date": "9/30/2019",
                        "Place": "Counseling and Psycological Services",
                        "Address": "2 Health Center Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Counseling and Psychological Services 2 Health Center Dr Athens OH 45701 ",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "OUPD transported a person to OhioHealth O'Bleness Hosipital for an evalutation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "9/30/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.108058, 39.325352]
                    },
                    "properties": {
                        "date": "9/30/2019",
                        "Place": "Parking Lot 111",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 111",
                        "Title": "Service Call",
                        "copy": "A person reported damage to their vehicle. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106835, 39.3307829]
                    },
                    "properties": {
                        "date": "9/30/2019",
                        "Place": "",
                        "Address": "14 Smith Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "14 Smith St. Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of theft that occurred between 7 p.m. on Sept. 26 to 11 a.m. on Sept. 30. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102288, 39.325271]
                    },
                    "properties": {
                        "date": "10/1/2019",
                        "Place": "Parking Lot 122",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 122",
                        "Title": "Crash, Traffic",
                        "copy": "A person reported a traffic accident. ",
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
                        "date": "10/1/2019",
                        "Place": "Crawford Hall",
                        "Address": "71 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Crawford Hall 71 South Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A complainant reports her bicycle was taken form the area.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "10/1/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "10/1/2019",
                        "Place": "Templeton Blackburn Memorial Auditorium ",
                        "Address": "47 E. Union Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Templeton Blackburn Memorial Auditorium 47 E. Union St., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deplotment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0927393, 39.3226014]
                    },
                    "properties": {
                        "date": "10/1/2019",
                        "Place": "True House",
                        "Address": "32 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "True House 32 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A complaintant requested ACEMS for a general illness.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106574, 39.325277]
                    },
                    "properties": {
                        "date": "10/1/2019",
                        "Place": "Parking Lot 114",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 114  ",
                        "Title": "Service Call",
                        "copy": "A person reported damage to a vehicle. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0948219, 39.3220127]
                    },
                    "properties": {
                        "date": "10/1/2019",
                        "Place": "Hoover House",
                        "Address": "136 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Hoover House 136 South Green Dr. Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "A complainant reports online purchased was never received.",
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
                        "date": "10/2/2019",
                        "Place": "Ohio University Police Department",
                        "Address": "135 Scott Quad",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ohio University Police Department 135 Scott Quad Athens OH 45701 ",
                        "Title": "Assault",
                        "copy": "A person reporeted an assault.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "10/2/2019",
                        "Place": "Adams Hall",
                        "Address": "63 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "A citation was issued for criminal damaging.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/2/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center 1 Park Place Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A woman reported her bicycle was taken from the area.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "10/3/2019",
                        "Place": "Adams Hall",
                        "Address": "63 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Alcohol",
                        "copy": "A man was transported to Southeastern Ohio Regional Jail for disorderly conduct by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106888, 39.323634]
                    },
                    "properties": {
                        "date": "10/3/2019",
                        "Place": "Parking Lot 127",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 127",
                        "Title": "Crash, Traffic",
                        "copy": "OUPD took a report for an incident of criminal damaging.",
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
                        "date": "10/3/2019",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "A complaintant reported suspicious activity on the fourth floor of Bromley Hall officers to complaint to be unfounded.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1012554, 39.3292396]
                    },
                    "properties": {
                        "date": "10/3/2019",
                        "Place": "",
                        "Address": "23 Palmer Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Athens, OH 45701",
                        "Title": "Rape",
                        "copy": "A 20-year-old woman reported she was the victim of sexual assault on the city's east end by a known subject. The matter is underinvestigation and no further infromation will be released at this time. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106574, 39.325277]
                    },
                    "properties": {
                        "date": "10/3/2019",
                        "Place": "Parking Lot 114",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 114 ",
                        "Title": "Service Call",
                        "copy": "A complainant requested welfare check of a man. Officers spoke to the man. There were no signs of emergency or criminal activity.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1033889, 39.3274403]
                    },
                    "properties": {
                        "date": "10/4/2019",
                        "Place": "Lasher Hall",
                        "Address": "43 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Lasher Hall, 43 W. Union St., Athens, OH 45701",
                        "Title": "Destruction Property",
                        "copy": "A custodial staff reported an open window and interior lights flashing in Lasher Hall. Officers check the building and secured several doors and windows. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.095986, 39.3220978]
                    },
                    "properties": {
                        "date": "10/5/2019",
                        "Place": "Adams Hall",
                        "Address": "63 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Adams Hall 63 South Green Dr. Athens OH 45701 ",
                        "Title": "Trespass",
                        "copy": "A citation was issued for underage consumption of alcohol and criminal trespass.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1031058, 39.3303304]
                    },
                    "properties": {
                        "date": "10/6/2019",
                        "Place": "",
                        "Address": "30 N. High St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 N. High St., Athens, OH 45701",
                        "Title": "Criminal Damaging",
                        "copy": "APD responded to a report of criminal damaging that occured at 3 a.m. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10068, 39.329015]
                    },
                    "properties": {
                        "date": "10/6/2019",
                        "Place": "Ball Law Office Attorneys & Counselors At Law",
                        "Address": "11 E. Washington St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "11 E. Washington St., Athens, OH 45701",
                        "Title": "Grand Theft",
                        "copy": "A report was taken of grand theft of a motor vehicle that occurred between 4:30 p.m. on Oct. 5 and 2 a.m. on Oct. 6.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1008158, 39.3312734]
                    },
                    "properties": {
                        "date": "10/6/2019",
                        "Place": "",
                        "Address": "66 N. Court Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "66 N. Court St., Athens, OH 45701",
                        "Title": "Theft/misuse of credit card",
                        "copy": "APD took a report of theft and misuse of credit cards. It was reported that a wallet, $20 cash and two credit cards were stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1060258, 39.3298754]
                    },
                    "properties": {
                        "date": "10/7/2019",
                        "Place": "",
                        "Address": "5 Foster Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "5 Foster Place, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of two stolen bicycles.",
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
                        "date": "10/7/2019",
                        "Place": "Walmart",
                        "Address": "929 East State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walmart 929 East State Street, Athens, OH 45701",
                        "Title": "Theft/Failure to appear-bail",
                        "copy": "APD responded to Walmart for a report of a shoplifter. A man was found to have a warrant through the Ohio State Highway Patrol. The man was taken to Southeastern Ohio Regional Jail for the warrant and served a charge for theft. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0927393, 39.3226014]
                    },
                    "properties": {
                        "date": "10/8/2019",
                        "Place": "True House",
                        "Address": "32 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "True House 32 South Green Dr. Athens OH 45701 ",
                        "Title": "Computer Crime",
                        "copy": "A report was taken in  reference to possible money theft by fraud.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1078545, 39.3302817]
                    },
                    "properties": {
                        "date": "10/8/2019",
                        "Place": "West Union Street Office Center",
                        "Address": "160 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "West Union Street Office Center, 160 W. Union St., Athens, OH 45701",
                        "Title": "Fictitious/altered ID",
                        "copy": "A citation was issued for a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "10/8/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/8/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "ACEMS responded to a medical related emergency",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/8/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "A report was taken in reference for a student refusal of ACEMS transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10068, 39.329015]
                    },
                    "properties": {
                        "date": "10/8/2019",
                        "Place": "Ball Law Office Attorneys & Counselors At Law",
                        "Address": "11 E. Washington St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ball Law Office Attorneys & Counselors At Law, 11 E. Washington St., Athens, OG 45701",
                        "Title": "Theft",
                        "copy": "A man went to APD to report a theft. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1009011, 39.3294866]
                    },
                    "properties": {
                        "date": "10/9/2019",
                        "Place": "Skin Hooked Tattoo",
                        "Address": "8 N. Court Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Skin Hooked Tattoo, 8 N. Court St., Athens, OH 45701",
                        "Title": "Breaking and Entering- commit theft offense",
                        "copy": "Skin Hooked Tattoo reported a window that was broken out. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0934004, 39.3230938]
                    },
                    "properties": {
                        "date": "10/9/2019",
                        "Place": "Weld House",
                        "Address": "22 Weld Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Weld House, 22 Weld Dr., Athens, OH 45701",
                        "Title": "Larceny-Theft",
                        "copy": "A complainant reports a battery removed from the generator.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029463, 39.3227493]
                    },
                    "properties": {
                        "date": "10/9/2019",
                        "Place": "Walter Hall",
                        "Address": "25 S. Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walter Hall, 25 S. Green Dr., Athens, Oh 45701",
                        "Title": "Service Call",
                        "copy": "A report taken for subject refusal for ACEMS transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1105133, 39.3320091]
                    },
                    "properties": {
                        "date": "10/9/2019",
                        "Place": "",
                        "Address": "15 Shafer Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 Shafer St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report that a theft occured between 8 p.m. Oct. 4 and 9 a.m. on Oct. 5. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.109385, 39.320333]
                    },
                    "properties": {
                        "date": "10/10/2019",
                        "Place": "Ridges Building 4",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ridges Building 4",
                        "Title": "Destruction Property",
                        "copy": "A person reported damage to the building.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.093357, 39.325479]
                    },
                    "properties": {
                        "date": "10/10/2019",
                        "Place": "Parking Lot 51",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 51",
                        "Title": "Destruction Property",
                        "copy": "OUPD responded to an incident of criminal damaging.",
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
                        "date": "10/10/2019",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "OUPD met with a person in reference to a reported bicycle theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029463, 39.3227493]
                    },
                    "properties": {
                        "date": "10/10/2019",
                        "Place": "Walter Hall",
                        "Address": "25 S. Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walter Hall, 25 S. Green Dr., Athens, Oh 45701",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.096820, 39.328983]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Parking Lot 41",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 41",
                        "Title": "Alcohol",
                        "copy": "A woman was arrested for disorderly conduct by intoxication and transported to Southeastern Ohio Regional Jail. A fake ID was collected for destruction. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0944598, 39.3253181]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Pickering Hall",
                        "Address": "68 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Pickering Hall 68 South Green Dr. Athens OH 45701",
                        "Title": "Assault",
                        "copy": "A report was taken for an assault.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0962667, 39.3271412]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Jefferson Hall",
                        "Address": "46 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Jefferson Hall, 46 E. Green Dr., Athens, OH 45701",
                        "Title": "Computer Crime",
                        "copy": "A person reported giving personal information to an unknown caller.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1031338, 39.3270201]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Researcha and Technology Center",
                        "Address": "3 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Researcha and Technology Center, 3 Richland Ave., Athens, OH 45701",
                        "Title": "Crash, Traffic",
                        "copy": "Officers took information related to damage to a parked vehicle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973003, 39.325538]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Perkins Hall",
                        "Address": "57 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Perkins Hall 57 East Green Dr. Athens OH 45701",
                        "Title": "Destruction Property",
                        "copy": "OUPD responded to a report of criminal mischief. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1009633, 39.3301026]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "The CI",
                        "Address": "32 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The CI, 32 N. Court St., Athens, OH 45701",
                        "Title": "Disorderly conduct- fighting or threatening/Obstructing offical business",
                        "copy": "Officers responded to a report of multiple fights behing The CI.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1047246, 39.3251936]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Sargent Hall",
                        "Address": "98 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Sargent Hall, 98 West Green Dr., Athens, OH 45701",
                        "Title": "Drugs",
                        "copy": "A report taken in reference to seized contraband",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine Deplotment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0962667, 39.3271412]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "Jefferson Hall",
                        "Address": "46 E. Green",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Jefferson Hall, 46 E. Green Dr., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "OUPD conducted a well-being check on a resident of Jefferson Hall.",
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
                        "date": "10/11/2019",
                        "Place": "Boyd Hall",
                        "Address": "100 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall, 100 West Green Dr., Athens, OH 45701",
                        "Title": "Theft ",
                        "copy": "A report taken in reference to theft of personal property.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0971869, 39.3325502]
                    },
                    "properties": {
                        "date": "10/11/2019",
                        "Place": "",
                        "Address": "105 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "105 E. State St., Athens, OH, 45701",
                        "Title": "Underage consumpiton",
                        "copy": "APD responded to a man banging on a vehicle on East State Street.. The man was arrested for underage consumption.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029537, 39.3210165]
                    },
                    "properties": {
                        "date": "10/12/2019",
                        "Place": "Peden Stadium",
                        "Address": "200 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Peden Stadium, 200 Richland Ave., Athens, OH 45701",
                        "Title": "Disorderly conduct",
                        "copy": "A man reported a person throwing objects at him. Suspects were gone when officers arrived. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097807, 39.3223797]
                    },
                    "properties": {
                        "date": "10/12/2019",
                        "Place": "Sowle Hall",
                        "Address": "105 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Sowle Hall, 105 S. Green Dr., Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A woman was transported to OhioHealth O'Bleness Hospital by ACEMS for evaluation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029537, 39.3210165]
                    },
                    "properties": {
                        "date": "10/12/2019",
                        "Place": "Peden Stadium",
                        "Address": "200 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Peden Stadium, 200 Richland Ave., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine deployment for homecoming parade and football game",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964634, 39.3255027]
                    },
                    "properties": {
                        "date": "10/12/2019",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Gamersfelder Hall, 58 E. Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a person. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.100955, 39.3301722]
                    },
                    "properties": {
                        "date": "10/13/2019",
                        "Place": "The Crystal",
                        "Address": "34 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "The Crystal, 34 N. Court St., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "APD took a report of a damaged meter head.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0985287, 39.3260733]
                    },
                    "properties": {
                        "date": "10/13/2019",
                        "Place": "Tupper Hall",
                        "Address": "42 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Tupper Hall, 42 University Terrace, Athens, OH 45701",
                        "Title": "Destruction Property",
                        "copy": "OUPD and Athens Fire Department responed to a dumpster fire outside Tupper Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1004115, 39.3305651]
                    },
                    "properties": {
                        "date": "10/13/2019",
                        "Place": "Domino's Pizza",
                        "Address": "12 Mill St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Domino's Pizza, 12 Mill St., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD responded to the parking lot of Dominos Pizz at the request of APD to assist and elderly subject with a medical emergency. The subject was transported to OhioHealth O'Bleness Hospotal by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964634, 39.3255027]
                    },
                    "properties": {
                        "date": "10/13/2019",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Gamersfelder Hall, 58 E. Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD responded to the first floor of Gamertsfelder Hall to conduct a well-being check on a resident",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1034602, 39.3130863]
                    },
                    "properties": {
                        "date": "10/13/2019",
                        "Place": "Speedway",
                        "Address": "414 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Speedway, 414 Richland Ave., Athens. OH 45701",
                        "Title": "Theft",
                        "copy": "Officers responded to Speedway in reference to a theft. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1121, 39.334701]
                    },
                    "properties": {
                        "date": "10/14/2019",
                        "Place": "West Elementary School ",
                        "Address": "41 Central Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "West Elementary School, 41 Central Ave., Athens, OH 45701",
                        "Title": "Breaking and entering",
                        "copy": "APD took a report of a break in at the school overnight. An investigation is penidng. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1010919, 39.3317879]
                    },
                    "properties": {
                        "date": "10/14/2019",
                        "Place": "Courtside Pizza",
                        "Address": "85 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Courtside Pizza, 85 N. Court St., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "APD took a report for criminal damaging. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0948541, 39.3242702]
                    },
                    "properties": {
                        "date": "10/14/2019",
                        "Place": "Mackinnon Hall",
                        "Address": "70 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "MacKinnon Hall 70 South Green Dr., Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A person was transported to OhioHealth O'Bleness Hospital for an evaluation.",
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
                        "date": "10/14/2019",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Bromley Hall 35 S. Congress St. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A person reported a theft of laundry.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/14/2019",
                        "Place": "Baker Univesity Center ",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Protection",
                        "copy": "A person spoke to an officer about a protection order violation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102287, 39.325270]
                    },
                    "properties": {
                        "date": "10/14/2019",
                        "Place": "Parking Lot 122",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Parking Lot 122",
                        "Title": "Service Call",
                        "copy": "A complainant reported damage to trees caused by delivery vehicle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964634, 39.3255027]
                    },
                    "properties": {
                        "date": "10/14/2019",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Gamersfelder Hall, 58 E. Green Dr., Athens, OH 45701",
                        "Title": "Sevice Call",
                        "copy": "OUPD conducted a well-being check on a resident of Gamerstfelder Hall. The resident was OK and no further action was needed.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "10/15/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/15/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Recovered property",
                        "copy": "A report taken for recovered property and was marked for destruction.",
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
                        "date": "10/15/2019",
                        "Place": "Carr Hall",
                        "Address": "97 S. Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A report was taken in reference to a person for refusal of ACEMS transport to the Emergency Room.",
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
                        "date": "10/15/2019",
                        "Place": "Carr Hall",
                        "Address": "97 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A report was taken in reference to a person for refusal of ACEMS transport to the Emergency Room.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1013889, 39.324358]
                    },
                    "properties": {
                        "date": "10/15/2019",
                        "Place": "President's residence",
                        "Address": "29 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "President's Residence, 29 Park Place, Athens OH 45701 ",
                        "Title": "Trespass",
                        "copy": "A person reported damage to a window pane.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1031338, 39.3270201]
                    },
                    "properties": {
                        "date": "10/16/2019",
                        "Place": "Research and Techology Center",
                        "Address": "3 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Research and Technology Center, 3 Richland Ave., Athens, OH 45701",
                        "Title": "Crash, Traffic",
                        "copy": "A person reported a traffic accident. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.05525, 39.3368952]
                    },
                    "properties": {
                        "date": "10/16/2019",
                        "Place": "Athens Farmers Market",
                        "Address": "1006 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1006 E. State St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to the Athens Farmer's Market storage behind Tractor Supply for the report of damage. ",
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
                        "date": "10/16/2019",
                        "Place": "Walmart",
                        "Address": "929 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walmart 929 East State Street, Athens, OH 45701",
                        "Title": "Criminal Trespass",
                        "copy": "Officers responed to Walmart for a trespassing complaint. A man was arrested and charged with criminal trespass.",
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
                        "date": "10/16/2019",
                        "Place": "Shively Hall",
                        "Address": "59 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Shively Hall 59 East Green Dr. Athens OH 45701 ",
                        "Title": "Larceny-Theft",
                        "copy": "A report taken for a theft of a meal plan.",
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
                        "date": "10/16/2019",
                        "Place": "Boyd Hall",
                        "Address": "100 W. Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall, 100 West Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "A report taken for a student's well-being.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029463, 39.3227493]
                    },
                    "properties": {
                        "date": "10/16/2019",
                        "Place": "Walter Hall",
                        "Address": "25 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walter Hall, 25 S. Green Dr., Athens, Oh 45701",
                        "Title": "Service Call",
                        "copy": "A report taken for student refusal of ACEMS.",
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
                        "date": "10/16/2019",
                        "Place": "Carr Hall",
                        "Address": "97 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "A report taken for student refusal of ACEMS transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.101709, 39.3279505]
                    },
                    "properties": {
                        "date": "10/16/2019",
                        "Place": "",
                        "Address": "41 S. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "41 S. Court St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A report was taken for a stolen package. The theft occurred on Oct. 15. The case is pending an investigation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1061822, 39.3254116]
                    },
                    "properties": {
                        "date": "10/17/2019",
                        "Place": "Wilson Hall",
                        "Address": "104 W Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Wilson Hall, 104 W. Green Dr., Athens, OH 45701",
                        "Title": "Alchol",
                        "copy": "A citation was issued for disorderly conduct by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10128, 39.329918]
                    },
                    "properties": {
                        "date": "10/17/2019",
                        "Place": "Subway Restaurants",
                        "Address": "25 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Subway, 25 N. Court St. Athens, OH 45701",
                        "Title": "Criminal damaging/criminal mischief",
                        "copy": "Officers responded to a report of a person kicking parking meters. A man was arrested and charged with criminal damaging and criminal mischief.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1010259, 39.3267601]
                    },
                    "properties": {
                        "date": "10/17/2019",
                        "Place": "Chubb Hall",
                        "Address": "74 S. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Chubb Hall, 74 S. Court St., Athens, OH 45701",
                        "Title": "Disorderly Conduct",
                        "copy": "A warning was issued for disorderly conduct. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "10/17/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Mail Services 122 Ridges Circle Athens OH 45701 ",
                        "Title": "Operations",
                        "copy": "EDC Deployment",
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
                        "date": "10/17/2019",
                        "Place": "Carr Hall",
                        "Address": "97 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a resident.",
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
                        "date": "10/17/2019",
                        "Place": "Carr Hall",
                        "Address": "97 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a resident in Carr Hall. ",
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
                        "date": "10/17/2019",
                        "Place": "Carr Hall",
                        "Address": "97 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Carr Hall 97 South Green Dr. Athens OH 45701 ",
                        "Title": "Service Call",
                        "copy": "OUPD and ACEMS responded to Carr Hall for a medical emergency. Subject decined treatment and transport by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/17/2019",
                        "Place": "Baker University Center ",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD and ACEMS responded for a reported medical concern. The subject declined treatmnt or transport by ACEMS. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1142858, 39.3273729]
                    },
                    "properties": {
                        "date": "10/18/2019",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "OhioHealth O'Bleness Hospital, 55 Hospital Dr, Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A person was transported OhioHealth O'Bleness Hospital for further evaluation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/18/2019",
                        "Place": "Baker Garage",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker Garage, 1 Park Place, Athens, OH 45701",
                        "Title": "operations",
                        "copy": "Two people were transported to Southeasten Ohio Regional Jail for failture to appear on warrent.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0734701, 39.3361201]
                    },
                    "properties": {
                        "date": "10/18/2019",
                        "Place": "Monroe Muffler",
                        "Address": "743 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Monroe Muffler, 739 E. State St., Athens OH 45701 ",
                        "Title": "Petty theft",
                        "copy": "Officers took a theft complaint report at Monroe Muffler.",
                        "category": " APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/18/2019",
                        "Place": "Baker University Center ",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "A report taken for subject refusal for ACEMS transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/18/2019",
                        "Place": "Baker University Center ",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Baker University Center, 1 Park Place, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a welfare check on a woman sleeping in Baker Center at closing time.",
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
                        "date": "10/19/2019",
                        "Place": "Ohio University Police Department  ",
                        "Address": "135 Scott Quad",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ohio University Police Department 135 Scott Quad Athens OH 45701 ",
                        "Title": "Computer Crime",
                        "copy": "OUPD met with a person in reference to a telecommunications fraud.",
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
                        "date": "10/19/2019",
                        "Place": "James Hall",
                        "Address": "97 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "James Hall 97 West Green Dr. Athens OH 45701 ",
                        "Title": "Destruction Property",
                        "copy": "OUPD investigated an incident of criminal mischief.",
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
                        "date": "10/19/2019",
                        "Place": "Boyd Hall",
                        "Address": "100 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Boyd Hall, 100 West Green Dr., Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A woman was transported to OhioHealth O'Bleness Hospital for evaluation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029537, 39.3210165]
                    },
                    "properties": {
                        "date": "10/19/2019",
                        "Place": "Peden Stadium",
                        "Address": "200 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Peden Stadium, 200 Richland Ave., Athens, OH 45701",
                        "Title": "operations",
                        "copy": "K-9 deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1136, 39.3339397]
                    },
                    "properties": {
                        "date": "10/19/2019",
                        "Place": "",
                        "Address": "300 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "300 W. State St., Athens OH 45701 ",
                        "Title": "Theft",
                        "copy": "Officers took a report of a theft of a purse. At this time, there are no suspects. ",
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
                        "date": "10/19/2019",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walmart 929 East State Street, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A man was arrested for shoplifting.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1006882, 39.3303786]
                    },
                    "properties": {
                        "date": "10/20/2019",
                        "Place": "",
                        "Address": "5 Mill St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "5 Mill St., Athens OH 45701 ",
                        "Title": "Felonous assault",
                        "copy": "Officers responded to a fight. After speakign to several witness and viewing the video, two men were taken into custody.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1278612, 39.32924269999999]
                    },
                    "properties": {
                        "date": "10/21/2019",
                        "Place": "Go Mart",
                        "Address": "707 W Union St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "707 W Union St, Athens, OH 45701",
                        "Title": "Criminal Simulation",
                        "copy": "APD was dispatched to GoMart for a counterfeit $10 bill.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "10/21/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E Union St, Athens, OH 45701",
                        "Title": "operations",
                        "copy": "EDC Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "10/21/2019",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a resident of The Convo. The resudent checked out OK but did not require assistance.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "10/21/2019",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Walmart 929 East State Street, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD recieved a call for a theft at Walmart. A man was charged with theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.076871, 39.338476]
                    },
                    "properties": {
                        "date": "10/22/2019",
                        "Place": "",
                        "Address": "6 Charles St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "6 Charles St. Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "Officers responded to a report of a bueglary that occurred about an hour and half prior to the call. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10993189999999, 39.3195915]
                    },
                    "properties": {
                        "date": "10/22/2019",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "122 Ridges Circle, Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1064755, 39.3244941]
                    },
                    "properties": {
                        "date": "10/22/2019",
                        "Place": "Sargent Hall",
                        "Address": "98 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "98 West Green Dr., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "A unattended bag checked yb K9 Brody. The bag checked out OK and was retrieved by its owner.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0613394, 39.3349595]
                    },
                    "properties": {
                        "date": "10/22/2019",
                        "Place": "Petland",
                        "Address": "977 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "977 E State St, Athens, OH 45701",
                        "Title": "Telecommunications fraud",
                        "copy": "APD responded to Petland in referecne to a fraud case. A report was filed.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056218, 39.3320836]
                    },
                    "properties": {
                        "date": "10/23/2019",
                        "Place": "",
                        "Address": "100 W. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "100 W. State St., Athens, OH 45701",
                        "Title": "Menacing by Stalking (if against same person)",
                        "copy": "A woman came to the department regarding online harassment. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10709299999999, 39.30030199999999]
                    },
                    "properties": {
                        "date": "10/23/2019",
                        "Place": "",
                        "Address": "9 Cash Lane",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "9 Cash Lane, Athens, OH 45701",
                        "Title": "Missing Person",
                        "copy": "APD spoke to a man about his girlfriend missing. It was later determined she was not missing and not in trouble. A report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1066192, 39.3245443]
                    },
                    "properties": {
                        "date": "10/23/2019",
                        "Place": "Boyd Hall",
                        "Address": "100 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "100 West Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "An officer spoke to a person for a well-veing check. No distress was noted. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "10/23/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Telecommunications Harassment",
                        "copy": "A complainant reports of telephone harassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09929679999999, 39.3301741]
                    },
                    "properties": {
                        "date": "10/24/2019",
                        "Place": "",
                        "Address": "32 N. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "32 N. College St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to a report for criminal damaging.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "10/24/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1035378, 39.3352046]
                    },
                    "properties": {
                        "date": "10/26/2019",
                        "Place": "",
                        "Address": "58 Mound St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 Mound St. Athens, OH 45701",
                        "Title": "Aggravated robbery",
                        "copy": "Officers repsonded to Mound Street for an attempted aggravated robbery.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10077869999999, 39.3302562]
                    },
                    "properties": {
                        "date": "10/26/2019",
                        "Place": "The Pigskin",
                        "Address": "38 N. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "38 N. Court St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD responded to a residence on Union Street. A report was taken regarding an assault that occurred earlier in the night.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.092998, 39.326878]
                    },
                    "properties": {
                        "date": "10/26/2019",
                        "Place": "",
                        "Address": "35 North McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 North McKinley Avenue, Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "Officers responded to an apartment for a damaged apartment door. A report was taken.",
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
                        "date": "10/26/2019",
                        "Place": "Walmart",
                        "Address": "929 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Criminal trespass",
                        "copy": "APD responded to Walmart due to a trepassing complaint. Two people were arrested and charged.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1033084, 39.3312287]
                    },
                    "properties": {
                        "date": "10/29/2019",
                        "Place": "Athens Middle School",
                        "Address": "51-55 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51-55 W State St, Athens, OH 45701",
                        "Title": "Menacing",
                        "copy": "APD responded to Athens Middle School to take a report for threatenign messages that were sent to a student over the weekend by another student.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0604328, 39.3364058]
                    },
                    "properties": {
                        "date": "10/30/2019",
                        "Place": "",
                        "Address": "968 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "968 E. State St., Athens, OH 45701",
                        "Title": "Petty Theft",
                        "copy": "A man reported a theft from his residence. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0987955, 39.3282558]
                    },
                    "properties": {
                        "date": "10/31/2019",
                        "Place": "Counseling and Psycological Sevices",
                        "Address": "2 Health Center Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Health Center Dr, Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A person transported to the emergency room for further evaluation.",
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
                        "date": "10/31/2019",
                        "Place": "Counseling and Psycological Sevices",
                        "Address": "2 Health Center Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Health Center Dr, Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A person transported to emergency room for further evaluation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1080808, 39.3274468]
                    },
                    "properties": {
                        "date": "10/31/2019",
                        "Place": "Parking Services",
                        "Address": "100 Factory Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "100 Factory Street, Athens, OH 45701",
                        "Title": "Larceny-Theft",
                        "copy": "A report taken in reference to a license plate theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "10/31/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens, OH 45701",
                        "Title": "Status",
                        "copy": "A man transported to Southeastern Ohio Regional Jail for Athens County Warrents.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10000169999999, 39.3288386]
                    },
                    "properties": {
                        "date": "10/31/2019",
                        "Place": "Kantner Hall",
                        "Address": "7 S College St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7 S College St, Athens, OH 45701",
                        "Title": "Trespass",
                        "copy": "A report takens in reference to a suspicious man in a university building ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973367, 39.3241494]
                    },
                    "properties": {
                        "date": "11/1/2019",
                        "Place": "Morton Hall",
                        "Address": "24 Race St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "24 Race St, Athens, OH 45701",
                        "Title": "Disorderly conduct",
                        "copy": "A man was issued a citation for public urination.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09331209999999, 39.3218994]
                    },
                    "properties": {
                        "date": "11/1/2019",
                        "Place": "Mackinnon Hall",
                        "Address": "70 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "70 South Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a student. The student was OK and did not require assistance.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11562239999999, 39.3279197]
                    },
                    "properties": {
                        "date": "11/1/2019",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": " 55 Hospital Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Hospital Dr, Athens, OH 45701",
                        "Title": "Traffic",
                        "copy": "A citation was issued to a man for operating a motor vehicle without a valid license. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0936517, 39.3222826]
                    },
                    "properties": {
                        "date": "11/2/2019",
                        "Place": "Crawford Hall",
                        "Address": "71 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "71 South Green Dr., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "A report was taken for an assault. A man was transported to OhioHealth O'Bleness Hospital by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0953062, 39.326518]
                    },
                    "properties": {
                        "date": "11/2/2019",
                        "Place": "Read Hall",
                        "Address": "48 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "48 East Green Dr., Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A individual transported to OhioHealth O'Bleness Hospital for an emergency pre-screen.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1068339, 39.326184]
                    },
                    "properties": {
                        "date": "11/2/2019",
                        "Place": "Stocker Center",
                        "Address": "103 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Stocker Center, Athens, OH 45701",
                        "Title": "Larceny-Theft",
                        "copy": "A report taken for theft of a bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "11/2/2019",
                        "Place": "The Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "EDC Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "11/2/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "EDC Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09139429999999, 39.3325053]
                    },
                    "properties": {
                        "date": "11/2/2019",
                        "Place": "",
                        "Address": "48 E. Stimson Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "48 E. Stimson Ave., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to take a repor for a stolen bicycle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10096329999999, 39.3301026]
                    },
                    "properties": {
                        "date": "11/3/2019",
                        "Place": "The CI",
                        "Address": "32 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "32 N. Court St., Athens, OH 45701",
                        "Title": "underage consumption",
                        "copy": "APD responded to a disorderly man behind The CI. He was charged with underage consumption of alcohol.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "11/5/2019",
                        "Place": "Nelson Dining Hall",
                        "Address": "10 N McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 N McKinley Ave, Athens, OH 45701",
                        "Title": "Larceny-Theft",
                        "copy": "A complainant reports a man stole iterms from the market. A report taken for theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "11/5/2019",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "A woman was transported to OhioHealth O'Bleness Hospital to speak with a counselor.",
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
                        "date": "11/5/2019",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "A woman refused transport by ACEMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "11/5/2019",
                        "Place": "The Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD conducted a well-being check on a student.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09331209999999, 39.3218994]
                    },
                    "properties": {
                        "date": "11/5/2019",
                        "Place": "Mackinnon Hall",
                        "Address": "70 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "70 South Green Dr., Athens, OH 45701",
                        "Title": "Telecommunication Harassment",
                        "copy": "A report taken for a telecommunications harassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "11/7/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens, OH 45701",
                        "Title": "Alcohol",
                        "copy": "A man was transported to Southeastern Ohio Regional Jail for disorderly conduct by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "11/7/2019",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
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
                        "date": "11/7/2019",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "A person refused transport by ACEMS.",
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
                        "date": "11/8/2019",
                        "Place": "Hudson Health Center",
                        "Address": "2 Health Center Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Health Center Dr, Athens, OH 45701",
                        "Title": "Emotionally Disturbed Person",
                        "copy": "A peroson was transported to OhioHealth O'Bleness Hospital emergency room for an evalutation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09656880000001, 39.3227749]
                    },
                    "properties": {
                        "date": "11/9/2019",
                        "Place": "Tanaka Hall",
                        "Address": "121 S Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "121 S Green Dr, Athens, OH 45701",
                        "Title": "Destruction Property",
                        "copy": "An investigation of a covered smoke detector.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "11/9/2019",
                        "Place": "The Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0915431, 39.336644]
                    },
                    "properties": {
                        "date": "11/10/2019",
                        "Place": "",
                        "Address": "61 Elmwood Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "61 Elmwood Place, Athens, OH 45701",
                        "Title": "Criminal Damaging",
                        "copy": "APD responded for a report of a criminal damaging. A vehicle was damaged by being struck with a pumpkin.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09756469999999, 39.3323214]
                    },
                    "properties": {
                        "date": "11/10/2019",
                        "Place": "",
                        "Address": "95 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report for several vehicles being gone through and items stolen. A reprot was taken and there are currently no suspects. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0976896, 39.3309198]
                    },
                    "properties": {
                        "date": "11/10/2019",
                        "Place": "",
                        "Address": "20 Kern St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "20 Kern St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of a vehcile that had items stolen from it. A report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0454705, 39.3367791]
                    },
                    "properties": {
                        "date": "11/12/2019",
                        "Place": "",
                        "Address": "901 Hope Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "901 Hope Drive, Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded for a report of a damaged vehicle. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1057149, 39.3186251]
                    },
                    "properties": {
                        "date": "11/12/19",
                        "Place": "Peden Stadium",
                        "Address": "200 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "200 Richland Ave, Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1039844, 39.3059655]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Richland Ave/Classic Car Wash",
                        "Address": "519 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "519 Richland Ave, Athens, OH 45701",
                        "Title": "Domesic Violence",
                        "copy": "Officers responded to a Richland Ave. in reference to a domestic violence.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10126079999999, 39.3320924]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Broneys Alumni Grill",
                        "Address": "7 W. Cartpenter St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7 W. Cartpenter St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "Officers responded to a report of an assault at Broney's. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.076762, 39.339954]
                    },
                    "properties": {
                        "date": "11/15/19",
                        "Place": "",
                        "Address": "24 Charles St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "24 Charles St., Athens, OH 45701",
                        "Title": "Menacing aggravated",
                        "copy": "Officers responded to a report of a menacing complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10607809999999, 39.311677]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Carriage Hill Apartments",
                        "Address": "1030 Carriage Hill Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1030 Carriage Hill Drive, Athens, OH 45701",
                        "Title": "Grand theft of motor vehicle/receiving stolen property",
                        "copy": "APD responded to Carriage Hill Apartments regarding a stolen vehicle. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0972748, 39.3254981]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Perkins Hall",
                        "Address": "57 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "57 East Green Dr., Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "Fake ID was collected.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1002278, 39.3254282]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Alden Library",
                        "Address": "30 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 Park Pl, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A citation was issued to a student for a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09901529999999, 39.3211037]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Ping Student Recreation Center",
                        "Address": "82 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "82 S Green Dr, Athens, OH 45701",
                        "Title": "Larceny-theft",
                        "copy": "A person reported the theft of property in Ping Center.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Nelson Comons",
                        "Address": "10 N McKinley Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 N McKinley Ave, Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "A man was issued a ciation for disorderly conduct by intoxicated. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.096860, 39.321674]
                    },
                    "properties": {
                        "date": "11/14/19",
                        "Place": "Parking Lot 93",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Crash, Traffic",
                        "copy": "OUPD met with a person in reference to damages to their vehicle. ",
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
                        "date": "11/14/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "OUPD and ACEMS responded for a reported medical emergency.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "11/15/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Alcohol",
                        "copy": "A citation was issued for underage consumption and intoxoication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09273929999999, 39.3226014]
                    },
                    "properties": {
                        "date": "11/15/19",
                        "Place": "True House",
                        "Address": "132 S. Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "132 S Green Dr, Athens, OH 45701",
                        "Title": "Disorderly Conduct",
                        "copy": "A report was taken for disorderly conduct.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.101672, 39.3269103]
                    },
                    "properties": {
                        "date": "11/15/19",
                        "Place": "Copeland Hall",
                        "Address": "70 S. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "70 S. Court St., Athens, OH, 45701",
                        "Title": "Alcohol",
                        "copy": "A citation was issued for underage consumption and intoxoication. He was transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0999873, 39.3222307]
                    },
                    "properties": {
                        "date": "11/15/19",
                        "Place": "Brown Hall",
                        "Address": "69 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "69 South Green Dr., Athens, OH, 45701",
                        "Title": "Larceny-theft",
                        "copy": "A report was taken for bicycle theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10220240000001, 39.3263723]
                    },
                    "properties": {
                        "date": "11/15/19",
                        "Place": "Bentley Hall",
                        "Address": "4 President St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 President St, Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "OUPD responded with ACEMS for a reported medical emergency. Subject declined treatment and refused transport.",
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
                        "date": "11/15/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "OUPD and ACEMS responded for a reported medical emergency. Patient refused transport. ",
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
                        "date": "11/15/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "ACEMS responded to a report for a student having a seizure. Patient treated and refused transport to hospital.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "11/16/19",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Destruction property",
                        "copy": "A report taken for criminal damaging.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "11/16/19",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A student was issued a ciation for possession of a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "11/16/19",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Alcohol",
                        "copy": "A ciation was issue to a man for disordely conduct by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "11/16/19",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 East Green Dr., Athens, OH, 45701",
                        "Title": "Drugs",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0995399, 39.3281336]
                    },
                    "properties": {
                        "date": "11/17/19",
                        "Place": "Voigt Hall",
                        "Address": "34 S. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "34 S. College St., Athens, OH 45701",
                        "Title": "Trespass",
                        "copy": "A resident assistant reported an unknown man entered a resident's room. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1002278, 39.3254282]
                    },
                    "properties": {
                        "date": "11/18/19",
                        "Place": "Alden Library",
                        "Address": "30 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 Park Place, Athens, OH, 45701",
                        "Title": "Larceny-theft",
                        "copy": "A person reported the theft of bicycle tires.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10993189999999, 39.3195915]
                    },
                    "properties": {
                        "date": "11/18/19",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "122 Ridges Circle, Athens, OH, 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993484, 39.3266418]
                    },
                    "properties": {
                        "date": "11/18/19",
                        "Place": "Templeton-Blackburn Alumni Memorial Auditorium",
                        "Address": "47 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Union St., Athens Oh, 45701",
                        "Title": "Operations",
                        "copy": "EDC deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "11/18/19",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Trespass",
                        "copy": "OUPD met with a person in reference to a reported incident of tresspass.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10650439999999, 39.3245159]
                    },
                    "properties": {
                        "date": "11/18/19",
                        "Place": "Ryors Hall",
                        "Address": "101 West Green Dr.,",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 West Green Dr., Athens, OH 45701",
                        "Title": "Menacing ",
                        "copy": "A man was arrested for menacinh.",
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
                        "date": "11/18/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr.,",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "OUPD met with a person who reported an incident of telecommunications harassment. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "11/19/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Destruction property",
                        "copy": "A person reported damage to a TV in the lounge. A report was taken.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0972748, 39.3254981]
                    },
                    "properties": {
                        "date": "11/19/19",
                        "Place": "Perkins Hall",
                        "Address": "57 East Green Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "57 East Green Dr., Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "A person was transported to OhioHealth O'Bleness Hospital for an emergency pre-screen.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028697, 39.3227323]
                    },
                    "properties": {
                        "date": "11/19/19",
                        "Place": "Walter Hall",
                        "Address": "25 S Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "25 S Green Dr, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A wallet was turned into OUPD that contained a fake ID>",
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
                        "date": "11/19/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "A student refused transport by EMS.",
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
                        "date": "11/19/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "A student refused transport by EMS.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1012229, 39.3303034]
                    },
                    "properties": {
                        "date": "11/21/19",
                        "Place": "Goodfellas",
                        "Address": "35 N. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 N. Court St., Athens, OH, 45701",
                        "Title": "Assault",
                        "copy": "Officers responded to Goodfellas for a report of assault.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0936517, 39.3222826]
                    },
                    "properties": {
                        "date": "11/20/19",
                        "Place": "Crawford Hall",
                        "Address": "71 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "71 South Green Dr., Athens, OH, 45701",
                        "Title": "Service call",
                        "copy": "A fire alarm system reports a audible alarm sounding throughout the building. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017787, 39.3261875]
                    },
                    "properties": {
                        "date": "11/20/19",
                        "Place": "Lindley Hall",
                        "Address": "79 S. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "79 S Court St, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "The subject was transported to the emergency room for further evaluation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "11/20/19",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH, 45701",
                        "Title": "Service call",
                        "copy": "The person was spoken to and no distress was noted.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1013704, 39.3210944]
                    },
                    "properties": {
                        "date": "11/20/19",
                        "Place": "Ohio University Aquatic Center",
                        "Address": "50 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "50 South Green Drive, Athens, OH, 45701",
                        "Title": "Destruction property",
                        "copy": "A report was taken for a person going through someone else's property in the locker room/",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028697, 39.3227323]
                    },
                    "properties": {
                        "date": "11/20/19",
                        "Place": "Walter Hall",
                        "Address": "25 S Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "25 S Green Dr, Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "A report was taken for person refusing ACEMS transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028697, 39.3227323]
                    },
                    "properties": {
                        "date": "11/20/19",
                        "Place": "Walter Hall",
                        "Address": "25 S Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "25 S Green Dr, Athens, OH 45701",
                        "Title": "Service call",
                        "copy": "A report was taken for person refusing ACEMS transport.",
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
                        "date": "11/20/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Drive, Athens, OH, 45701",
                        "Title": "Destruction property",
                        "copy": "A report was taken for criminal mischief.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1020802, 39.3301441]
                    },
                    "properties": {
                        "date": "11/22/19",
                        "Place": "",
                        "Address": "26 N. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "26 N. Congress St., Athens, OH, 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to N. Court St. to ACEMS with a laceration on a leg. It was found that a woman was kicked out a window on N. Congress St., which caused the laceration. She was cited for criminal damaging. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "11/21/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH, 45701",
                        "Title": "Service call",
                        "copy": "A welfare check concerning self harm. The subject was located and determined to be OK.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106574, 39.325277]
                    },
                    "properties": {
                        "date": "11/21/19",
                        "Place": "Parking Lot 111",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Service call",
                        "copy": "A report was taken in reference to vehicle property damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1064755, 39.3244941]
                    },
                    "properties": {
                        "date": "11/21/19",
                        "Place": "Sargent Hall",
                        "Address": "98 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "98 West Green Dr., Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A summons was issued to a man for a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.06442009999999, 39.3362234]
                    },
                    "properties": {
                        "date": "11/24/19",
                        "Place": "Burger King",
                        "Address": "949 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "949 E. State St., Athens, OH, 45701",
                        "Title": "Improperly handling firearm in motor vehicle",
                        "copy": "Officers responded to Burger King fora  patron that appeared to be intoxicated.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09656880000001, 39.3227749]
                    },
                    "properties": {
                        "date": "11/22/19",
                        "Place": "Tanaka Hall",
                        "Address": "121 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "121 South Green Dr., Athens, OH, 45701",
                        "Title": "Alcohol",
                        "copy": "A person was charged with disordely conduct by intoxication and transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "11/22/19",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH, 45701",
                        "Title": "Disorderly Conduct",
                        "copy": "Two women were charged with disorderly conduct.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098421, 39.3269639]
                    },
                    "properties": {
                        "date": "11/22/19",
                        "Place": "",
                        "Address": "4 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 University Terrace, Athens, OH, 45701",
                        "Title": "Disorderly Conduct",
                        "copy": "A report was taken in  reference to pool table damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "11/22/19",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH, 45701",
                        "Title": "Larceny-theft",
                        "copy": "A person reported the theft of a book bag.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1092741, 39.3281291]
                    },
                    "properties": {
                        "date": "11/23/19",
                        "Place": "Grounds Maintenance",
                        "Address": "49 Factory St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "49 Factory Street, Athens, OH, 45701",
                        "Title": "Burglary",
                        "copy": "A report was taken for a burglary.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.107174, 39.319859]
                    },
                    "properties": {
                        "date": "11/24/19",
                        "Place": "Ridges Building 19",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Trespass",
                        "copy": "Four juveniles were discovered tresspassing inside of The Ridges. They were released to guardians and chargeds were referred to Athens County Juvenile Court.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102238, 39.322641]
                    },
                    "properties": {
                        "date": "11/25/19",
                        "Place": "Parking Lot 134",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Crash, Traffic",
                        "copy": "A person reported someone struck his parked vehicle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.093741, 39.3266263]
                    },
                    "properties": {
                        "date": "11/25/19",
                        "Place": "",
                        "Address": "N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "N. McKinley Ave., Athens, OH 45701",
                        "Title": "Service Call",
                        "copy": "OUPD met with a person who reported damage to their vehicle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0993492, 39.3247598]
                    },
                    "properties": {
                        "date": "11/25/19",
                        "Place": "Gordy Hall",
                        "Address": "51 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51 Park Pl, Athens, OH 45701",
                        "Title": "Larency-theft",
                        "copy": "OUPD took information on a reported theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11359999999999, 39.33393969999999]
                    },
                    "properties": {
                        "date": "11/27/19",
                        "Place": "",
                        "Address": "300 W. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "300 W. State St., Athens, OH 45701",
                        "Title": "Domestic Violence - knowingly cause physical harm",
                        "copy": "Officers responded to a domestic violence report. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10614559999999, 39.3112653]
                    },
                    "properties": {
                        "date": "11/27/19",
                        "Place": "",
                        "Address": "1007 Carriage Hill Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1007 Carriage Hill Drive, Athens, OH, 45701",
                        "Title": "Dead on arrival",
                        "copy": "Officers responded to a medical emergency.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0790266, 39.3363592]
                    },
                    "properties": {
                        "date": "11/28/19",
                        "Place": "Holiday Inn Express",
                        "Address": "11 E Park Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "11 E Park Dr, Athens, OH 45701",
                        "Title": "Theft/Criminal Mischief",
                        "copy": "Officers responded to Holiday Inn Express in reference to a man destrouing the kitchen. He was arrested for theft and cirminal mischief. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0596114, 39.3349683]
                    },
                    "properties": {
                        "date": "11/28/19",
                        "Place": "Lowe's Home Improvement",
                        "Address": "983 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "983 E. State St., Athens, OH, 45701",
                        "Title": "Assault",
                        "copy": "Officers responded to a report of an assault. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.07772399999999, 39.3380595]
                    },
                    "properties": {
                        "date": "11/29/19",
                        "Place": "Napa",
                        "Address": "598 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "598 E. State St., Athens, OH, 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "Officers took a report for damage to a vehicle parked in the parking lot. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10112869999999, 39.3280579]
                    },
                    "properties": {
                        "date": "11/29/19",
                        "Place": "Brenen's Coffee Cafe",
                        "Address": "38 S. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "38 S. Court St., Athens, OH 45701",
                        "Title": "Grand theft",
                        "copy": "APD responded to a report of a burglary. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10672749999999, 39.3348576]
                    },
                    "properties": {
                        "date": "11/29/19",
                        "Place": "",
                        "Address": "43 Walker St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 Walker St., Athens, OH , 45701",
                        "Title": "Burglary and Criminal Damaging/Endangering",
                        "copy": "APD took a report of a burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09857749999999, 39.3294648]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "Alpha Omicron Pi house",
                        "Address": "8 Church St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 Church St., Athens, OH, 45701",
                        "Title": "Criminal mischief",
                        "copy": "APD received a report of vandalism from the Alpha Omicron Pi house.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0969878, 39.3298851]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "",
                        "Address": "82 Mill St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "82 Mill St., Athens, OH, 45701",
                        "Title": "Criminal Damaging/endangering",
                        "copy": "Officers took a report of criminal damaging.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1079694, 39.3151204]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "",
                        "Address": "363 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "363 Richland Ave., Athens, OH, 45701",
                        "Title": "Grand theft",
                        "copy": "APD took a report of a grand theft from a motor vehicle that took place overnight.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1294281, 39.3349628]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "",
                        "Address": "25 University Estates Blvd.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "25 University Estates Blvd., Athens, OH, 45701",
                        "Title": "Grand theft",
                        "copy": "APD took a report from a motor vehicle that occurred overnight near 25 University Estates Boulevard.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1306487, 39.33524500000001]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "",
                        "Address": "23 University Estates Blvd.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "23 University Estates Blvd., Athens, OH, 45701",
                        "Title": "Theft/Criminal Mischief",
                        "copy": "APD took a report from a motor vehicle that occurred overnight near 23 University Estates Boulevard.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11359999999999, 39.33393969999999]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "",
                        "Address": "300 W. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "300 W. State Street, Athens, OH, 45701",
                        "Title": "Domestic Violence - knowingly cause physical harm",
                        "copy": "APD received a call for a domestic disturbance.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "11/27/19",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave, Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "A person reported a burglary in the area.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10993189999999, 39.3195915]
                    },
                    "properties": {
                        "date": "11/27/19",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "122 Ridges Circle, Athens, OH, 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "11/30/19",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave, Athens, OH 45701",
                        "Title": "Operations",
                        "copy": "Canine Deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.108639, 39.329787]
                    },
                    "properties": {
                        "date": "11/30/19",
                        "Place": "Parking lot 154",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Drugs",
                        "copy": "Item marked for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0975513, 39.3267991]
                    },
                    "properties": {
                        "date": "12/1/19",
                        "Place": "Lincoln Hall",
                        "Address": "45 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 East Green Dr., Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "Officers met with a person in reference to the misuse of a credit card.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0948219, 39.3220127]
                    },
                    "properties": {
                        "date": "12/2/19",
                        "Place": "Hoover House",
                        "Address": "136 S Green Dr",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "136 S Green Dr, Athens, OH 45701",
                        "Title": "Larceny-theft",
                        "copy": "A person reported his bicycle taken from the area.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10993189999999, 39.3195915]
                    },
                    "properties": {
                        "date": "12/2/19",
                        "Place": "Mail Services",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "122 Ridges, Athens, OH, 45701",
                        "Title": "Operations",
                        "copy": "Canine deployment",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1105133, 39.3320091]
                    },
                    "properties": {
                        "date": "12/3/19",
                        "Place": "",
                        "Address": "15 Shafer St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 Shafer St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to a theft from a motor vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.082273, 39.296701]
                    },
                    "properties": {
                        "date": "12/3/19",
                        "Place": "",
                        "Address": "335 Carroll Road",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "335 Carroll Road, Athens, OH, 45701",
                        "Title": "Possession of heroin",
                        "copy": "Officers responded to an overdose. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09656880000001, 39.3227749]
                    },
                    "properties": {
                        "date": "12/3/19",
                        "Place": "Tanaka Hall",
                        "Address": "121 South Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "121 South Green Dr., Athens, OH, 45701",
                        "Title": "Larceny-theft",
                        "copy": "A person reported a theft of a bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10650439999999, 39.3245159]
                    },
                    "properties": {
                        "date": "12/3/19",
                        "Place": "Ryors Hall",
                        "Address": "101 West Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 West Green Dr., Athens, OH 45701",
                        "Title": "Larceny-theft",
                        "copy": "A person reported a theft of a bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "12/3/19",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH, 45701",
                        "Title": "Service Call",
                        "copy": "A report taken in reference to ACEMS transport refusal.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.08754139999999, 39.3372783]
                    },
                    "properties": {
                        "date": "12/7/19",
                        "Place": "Speedway",
                        "Address": "319 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "319 E. State St., Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "Officers responded to Speedway for a theft complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1015707, 39.32861580000001]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "D.P. Dough",
                        "Address": "19 S. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "19 S. Court St., Athens, OH 45701",
                        "Title": "Robbery",
                        "copy": "APD responded to a fight at D.P. Dough. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11036639999999, 39.3297431]
                    },
                    "properties": {
                        "date": "12/10/19",
                        "Place": "",
                        "Address": "224 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "224 W. Union St., Athens, OH 45701",
                        "Title": "Criminal Trespass",
                        "copy": "Officers responded to a report of trespassing. A man was arrested from criminal trespassing and taken to Southeast Ohio Regional Jail.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10083809999999, 39.3283951]
                    },
                    "properties": {
                        "date": "12/9/19",
                        "Place": "",
                        "Address": "20 S. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "20 S. Court St., Athens, OH 45701",
                        "Title": "Liquor/Sell-purchase for Underage Consumption of Alcohol",
                        "copy": "APD took a report for a person selling alcohol to a juvennile.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10349529999999, 39.3377795]
                    },
                    "properties": {
                        "date": "12/10/19",
                        "Place": "",
                        "Address": "193 N. Lancaster St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "193 N. Lancaster St., Athens, OH, 45701",
                        "Title": "Criminal Damaging/endangering and Theft",
                        "copy": "APD took a report on station for criminal damaging.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0790266, 39.3363592]
                    },
                    "properties": {
                        "date": "12/10/19",
                        "Place": "",
                        "Address": "11 E. Park Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "11 E. Park Drive, Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "APD was contact about a theft from a motor vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10294069999999, 39.3322805]
                    },
                    "properties": {
                        "date": "12/9/19",
                        "Place": "",
                        "Address": "74 N. High Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "74 N. High Street, Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of a package that was stolen from a porch.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1053563, 39.326342]
                    },
                    "properties": {
                        "date": "12/4/19",
                        "Place": "",
                        "Address": "51 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51 Oxbow Trail, Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "A report was taken for a theft",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "12/4/19",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH, 45701",
                        "Title": "Ambulance request",
                        "copy": "Student refused transport.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0956798, 39.3300076]
                    },
                    "properties": {
                        "date": "12/4/19",
                        "Place": "",
                        "Address": "4 Palmer St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 Palmer St., Athens, OH 45701",
                        "Title": "Traffic stop",
                        "copy": "A man was issued a citation for drving under suspension.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974951, 39.3250068]
                    },
                    "properties": {
                        "date": "12/4/19",
                        "Place": "Shively Hall",
                        "Address": "59 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "59 East Green Drive, Athens, OH, 45701",
                        "Title": "Property damage",
                        "copy": "Report taken for damage to bicycle",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974099, 39.3223869]
                    },
                    "properties": {
                        "date": "12/5/19",
                        "Place": "Living Learning Center",
                        "Address": "111 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "111 South Green Drive, Athens, OH, 45701",
                        "Title": "Property damage",
                        "copy": "A citation was issuesd for failture to maintain an assured clear distance ahead as a result of a traffic crash investigation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1040172, 39.325612]
                    },
                    "properties": {
                        "date": "12/5/19",
                        "Place": "",
                        "Address": "41 E. Oxbow Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "41 E. Oxbow Drive, Athens, OH, 45701",
                        "Title": "Drug offenses",
                        "copy": "Contraband items were collected and marked for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "12/5/19",
                        "Place": "James Hall",
                        "Address": "8 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 West Green Drive, Athens, OH 45701",
                        "Title": "Ambulance request",
                        "copy": "Astudent was charged with intoxication and transported to OhioHealth O'Bleness Hospital",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0970644, 39.3220163]
                    },
                    "properties": {
                        "date": "12/6/19",
                        "Place": "",
                        "Address": "South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "South Green  Drive, Athens, OH, 45701",
                        "Title": "Report issued in error",
                        "copy": "Not needed",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1013704, 39.3210944]
                    },
                    "properties": {
                        "date": "12/6/19",
                        "Place": "Walter Fieldhouse",
                        "Address": "50 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "50 South Green Drive, Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "A report was taken concerning damage to a vehicle",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1059597, 39.3177175]
                    },
                    "properties": {
                        "date": "12/7/19",
                        "Place": "",
                        "Address": "Dairy Lane/Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Dairy Lane/Richland Ave., Athens, OH, 45701",
                        "Title": "Assist other law enforcement agency",
                        "copy": "A man was arrested and cited for disorderly conduct by intoxication. He was transported to Southeast Ohio Regional Jail. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "12/7/19",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH, 45701",
                        "Title": "Criminal Damaging/endangering",
                        "copy": "Report taken for criminal damaging in Bromley Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "12/7/19",
                        "Place": "Nelson Commons",
                        "Address": "10 N. McKinley Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 N. McKinley Ave, Athens, OH, 45701",
                        "Title": "Welfare Check",
                        "copy": "An emplotee contact OUPD concerning an employee failing to arrive at work. The person was located and determined to be OK.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "12/7/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A report taken for a stolen bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Destruction property",
                        "copy": "A report was taken for a \"No Parking\" sign that was found to have been tampered with.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10618219999999, 39.3254116]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "Wilson Hall",
                        "Address": "20 W. Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "20 W. Green Drive, Athens, OH, 45701",
                        "Title": "Sex offense",
                        "copy": "A student reported unwanted sexual conduct between her and a known suspect.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "EDC deployment",
                        "copy": "",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0989975, 39.3267781]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "",
                        "Address": "33 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "33 University Terrace, Athens, OH, 45701",
                        "Title": "EDC deployment",
                        "copy": "",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 East Green Drive, Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "A well-being check was conducted on a student. Everything was OK.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "12/8/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "OUPD initated an investigation concerning the display and/or posession of a fake ID. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "12/9/19",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 East Green Drive, Athens, OH 45701",
                        "Title": "Fraud Offenses",
                        "copy": "A student contact OUPD to check fraud.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "12/10/19",
                        "Place": "",
                        "Address": "101 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, OH, 45701",
                        "Title": "Menacing offenses",
                        "copy": "A report was taken concerning a roommate dispute.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "12/11/19",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A wallet was turned into OUPD that contained a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "12/11/19",
                        "Place": "James Hall",
                        "Address": "8 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 West Green Drive, Athens, OH, 45701",
                        "Title": "Menacing",
                        "copy": "A student came to OUPD in reference to menacing behavior",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10993189999999, 39.3195915]
                    },
                    "properties": {
                        "date": "12/12/19",
                        "Place": "Ridges Building 8",
                        "Address": "122 Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "122 Ridges Circle, Athens, OH, 45701",
                        "Title": "Fraud Offenses",
                        "copy": "An employee reported possible fraud check.",
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
                        "date": "12/12/19",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Drive, Athens, OH, 45701",
                        "Title": "Fire alarm",
                        "copy": "OUPD responded to Carr Hall in rederence to a fire alarm that resulted in ACEMS. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10461459999999, 39.3263979]
                    },
                    "properties": {
                        "date": "12/12/19",
                        "Place": "Boyd Hall",
                        "Address": "47 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 Oxbow Trail, Athens, OH 45701",
                        "Title": "Civil",
                        "copy": "A student reported another student violated an OU No Contact Order. It was determined there was no criminal activity.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10125169999999, 39.3308647]
                    },
                    "properties": {
                        "date": "12/14/19",
                        "Place": "Silver Serpent Exotic Gifts",
                        "Address": "55 N. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 N. Court St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD responded for a report of an assualt. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.100644, 39.331761]
                    },
                    "properties": {
                        "date": "12/15/19",
                        "Place": "Smoke Zone Smoke Shop",
                        "Address": "80 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "80 N. Court St., Athens, OH 45701",
                        "Title": "Breaking and entering",
                        "copy": "APD responded to an alarm at Smoke Zone Smoke Shop.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10122179999999, 39.330349]
                    },
                    "properties": {
                        "date": "12/15/19",
                        "Place": "Pawpurrs",
                        "Address": "37 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "37 N. Court St., Athens, OH, 45701",
                        "Title": "Assault",
                        "copy": "APD responded to Pawpurrs for a report of an assault. A man was charged with assault",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1024898, 39.32798830000001]
                    },
                    "properties": {
                        "date": "12/16/19",
                        "Place": "",
                        "Address": "36 S. Congress St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "36 S. Congress St., Athens, OH, 45701",
                        "Title": "Disorderly Conduct by intoxication and possession of drugs",
                        "copy": "APD located an open door and seized a bag with 12 Xanax pills.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1014175, 39.3305742]
                    },
                    "properties": {
                        "date": "12/16/19",
                        "Place": "Tony's Tavern",
                        "Address": "7 W State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7 W State St, Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD responded to Tony's Tavern for a group of women starting a fight. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.113395, 39.2976654]
                    },
                    "properties": {
                        "date": "12/16/19",
                        "Place": "",
                        "Address": "2 Andover Road",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Andover Road, Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "APD took a report of harassment.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0958945, 39.3266608]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Read Hall ",
                        "Address": "46 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "46 East Green Dr., Athens, OH, 45701",
                        "Title": "Destruction property",
                        "copy": "A report was taken concerning a fire extinguisher that was removed from the first floor and discharged on East Green Drive. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1033889, 39.3274403]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Lasher Hall",
                        "Address": "43 W. Union St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 W. Union St., Athens, OH, 45701",
                        "Title": "Trespassing offenses",
                        "copy": "A report taken for breaking and entering and criminal mischief in regards to someone entering Lasher Hall. A vehicle was also damaged in the vicinity. It is believed the two incidents are related.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951315, 39.3238442]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Crawford Hall",
                        "Address": "12 N. McKinley Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "12 N. McKinley Ave, Athens, OH 45701",
                        "Title": "Littering",
                        "copy": "A man was issued a summons for littering.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102504, 39.3265332]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Bentley Annex",
                        "Address": "6 President St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "6 President St., Athens, OH, 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "A menacing report was completed concerning an argument between a student and professor in Bentley Annex occurring earlier in the day.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0995399, 39.3281336]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Voigt Hall",
                        "Address": "34 S. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "34 S. College St., Athens, OH, 45701",
                        "Title": "Theft offense",
                        "copy": "A report was taken for a stolen bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.092463, 39.3224094]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "True House",
                        "Address": "193 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "193 S. Green Dr., Athens, OH, 45701",
                        "Title": "Property damage",
                        "copy": "A report taken from criminal mischief.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 E. Green Dr., Athens, OH, 45702",
                        "Title": "Drug offenses",
                        "copy": "Items believed to be contraband were collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097807, 39.3223797]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Sowle Hall",
                        "Address": "105 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "105 S. Green Dr., Athens, OH, 45701",
                        "Title": "Theft offense",
                        "copy": "A resident assistant reported finding stolen property during room checks.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "12/13/19",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH, 45701",
                        "Title": "Drug offenses",
                        "copy": "Items believed to be contraband were collected for destruction.",
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
                        "date": "12/14/19",
                        "Place": "Brown Hall",
                        "Address": "22 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 N. McKinley Ave., Athens, OH, 45701",
                        "Title": "Drug offenses",
                        "copy": "Items believed to be contraband were collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951315, 39.3238442]
                    },
                    "properties": {
                        "date": "12/14/19",
                        "Place": "Crawford Hall",
                        "Address": "12 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "12 N. McKinley Ave., Athens, OH, 45701",
                        "Title": "Property damage",
                        "copy": "Criminal damaging report taken concerning damaged smoke detector in McKinley Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0719092, 39.3368155]
                    },
                    "properties": {
                        "date": "12/16/19",
                        "Place": "People's Bank",
                        "Address": "801 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "801 E. State St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to a report of an employee's vehicle being damaged.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973123, 39.35167]
                    },
                    "properties": {
                        "date": "12/16/19",
                        "Place": "OMG! Rotisserie",
                        "Address": "139 Columbus Road",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "139 Columbus Road, Athens, OH, 45701",
                        "Title": "Breaking and entering",
                        "copy": "APD responded for a report of breaking and entering. The incident is under investigation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.096860, 39.321674]
                    },
                    "properties": {
                        "date": "12/16/19",
                        "Place": "Parking lot 93",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic crash",
                        "copy": "A report of a hit-skip in parking lot 93.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.05671749999999, 39.3371869]
                    },
                    "properties": {
                        "date": "12/17/19",
                        "Place": "Label Shopper",
                        "Address": "1002 E State St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1002 E State St, Athens, OH 45701",
                        "Title": "theft",
                        "copy": "APD responded for a report of a shop lifter. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1321765, 39.322908]
                    },
                    "properties": {
                        "date": "12/17/19",
                        "Place": "ReUse on Union",
                        "Address": "751 W. Union St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "751 W. Union St., Athens, OH, 45701",
                        "Title": "Breaking and entering",
                        "copy": "APD responded for a report of breaking and entering. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1065361, 39.31701839999999]
                    },
                    "properties": {
                        "date": "12/17/19",
                        "Place": "Ohio University Inn",
                        "Address": "331 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "331 Richland Ave., Athens, OH, 45701",
                        "Title": "Menacing",
                        "copy": "An employee of Ohio University Inn reported he received a menacing phone call from his ex-wife's boyfriend. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1002278, 39.3254282]
                    },
                    "properties": {
                        "date": "12/19/19",
                        "Place": "Alden Library",
                        "Address": "30 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 Park Place, Athens, OH, 45701",
                        "Title": "Sex offense",
                        "copy": "Alden Library staff reported a possible public indecency incvolving a man.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "12/19/19",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH, 45701",
                        "Title": "Sex offense",
                        "copy": "The victim reported a possible sexual offense. After further investifaiton, the victim believes no sexual activity had occurred.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "12/21/19",
                        "Place": "Walmart",
                        "Address": "929 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State Street, Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "APD responded to Walmart for a shoplifting complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09324459999999, 39.3450564]
                    },
                    "properties": {
                        "date": "12/24/19",
                        "Place": "",
                        "Address": "142 Columbia Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "142 Columbia Ave., Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "APD responded to a burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0957947, 39.332049]
                    },
                    "properties": {
                        "date": "12/23/19",
                        "Place": "Ambassador Laundry",
                        "Address": "15 W. Stimson Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 W. Stimson Ave., Athens, OH 45701",
                        "Title": "Breaking and entering and Criminal damaging/endangering",
                        "copy": "APD responded to a a report of breaking and entering that happened overnight.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0950312, 39.3312826]
                    },
                    "properties": {
                        "date": "12/24/19",
                        "Place": "",
                        "Address": "27 Palmer St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "27 Palmer St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to take a report for damage to a door of the residence. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.076313, 39.3396736]
                    },
                    "properties": {
                        "date": "12/23/19",
                        "Place": "",
                        "Address": "21 Charles Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "21 Charles Street, Athens, OH 45701",
                        "Title": "Domestic violence",
                        "copy": "APD responded to a report of a domestic dispute. A man was arrested for domestic violence and transported to APD office to be held in court. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09352899999999, 39.329987]
                    },
                    "properties": {
                        "date": "12/25/19",
                        "Place": "",
                        "Address": "1 Elliot St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Elliot St, Athens, OH, 45701",
                        "Title": "Burglary",
                        "copy": "Officers responded to a report of a burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0670584, 39.3372092]
                    },
                    "properties": {
                        "date": "12/25/19",
                        "Place": "Go Mart",
                        "Address": "928 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "928 E. State St., Athens, OH 45701",
                        "Title": "Theft and criminal simulation",
                        "copy": "APD received a call for a counterfiet bill.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11359999999999, 39.33393969999999]
                    },
                    "properties": {
                        "date": "12/25/19",
                        "Place": "",
                        "Address": "300 W. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "300 W. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD received a call for a disturbance. A man was arrested and charged with theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1022496, 39.3278661]
                    },
                    "properties": {
                        "date": "12/28/19",
                        "Place": "",
                        "Address": "22 W. Union St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 W. Union St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD took a report of an assault that occurred near 22 W. Union Street.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0959367, 39.3320374]
                    },
                    "properties": {
                        "date": "12/28/19",
                        "Place": "",
                        "Address": "33 W. Stimson Exit",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "33 W. Stimson Exit, Athens, OH 45701",
                        "Title": "Improperly handling firearm in motor vehicle and driving under the influence",
                        "copy": "APD stopped a vehicle for speeding. The man was arrested for OVI and improperly handing a firearm in a motor vehicle. ",
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
                        "date": "12/31/19",
                        "Place": "Subway",
                        "Address": "929 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State Street, Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "APD responded to Subway in Walmart for a theft complaint. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1097605, 39.3319793]
                    },
                    "properties": {
                        "date": "1/1/2020",
                        "Place": "",
                        "Address": "221 W. Washington Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "221 W. Washington Street, Athens, OH 45701",
                        "Title": "Burglary and theft",
                        "copy": "APD responded to a report of a burglary. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "12/31/19",
                        "Place": "Kroger",
                        "Address": "919 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Officers responded to a theft complaint. A man was arrested and charged with theft.",
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
                        "date": "12/31/19",
                        "Place": "Walmart ",
                        "Address": "929 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State Street, Athens, OH, 45701",
                        "Title": "Theft",
                        "copy": "APD took a report for a shoplifting complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "12/29/19",
                        "Place": "Nelson Commons",
                        "Address": "10 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Recovered property",
                        "copy": "Bolt cutters and a cut bike was located.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "1/1/2020",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A woman was arrested and cited for disorderly condct by intoxication. She was transported to Southeast Ohio Regional jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017728, 39.32813609999999]
                    },
                    "properties": {
                        "date": "1/1/2020",
                        "Place": "Skyview Apartments",
                        "Address": "31 South Court Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "31 South Court Street, Athens, OH 45701",
                        "Title": "Fire alarm",
                        "copy": "A fire alarm was activated. A report was taken for criminal mischief",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1033084, 39.3312287]
                    },
                    "properties": {
                        "date": "1/3/2020",
                        "Place": "Athens Middle School",
                        "Address": "51 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51 W. State St., Athens, OH 45701",
                        "Title": "Criminal Damaging/endangering",
                        "copy": "APD responded to Athens Middle School for the report of criminal damaging. ",
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
                        "date": "1/3/2020",
                        "Place": "Walmart",
                        "Address": "929 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State Street, Athens, OH, 45701",
                        "Title": "Criminal trespass",
                        "copy": "APD responded for the report of a known man trespassing on the property.",
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
                        "date": "1/6/2020",
                        "Place": "Walmart",
                        "Address": "929 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State Street, Athens, OH, 45701",
                        "Title": "Criminal trespass/land of another",
                        "copy": "APD received a call of a trespassing complaint at Walmart. A person was arrested for criminal trespass.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10126079999999, 39.3320924]
                    },
                    "properties": {
                        "date": "1/6/2020",
                        "Place": "Broney's Alumni Grill ",
                        "Address": "7 West Carpenter St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7 West Carpenter St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD took a report on station that occurred on Dec. 7, 2019.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10264459999999, 39.3306325]
                    },
                    "properties": {
                        "date": "1/6/2020",
                        "Place": "",
                        "Address": "37 N. Congress St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "37 N. Congress St., Athens, OH 45701",
                        "Title": "Burglary and Criminal Damaging",
                        "copy": "An officer responded to a possible burglary complaint. Residence was secured and a report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.07454729999999, 39.3378011]
                    },
                    "properties": {
                        "date": "1/7/2020",
                        "Place": "",
                        "Address": "750 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "750 E. State St., Athens, OH 45701",
                        "Title": "Unauthorized use of motor vehicle",
                        "copy": "A woman made a report to the department that her vehicle was stolen by her daughter.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1058663, 39.3307407]
                    },
                    "properties": {
                        "date": "1/5/2020",
                        "Place": "",
                        "Address": "117 West Washington St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "117 West Washington St., Athens, OH 45701",
                        "Title": "Assist other law enforcement agency",
                        "copy": "OUPD assisted APD on West Washington Street. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0596114, 39.3349683]
                    },
                    "properties": {
                        "date": "1/9/2020",
                        "Place": "Lowe's Home Improvement",
                        "Address": "983 E State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "983 E State St., Athens, OH 45701",
                        "Title": "Possessing drug abuse instrument and drug paraphernalia",
                        "copy": "APD received a call about a man who had climbed into a clothes donation bin at Lowes. The man was arrested on a warrant, and a report was taken. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.07633659999999, 39.3384802]
                    },
                    "properties": {
                        "date": "1/9/2020",
                        "Place": "",
                        "Address": "5 Charles St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "5 Charles St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to a theft that occurred between Jan. 5 and Jan. 9.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1033084, 39.3312287]
                    },
                    "properties": {
                        "date": "1/10/2020",
                        "Place": "Athens Middle School",
                        "Address": "51 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51 W. State St., Athens, OH 45701",
                        "Title": "Potential Threat",
                        "copy": "APD responded to a potential threat on Athens Middle School. APD investigators quickly identified and located a witness, who was interviewed. It was believed the threat was not credible.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091698, 39.325624]
                    },
                    "properties": {
                        "date": "1/12/2020",
                        "Place": "",
                        "Address": "10 Rufus Lane",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 Rufus Lane, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Two people reported their bicycles were stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0981614, 39.3228632]
                    },
                    "properties": {
                        "date": "1/12/2020",
                        "Place": "Carr Hall",
                        "Address": "97 South Green Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "97 South Green Dr., Athens, OH 45701",
                        "Title": "Receiving stolen property and identity fraud",
                        "copy": "APD took a report of a stolen credit card that was used in Athens. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1076835, 39.3284841]
                    },
                    "properties": {
                        "date": "1/12/2020",
                        "Place": "",
                        "Address": "30 Station St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 Station St., Athens, OH 45701 ",
                        "Title": "Theft",
                        "copy": "APD responded to Station Street to take a report of a theft of a bicycle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1105133, 39.3320091]
                    },
                    "properties": {
                        "date": "1/12/2020",
                        "Place": "",
                        "Address": "15 S. Shafer St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 S. Shafer St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of a stolen bicycle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0932661, 39.3322282]
                    },
                    "properties": {
                        "date": "1/13/2020",
                        "Place": "Marathon",
                        "Address": "1 E. Stimson Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 E. Stimson Ave., Athens, OH 45701",
                        "Title": "Breaking and Entering and vandalism",
                        "copy": "APD responded to for a breaking and entering.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1011135, 39.3279503]
                    },
                    "properties": {
                        "date": "1/13/2020",
                        "Place": "Wendy's",
                        "Address": "40 S Court St",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "40 S Court St, Athens, OH 45701",
                        "Title": "Underage consumption and resisting arrest",
                        "copy": "APD responded to an intoxicated man. The man was arrested and transported to Southeast Ohio Regional Jail.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "1/13/2020",
                        "Place": "Kroger",
                        "Address": "919 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD responded to a report of two shoplifters.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "1/12/2020",
                        "Place": "Sargent Hall",
                        "Address": "43 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "OUPD received a call in reference to a damaged traffic sign.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "1/13/2020",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 East Green Drive, Athens, OH, 45701",
                        "Title": "Possession of drugs",
                        "copy": "Contraband collected and marked for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "1/12/20",
                        "Place": "Sargent Hall",
                        "Address": "43 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "OUPD received a call in reference to a damaged traffic sign.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "1/13/20",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 East Green Drive, Athens, OH 45701",
                        "Title": "Possession of controlled substances",
                        "copy": "Contraband collected and marked for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "1/15/20",
                        "Place": "Walmart",
                        "Address": "929 East State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 East State Street, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Walmart Loss Prevention was notified about a detained shoplifter. The woman was charged with theft and released. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1083755, 39.3316766]
                    },
                    "properties": {
                        "date": "1/16/20",
                        "Place": "",
                        "Address": "5 Pratt Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "5 Pratt Street, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to a theft complaint. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1036383, 39.3122631]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "Campus Heights Apartments",
                        "Address": "12 Carriage Hill Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "12 Carriage Hill Dr, Athens, OH 45701",
                        "Title": "Shooting",
                        "copy": "APD responded to a report of a shooting. Officers found a woman suffering from a non-life threatening gunshot wound. Officers and ACEMS rendered aid, and she was transported to OhioHealth O'Bleness Hospital. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.092998, 39.3267455]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "River Park and River's Edge on South Green",
                        "Address": "36 N. McKinley Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "36 N. McKinley Drive, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD received a report of a bicycle being stolen from building 36 of River Park. A report was taken, and tere were no suspects at this time. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0931808, 39.3317407]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "",
                        "Address": "39 Elliot Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "39 Elliot Street, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD received a call fora theft from a vehicle. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10162389999999, 39.3310062]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "",
                        "Address": "16 W. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "16 W. State St., Athens, OH 45701",
                        "Title": "Criminal damading/endengering",
                        "copy": "APD received a call fro vandalism for vandalism.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09926, 39.329863]
                    },
                    "properties": {
                        "date": "1/21/20",
                        "Place": "",
                        "Address": "22 N. College St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 N. College St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a walk-in theft report.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09688799999999, 39.3267247]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "Johnson Hall",
                        "Address": "47 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 East Green Drive, Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A well-being check was conducted on a student. No further action was needed.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0914928, 39.3240313]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Green Drive, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "Fake ID found and turned in to OUPD.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09753309999999, 39.3247051]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "",
                        "Address": "E. Mulberry Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "E. Mulberry Drive, Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A student was arrested for underage consumption by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.094257, 39.327037]
                    },
                    "properties": {
                        "date": "1/17/20",
                        "Place": "Parking Lot 104",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Possession of controlled substances",
                        "copy": "A man was found in possession of a controlled substance.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "1/18/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "An investigation initated reference damaged property.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11562239999999, 39.3279197]
                    },
                    "properties": {
                        "date": "1/18/20",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Hospital Drive, Athens, OH 45701",
                        "Title": "Sex offense",
                        "copy": "A student reported unwanted sexual conduct between herself and a known suspect.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.096860, 39.321674]
                    },
                    "properties": {
                        "date": "1/18/20",
                        "Place": "Parking lot 93",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic stop",
                        "copy": "A man was sited for failure to yield the righ of way.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.096860, 39.321674]
                    },
                    "properties": {
                        "date": "1/18/20",
                        "Place": "Parking lot 93",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Suspicious vehicle",
                        "copy": "Marijuana contraband was seized for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "1/19/20",
                        "Place": "Sargent Hall",
                        "Address": "43 East Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 East Oxbow Trail, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A student was transported to OhioHealth O'Bleness Hospital for an emergency pre-screen due to threats of self harm.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0999938, 39.3324027]
                    },
                    "properties": {
                        "date": "1/19/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Trail, Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "A ciation was issued to a man for criminal mischie.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1002278, 39.3254282]
                    },
                    "properties": {
                        "date": "1/19/20",
                        "Place": "Alden Library",
                        "Address": "30 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 Park Place, Athens, OH 45701",
                        "Title": "Sex offense",
                        "copy": "A man was arrested in Alden Library for public indecency.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0975513, 39.3267991]
                    },
                    "properties": {
                        "date": "1/19/20",
                        "Place": "Lincoln Hall",
                        "Address": "45 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 East Green Drive, Athens, OH 45701",
                        "Title": "Fire alarm",
                        "copy": "A report of a fire alarm activation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1028697, 39.3227323]
                    },
                    "properties": {
                        "date": "1/19/20",
                        "Place": "Walter Hall",
                        "Address": "25 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "25 South Green Drive, Athens, OH 45701",
                        "Title": "Traffic crash",
                        "copy": "A report taken in reference to a traffic crash in Parking Lot 134. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0944598, 39.3253181]
                    },
                    "properties": {
                        "date": "1/19/20",
                        "Place": "Pickering Hall",
                        "Address": "28 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "28 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Ambulance request",
                        "copy": "A student was arrested for underage consumption by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "1/20/20",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 East Green Drive, Athens, OH 45701",
                        "Title": "Ambulance request",
                        "copy": "A student was issued a citation for disorderly conduct by intoxication. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.092463, 39.3224094]
                    },
                    "properties": {
                        "date": "1/21/20",
                        "Place": "True House",
                        "Address": "193 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "193 South Green Drive, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "OUPD and ACEMS responded to an attempted suicide in True House. Shortly after, the student was taken into protective custody and transported to OhioHealth O'Bleness Hospital.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09649859999999, 39.3276161]
                    },
                    "properties": {
                        "date": "1/21/20",
                        "Place": "McCracken Hall",
                        "Address": "100 East Union Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "100 East Union Drive, Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A student reported his bicycle was stolen. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "1/21/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Possession of controlled substances",
                        "copy": "Marihuana paraphernalia was collected and marked for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1040172, 39.325612]
                    },
                    "properties": {
                        "date": "1/21/20",
                        "Place": "Treudley Hall",
                        "Address": "41 East Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "41 East Oxbow Trail, Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "Officers conducted a well-being check on a student.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "1/22/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Threat assessment",
                        "copy": "OUPD received a request for a well-being check for a student. The student was located and was determined they did no present athreat of harm to self or others.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.102244, 39.3340069]
                    },
                    "properties": {
                        "date": "1/22/20",
                        "Place": "",
                        "Address": "Congress Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Congress Street, Athens, OH 45701",
                        "Title": "Traffic stop",
                        "copy": "A man was cited for an expired registration.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10415449999999, 39.3279758]
                    },
                    "properties": {
                        "date": "1/22/20",
                        "Place": "Central Classroom Building",
                        "Address": "67 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "67 W. Union St., Athens, OH 45701",
                        "Title": "Unlock office/building",
                        "copy": "A man was arrested fon failure to appear warrant out of Athens County.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10461459999999, 39.3263979]
                    },
                    "properties": {
                        "date": "1/23/20",
                        "Place": "Boyd Hall",
                        "Address": "47 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "OUPD conducted a well-being check.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0777596, 39.3386043]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "",
                        "Address": "10 Graham Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 Graham Drive, Athens, OH 45701",
                        "Title": "Criminal trespass",
                        "copy": "A man was arrested for criminal trespassing.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0960092, 39.3250749]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "Good Rentals",
                        "Address": "7 Stewart Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7 Stewart Street, Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded in reference to criminal damaging that occurred some time over the past three days.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10542769999999, 39.3116594]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "",
                        "Address": "706 Carriage Hill Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "706 Carriage Hill Drive, Athens, OH 45701",
                        "Title": "Identity fraud",
                        "copy": "APD took a report of identity fraud.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11065769999999, 39.3325918]
                    },
                    "properties": {
                        "date": "1/25/20",
                        "Place": "Tavolinos",
                        "Address": "9 Shafer Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "9 Shafer Street, Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "Officers responded due to an attempted burglary complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.12958309999999, 39.333005]
                    },
                    "properties": {
                        "date": "1/25/20",
                        "Place": "Little Fish Brewing Company",
                        "Address": "8675 Armtiage Road ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8675 Armtiage Road, Athens, OH 45701",
                        "Title": "Burglary and Criminal damaging/endangering",
                        "copy": "APD took a report at Little Fish Brewery for a burglary that occurred overnight.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106173, 39.3282228]
                    },
                    "properties": {
                        "date": "1/25/20",
                        "Place": "Athens Uncorked",
                        "Address": "14 Station Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "14 Station Street, Athens, OH 45701",
                        "Title": "Burglary and Criminal damaging/endangering",
                        "copy": "Officers responded to Athens Uncorked for a report of a burglary that occurred overnight.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1051114, 39.3319684]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "",
                        "Address": "86 West State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "86 W. State St., Athens, OH 45701",
                        "Title": "Burglary and Complicity",
                        "copy": "APD responded to a burglary in progress on West State Street. Two men were arrested for burglary and complicity to burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.054249, 39.3358098]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "",
                        "Address": "1008 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1008 E. State St., Athens, OH 45701",
                        "Title": "Violation of protection order",
                        "copy": "A report of a possible violation of a protection order that occurred on Jan. 25. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1014538, 39.3039195]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "",
                        "Address": "9 Pomeroy Road",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "9 Pomeroy Road, Athens, OH 45701",
                        "Title": "Criminal damage",
                        "copy": "APD took a report of a criminal damaging. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09114079999999, 39.3371456]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "Village Bakery",
                        "Address": "270 East State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "279 East State St., Athens, OH 45701",
                        "Title": "Criminal mischief/move deface tamper",
                        "copy": "APD received a call of an attempted break in at VIllage Bakery.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973668, 39.3309174]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "",
                        "Address": "22 Kurtz Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 Kurtz St., Athens, OH 45701",
                        "Title": "Theft from the eldery",
                        "copy": "APD received a call for a theft  of medication.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11562239999999, 39.3279197]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Hospital Drive, Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "APD took a report aof telecommunications harassment that occurred between Jan. 21 to Jan. 23.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0448818, 39.3368201]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "",
                        "Address": "804 Hope Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "804 Hope Dr., Athen, OH 45701",
                        "Title": "Theft ",
                        "copy": "APD tooka  report of a theft that occurred on Jan. 13. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10024159999999, 39.3319796]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "",
                        "Address": "19 E. Carpenter St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "19 E. Carpenter St., Athens, OH 45701",
                        "Title": "Criminal trespass",
                        "copy": "Officers responded in reference to a trespassing complain. A man was arrested and charged with criminal trespass.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029381, 39.3280163]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "Bromley Hall",
                        "Address": "33 South Congress Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "33 South Congress Street, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "Subject transported to OhioHealth O'Bleness Hospital for emergency prescreen due to an attempt of self-harm.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A woman was cited for telecommunication harassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "Nelson Commons",
                        "Address": "10 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A student reported his bicycle mirror stolen from Nelson garage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1031079, 39.3253211]
                    },
                    "properties": {
                        "date": "1/24/20",
                        "Place": "",
                        "Address": "Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Oxbow Trail, Athens, OH 45701",
                        "Title": "Traffic Stop",
                        "copy": "A man was cited for failure to obey a traffic control device. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "1/25/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A student was issued a summons for underage consumption by intoxication and transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0944598, 39.3253181]
                    },
                    "properties": {
                        "date": "1/25/20",
                        "Place": "Pickering Hall",
                        "Address": "28 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "28 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Fire alarm",
                        "copy": "A fire pull station was activated. No fire found. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "Bromley Hall",
                        "Address": "35 South Congress Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 South Congress Street, Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "A resident of Bromley Hall reported property damage.",
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
                        "date": "1/26/20",
                        "Place": "Brown Hall",
                        "Address": "22 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Possession of controlled substances",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.094257, 39.327037]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "Parking Lot 104",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Possession of controlled substances",
                        "copy": "Contrband seized for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966409, 39.3248623]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "Tiffin Hall",
                        "Address": "60 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "60 East Green Drive, Athens, OH 45701",
                        "Title": "Sex offense",
                        "copy": "Report taken on possible sex offense.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091762, 39.325609]
                    },
                    "properties": {
                        "date": "1/26/20",
                        "Place": "Parking Lot 55",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic Crash",
                        "copy": "Non-injury traffic crash.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0975513, 39.3267991]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "Lincoln Hall",
                        "Address": "45 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "45 E. Green Dr., Athens, OH 45701",
                        "Title": "Destruction of property",
                        "copy": "A complaint of a damaged water fountain in Lincoln Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Destruction of property",
                        "copy": "A complaint of a dammaged bathroom stall in Scott Quad. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Destruction of property",
                        "copy": "A report was taken for a damaged window. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "1/27/20",
                        "Place": "James Hall",
                        "Address": "8 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 West Green Drive, Athens, OH 45701",
                        "Title": "Disorderly conduct offense",
                        "copy": "James Hall Residence Life reported a covered somke detector.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106646, 39.323560]
                    },
                    "properties": {
                        "date": "1/28/20",
                        "Place": "Parking Lot 128",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic Stop",
                        "copy": "A man was issued a citation for driving under suspension.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "1/30/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of shoplifting. A woman was arrested was cited for theft and released.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-81.74402010000001, 39.1913604]
                    },
                    "properties": {
                        "date": "1/29/20",
                        "Place": "",
                        "Address": "711 Riverfront Rd.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "711 Riverfront Rd., Athens, OH 45701",
                        "Title": "Special Response Team",
                        "copy": "OUPD assisted Athens County Sheriff's Office witha  barricaded subject. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10129060000001, 39.3304525]
                    },
                    "properties": {
                        "date": "1/30/20",
                        "Place": "",
                        "Address": "39 N. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "39 N. Court Street, Athens, OH 45701",
                        "Title": "Resisting Arrest",
                        "copy": "APD received a tip that a man had an active warrant and was in the uptown area. He was arrested on the active warrant and with resisting arrest. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.092806, 39.322109]
                    },
                    "properties": {
                        "date": "1/31/20",
                        "Place": "Parking Lot 57",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic Stop",
                        "copy": "A man was issued citation for driving under suspension and arrested for a failure to appear warrant out of Vinton County. The man was transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0989975, 39.3267781]
                    },
                    "properties": {
                        "date": "2/1/20",
                        "Place": "Blackburn Memorial Auditorium",
                        "Address": "33 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "33 University Terrace, Athens, OH 45701",
                        "Title": "Disorderly Conduct Offenses",
                        "copy": "A report was taken concerning disorderly conduct.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0989975, 39.3267781]
                    },
                    "properties": {
                        "date": "2/1/20",
                        "Place": "Blackburn Memorial Auditorium",
                        "Address": "33 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "33 University Terrace, Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A woman was issued a citation for disorderly conduct by intoxication ad transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0989975, 39.3267781]
                    },
                    "properties": {
                        "date": "2/1/20",
                        "Place": "Blackburn Memorial Auditorium",
                        "Address": "33 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "33 University Terrace, Athens, OH 45701",
                        "Title": "Assault offenses",
                        "copy": "A man was charged with assault, obstructing official business and disorderly conduct by intoxication. He was transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0970425, 39.3223306]
                    },
                    "properties": {
                        "date": "2/2/20",
                        "Place": "Luchs Hall",
                        "Address": "115 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "115 S. Green Dr., Athens, OH 45701",
                        "Title": "Ambulance request",
                        "copy": "A student was transported to OhioHealth O'Bleness Hospital for an emergency pre-screen.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951315, 39.3238442]
                    },
                    "properties": {
                        "date": "2/2/20",
                        "Place": "Crawford Hall",
                        "Address": "12 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "12 N.McKinley Ave., Athens, OH 45701",
                        "Title": "Drug offenses",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0954495, 39.3230897]
                    },
                    "properties": {
                        "date": "2/2/20",
                        "Place": "Nelson Commons",
                        "Address": "10 N McKinley Ave",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 N McKinley Ave, Athens, OH 45701",
                        "Title": "Drug offenses",
                        "copy": "Contraband seized for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.05582369999999, 39.33507180000001]
                    },
                    "properties": {
                        "date": "2/3/20",
                        "Place": "Knights Inn",
                        "Address": "997 E State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "997 E State St, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A truck and four Stihl chainsaws were stolen. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10278509999999, 39.3290999]
                    },
                    "properties": {
                        "date": "2/3/20",
                        "Place": "",
                        "Address": "22 1/2 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 1/2 S. Congress St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to a report of a damaged door.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106483, 39.3310042]
                    },
                    "properties": {
                        "date": "2/4/20",
                        "Place": "",
                        "Address": "133 W. Washington St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "133 W. Washington St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "A report was taken for a car mirror broken off. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.04415879999999, 39.3347995]
                    },
                    "properties": {
                        "date": "2/4/20",
                        "Place": "Dunhams",
                        "Address": "2006 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2006 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded for a theft report. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1118971, 39.3331405]
                    },
                    "properties": {
                        "date": "2/4/20",
                        "Place": "",
                        "Address": "237 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "237 W. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "Officers took a report of a stolen hand cart and keg.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1079694, 39.3151204]
                    },
                    "properties": {
                        "date": "2/5/20",
                        "Place": "",
                        "Address": "363 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "363 Richland Ave., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A driver reported his vehicle was entered overnight and his Summit parking pass was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09443499999999, 39.3281251]
                    },
                    "properties": {
                        "date": "2/5/20",
                        "Place": "",
                        "Address": "4 Milliron St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 Milliron St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "APD responded to a criminal damaging to a vehicle in the parking lot.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "2/4/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A report was taken concerning harassing phone calls.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10785450000002, 39.3302817]
                    },
                    "properties": {
                        "date": "2/5/20",
                        "Place": "West Union Street Office Center",
                        "Address": "160 W. Union St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "160 W. Unoin St., Athens, OH 45701",
                        "Title": "Recovered property",
                        "copy": "Abandoned property was recovered from the roof of the center. The items were seized and have been marked for destruction.",
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
                        "date": "2/5/20",
                        "Place": "Brown Hall",
                        "Address": "22 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "A welfare check was done on a person. No further action was needed.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1021957, 39.3232467]
                    },
                    "properties": {
                        "date": "2/5/20",
                        "Place": "Aquatic Center",
                        "Address": "13 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "13 Oxbow Trail, Athens, OH 45701",
                        "Title": "Deliquent/unruly child",
                        "copy": "Bassett House employee reported a juvenile walking away form the group while at the Aquatic Center.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/5/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Possession of controlled substances",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974099, 39.3223869]
                    },
                    "properties": {
                        "date": "2/5/20",
                        "Place": "Living Learning Center",
                        "Address": "111 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "111 South Green Drive, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A student was transported to OhioHealth O'Bleness Hospital for an emergency pre-screen for threats of self harm.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "2/6/20",
                        "Place": "James Hall",
                        "Address": "8 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 West Green Drive, Athens, OH 45701",
                        "Title": "Menacing offenses",
                        "copy": "An OU student reported receiving threatening messages.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10096329999999, 39.3301026]
                    },
                    "properties": {
                        "date": "2/9/20",
                        "Place": "The CI ",
                        "Address": "32 N. Court St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "32 N. Court St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD took a report on station for an assault.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091762, 39.325609]
                    },
                    "properties": {
                        "date": "2/7/20",
                        "Place": "",
                        "Address": "Rufus St./Parking Lot 55",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Rufus St./Parking Lot 55, Athens, OH 45701",
                        "Title": "Traffic Stop",
                        "copy": "A man was issued a citiation for a stop sign violation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10220240000001, 39.3263723]
                    },
                    "properties": {
                        "date": "2/7/20",
                        "Place": "Bentley Hall",
                        "Address": "4 President Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 President Street, Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report of an attempt theft of personal belongings.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1099319, 39.3195915]
                    },
                    "properties": {
                        "date": "2/7/20",
                        "Place": "The Ridges",
                        "Address": "Ridges Circle",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Ridges Circle, Athens, OH 45701",
                        "Title": "Drug offenses",
                        "copy": "Contraband seized for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "2/8/20",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "A report taken in reference to property damage.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "2/9/20",
                        "Place": "Jefferson Hall",
                        "Address": "101 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, OH 45701",
                        "Title": "Ambulance request",
                        "copy": "OUPD responded to a possible medical emergency.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "2/10/20",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 E. Green Dr., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report was taken of a dorm key and pocket knife.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "2/10/20",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A man was charged with theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10025689999999, 39.3281035]
                    },
                    "properties": {
                        "date": "2/11/20",
                        "Place": "RTV",
                        "Address": "35 S. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. College St., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report of missing equipment from Scripps Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "2/11/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Bomb threat",
                        "copy": "APD, OUPD, Washington County Sheriff's Office and State Fire Marshall's OFfice responded to a call for a bomb threat. The business was evacuated and no threat was found.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10025689999999, 39.3281035]
                    },
                    "properties": {
                        "date": "2/11/20",
                        "Place": "RTV",
                        "Address": "35 S. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. College St., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A woman was charged with theft of Ohio University property.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0604328, 39.3364058]
                    },
                    "properties": {
                        "date": "2/12/20",
                        "Place": "",
                        "Address": "968 East State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "968 E. State St., Athens, OH 45701",
                        "Title": "Domestic violence",
                        "copy": "Officers responded to a report of domestic violence. A woman was arrested and charged with domestic violence.",
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
                        "date": "2/13/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Petty theft/criminal trespass",
                        "copy": "APD responded to Walmart for a theft report.",
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
                        "date": "2/13/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Criminal trespass",
                        "copy": "APD responded to Walmart for trespassng complaint. A woman was charged with criminal trespassing.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097807, 39.3223797]
                    },
                    "properties": {
                        "date": "2/12/20",
                        "Place": "Sowle Hall",
                        "Address": "105 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "105 S. Green Dr., Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A man was issued a citation for possession of a fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098698, 39.328852]
                    },
                    "properties": {
                        "date": "2/12/20",
                        "Place": "Parking Lot 38",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic Crash",
                        "copy": "Non-injury traffic crash.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1010076, 39.3276855]
                    },
                    "properties": {
                        "date": "2/13/20",
                        "Place": "College Book Store",
                        "Address": "50 S. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "50 S. Court St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A theft of headphones and headband was reported. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.2216329, 39.4526363]
                    },
                    "properties": {
                        "date": "2/13/20",
                        "Place": "",
                        "Address": "835 Poplar St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "835 Poplar St., Atens, OH 45701",
                        "Title": "Special Deployment",
                        "copy": "OUPD assisted the Athens County Sheriff's Office with a search warrant.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1055154, 39.32943789999999]
                    },
                    "properties": {
                        "date": "2/15/20",
                        "Place": "Ciro",
                        "Address": "120 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "120 W. Union St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "Ciro reported a wundow being broken overnight. The window was broken with a salsa jar.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "2/14/20",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Alcohol offense",
                        "copy": "A man issued a summons for fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/14/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A report intitated on a suspected fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029211, 39.3273682]
                    },
                    "properties": {
                        "date": "2/14/20",
                        "Place": "Haning Hall",
                        "Address": "35 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 W. Union St., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report of a stolen billfold that took place at Haning Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0923653, 39.3229924]
                    },
                    "properties": {
                        "date": "2/14/20",
                        "Place": "Adams Hall",
                        "Address": "131 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "131 S. Green Dr., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A theft report for a bicyce.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "2/14/20",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 E. Green Dr., Athens, OH 45701",
                        "Title": "Drug offenses ",
                        "copy": "Contraband was collected for destruction.",
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
                        "date": "2/14/20",
                        "Place": "Brown Hall",
                        "Address": "22 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 N. McKinley Ave., Athens, OH, 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/14/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "Fake ID collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09839749999999, 39.3286997]
                    },
                    "properties": {
                        "date": "2/15/20",
                        "Place": "Seigfred Hall",
                        "Address": "20 Church Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "20 Church St., Athens, OH 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "A man was issued a citation for disorderly conduct intoxication and a summons for criminal mischief. He was transported to Southeast Ohio Regional Jail pending sobriety.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.096820, 39.328983]
                    },
                    "properties": {
                        "date": "2/15/20",
                        "Place": "Parking Lot 41",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Possession of controlled substances",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "2/15/20",
                        "Place": "Sargent Hall",
                        "Address": "43 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 Oxbow Trail, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A person was transported to OhioHealth O'Bleness Hospiral for an emergency pre-screeen due to an attempt of self-harm.",
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
                        "date": "2/15/20",
                        "Place": "Ryors Hall",
                        "Address": "51 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A man issued a summons for underage consumption by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0972748, 39.3254981]
                    },
                    "properties": {
                        "date": "2/16/20",
                        "Place": "Perkins Hall",
                        "Address": "57 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "57 E. Green Dr., Athens, OH 45701",
                        "Title": "Trespassing offenses",
                        "copy": "A man was issued a citation for criminal tresspass.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0955224, 39.3249357]
                    },
                    "properties": {
                        "date": "2/16/20",
                        "Place": "",
                        "Address": "E. Mulberry St./Race St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "E. Mulberry St./Race St., Athens, OH 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "A man was issued a ciation for disorderly conduct by public urination.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10618219999999, 39.3254116]
                    },
                    "properties": {
                        "date": "2/16/20",
                        "Place": "Wilson Hall",
                        "Address": "20 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "20 W. Green Dr., Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A man was issued a citation for a fake ID.",
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
                        "date": "2/16/20",
                        "Place": "Brown Hall",
                        "Address": "22 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A man was issued citations for underage consumption by intoxication, obstruction and fake ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10126079999999, 39.3320924]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "",
                        "Address": "7 W. Carpenter St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7 W. Carpenter St., Athens, OH 45701",
                        "Title": "Identity fraud",
                        "copy": "A woman reported her credit card was stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.098365, 39.3312955]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "",
                        "Address": "57 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "57 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0822693, 39.2967295]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "",
                        "Address": "335 Carroll St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "335 Carroll St., Athens, OH 45701",
                        "Title": "Failture to appear-bail",
                        "copy": "A man was arrested on an Athens County warrant.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1117235, 39.2960263]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "",
                        "Address": "9 Berkley Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "9 Berkley Drive, Athens, OH 45701",
                        "Title": "Theft/identity fraud",
                        "copy": "APD took a theft report.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1113076, 39.3331363]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "MIller's Chicken",
                        "Address": "235 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "235 W. State St., Athens, OH 45701",
                        "Title": "Breaking and entering",
                        "copy": "APD responded to a report of a breaking and entering.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1060054, 39.3266594]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "Academic Research Center",
                        "Address": "61 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "61 Oxbow Trail, Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report of property theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0958945, 39.3266608]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "Read Hall",
                        "Address": "46 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "46 E. Green Dr., Athens, OH 45701",
                        "Title": "Destruction of property",
                        "copy": "A report was taken for damage to the handrail in the lobby.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "Individuals were wanted for blocking the roadway.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097807, 39.3223797]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "Sowle Hall",
                        "Address": "105 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "105 S. Green Dr., Athens, OH 45701",
                        "Title": "Drug offenses",
                        "copy": "Contraband was seized for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10785450000002, 39.3302817]
                    },
                    "properties": {
                        "date": "2/17/20",
                        "Place": "West Union Street Office Center",
                        "Address": "160 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "160 W. Union St., Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A report of threatening phone calls. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1027297, 39.3377275]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "",
                        "Address": "10 Columbia Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 Columbia Ave., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to a report for a theft from a vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.07598899999999, 39.3374683]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "",
                        "Address": "741 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "741 E. State St., Athens, OH 45701",
                        "Title": "Criminal damaging/endangering",
                        "copy": "Officers responded to a criminal damaging report.",
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
                        "date": "2/18/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Criminal trespass",
                        "copy": "APD took a report of trespassing that occurred two days prior.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": {}
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Burger King",
                        "Address": "949 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "949 E. State St., Athens, OH 45701",
                        "Title": "Criminal simulation",
                        "copy": "Burger Kidn reported a fake $100 bill that was attempted to be passed.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0437441, 39.3351273]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "",
                        "Address": "201 Hope Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "201 Hope Dr., Athens, OH 45701",
                        "Title": "Violation of protection order",
                        "copy": "APD responded to a report for protection order violation. A man was arrested.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A person was transported to OhioHealth O'Bleness Hospital.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1009933, 39.3267327]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "Chubb Hall",
                        "Address": "74 S. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "74 S. Court St., Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A report was taken for telecommunications harrassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10138889999999, 39.324358]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "",
                        "Address": "8650 Sheridan Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8650 Sheridan Drive, Athens, OH 45701",
                        "Title": "EDC deployment",
                        "copy": "OUPD assisted Perry County Sheriff's Office with a bomb threat.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1005453, 39.3262678]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "McGuffery Hall",
                        "Address": "39 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "39 University Terrace, Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "Took a report of telecommunications harassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "2/18/20",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 E. Green Dr., Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A person was transported to OhioHealth O'Bleness Hospital.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Ohio University Police Department",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fraud offenses",
                        "copy": "A report taken on submitted documents thought to be forged.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Ohio University Police Department",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Reported issued in error, not needed",
                        "copy": "Case pulled in error",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Ohio University Police Department",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Threat assessment",
                        "copy": "Threat assessment initiated.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Jefferson Hall",
                        "Address": "101 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report was taken for agift card missing from mail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974099, 39.3223869]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Living Learning Center",
                        "Address": "111 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "111 S. Green Dr., Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A student was transported to OhioHealth O'Bleness Hospital for an emergency pre-screen.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "2/19/20",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congree St., Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A man was arrested and cited for disorderly conduc by intoxication and transported to the Southeast Ohio Regional Jail. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10618219999999, 39.3254116]
                    },
                    "properties": {
                        "date": "2/20/20",
                        "Place": "Wilson Hall",
                        "Address": "20 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "20 W. Green Dr., Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A student reported receiving harassing telephone calls.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1036633, 39.3286354]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "",
                        "Address": "15 S. High St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 S. High St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "An officer took a report of a theft complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10330390000001, 39.3130918]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "Speedway",
                        "Address": "414 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "414 Richland Ave., Athens, OH 45701",
                        "Title": "Violation of protection order",
                        "copy": "APD responded to Speedway for a report of a protection order violation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10212059999999, 39.31556459999999]
                    },
                    "properties": {
                        "date": "2/22/20",
                        "Place": "",
                        "Address": "366 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "366 Richland Ave., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD took a report for a theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1105133, 39.3320091]
                    },
                    "properties": {
                        "date": "2/22/20",
                        "Place": "",
                        "Address": "15 S. Shafer St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 S. Shafer St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A man reported his bicycle was stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1306432, 39.3352503]
                    },
                    "properties": {
                        "date": "2/22/20",
                        "Place": "",
                        "Address": "21 University Estates Blvd.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "21 University Estates Blvd., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of a Trex 3700 stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0968303, 39.3333942]
                    },
                    "properties": {
                        "date": "2/23/20",
                        "Place": "",
                        "Address": "123 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "123 E. State St., Athens, OH 45701",
                        "Title": "Criminal damaging and driving under the influence",
                        "copy": "APD responded to an active burglary. A man was arrested for OVI and criminal damaging.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029001, 39.3286942]
                    },
                    "properties": {
                        "date": "2/23/20",
                        "Place": "",
                        "Address": "15 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 S. Congress St., Athens, OH 45701",
                        "Title": "Criminal mischief",
                        "copy": "APD responded for a residence that had been spray painted.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0840348, 39.3344608]
                    },
                    "properties": {
                        "date": "2/23/20",
                        "Place": "Athens Public Library",
                        "Address": "20 Home St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "30 Home St, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report of a green Burley bike that was stolen from a wooded area near the library.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09835389999999, 39.3325102]
                    },
                    "properties": {
                        "date": "2/23/20",
                        "Place": "Athens Central Hotel",
                        "Address": "88 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 E. State St., Athens, OH 45701",
                        "Title": "Criminal mischief",
                        "copy": "APD took a report at that the building had been spray painted during the early morning.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1105967, 39.3333668]
                    },
                    "properties": {
                        "date": "2/23/20",
                        "Place": "",
                        "Address": "214 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "214 W. State St., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "Officers responded to several vehicles damaged was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0995399, 39.3281336]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "Voigt Hall",
                        "Address": "34 S. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "34 S. College St., Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A man was charged with underage consumption of alcohol by intoxication and transported to OhioHealth O'Bleness Hospital.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "OUPD conducted a welfare check. No further action was needed.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09901529999999, 39.3211037]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "Ping Recreation Center",
                        "Address": "82 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "82 S. Green Dr., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report was taken for a theft of a wallet.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09901529999999, 39.3211037]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "Bromley Hall",
                        "Address": "82 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "82 S. Green Dr., Athens, OH 45701",
                        "Title": "Fraud offenses",
                        "copy": "A report was taken for telecommunications harrassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "2/21/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A theft report was taken from West 82.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1026459, 39.3283079]
                    },
                    "properties": {
                        "date": "2/22/20",
                        "Place": "Bromley Hall",
                        "Address": "35 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 S. Congress St., Athens, OH 45701",
                        "Title": "Fire alarm",
                        "copy": "A fire alarm due to a fire extinguisher being discharged.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1100033, 39.331993]
                    },
                    "properties": {
                        "date": "2/24/20",
                        "Place": "",
                        "Address": "227 W. Washington St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "227 W. Washington St., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "Officers responded to a criminal damaging report.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966127, 39.3255385]
                    },
                    "properties": {
                        "date": "2/24/20",
                        "Place": "Gamertsfelder Hall",
                        "Address": "58 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "58 E. Green Dr., Athens, OH 45701",
                        "Title": "Destruction of property",
                        "copy": "A report taken on damaged computer equipment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.139142, 39.284018]
                    },
                    "properties": {
                        "date": "2/24/20",
                        "Place": "University Heights Apartments",
                        "Address": "Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "Richland Ave., Athens, OH 45701",
                        "Title": "Assist other law enforcement agency",
                        "copy": "OUPD assisted APD witha domestic dispute.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091560, 39.325659]
                    },
                    "properties": {
                        "date": "2/24/20",
                        "Place": "Parking Lot 54",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Theft offense",
                        "copy": "A report taken for a theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "2/25/20",
                        "Place": "Sargent Hall",
                        "Address": "43 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Fraud offenses",
                        "copy": "A victim reported being blackmailed over photographs.",
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
                        "date": "2/25/20",
                        "Place": "Hudson Health Center",
                        "Address": "2 Health Center Dr. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Health Center Dr., Athens, OH 45701",
                        "Title": "Fire alarm",
                        "copy": "False fire alarm",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10770869999999, 39.3327775]
                    },
                    "properties": {
                        "date": "2/25/20",
                        "Place": "",
                        "Address": "1 Walker Way",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Walker Way, Athens, OH 45701",
                        "Title": "EDC deployment",
                        "copy": "K9 deployment for bomb threat in West Jefferson, OH.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0988053, 39.3283158]
                    },
                    "properties": {
                        "date": "2/26/20",
                        "Place": "Hudson Health Center",
                        "Address": "2 Health Center Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Health Center Dr., Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A subject was transportd to OhioHealth O'Bleness Hospital for an emergency pre-screen due to threats of self harm.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/26/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "EDC deployment",
                        "copy": "K9 deployment for bomb threat.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/26/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Reported issued in error, not needed",
                        "copy": "",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/26/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Threat assessment",
                        "copy": "Threat assessment inititated.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "2/26/20",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "Bike tires stolen",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "2/27/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Theft and failfure to appear",
                        "copy": "APD responded for a report of shopllifting complaint. A man was discovered to havea warrant out for his arrest. He was arrested and taken to Southeast Ohio Regional Jail.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10220240000001, 39.3263723]
                    },
                    "properties": {
                        "date": "2/27/20",
                        "Place": "Bentley Hall",
                        "Address": "4 President St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 President St., Athens, OH 45701",
                        "Title": "Assault offenses",
                        "copy": "A report was taken concerning an ACEMS staff member being assaulted.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1020644, 39.330328]
                    },
                    "properties": {
                        "date": "2/29",
                        "Place": "",
                        "Address": "32 N. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "32 N. Congress St., Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "Officers responded to a report of an active burglary. A man was arrested and chaarged with burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0956267, 39.3307995]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "",
                        "Address": "18 Palmer St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "18 Palmer St., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "APD received a report of a vehicle that was vandalized while parked near the rear of a house. There were no suspects at the time of the report.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1055154, 39.32943789999999]
                    },
                    "properties": {
                        "date": "3/1/20",
                        "Place": "Ciro Restaurant",
                        "Address": "120 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "120 W. Union St., Athens, OH 45701",
                        "Title": "Breaking and entering",
                        "copy": "Officers responded to a report of an active breaking and entering. Two men were inside the business and were apprehended without serious injury.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1065361, 39.31701839999999]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "Ohio University Inn",
                        "Address": "331 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "331 Richland Ave., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "Officers responded to OU Inn for a reported assault.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "Kroger",
                        "Address": "919 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Officers responded to a report of a theft complaint. A woman was arrested and charged with theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951315, 39.3238442]
                    },
                    "properties": {
                        "date": "2/28/20",
                        "Place": "Crawford Hall",
                        "Address": "12 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "12 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A man was issued a summons for underage consumption by intoxication and transported to Southeast Ohio Regional Jail pending his sobriety. Another man was taken into custody for an outstanding warrant and transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "2/28/20",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Trespassing offenses",
                        "copy": "OUPD received a trespass complain that took place.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0972748, 39.3254981]
                    },
                    "properties": {
                        "date": "2/28/20",
                        "Place": "Perkins Hall",
                        "Address": "57 E. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "57 E. Green Dr., Athens, OH 45701",
                        "Title": "Fraud offenses",
                        "copy": "A report of telecommunications fraud.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0953062, 39.326518]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "Washington Hall",
                        "Address": "48 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "48 E. Green Dr., Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "A fire alarm pull station was activated in Washington Hall.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "Ohio University Police Department",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A student reported receiving harassing text messages.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "James Hall",
                        "Address": "8 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 W. Green Dr., Athens, OH 45701",
                        "Title": "Destruction of property",
                        "copy": "A report was taken for criminal damaging.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "Jefferson Hall",
                        "Address": "101 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, OH 45701",
                        "Title": "Possession of drug paraphernalia",
                        "copy": "Contraband seized for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "2/29/20",
                        "Place": "Jefferson Hall",
                        "Address": "101 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, OH 45701",
                        "Title": "Intoxicated person",
                        "copy": "A woman was issued a summons for underage consumption by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0986173, 39.3265007]
                    },
                    "properties": {
                        "date": "3/1/20",
                        "Place": "Bryan Hall",
                        "Address": "34 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "34 University Terrace, Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "A well-being check was conducted on a student. No further action was needed.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0951315, 39.3238442]
                    },
                    "properties": {
                        "date": "3/1/20",
                        "Place": "Crawford Hall",
                        "Address": "12 N. McKinley Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "12 N. McKinley Ave., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A student reported a theft. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "3/1/20",
                        "Place": "James Hall",
                        "Address": "8 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 W. Green Dr., Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "A report taken for a traffic crash.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056042, 39.3232793]
                    },
                    "properties": {
                        "date": "3/1/20",
                        "Place": "Convocation Center",
                        "Address": "95 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "95 Richland Ave., Athens, OH 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "A disorderly conduct report was taken.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0670584, 39.3372092]
                    },
                    "properties": {
                        "date": "3/3/20",
                        "Place": "Go-Mart",
                        "Address": "928 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "928 E. State St., Athens, OH 45701",
                        "Title": "Aggravated possession of drugs, aggravated menacing and inducing panic",
                        "copy": "APD responded to Go-Mart for an aggravated menacing complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0987955, 39.3282558]
                    },
                    "properties": {
                        "date": "3/2/20",
                        "Place": "Hudson Health Center",
                        "Address": "2 Health Center Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "2 Health Center Drive, Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A subject was transported to OhioHealth Memorial Hospital for emergency pre-screen due to attempt of self-harm.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0997963, 39.3220688]
                    },
                    "properties": {
                        "date": "3/2/20",
                        "Place": "Hoover House",
                        "Address": "126 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "126 S. Green Dr., Athens, Oh 45701",
                        "Title": "Theft offense",
                        "copy": "A bike theft report was taken. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0923653, 39.3229924]
                    },
                    "properties": {
                        "date": "3/3/20",
                        "Place": "Adams Hall",
                        "Address": "131 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "131 S. Green Dr., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A subhect advised his bike was stolen.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0923653, 39.3229924]
                    },
                    "properties": {
                        "date": "3/3/20",
                        "Place": "Adams Hall",
                        "Address": "131 S. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "131 S. Green Dr., Athens, OH 45701",
                        "Title": "Telecommunication harassment",
                        "copy": "A report was taken for telecommunications harassment.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10081579999999, 39.3312734]
                    },
                    "properties": {
                        "date": "3/5/20",
                        "Place": "Stephen's on Court",
                        "Address": "66 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "66 N. Court St., Athens, OH 45701",
                        "Title": "Disorderly conduct ",
                        "copy": "Officers were flagged down regarding an altercation outside the bar.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "3/5/20",
                        "Place": "Ohio University Police Department",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A fake ID was turned in.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "3/5/20",
                        "Place": "Scott Quadrangle",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Fictious/altered ID",
                        "copy": "A student was charged with possession of a fake Ohio ID.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0992856, 39.3226035]
                    },
                    "properties": {
                        "date": "3/5/20",
                        "Place": "Clippinger Hall",
                        "Address": "139 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "139 University Terrace, Athens, OH 45701",
                        "Title": "Trespassing offenses",
                        "copy": "A man was arrested for trespassing.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974531, 39.3261246]
                    },
                    "properties": {
                        "date": "3/5/20",
                        "Place": "Biddle Hall",
                        "Address": "51 East Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "51 E. Green Dr., Athens, OH 45701",
                        "Title": "Emotionally disturbed person",
                        "copy": "A subject was transported to OhioHealth Memorial Hospital for emergency pre-screen due to attempt of self-harm.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09537139999999, 39.3283652]
                    },
                    "properties": {
                        "date": "3/6/20",
                        "Place": "",
                        "Address": "66 Stewart St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "66 Stewart St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to a report for a theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10212059999999, 39.31556459999999]
                    },
                    "properties": {
                        "date": "3/6/20",
                        "Place": "",
                        "Address": "366 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "366 Richland Ave., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD took a report of a theft from a vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0929894, 39.33549379999999]
                    },
                    "properties": {
                        "date": "3/9/20",
                        "Place": "",
                        "Address": "25 Sunnyside Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "25 Sunnyside Dr., Athens, OH 45701",
                        "Title": "Domestic violence",
                        "copy": "APD responded to the report of domestic violence.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097955, 39.321917]
                    },
                    "properties": {
                        "date": "3/6/20",
                        "Place": "Parking Lot 87",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic crash",
                        "copy": "OUPD received a report of a crash that took a place.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1009933, 39.3267327]
                    },
                    "properties": {
                        "date": "3/9/20",
                        "Place": "Chubb Hall",
                        "Address": "74 S. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "74 S. Court St., Athens, OH 45701",
                        "Title": "EDC deployment",
                        "copy": "K9 deployment for unattended bag.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1060054, 39.3266594]
                    },
                    "properties": {
                        "date": "3/10/20",
                        "Place": "Academic Research Center",
                        "Address": "61 Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "61 Oxbow Trail, Athens, OH 45701",
                        "Title": "Drug offenses",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669733, 39.3380894]
                    },
                    "properties": {
                        "date": "3/12/20",
                        "Place": "Fairfield Inn and Suites",
                        "Address": "924 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "924 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD responded to investigate a complaint. A theft report was taken due to a scamming incident.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106646, 39.323560]
                    },
                    "properties": {
                        "date": "3/12/20",
                        "Place": "Parking Lot 128",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Traffic crash",
                        "copy": "A non-injury accident report.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.106501, 39.324725]
                    },
                    "properties": {
                        "date": "3/12/20",
                        "Place": "Parking Lot 119",
                        "Address": "",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "",
                        "Title": "Recovered property",
                        "copy": "Reported found property was collected.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11517409999999, 39.3155431]
                    },
                    "properties": {
                        "date": "3/12/20",
                        "Place": "Compost Facility",
                        "Address": "7941 Dairy Lane",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7941 Dairy Lane, Athens, OH 45701",
                        "Title": "Suspicious vehicle",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0952853, 39.32883560000001]
                    },
                    "properties": {
                        "date": "3/13/20",
                        "Place": "",
                        "Address": "72 Stewart Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "72 Stewart St., Athens, OH 45701",
                        "Title": "Breaking and entering/theft",
                        "copy": "A man reported his house was broken into and his speaker taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1004968, 39.3325609]
                    },
                    "properties": {
                        "date": "3/13/20",
                        "Place": "",
                        "Address": "4 E. Carpenter St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "4 E. Carpenter St., Athens, OH 45701",
                        "Title": "Theft and assault",
                        "copy": "APD took a walk0in report for an assault and theft that occurred on March 12.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1121227, 39.3294871]
                    },
                    "properties": {
                        "date": "3/13/20",
                        "Place": "",
                        "Address": "257 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "257 W. Union St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A man contacted APD to report a roll of steel was taken from his back porch overnight.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10264459999999, 39.3304311]
                    },
                    "properties": {
                        "date": "3/15/20",
                        "Place": "",
                        "Address": "31 N. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "31 N. Congress St., Athens, OH 45701",
                        "Title": "Burglary and grand theft of a motor vehicle",
                        "copy": "APD responded for a report of a stolen vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10278509999999, 39.3290999]
                    },
                    "properties": {
                        "date": "3/15/20",
                        "Place": "",
                        "Address": "15 1/2 S. Congress St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "15 1/2 S. Congress St., Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "APD received a call for a burglary that occured. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.08832199999999, 39.348623]
                    },
                    "properties": {
                        "date": "3/15/20",
                        "Place": "",
                        "Address": "24 Strouds Run",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "24 Strouds Run, Athens, OH 45701",
                        "Title": "Burglary",
                        "copy": "APD received a call for an active burglary. A report was taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1050927, 39.3117283]
                    },
                    "properties": {
                        "date": "3/15/20",
                        "Place": "",
                        "Address": "526 Carriage Hill",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "526 Carriage Hill Drive, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A man reported his vehicle was entered overnight. Sunglasses and change were taken.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1068889, 39.3250055]
                    },
                    "properties": {
                        "date": "3/13/20",
                        "Place": "Parks Hall",
                        "Address": "24 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "24 W. Green Dr., Athens, OH 45701",
                        "Title": "Possession of drug paraphernalia",
                        "copy": "A man was arrested on possession of controlled substance.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "3/17/20",
                        "Place": "Kroger",
                        "Address": "919 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to Kroger in regerence to a shoplighting complaint. A man was cited for theft and released from custody.",
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
                        "date": "3/17/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Aggravated assault",
                        "copy": "APD responded to an assault with a vehicle on E. State Street.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "3/16/20",
                        "Place": "Sargent Hall",
                        "Address": "43 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "Paraphernalia collected and marked for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0992856, 39.3226035]
                    },
                    "properties": {
                        "date": "3/16",
                        "Place": "Clippinger Labs",
                        "Address": "139 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "139 University Terrace, Athens, OH 45701",
                        "Title": "Trespassing offenses",
                        "copy": "Criminal trespass charge issued to a man.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974099, 39.3223869]
                    },
                    "properties": {
                        "date": "3/16/20",
                        "Place": "Living Learning Center",
                        "Address": "111 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "111 S. Green Dr., Athens, OH 45701",
                        "Title": "Menacing offenses",
                        "copy": "Housing staff reports harassing behavior by a student.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0986173, 39.3265007]
                    },
                    "properties": {
                        "date": "3/16/20",
                        "Place": "Bryan Hall",
                        "Address": "34 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "34 University Terrace, Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report was taken for theft.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "3/17/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Disorderly conduct offenses",
                        "copy": "A woman was charged with disorderly conduct by intoxication.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1261291, 39.3407928]
                    },
                    "properties": {
                        "date": "3/18/20",
                        "Place": "",
                        "Address": "366 University Estates",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "366 University Estates, Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD was contacted in reference to a theft from a motor vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1068082, 39.3261804]
                    },
                    "properties": {
                        "date": "3/18/20",
                        "Place": "Stocker Center",
                        "Address": "28 West Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "28 W. Green Dr., Athens, OH 45701",
                        "Title": "Property damage",
                        "copy": "Graffiti at Stocker Center",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "3/20/20",
                        "Place": "",
                        "Address": "919 E. State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens, OH 45701",
                        "Title": "Theft - deception",
                        "copy": "APD received a complain in reference to a scam phone call.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1056218, 39.3361922]
                    },
                    "properties": {
                        "date": "3/20/20",
                        "Place": "",
                        "Address": "21 Second St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "21 Second St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD took a report over the phone of a theft that occurred.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1097958, 39.3326003]
                    },
                    "properties": {
                        "date": "3/20/20",
                        "Place": "",
                        "Address": "197 W. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "197 W. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD took a report over the phone of a theft from a resident.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11562239999999, 39.3279197]
                    },
                    "properties": {
                        "date": "3/21/20",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Hospital Dr., Athens, OH 45701",
                        "Title": "Grand theft of motor vehicle",
                        "copy": "APD responded to the emergency room on a report of an individual that was trying to steal an ambulance. A man was arrested for a theft of a motor vehicle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.109094, 39.333765]
                    },
                    "properties": {
                        "date": "3/22/20",
                        "Place": "",
                        "Address": "21 Brown Ave. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "21 Brown Ave., Athens, OH 45701",
                        "Title": "Attempted burglary",
                        "copy": "APD responded to Brown Avenue for an attempted burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10465169999999, 39.3250883]
                    },
                    "properties": {
                        "date": "3/21/20",
                        "Place": "Sargent Hall",
                        "Address": "43 E. Oxbow Trail",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "43 E. Oxbow Trail, Athens, OH 45701",
                        "Title": "Recovered property",
                        "copy": "Contraband was collected for destruction.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1017419, 39.3248626]
                    },
                    "properties": {
                        "date": "3/23/20",
                        "Place": "Baker University Center",
                        "Address": "1 Park Place",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1 Park Place, Athens, OH 45701",
                        "Title": "Suspicious activity",
                        "copy": "A report was taken for suspicious activity.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0670584, 39.3372092]
                    },
                    "properties": {
                        "date": "3/24/20",
                        "Place": "The Athens Messenger",
                        "Address": "928 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "928 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD received a report of the theft of a newspaper box form the plaza mall.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10509019999999, 39.3286839]
                    },
                    "properties": {
                        "date": "3/24/20",
                        "Place": "",
                        "Address": "93 W. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "93 W. Union St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A man reported $250 was removed from his Chase account without his knowledge or authorization.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1039206, 39.3365598]
                    },
                    "properties": {
                        "date": "3/26/20",
                        "Place": "",
                        "Address": "166 N. Lancaster St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "166 N. Lancaster St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD took a report over the phone of a bicycle that was stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0852473, 39.3352081]
                    },
                    "properties": {
                        "date": "3/26/20",
                        "Place": "",
                        "Address": "55 Lincoln St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Lincoln St., Athens, OH 45701",
                        "Title": "Grand theft of motor vehicle",
                        "copy": "APD took a report of a black 2000 Harley Davidson Road Kind that had been stolen.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1049791, 39.3247221]
                    },
                    "properties": {
                        "date": "3/26/20",
                        "Place": "James Hall",
                        "Address": "8 W. Green Dr.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 W. Green Dr., Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "A report was taken for theft of a bicycle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "3/27/20",
                        "Place": "Walmart ",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD handled a shoplifting complaint at Walmart. A man was charged with theft and release.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1031004, 39.3296024]
                    },
                    "properties": {
                        "date": "3/29/20",
                        "Place": "",
                        "Address": "8 N. High St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "8 N. High St., Athens, OH 45701",
                        "Title": "Underage consumption and resisting arrest",
                        "copy": "Officers were dispatched to a noise complaint on North High Street near the middle school. A man was arrested for underage consumption of alcohol and resisting arrest.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09859689999999, 39.3241742]
                    },
                    "properties": {
                        "date": "3/27/20",
                        "Place": "Ohio University Police Department",
                        "Address": "88 University Terrace",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "88 University Terrace, Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "OUPD received a request for a welfare check, and no further action was needed for the call. It was determined while completeing the welfare check that an investigation for telelcommunication harassment would be initiated. It is under investigation.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.05749399999999, 39.33628]
                    },
                    "properties": {
                        "date": "3/30/20",
                        "Place": "Texas Roadhouse",
                        "Address": "996 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "996 E. State St., Athens, OH 45701",
                        "Title": "Disorderly/fight or threaten",
                        "copy": "Officers responded to Texas Roadhouse in reference to a fight. The fight was determined to be mutual combat between the wo subjects involved. Both subjects were release from the scene.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.091698, 39.325624]
                    },
                    "properties": {
                        "date": "3/31/20",
                        "Place": "",
                        "Address": "10 Rufus St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "10 Rufus St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "A report was taken for a stolen bicycle.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0973668, 39.3309174]
                    },
                    "properties": {
                        "date": "3/31/20",
                        "Place": "",
                        "Address": "22 Kurtz St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 Kurtz St., Athens, OH 45701",
                        "Title": "Theft and Criminal damaging/endangering",
                        "copy": "Officers responded to Kurtz Street in reference to criminal damaging and theft complain.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0977534, 39.3329986]
                    },
                    "properties": {
                        "date": "3/31/20",
                        "Place": "",
                        "Address": "112 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "112 E. State St., Athens, OH 45701",
                        "Title": "Health violations prohibited",
                        "copy": "Officers responded to East State Street in reference to a nuisance party. A student was charged with violaing Ohio's stay-at-home order. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1012264, 39.3301059]
                    },
                    "properties": {
                        "date": "3/31/20",
                        "Place": "",
                        "Address": "27 N. Court St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "27 N. Court St., Athens, OH 45701",
                        "Title": "Burglary and theft",
                        "copy": "APD responded to an apartment for an inactive burglary.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0437441, 39.3351273]
                    },
                    "properties": {
                        "date": "4/1/20",
                        "Place": "",
                        "Address": "201 Hope Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "201 Hope Dr., Athens, OH 45701",
                        "Title": "Violate protection order",
                        "copy": "APD took a report of a protection violation over the phone.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0974099, 39.3223869]
                    },
                    "properties": {
                        "date": "3/30/20",
                        "Place": "Living Learning Center",
                        "Address": "111 South Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "111 S. Green Dr., Athens, OH 45701",
                        "Title": "Trespassing offenses",
                        "copy": "A report was taken concerning a man trespassing in residence halls. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0669308, 39.3353075]
                    },
                    "properties": {
                        "date": "4/2/20",
                        "Place": "Walmart ",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD responded to Walmart to take a theft report. A man and woman were cited for theft and trespassed from Walmart.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.04466049999999, 39.3366084]
                    },
                    "properties": {
                        "date": "4/2/20",
                        "Place": "",
                        "Address": "702 Hope Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "702 Hope Dr., Athens, OH 45701",
                        "Title": "Domestic violence",
                        "copy": "Officers responded for domestic violence complaint. A man was arrested for domestic violence.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1021169, 39.329289]
                    },
                    "properties": {
                        "date": "4/3/20",
                        "Place": "",
                        "Address": "22 W. Washington St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "22 W. Washington St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a report for astolen cell phone.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0970303, 39.3295658]
                    },
                    "properties": {
                        "date": "4/3/20",
                        "Place": "",
                        "Address": "89 Mill Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "89 Mill St., Athens, OH 45701",
                        "Title": "Health violations prohibited",
                        "copy": "APD responded in reference to a nuisance party. Two students were charged with violating the stay-at-home order.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.097881, 39.3301473]
                    },
                    "properties": {
                        "date": "4/3/20",
                        "Place": "",
                        "Address": "68 Mill Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "68 Mill St., Athens, OH 45701",
                        "Title": "Health violations prohibited",
                        "copy": "Officers responded in reference to a nuisance party. A student was ccharged with violating Ohio's stay-at-home order.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.06773930000001, 39.3371752]
                    },
                    "properties": {
                        "date": "4/4/20",
                        "Place": "McDonald's",
                        "Address": "922 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "922 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD responded to McDonald's for a theft complaint.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1040907, 39.339713]
                    },
                    "properties": {
                        "date": "4/4/20",
                        "Place": "",
                        "Address": "70 Columbus Rd.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "70 Columbus Rd., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD took a theft report on station from an incident that occurred.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.09998639999999, 39.3294648]
                    },
                    "properties": {
                        "date": "4/5/20",
                        "Place": "",
                        "Address": "11 N. College St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "11 N. College St., Athens, OH 45701",
                        "Title": "Assault",
                        "copy": "APD took a walk-in report for an assault that occurred in the area of Mill Street and College Street.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0966409, 39.3248623]
                    },
                    "properties": {
                        "date": "4/4/20",
                        "Place": "Tiffin Hall",
                        "Address": "60 East Green Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "60 E. Green Dr., Athens, OH 45701",
                        "Title": "Welfare Check",
                        "copy": "A man was arrested on outtanding warrants and transported to Southeast Ohio Regional Jail.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1060471, 39.300363]
                    },
                    "properties": {
                        "date": "4/5/20",
                        "Place": "",
                        "Address": "9 Cash Lane",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "9 Cash Lane, Athens, OH 45701",
                        "Title": "Menacing ",
                        "copy": "A resident advised that another man was harassing him.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1032343, 39.3316692]
                    },
                    "properties": {
                        "date": "4/4/20",
                        "Place": "",
                        "Address": "61 N. High St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "61 N. High St., Athens, OH 45701",
                        "Title": "Health violations prohibited",
                        "copy": "Officers responded in reference to a nuisance party. A student was ccharged with violating Ohio's stay-at-home order.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1065361, 39.31701839999999]
                    },
                    "properties": {
                        "date": "4/8/20",
                        "Place": "Ohio University Inn",
                        "Address": "331 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "331 Richland Ave., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "Officer on patrol discovered a fire in the mulch at the OU Inn. The fire department was dispatched and extinguished the fire. The fire was determined to be caused by improperly discarded coals from a grill. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0670584, 39.3372092]
                    },
                    "properties": {
                        "date": "4/8/20",
                        "Place": "Go Mart",
                        "Address": "928 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "928 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A person contacted APD to report their wallet had been stolen from the Go Mart.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1116607, 39.3351122]
                    },
                    "properties": {
                        "date": "4/12/20",
                        "Place": "",
                        "Address": "53 Central Ave. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "53 Central Ave, Athens, OH 45701",
                        "Title": "Animal at large",
                        "copy": "APD responded to an aggressive dog at large. A report was taken and replayed to the dog warden with Athens County Sheriff's Office.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1066673, 39.311836]
                    },
                    "properties": {
                        "date": "4/13/20",
                        "Place": "",
                        "Address": "1320 Carriage Hill",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "1320 Carriage Hill, Athens, OH 45701",
                        "Title": "Aggravate menacing",
                        "copy": "Officers took an aggravted menacing complaint at APD.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "4/13/20",
                        "Place": "",
                        "Address": "919 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens ,OH 45701",
                        "Title": "Theft",
                        "copy": "A woman called APD to report a stolen license plate. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.07454729999999, 39.3378011]
                    },
                    "properties": {
                        "date": "4/14/20",
                        "Place": "Mike Porter Autoplex",
                        "Address": "750 East State Street",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "750 E. State St., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "An employee from Mark Porter's Autoplex reported criminal damage to one of their cars. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1029211, 39.3043215]
                    },
                    "properties": {
                        "date": "4/16/20",
                        "Place": "Marathon",
                        "Address": "542 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "542 Richland Ave., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A man reported that the outside tire air compressor was taken from outside the building overnight. ",
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
                        "date": "4/16/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD responded to a report of a shoplifting incident. A man was charged with theft and transported to Athens Municipal Court to appear on the charge. ",
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
                        "date": "4/16/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD received a report from the Vinton County Sheriff's Office that a stolen credit card had been recovered in Vinton County. The victim lost her credit card and wallet or the wallet was stolen while she was at Walmart in Athens.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "4/16/20",
                        "Place": "Jefferson Hall",
                        "Address": "101 E. Union St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, 45701",
                        "Title": "Property damage",
                        "copy": "A report was taken for property damage and theft from a vehicle. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0964339, 39.3271066]
                    },
                    "properties": {
                        "date": "4/16/20",
                        "Place": "Jefferson Garage",
                        "Address": "101 E. Union St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "101 E. Union St., Athens, 45701",
                        "Title": "Property damage",
                        "copy": "A report was taken for property damage and theft from a vehicle.",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1105876, 39.3285427]
                    },
                    "properties": {
                        "date": "4/17/20",
                        "Place": "Ohio University Credit Union",
                        "Address": "90 S. Shafer St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "90 S. Shafer St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Officers responded to the OU Credit Union for a report of a theft. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.093896, 39.331251]
                    },
                    "properties": {
                        "date": "4/17/20",
                        "Place": "",
                        "Address": "35 Elliot St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "35 Elliot St., Athens, OH 45701",
                        "Title": "Report of gunshots",
                        "copy": "APD responded to the area for a report of the sound of gunshots. Officers spoke to witnesses, who said they heard several gunshots and saw a dark colored sedan go toward Mill Street. Officer patrolled the area and found several shell casings in the street. No injuries were reported, and there are no suspects at this time. The incident is under investigation.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10353429999999, 39.3292383]
                    },
                    "properties": {
                        "date": "4/19/20",
                        "Place": "",
                        "Address": "47 W. Washington St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "47 W. Washington St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Some came to APD to report a theft.",
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
                        "date": "4/19/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "A woman was arrested, cited and released for shoplifting at Walmart.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.1079694, 39.3151204]
                    },
                    "properties": {
                        "date": "4/19/20",
                        "Place": "The Summit at Coates Run",
                        "Address": "363 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "363 Richland Ave., Athens, OH 45701",
                        "Title": "Criminal damaging",
                        "copy": "An officer responded for a report of criminal damaging. ",
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
                        "date": "4/19/20",
                        "Place": "Walmart",
                        "Address": "929 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "929 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD responded to Walmart for a shoplifter.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11562239999999, 39.3279197]
                    },
                    "properties": {
                        "date": "4/20/20",
                        "Place": "OhioHealth O'Bleness Hospital",
                        "Address": "55 Hospital Drive",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "55 Hospital Dr., Athens, OH 45701",
                        "Title": "Criminal trespass and resisting arrest",
                        "copy": "APD responded for a trespassing complaint. A man was charged with criminal trespassing and resisting arrest. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10212059999999, 39.31556459999999]
                    },
                    "properties": {
                        "date": "4/20/20",
                        "Place": "University Courtyard Apartments",
                        "Address": "366 Richland Ave.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "366 Richland Ave., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD received a theft complaint from the online reporting system. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.11517409999999, 39.3155431]
                    },
                    "properties": {
                        "date": "4/18/20",
                        "Place": "Compost Facility ",
                        "Address": "7941 Dairy Lane",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "7941 Dairy Lane, Athens, OH 45701",
                        "Title": "Theft offense",
                        "copy": "OUPD received a report of two individuals tampering with a vehicle. The incident was investigated and forwarded to the Athens County Prosecutor's Office. ",
                        "category": "OUPD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.08754139999999, 39.3372783]
                    },
                    "properties": {
                        "date": "4/20/20",
                        "Place": "Speedway",
                        "Address": "319 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "319 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "APD was called for a report of a theft from the store. A man and woman suspect took items from the store without paying. A report was taken, and an investigation is pending. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.10212059999999, 39.31556459999999]
                    },
                    "properties": {
                        "date": "4/20/20",
                        "Place": "",
                        "Address": "366 Richland Ave. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "366 Richland Ave., Athens, OH 45701",
                        "Title": "Aggravated menacing",
                        "copy": "Officers responded for a report of aggravated menacing. ",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0689733, 39.3360914]
                    },
                    "properties": {
                        "date": "4/21/20",
                        "Place": "Kroger",
                        "Address": "919 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "919 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "APD responded to a report of a theft at Kroger. A woman was cited for theft and was released.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.07518549999999, 39.3365961]
                    },
                    "properties": {
                        "date": "4/21/20",
                        "Place": "Athens Community Center",
                        "Address": "701 E. State St. ",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "701 E. State St., Athens, OH 45701",
                        "Title": "Theft",
                        "copy": "Officers were flagged down in front of Athens Community Center for a theft.",
                        "category": "APD"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-82.0670584, 39.3372092]
                    },
                    "properties": {
                        "date": "4/22/20",
                        "Place": "",
                        "Address": "928 E. State St.",
                        "City": "Athens",
                        "State": "OH",
                        "Zip": 45701,
                        "Full Address": "928 E. State St., Athens, OH 45701",
                        "Title": "Petty theft",
                        "copy": "Officers responded to East State Street for a theft. A woman was charged and released. ",
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
        });

        var props = features[0].properties;

        var html = `
        <div class="pop-place">${props.Place}</div>
        `;

        for (f of features) {
            props = f.properties;
            html += `
          <div class="pop-date">${props.date}</div>
          <div class="pop-cat">${props.category}</div>
          <div class="pop-title">${props.Title}</div>
          <div class="pop-copy">${props.copy}</div>
          `;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(html)
            .addTo(map);
    });
});



// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'points', function() {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'points', function() {
    map.getCanvas().style.cursor = '';
});

map.scrollZoom.disable(); // disable scroll zoom
map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
;


// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
