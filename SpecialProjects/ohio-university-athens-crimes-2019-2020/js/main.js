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
