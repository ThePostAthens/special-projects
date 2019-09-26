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
           "features": [
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.066754,39.335708 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"",
            "Address":"929 E State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 929 E State St. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD officers responded to Walmart for a report of a about $50 of merchadise stolen. A woman was cited for theft and released.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.066754,39.335708 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"",
            "Address":"929 E State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 929 E State St. Athens OH 45701 ",
            "Title":"Criminal Trespass",
            "copy":"Officers responded to Walmart for a trespassing complaint. A report was taken.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098441,39.330059 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"",
            "Address":"0 Kern/Mill",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 0 Kern/Mill Athens OH 45701 ",
            "Title":"Underage consumption of alcohol/obstructing offical business",
            "copy":"Athens Mounted Patrol Units made contact with a man who had an open container of alcohol. He was charged with underage alcohol consumption and obstructing official business.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.102867,39.327945 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"Bromley Hall",
            "Address":"35 S. Congress St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bromley Hall 35 S. Congress St. Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A report was taken for reference ceiling tile damage.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10283,39.325161 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"",
            "Address":"Oxbow Trail/Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Oxbow Trail/Drive Athens OH 45701 ",
            "Title":"Accident Report Damage",
            "copy":"Report was taken in reference to a vehicle property damage.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104979,39.324722 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"James Hall",
            "Address":"97 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"James Hall 97 West Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for disporderly conduct by intoxication. He was transported to OhioHealth O'Bleness Hosipital by ACEMS.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.096398,39.322636 ]
            },
            "properties": {
            "date":"8/23/19",
            "Place":"Tanaka Hall",
            "Address":"121 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Tanaka Hall 121 South Green Dr. Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A resident assitant reported damage to a light pole outside of Tanaka Hall",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued to a man for reckless operation. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105302,39.315519 ]
            },
            "properties": {
            "date":"8/24/0201",
            "Place":"",
            "Address":"Richland Avenue",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Richland Avenue Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued for operating a motor vehicle without a valid license",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094722,39.325179 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"Brown Hall",
            "Address":"69 South Green Dr. ",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Brown Hall 69 South Green Dr.  Athens OH 45701 ",
            "Title":"Theft",
            "copy":"A report was taken for reference of theft of \"Welcome\" banner.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09688,39.322098 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"",
            "Address":"South Green",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" South Green Athens OH 45701 ",
            "Title":"Operations",
            "copy":"EDC Deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"Boyd dining Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd dining Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"Officers took a report of a theft of a purse",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098776,39.328268 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"Hudson Health Center",
            "Address":"2 Health Center Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Hudson Health Center 2 Health Center Dr Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for underage alcohol consumption, intoxication and possession of a fake ID. He was transported to Southeastern Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098378,39.324248 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"Ohio University Police Department",
            "Address":"135 Scott Quad",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ohio University Police Department 135 Scott Quad Athens OH 45701 ",
            "Title":"Fictitious/altered ID",
            "copy":"OUPD took a report related to a fake ID.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.110945,39.327657 ]
            },
            "properties": {
            "date":"8/24/19",
            "Place":"",
            "Address":"Shafer Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Shafer Street Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A charge was issued to a man for driving under court suspension.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101496,39.327644 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"",
            "Address":"Court Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Court Street Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for underage alcohol consumption, intoxication and possession of a fake ID. He was transported to Southeastern Ohio Regional Jail.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10234,39.334062 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"",
            "Address":"Congress Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Congress Street Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for disorderly conduct by intoxication and open container. He was transported to Southeastern Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104979,39.324722 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"James Hall Garage",
            "Address":"97 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"James Hall Garage 97 West Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A woman was cited for disorderly conduct by intoxication. She was transported to OhioHealth O'Bleness Hospital by ACEMS.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"Boyd Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for disporderly conduct by intoxication. He was transported to Southeastern Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105302,39.315519 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"",
            "Address":"Richland Avenue",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Richland Avenue Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"Citation issued to a man for driving on the sidewalk",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105761,39.323206 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"The Convocation Center",
            "Address":"95 Richland Ave.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"The Convocation Center 95 Richland Ave. Athens OH 45701 ",
            "Title":"Operations",
            "copy":"EDC Deployment; canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.102867,39.327945 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"Bromley Hall",
            "Address":"35 S. Congress St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bromley Hall 35 S. Congress St. Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"Complainant requested an officer for a well-being check.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09665,39.324716 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"Tiffin Hall",
            "Address":"60 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Tiffin Hall 60 East Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"OUPD conducted a well-being check on a student.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.087277,39.337279 ]
            },
            "properties": {
            "date":"8/25/19",
            "Place":"",
            "Address":"319 E. State Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 319 E. State Street Athens OH 45701 ",
            "Title":"Aggravated menacing/vandalism",
            "copy":"APD received a call about a suspicious person at Speedway on E. State St. A report was taken and a man was arrested for vandalism and aggravated menacing. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.103064,39.328527 ]
            },
            "properties": {
            "date":"8/22/19",
            "Place":"",
            "Address":"19 S. Congress St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 19 S. Congress St. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"A woman came to APD to file a theft report. A report was taken.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.107924,39.329993 ]
            },
            "properties": {
            "date":"8/26/19",
            "Place":"West Union St. Office Center",
            "Address":"160 W. Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"West Union St. Office Center 160 W. Union Street Athens OH 45701 ",
            "Title":"Recovered property",
            "copy":"A bicycle was reported propped up against a building. The owner was unable to be contacted, and the bicycle was take to OUPD.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095132,39.323844 ]
            },
            "properties": {
            "date":"8/26/19",
            "Place":"Crawford Hall",
            "Address":"71 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Crawford Hall 71 South Green Dr. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"OUPD took information related to a reported theft",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.102055,39.326801 ]
            },
            "properties": {
            "date":"8/26/19",
            "Place":"Phil and Pat Muck Business Annex",
            "Address":"3 President St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Phil and Pat Muck Business Annex 3 President St Athens OH 45701 ",
            "Title":"Fictitious/altered ID",
            "copy":"OUPD received an ID in the lost and found that turned out to be a fake ID.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101045,39.328826 ]
            },
            "properties": {
            "date":"8/26/19",
            "Place":"",
            "Address":"10 S. Court Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 10 S. Court Street Athens OH 45701 ",
            "Title":"Theft",
            "copy":"A six pack of Mystic Mama beer was stolen from Big Mamma's Burritos.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.074739,39.342344 ]
            },
            "properties": {
            "date":"8/26/19",
            "Place":"",
            "Address":"56 Avon St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 56 Avon St. Athens OH 45701 ",
            "Title":"Theft/Misuse of credit card",
            "copy":"APD responded to a complaint of a stolen credit card.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097136,39.324747 ]
            },
            "properties": {
            "date":"8/27/19",
            "Place":"Shively Hall",
            "Address":"59 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Shively Hall 59 East Green Dr. Athens OH 45701 ",
            "Title":"Bicycle Complaint",
            "copy":"Complainant reported bicycle secured to handicap railing. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.109932,39.319592 ]
            },
            "properties": {
            "date":"8/27/19",
            "Place":"Mail Services",
            "Address":"122 Ridges Circle",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Mail Services 122 Ridges Circle Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"8/27/19",
            "Place":"Boyd Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Telecommunication Harassment",
            "copy":"Complainant reported harassment from an ex boyfriend.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098378,39.322701 ]
            },
            "properties": {
            "date":"8/27/19",
            "Place":"Carr Hall",
            "Address":"97 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Carr Hall 97 South Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"Complainent requested ACEMS for a report of a seizure.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100813,39.331308 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"Stephen's Bar",
            "Address":"66 N. Court St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Stephen's Bar 66 N. Court St. Athens OH 45701 ",
            "Title":"Assault",
            "copy":"Officers took a report of an assualt that occured at Stephen's Bar. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.093575,39.328528 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"",
            "Address":"10 Milliron",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 10 Milliron Athens OH 45701 ",
            "Title":"Criminal Damaging/Endangering",
            "copy":"APD responded to a report of a vehicle being damaged on Milliron. A report was taken. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09665,39.324716 ]
            },
            "properties": {
            "date":"8/28/19",
            "Place":"Tiffin Hall",
            "Address":"60 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Tiffin Hall 60 East Green Dr. Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"Subject taken into custody for a mental health evaluation.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094722,39.325179 ]
            },
            "properties": {
            "date":"8/28/19",
            "Place":"Brown Hall",
            "Address":"69 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Brown Hall 69 South Green Dr. Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"Complaint reported damage to the area",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"8/28/19",
            "Place":"Boyd Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"A report was taken in reference to the theft of a roomy key. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.110928,39.321612 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"",
            "Address":"State Route 682",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" State Route 682 Athens OH 45701 ",
            "Title":"Sex offense",
            "copy":"Citiations were issued to a man for public indecency and underage consumption of alcohol",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09395,39.332536 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"Counseling and Psychological Services",
            "Address":"2 Health Center Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Counseling and Psychological Services 2 Health Center Dr Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"CPS requested an officer to transport a person for a mental health evalutation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.067589,39.336925 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"",
            "Address":"East State Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" East State Street Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"OUPD assisted APD by responding to a non-injury traffic crash.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105302,39.315519 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"",
            "Address":"Richland Avenue",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Richland Avenue Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued to a man for driving under a non-compliance suspension. The man was transported to Southeastern Ohio Regional Jail for a warrent in Morgan County Sheriff's Office.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105532,39.32651 ]
            },
            "properties": {
            "date":"8/29/19",
            "Place":"Ryors Hall",
            "Address":"101 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ryors Hall 101 West Green Dr. Athens OH 45701 ",
            "Title":"Sex offense",
            "copy":"A man was charged with sexual imposition. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.11265,39.333681 ]
            },
            "properties": {
            "date":"8/31/19",
            "Place":"",
            "Address":"0 West State Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 0 West State Street Athens OH 45701 ",
            "Title":"Sexual Battery",
            "copy":"A 21-year-old woman reported she was a victim of sexual assault on the city's west end by an unknown subject. The matter is currently under investigation.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.099897,39.330243 ]
            },
            "properties": {
            "date":"8/31/19",
            "Place":"",
            "Address":"25 Mill Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 25 Mill Street Athens OH 45701 ",
            "Title":"Criminal Trespass/Disorderly Conduct by Intoxication",
            "copy":"Officers responded to a Mill Street resudence in reference to an unknown man in the residence. The man was arrested for criminal trespass and disordely conduct by intoxication.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10234,39.334062 ]
            },
            "properties": {
            "date":"9/1/19",
            "Place":"",
            "Address":"0 Congress/State Streets",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 0 Congress/State Streets Athens OH 45701 ",
            "Title":"Arson",
            "copy":"Officers lcoated a man trying to light a couch on fire. No suspects were apprehended, and a report was taken. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101355,39.329314 ]
            },
            "properties": {
            "date":"9/1/19",
            "Place":"",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"  Athens OH 45701 ",
            "Title":"Sex offense",
            "copy":"A 21-year-old woman reported she was the victim of rape on the south end of the city by a known suspect. The matter is under investigation, and no further information will be released at this time. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10234,39.334062 ]
            },
            "properties": {
            "date":"9/2/19",
            "Place":"",
            "Address":"0 Congress/Rose St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 0 Congress/Rose St. Athens OH 45701 ",
            "Title":"Arson",
            "copy":"Officers located a recliner on fire in the street. A report was taken.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.113445,39.334054 ]
            },
            "properties": {
            "date":"9/2/19",
            "Place":"",
            "Address":"300 W. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 300 W. State St. Athens OH 45701 ",
            "Title":"Felonious Assault",
            "copy":"APD responsded to a fight. A report was taken and charges are pending for multiple parties.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.113445,39.334054 ]
            },
            "properties": {
            "date":"9/2/19",
            "Place":"",
            "Address":"300 W. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 300 W. State St. Athens OH 45701 ",
            "Title":"Aggravated Menacing",
            "copy":"Officiers responded to W. State St. in reference to a fight. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"8/30/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Crash, Traffic",
            "copy":"Report taken in reference to Jeff HIll sidewalk handrail damage",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10283,39.325161 ]
            },
            "properties": {
            "date":"8/30/19",
            "Place":"",
            "Address":"Oxbow Trail/Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Oxbow Trail/Drive Athens OH 45701 ",
            "Title":"Crash, Traffic",
            "copy":"Report taken in reference to vehicile and cyclist crash",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095259,39.325881 ]
            },
            "properties": {
            "date":"8/30/19",
            "Place":"Washington Hall",
            "Address":"49 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Washington Hall 49 East Green Dr. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"Report taken in reference to theft of wallet and key. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104646,39.325092 ]
            },
            "properties": {
            "date":"8/30/19",
            "Place":"Sargent Hall",
            "Address":"98 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Sargent Hall 98 West Green Dr. Athens OH 45701 ",
            "Title":"Ficiticious ID",
            "copy":"A student was issued a citation for possession of a fake ID",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"8/31/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Operations",
            "copy":"A woman was arrested on an oustanding warrent out of Athens County for tresspassing,  paid bond and was released. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100545,39.326268 ]
            },
            "properties": {
            "date":"8/31/19",
            "Place":"Main campus/College Green",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Main campus/College Green  Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A student was issued a citation for underage consumption of alcohol and open container.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.103018,39.321301 ]
            },
            "properties": {
            "date":"8/31/19",
            "Place":"Peden Stadium",
            "Address":"200 Richland Ave",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Peden Stadium 200 Richland Ave Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.099077,39.325815 ]
            },
            "properties": {
            "date":"8/31/19",
            "Place":"Ellis Hall",
            "Address":"45 University Terrace",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ellis Hall 45 University Terrace Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A student was issued a citation for underage consumption intoxication and transported to Southeastern Ohio Regional Jail.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"9/1/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A citation was issued to a man for disorderly conduct by intoxication",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10234,39.334062 ]
            },
            "properties": {
            "date":"9/1/19",
            "Place":"",
            "Address":"Congress Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Congress Street Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"Two students were arrested fo underage consumption of alcohol and intoxication. ONe stdent has a fake ID.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.099014,39.321116 ]
            },
            "properties": {
            "date":"9/1/19",
            "Place":"Ping Recreation Center",
            "Address":"82 S Green Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ping Recreation Center 82 S Green Dr Athens OH 45701 ",
            "Title":"Vandalism",
            "copy":"Complaintant reported damage to bike path lights.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104646,39.325092 ]
            },
            "properties": {
            "date":"9/1/19",
            "Place":"Sargent Hall",
            "Address":"98 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Sargent Hall 98 West Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A student was issued a citationf for disorderly conduct by intoxication. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.08953,39.322224 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Parking Lot 56",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 56  Athens OH 45701 ",
            "Title":"Rape",
            "copy":"A female student reported unwanted sexual conduct between her and a known male suspect. The incident occurred in 2017.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.109932,39.319592 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Mail Services",
            "Address":"122 Ridges Circle",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Mail Services 122 Ridges Circle Athens OH 45701 ",
            "Title":"Forgery",
            "copy":"Complaint reports receving possible fradulent checks",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101555,39.325135 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Baker University Center",
            "Address":"1 Park Place",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Baker University Center 1 Park Place Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A citation was issued to a man for theft.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094775,39.322023 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Hoover House",
            "Address":"136 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Hoover House 136 South Green Dr. Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"Complaintant reported a bicule taken from the area.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.109932,39.319592 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Mail Services",
            "Address":"122 Ridges Circle",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Mail Services 122 Ridges Circle Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.099014,39.321116 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Ping Recreation Center",
            "Address":"82 S Green Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ping Recreation Center 82 S Green Dr Athens OH 45701 ",
            "Title":"Assault",
            "copy":"A coplaintant was injured by an unknown perosn during a basketball game.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.08953,39.322224 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Parking Lot 56",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 56  Athens OH 45701 ",
            "Title":"Theft motor vehucle",
            "copy":"A report was taken in reference to a motor vehicle theft. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105532,39.32651 ]
            },
            "properties": {
            "date":"9/3/19",
            "Place":"Ryors Hall",
            "Address":"101 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ryors Hall 101 West Green Dr. Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A report was taken in reference to a bicycle theft",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.110664,39.329464 ]
            },
            "properties": {
            "date":"9/5/19",
            "Place":"",
            "Address":"Shafer Street/West Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Shafer Street/West Union Street Athens OH 45701 ",
            "Title":"Aggravated robbery",
            "copy":"A report was filed for a robbery. A Samsung smartwatch and $3 were stolen.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.093594,39.325986 ]
            },
            "properties": {
            "date":"9/5/19",
            "Place":"",
            "Address":"Nelson Drive/Rufus Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Nelson Drive/Rufus Street Athens OH 45701 ",
            "Title":"Aggravated robbery",
            "copy":"A man advised officers that he was robbed at gunpoint while walking on Nelson Drive at the intersection of Rufus Street. A wallet, an Ohio ID, various giftcards, a laundry card and $200 cash was stolen. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105302,39.315519 ]
            },
            "properties": {
            "date":"9/4/19",
            "Place":"",
            "Address":"Richland Avenue",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Richland Avenue Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued for failture to obey a traffic control device. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105761,39.323206 ]
            },
            "properties": {
            "date":"9/4/19",
            "Place":"Parking Lot 129",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 129  Athens OH 45701 ",
            "Title":"Crash, Traffic",
            "copy":"Complainant reports damage to a vehicle.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101555,39.325135 ]
            },
            "properties": {
            "date":"9/4/19",
            "Place":"Baker University Center",
            "Address":"1 Park Place",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Baker University Center 1 Park Place Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"ACEMS arrived on scene. No transport was needed",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.092743,39.325833 ]
            },
            "properties": {
            "date":"9/5/19",
            "Place":"",
            "Address":"Rufus Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Rufus Drive Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"Assist APD",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.113891,39.327306 ]
            },
            "properties": {
            "date":"9/5/19",
            "Place":"OhioHealth O'Bleness Hospital",
            "Address":"55 Hospital Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"OhioHealth O'Bleness Hospital 55 Hospital Dr Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"OUPD assisted O'Bleness security staff with a combative individual in their parking lot. A man was taken into protective custody and transported to the emergency room.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.103371,39.312321 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"",
            "Address":"113 Carriage Hill Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 113 Carriage Hill Drive Athens OH 45701 ",
            "Title":"Domestic Trouble",
            "copy":"Officers responded to Carriage Hill Drive in reference to a 911 hang up call.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100859,39.330819 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"",
            "Address":"50 N. Court St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 50 N. Court St. Athens OH 45701 ",
            "Title":"Underage consumption of alcohol/criminal trespass",
            "copy":"Officers responded to Dale's Valero in reference to an intoxicated man. The man was arrested and charged with underage consumption of alcohol and criminal trespass. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101484,39.327886 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Chipotle Mexican Grill",
            "Address":"41 S Court St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Chipotle Mexican Grill 41 S Court St Athens OH 45701 ",
            "Title":"Criminal Trespass",
            "copy":"Officers responded to a report of an unknown person inside Chipotle after hours.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097136,39.324747 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"Shively Hall",
            "Address":"59 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Shively Hall 59 East Green Dr. Athens OH 45701 ",
            "Title":"Rape",
            "copy":"OUPD received a report from a woman that a man engaged her in sexual conduct without consent in an unknown room at Shively Hall. The victim reported being hit on her head at some point during the incident and sustained minor phsycial injuries. The case is under investigation by OUPD",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100786,39.330399 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"",
            "Address":"5 Mill St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 5 Mill St. Athens OH 45701 ",
            "Title":"Aggravated Assault",
            "copy":"APD took a report of an aggravated assault. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.066754,39.335708 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"",
            "Address":"929 E. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 929 E. State St. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD responded to Walmart for a report of a shoplifter. A man was served a charge for theft and trespassed from Walmart. He was arrested on an active warrent through APD and was transported to court. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098711,39.332774 ]
            },
            "properties": {
            "date":"9/2/19",
            "Place":"",
            "Address":"19 Franklin St. Athens",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 19 Franklin St. Athens Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD responde to a complaint of theft from a vehicle. A report was taken. The matter is closed to a lack of viable investigative leads.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094674,39.325275 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Pickering Hall",
            "Address":"68 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Pickering Hall 68 South Green Dr. Athens OH 45701 ",
            "Title":"Menancing",
            "copy":"A complaintant reported that a man threatened her. A report was taken. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100769,39.331852 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Off-campus miscellaneous",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Off-campus miscellaneous  Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.092692,39.322599 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"True House",
            "Address":"32 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"True House 32 South Green Dr. Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A report was taken in reference to a stolen bicycle.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098998,39.326778 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Templeton-Blackburn Alumni Memorial Auditorium",
            "Address":"47 E Union St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Templeton-Blackburn Alumni Memorial Auditorium 47 E Union St Athens OH 45701 ",
            "Title":"Operations",
            "copy":"EDC Deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.106182,39.325412 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Wilson Hall",
            "Address":"104 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Wilson Hall 104 West Green Dr. Athens OH 45701 ",
            "Title":"Death",
            "copy":"OUPD investigated an unattended death.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.102867,39.327945 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Bromley Hall",
            "Address":"35 S. Congress St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bromley Hall 35 S. Congress St. Athens OH 45701 ",
            "Title":"Menancing",
            "copy":"A complaintant reported people urinating on dorm room doors.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104646,39.325092 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"Sargent Hall",
            "Address":"98 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Sargent Hall 98 West Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was charged with undrage consumption of alcohol and transported to OhioHealth O'Bleness Hospital by ACEMS",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.075389,39.336838 ]
            },
            "properties": {
            "date":"9/8/19",
            "Place":"Athens Community Center",
            "Address":"701 E. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Athens Community Center 701 E. State St. Athens OH 45701 ",
            "Title":"Criminal Damaging/Endangering and Theft",
            "copy":"Officers responded to a complaint of a theft from a vehicle. The passengers window was broken and $20 was stolen from the victim's wallet. A report was taken. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.090901,39.337527 ]
            },
            "properties": {
            "date":"9/8/19",
            "Place":"Kindred Market",
            "Address":"284 E. State St. Athens",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Kindred Market 284 E. State St. Athens Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD took a report of shoplifting worth about $50. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.108091,39.315073 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"",
            "Address":"363 Richland Ave.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 363 Richland Ave. Athens OH 45701 ",
            "Title":"Telecommunication Harassment",
            "copy":"A woman came to APD to file a harassment complaint. A report was taken.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.066754,39.335708 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"Walmart",
            "Address":"929 E. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Walmart 929 E. State St. Athens OH 45701 ",
            "Title":"Menacing by stalking",
            "copy":"Officers took a menacing by stalking report",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.125428,39.331102 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"",
            "Address":"560 W. Union St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 560 W. Union St. Athens OH 45701 ",
            "Title":"Domestic Violence",
            "copy":"Officers responded to a report of domestic violence. A man was arrested, taken to court and released by a judge. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101355,39.329314 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"South end of the city",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"South end of the city  Athens OH 45701 ",
            "Title":"Rape",
            "copy":"A woman reported she was a victim of sexual assault on the city's south end by a known suspect. The matter is under investigation.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095905,39.326538 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"",
            "Address":"Stewart Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Stewart Street Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A citation was issued to a man for disorderly conduct by intoxication. Contraband was collected for further investigation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.109932,39.319592 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"Mail Services",
            "Address":"122 Ridges Circle",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Mail Services 122 Ridges Circle Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097107,39.325475 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"Perkins Hall",
            "Address":"57 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Perkins Hall 57 East Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"A verbal altercation was reported, but no criminal activity was found. Subjects would separate if necessary.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097136,39.324747 ]
            },
            "properties": {
            "date":"9/6/19",
            "Place":"Shively Hall",
            "Address":"59 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Shively Hall 59 East Green Dr. Athens OH 45701 ",
            "Title":"Menacing",
            "copy":"A woman reported an unknown man threatened her. A report was taken. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.113,39.321524 ]
            },
            "properties": {
            "date":"9/7/19",
            "Place":"The Ridges",
            "Address":"172 Water Tower Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"The Ridges 172 Water Tower Dr Athens OH 45701 ",
            "Title":"Menacing",
            "copy":"OUPD responded to a reported distrubance in the cemetary area of The Ridges. Officers checked the area and found no signs of criminal activity. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094722,39.325179 ]
            },
            "properties": {
            "date":"9/8/19",
            "Place":"Brown Hall",
            "Address":"69 South Green Dr. Athens",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Brown Hall 69 South Green Dr. Athens Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A complaint reported damage to an exit sign.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100769,39.331852 ]
            },
            "properties": {
            "date":"9/8/19",
            "Place":"Off-campus miscellaneous",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Off-campus miscellaneous  Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Complaint on station to report suspicous activity.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.106182,39.325412 ]
            },
            "properties": {
            "date":"9/8/19",
            "Place":"Wilson Hall",
            "Address":"104 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Wilson Hall 104 West Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"Residental Hall was concerned about a student's well-being. Officers located the student. No action was necessary and resources were provided to the student.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09688,39.322098 ]
            },
            "properties": {
            "date":"9/8/19",
            "Place":"Luchs Hall",
            "Address":"115 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Luchs Hall 115 South Green Dr. Athens OH 45701 ",
            "Title":"Operations",
            "copy":"OUPD responded to a report of suspicious activity in the hall. Information was taken for a report. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.099014,39.321116 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"Ping Recreation Center",
            "Address":"82 S Green Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ping Recreation Center 82 S Green Dr Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A person reported items were taken from the area.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105761,39.323206 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"The Convocation Center Garage",
            "Address":"95 Richland Ave.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"The Convocation Center Garage 95 Richland Ave. Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued for expired vehicle registration.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101555,39.325135 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"Baker University Center",
            "Address":"1 Park Place",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Baker University Center 1 Park Place Athens OH 45701 ",
            "Title":"Menacing",
            "copy":"OUPD met with a staff member in reference to a concerning email.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.107924,39.329993 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"West Union Street Office Center",
            "Address":"160 W Union St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"West Union Street Office Center 160 W Union St. Athens OH 45701 ",
            "Title":"Menacing",
            "copy":"OUPD responded and took information related to a reported incident of menancing by stalking.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095468,39.323127 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"Nelson Commons",
            "Address":"10 N McKinley Ave",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Nelson Commons 10 N McKinley Ave Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for underage consumtion of alcohol and transported to Southeastern Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095794,39.322045 ]
            },
            "properties": {
            "date":"9/10/19",
            "Place":"Adams Hall",
            "Address":"63 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Adams Hall 63 South Green Dr. Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A person reports items being taken from her room. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094674,39.325275 ]
            },
            "properties": {
            "date":"9/10/19",
            "Place":"Pickering Hall",
            "Address":"68 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Pickering Hall 68 South Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"A report was taken in reference to a missing person.The person was located by a parent and was in no distress.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10833,39.329598 ]
            },
            "properties": {
            "date":"9/10/19",
            "Place":"Parking Lot 154",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 154  Athens OH 45701 ",
            "Title":"Crash, Traffic",
            "copy":"A report was taken in reference to vehicle property damage.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097595,39.32364 ]
            },
            "properties": {
            "date":"9/11/19",
            "Place":"Morton Hall",
            "Address":"24 Race St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Morton Hall 24 Race St Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A person reported an unknown person wrote on a desk.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.10234,39.334062 ]
            },
            "properties": {
            "date":"9/11/19",
            "Place":"",
            "Address":"Congress Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Congress Street Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issue to a man in reference to failure to obey traffic control device.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.099224,39.323988 ]
            },
            "properties": {
            "date":"9/11/19",
            "Place":"Parking Lot 2",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 2  Athens OH 45701 ",
            "Title":"Crash, Traffic",
            "copy":"A report was taken in reference to vehicle property damage.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101555,39.325135 ]
            },
            "properties": {
            "date":"9/11/19",
            "Place":"Baker University Center",
            "Address":"1 Park Place",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Baker University Center 1 Park Place Athens OH 45701 ",
            "Title":"larceny-Theft",
            "copy":"A report was taken for a theft of a bicycle.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.078478,39.336089 ]
            },
            "properties": {
            "date":"9/11/19",
            "Place":"",
            "Address":"East Park Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" East Park Drive Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD took a report of items take from a construction site overnight. An investigation is pending. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.109932,39.319592 ]
            },
            "properties": {
            "date":"9/12/19",
            "Place":"Mail Services",
            "Address":"122 Ridges Circle",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Mail Services 122 Ridges Circle Athens OH 45701 ",
            "Title":"Operations",
            "copy":"EDC deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100769,39.331852 ]
            },
            "properties": {
            "date":"9/12/19",
            "Place":"Off-campus miscellaneous",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Off-campus miscellaneous  Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A person reported a gate removed from university property.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098611,39.323419 ]
            },
            "properties": {
            "date":"9/12/19",
            "Place":"Parking Lot 83",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 83  Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"OUPD responded to a report of a non-injury motor vehicle accident.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101066,39.328608 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"Jimmy Johns Lot",
            "Address":"16 S Court St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Jimmy Johns Lot 16 S Court St Athens OH 45701 ",
            "Title":"Criminal Damaging/Endangering",
            "copy":"APD took a report of a criminal damaging complaint. A report was filed. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095333,39.330741 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"",
            "Address":"19 Palmer St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 19 Palmer St. Athens OH 45701 ",
            "Title":"Criminal Mischief",
            "copy":"APD responded to a report that a man fell from an electric pole. He was transported to OhioHealth O'Bleness Hospital by ACEMS.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.110666,39.332018 ]
            },
            "properties": {
            "date":"9/15/19",
            "Place":"",
            "Address":"Byard Street and South Shafer Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Byard Street and South Shafer Street Athens OH 45701 ",
            "Title":"Attempted Robbery",
            "copy":"APD responded to an attempted robbery. A man approached his delivery vehicle and attempted to grab the man. The victimm was able to call 911, and officers were able to locate the man behind a residence on West Washington Street. The man was arrested and charged with attempted robbery. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A citation was issued to a man for underage consumption of alcohol and intoxication. He was transported to Southeastern Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.102867,39.327945 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"Bromley Hall",
            "Address":"35 S. Congress St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bromley Hall 35 S. Congress St. Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"OUPD took information related to a reported incident of vandalism. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101555,39.325135 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"Baker University Center",
            "Address":"1 Park Place",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Baker University Center 1 Park Place Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"OUPD and ACEMS responded for a report of a medical emergency. The person declined treatment and transportation by EMS.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.096398,39.322636 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"Tanaka Hall",
            "Address":"121 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Tanaka Hall 121 South Green Dr. Athens OH 45701 ",
            "Title":"Recovered property",
            "copy":"Drug paraphernalia was collected for destruction.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.106897,39.325448 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"Parking Lot 114",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Lot 114  Athens OH 45701 ",
            "Title":"Recovered property",
            "copy":"Contraband collected for destruction.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098378,39.322701 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"Carr Hall",
            "Address":"97 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Carr Hall 97 South Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"ACEMS cleared woman after a notificaiton from 911. No transport was needed.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098946,39.324618 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"University Terrace",
            "Address":"University Terrace",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"University Terrace University Terrace Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A man was transported to Southeastern Ohio Regional Jail for criminal mischief and underage consumption of alcohol. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105761,39.323206 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"The Convocation Center",
            "Address":"95 Richland Ave.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"The Convocation Center 95 Richland Ave. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was charged with disorderly conduct by intoxicated and transported to Southeasten Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105532,39.32651 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"Ryors Hall",
            "Address":"101 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ryors Hall 101 West Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was transported to Southeastern Ohio Regional Jail for underage consumption of alcohol and possession of a fake ID.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094722,39.325179 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"Brown Hall",
            "Address":"69 South Green Dr. Athens",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Brown Hall 69 South Green Dr. Athens Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"A man was transported to OhioHealth O'Bleness Hospital for an evalutaion.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095906,39.326539 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"Read Hall",
            "Address":"48 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Read Hall 48 East Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A citation was issued to a woman for underage consumption of alcohol",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098378,39.324248 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"Scott Quadrangle",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Scott Quadrangle  Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was issued a citation for disorderly conduct by intoxicaiton. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Assault",
            "copy":"OUPD responded to a reported assault and an incident of disorderly conduct. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.096243,39.327245 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"Jefferson Hall",
            "Address":"46 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Jefferson Hall 46 East Green Dr. Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was arrested for underage consumption of alochol and intoxication.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101496,39.327644 ]
            },
            "properties": {
            "date":"9/14/19",
            "Place":"",
            "Address":"Court Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Court Street Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued to a man for operating a vehicle undet the influence, reckless operation, no eye protection and no motorccle endorsement. He was transported to Southeastern Ohio Regional Jail. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.103812,39.310344 ]
            },
            "properties": {
            "date":"8/15/19",
            "Place":"",
            "Address":"454 Richland Ave.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 454 Richland Ave. Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD took a report of a leaf blower that was stolen. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.045429,39.336933 ]
            },
            "properties": {
            "date":"9/9/19",
            "Place":"",
            "Address":"904 Hope Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 904 Hope Drive Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD took a report of a stolen engagement ring and mood ring from a residence at Hope Drive Apartments.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.103937,39.339534 ]
            },
            "properties": {
            "date":"9/16/19",
            "Place":"",
            "Address":"70 Columbus Road",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 70 Columbus Road Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD took a report of of a scam that resulted in a theft. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.115976,39.333607 ]
            },
            "properties": {
            "date":"9/13/19",
            "Place":"",
            "Address":"343 W. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 343 W. State St. Athens OH 45701 ",
            "Title":"Criminal Damaging",
            "copy":"APD responded for a criminal damaging complaint. A report was taken.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095536,39.329535 ]
            },
            "properties": {
            "date":"9/15/19",
            "Place":"",
            "Address":"Mill Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Mill Street Athens OH 45701 ",
            "Title":"Rape",
            "copy":"APD responded to OhioHealth O'Bleness Hospital Emergency Room for a SANE kit to be picked up. The nurse advised the woman wished to remain anonymous. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100147,39.325191 ]
            },
            "properties": {
            "date":"9/16/19",
            "Place":"Vernon R. Alden Library",
            "Address":"30 Park Pl",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Vernon R. Alden Library 30 Park Pl Athens OH 45701 ",
            "Title":"larceny-Theft",
            "copy":"A person reports several items were taken from the area.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.168527,39.402999 ]
            },
            "properties": {
            "date":"9/17/19",
            "Place":"Wayne National Forest Headquarters",
            "Address":"13700 US 33",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Wayne National Forest Headquarters 13700 US 33 Athens OH 45701 ",
            "Title":"Theft",
            "copy":"APD responded to a report of a city parking meter courtsey box found in a trash can.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100286,39.324881 ]
            },
            "properties": {
            "date":"9/17/19",
            "Place":"Wolfe Garden (between Alden and Culter Hall)",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Wolfe Garden (between Alden and Culter Hall)  Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"A person reported an unapproved art installation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.108207,39.327304 ]
            },
            "properties": {
            "date":"9/17/19",
            "Place":"Parking Services",
            "Address":"100 Factory Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Parking Services 100 Factory Street Athens OH 45701 ",
            "Title":"Theft",
            "copy":"A person reports university services purchased with stolen credit card.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094722,39.325179 ]
            },
            "properties": {
            "date":"9/17/19",
            "Place":"Brown Hall",
            "Address":"69 South Green Dr. Athens",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Brown Hall 69 South Green Dr. Athens Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"A person requested a welfare check for a woman. Officers spoke to her, and she said everything was OK. There were no signs of emergency or criminal activity.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095794,39.322045 ]
            },
            "properties": {
            "date":"9/18/19",
            "Place":"Adams Hall",
            "Address":"63 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Adams Hall 63 South Green Dr. Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"A woman was transported to OhioHealth O'Bleness Hospital for emergency pre-screen.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.102185,39.326536 ]
            },
            "properties": {
            "date":"9/18/19",
            "Place":"Bentley Hall",
            "Address":"4 President St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bentley Hall 4 President St Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A report was taken for a stolen backpack.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104024,39.325616 ]
            },
            "properties": {
            "date":"9/18/19",
            "Place":"Treudley Hall",
            "Address":"99 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Treudley Hall 99 West Green Dr. Athens OH 45701 ",
            "Title":"Operations",
            "copy":"A report was taken for a possible fraud.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101355,39.329314 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"  Athens OH 45701 ",
            "Title":"Sexual Battery- Victim Control Impaired",
            "copy":"A woman reported she was a victim of rape on the north side of the city by an unknown man. The suspect is a white man who is about 5 feet 9 inches. The victim declined to speak with officers, and an investigation is pending.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Boyd Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Fictitious/altered ID",
            "copy":"A fake ID was collected for destruction",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Boyd Dining Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Dining Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Burglary",
            "copy":"A man was located inside Boyd Markey when officers responded to an alarm activation. The incident is under investigation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Boyd Dining Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Dining Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"A man was transported to OhioHealth O'Bleness Hospital for an evalutaion.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098776,39.328268 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Hudson Health Center",
            "Address":"2 Health Center Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Hudson Health Center 2 Health Center Dr Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"Counseling and Pyschological Services requested an officer for an emergency pre-screen.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.109932,39.319592 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Mail Services",
            "Address":"122 Ridges Circle",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Mail Services 122 Ridges Circle Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"Canine sweep",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"A person was transport by ACEMS.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101083,39.328435 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Athena Cinema",
            "Address":"20 S Court St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Athena Cinema 20 S Court St Athens OH 45701 ",
            "Title":"Operations",
            "copy":"Canine deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09665,39.324716 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"Tiffin Hall",
            "Address":"60 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Tiffin Hall 60 East Green Dr. Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A person reported a theft of a wallet",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.113891,39.327306 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"OhioHealth O'Bleness Hospital",
            "Address":"55 Hospital Dr",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"OhioHealth O'Bleness Hospital 55 Hospital Dr Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"A SANE Kit was collected and taken to APD.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.096084,39.347905 ]
            },
            "properties": {
            "date":"9/19/19",
            "Place":"New-to-You",
            "Address":"90 Columbus Road",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"New-to-You 90 Columbus Road Athens OH 45701 ",
            "Title":"Criminal Damaging/Endangering",
            "copy":"APD responded to New-to-You to take a report of damaging to a Pepsi vending machine",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.101122,39.33178 ]
            },
            "properties": {
            "date":"9/21/19",
            "Place":"Courtside Pizza",
            "Address":"85 N. Court St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Courtside Pizza 85 N. Court St. Athens OH 45701 ",
            "Title":"Criminal Damaging/Endangering",
            "copy":"APD took a report to damage done to a vehicle's windshield whipper. ",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.060434,39.336388 ]
            },
            "properties": {
            "date":"9/17/19",
            "Place":"",
            "Address":"968 E. State St.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" 968 E. State St. Athens OH 45701 ",
            "Title":"Receiving Stolen Property",
            "copy":"APD took a report.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.087833,39.337279 ]
            },
            "properties": {
            "date":"9/21/19",
            "Place":"Speedway",
            "Address":"319 E State St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Speedway 319 E State St Athens OH 45701 ",
            "Title":"Trafficking in Cocaine and Trafficking in Marijuana",
            "copy":"APD was assisted by the Athens County Sheriff's Office to arrest two men who were in possession of cocaine and marijuana. The men were taken to Southeastern Ohio Regional Jail.",
            "category":"APD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09688,39.322098 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"",
            "Address":"South Green Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" South Green Drive Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A report was taken for a reported stopped bus violation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.095794,39.322045 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"Adams Hall",
            "Address":"63 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Adams Hall 63 South Green Dr. Athens OH 45701 ",
            "Title":"Operations",
            "copy":"OUPD met with Housing and Pro Staff on duty at Adams Hall in reference to a concern over an item of contraband. No criminal activity was noted.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09688,39.322098 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"",
            "Address":"South Green Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" South Green Drive Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued to a man for driving under a non-compliance suspension.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.094674,39.325275 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"Pickering Hall",
            "Address":"68 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Pickering Hall 68 South Green Dr. Athens OH 45701 ",
            "Title":"Ficiticious/altered ID",
            "copy":"A fake ID was collected for destruction",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097751,39.327277 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"",
            "Address":"Union Street",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" Union Street Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued to a man for driving under license forfeiture suspension.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105761,39.323206 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"The Convocation Center",
            "Address":"95 Richland Ave",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"The Convocation Center 95 Richland Ave Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"Two men were charged with criminal mischief. Contraband was collected for destruction.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100769,39.331852 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"Off-campus miscellaneous",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Off-campus miscellaneous  Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"OUPD assisted local police department with a well-being check after Student Review and Consultation Committee received an anonymous report involving possible self-harm. The person was located and determined to be OK.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105917,39.326508 ]
            },
            "properties": {
            "date":"9/20/19",
            "Place":"Academic Research Center",
            "Address":"61 Oxbow Trail",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Academic Research Center 61 Oxbow Trail Athens OH 45701 ",
            "Title":"Larceny-Theft",
            "copy":"A report was taken for a theft of a bicycle.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.105306,39.322127 ]
            },
            "properties": {
            "date":"9/21/19",
            "Place":"Bingham House",
            "Address":"97 Richland Ave",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bingham House 97 Richland Ave Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"ACEMS responded to a report of a broken ankle.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098378,39.324248 ]
            },
            "properties": {
            "date":"9/21/19",
            "Place":"Ohio University Police Department",
            "Address":"135 Scott Quad",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Ohio University Police Department 135 Scott Quad Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"A person was transported to OhioHealth O'Bleness Hospital for an evaluation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098998,39.326778 ]
            },
            "properties": {
            "date":"9/21/19",
            "Place":"Templeton-Blackburn Alumni Memorial Auditorium",
            "Address":"47 E Union St",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Templeton-Blackburn Alumni Memorial Auditorium 47 E Union St Athens OH 45701 ",
            "Title":"Operations",
            "copy":"EDC Deployment",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.100769,39.331852 ]
            },
            "properties": {
            "date":"9/22/19",
            "Place":"Off-campus miscellaneous",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Off-campus miscellaneous  Athens OH 45701 ",
            "Title":"Alcohol",
            "copy":"A man was transported to Southeastern Ohio Regional Jail for disorderly conduct by intoxication.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097401,39.326821 ]
            },
            "properties": {
            "date":"9/22/19",
            "Place":"Lincoln Hall",
            "Address":"45 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Lincoln Hall 45 East Green Dr. Athens OH 45701 ",
            "Title":"Extortion",
            "copy":"A person reported being backmailed via Facebook Messenger.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097136,39.324747 ]
            },
            "properties": {
            "date":"9/22/19",
            "Place":"Shively Hall",
            "Address":"59 East Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Shively Hall 59 East Green Dr. Athens OH 45701 ",
            "Title":"Emotionally Disturbed Person",
            "copy":"OUPD transported a person to OhioHealth O'Bleness Hosipital for an evalutation.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098378,39.324248 ]
            },
            "properties": {
            "date":"9/22/19",
            "Place":"Scott Quadrangle",
            "Address":"",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Scott Quadrangle  Athens OH 45701 ",
            "Title":"Destruction Property",
            "copy":"OUPD took a report for information related to a incident of criminal mischief",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.09688,39.322098 ]
            },
            "properties": {
            "date":"9/22/19",
            "Place":"",
            "Address":"South Green Drive",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":" South Green Drive Athens OH 45701 ",
            "Title":"Traffic",
            "copy":"A citation was issued for failture to obey a traffic control device. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.097554,39.322344 ]
            },
            "properties": {
            "date":"9/23/19",
            "Place":"Sowle Hall",
            "Address":"105 South Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Sowle Hall 105 South Green Dr. Athens OH 45701 ",
            "Title":"Drugs",
            "copy":"OUPD collected marijuana drug paraphanelia for destruction.",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104615,39.326398 ]
            },
            "properties": {
            "date":"9/23/19",
            "Place":"Boyd Hall",
            "Address":"100 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Boyd Hall 100 West Green Dr. Athens OH 45701 ",
            "Title":"Drugs",
            "copy":"OUPD responded to Boyd Hall at the request of Housing and Residence Life staff adn secured items of contrabrand. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.098836,39.32647 ]
            },
            "properties": {
            "date":"9/23/19",
            "Place":"Bryan Hall",
            "Address":"22 University Terrace",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"Bryan Hall 22 University Terrace Athens OH 45701 ",
            "Title":"Computer Crime",
            "copy":"Officers took information related to an alleged incident of a computer crime. ",
            "category":"OUPD"
            }
          },
          {
            "type": "Feature",
            "geometry": {
               "type": "Point",
               "coordinates":  [ -82.104979,39.324722 ]
            },
            "properties": {
            "date":"9/23/19",
            "Place":"James Hall",
            "Address":"97 West Green Dr.",
            "City":"Athens",
            "State":"OH",
            "Zip":45701,
            "Full Address":"James Hall 97 West Green Dr. Athens OH 45701 ",
            "Title":"Service Call",
            "copy":"Officers conducted a well-being check on a resident of James Hall. ",
            "category":"OUPD"
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
        var crimes = '<div class="pop-date">' + e.features[0].properties['date'] + '</div>' +
        '<div class="pop-place">' + e.features[0].properties['Place'] + '</div>' +
            '<div class="pop-cat">' + e.features[0].properties['category'] + '</div>' +
            '<div class="pop-title">' + e.features[0].properties['Title'] + '</div>' +
            '<div class="pop-copy">' + e.features[0].properties['copy'] + '</div>';


        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(crimes)
            .addTo(map);
    });

    map.scrollZoom.disable(); // disable scroll zoom
    map.addControl(new mapboxgl.NavigationControl()); // add zoom/nav controls
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'points', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'points', function () {
map.getCanvas().style.cursor = '';
});
