var dataSet = [
    ["Aizicovici", 
     "Sergiu", 
     "Professor", 
     "Mathematics", 
     "$134,567.00"],
    
    ["Allen", 
     "Neeley", 
     "Coordinator of Communications & Marketing", 
     "Chillicothe Public Relations", 
     "$44,081.00"],
    
    ["Allen", 
     "Jeff	", 
     "N/A", 
     "Marketing", 
     "$85,850.00"],
    
    ["Alloway", 
     "Laura", 
     "Director of Marketing and Communications", 
     "Voinovich Schl of Leadership & Public Affairs", 
     "$91,834.00"],
    
    ["Amand", 
     "Clinton", 
     "Assistant Director, Multimedia Content", 
     "Advancement Services", 
     "$55,550.00"],
    
    ["Anderson", 
     "Nathan", 
     "Assistant Director, Annual Giving", 
     "Advancement Services", 
     "$46,436.00"],
    
    ["Anderson", 
     "Denissa", 
     "N/A", 
     "English", 
     "$62,386.00"],
    
    ["Andrews", 
     "James", 
     "Associate Professor", 
     "Classics and World Religions", 
     "$87,279.00"],
    
    ["Atwood", 
     "Joyce", 
     "Resource Development Director", 
     "Chillicothe Dean's Office", 
     "$68,810.56"],
    
    
    ["Babrow",	
     "Austin",	
     "Professor",	
     "School of Communication Studies",	
     "$114,476.00"],
    
    ["Bach",	
     "Morten",	
     "N/A",	
     "History",	
     "$49,847.00"],
    
    ["Backes",	
     "Elizabeth",	
     "Assistant Director of Marketing",	
     "Health Sciences Professions, Dean's Office",	
     "$66,674.00"],
    
    ["Bailes",	
     "April",	
     "Administrative Services Associate",	
     "Mathematics",	
     "$30,784.00"],
    
    ["Baird",	
     "Timothy",	
     "International Admissions Advisor",	
     "Admissions",	
     "$40,925.00"],
    
    ["Baker",	
     "Brandi",	
     "Assistant Director, Multicultural Affairs",	
     "COM-Dean's Office",	
     "$58,270.00"],
    
    ["Barlag",	
     "Kimberly",	
     "Director of Communications & Marketing",	
     "Curriculum and Technology Center",	
     "$67,900.00"],
    
    ["Barnett",	
     "Beth A Mcclure",	
     "N/A",	
     "Nursing",	
     "$51,128.00"],
    
    ["Bauer",	
     "Lori",	
     "Senior Director of Communications & Marketing",	
     "Arts and Sciences, Dean's Office",	
     "$96,143.00"],
    
    ["Baumgartel",	
     "Rudiger",	
     "Grounds Services Manager",	
     "Grounds-Grounds Maintenance",	
     "$55,565.00"],
    
    ["Baur",	
     "Bryan",	
     "Administrative Specialist",	
     "Classics and World Religions",	
     "$35,401.60"],
    
    ["Baxstrom",	
     "Emily",	
     "Communications Specialist",	
     "INSTRUCTIONAL INNOVATION",	
     "$42,929.00"],
    
    ["Bayless",	
     "David",	
     "Professor",	
     "Mechanical Engineering",	
     "$215,265.00"],
    
    ["Beasecker",	
     "Caleb",	
     "Associate Director of the Ohio Bobcat Club",	
     "Intercollegiate Athletics Office",	
     "$54,000.00"],
    
    ["Becker",	
     "Janet",	
     "Associate Professor",	
     "Associate Dean - Lancaster",	
     "$113,500.00"],
    
    ["Benedicto",	
     "Eunice",	
     "Manager, General Accounting & Financial Reporting",	
     "General Accounting",	
     "$76,886.00"],
    
    ["Bennett",	
     "Ann",	
     "Department Administrator",	
     "Sociology and Anthropology",	
     "$52,643.00"],
    
    ["Bennett-Hanning",	
     "Jacqueline",	
     "Administrative Specialist",	
     "Chemistry and Biochemistry",	
     "$49,628.80"],
    
    ["Bentley",	
     "Danny",	
     "N/A",	
     "Biological Sciences",	
     "$14,337.00"],
    
    ["Berry",	
     "Kris",	
     "University Custodial Services Manager",	
     "Custodial Services - Administration",	
     "$48,079.00"],
    
    ["Binegar",	
     "Timothy",	
     "Senior Director of Development, Patton College of Education",	
     "Development",	
     "$107,623.00"],
    
    ["Bingham",	
     "Douglas",	
     "Custodial Worker",	
     "Pickerington Center-Lancaster",	
     "$26,104.00"],
    
    ["Blake",	
     "Timothy",	
     "Assoc Professor",	
     "Nursing-Zanesville",	
     "$78,699.00"],
    
    ["Blower",	
     "Scott",	
     "Grounds Services Manager",	
     "Grounds-Grounds Maintenance",	
     "$64,327.00"],
    
    ["Bradshaw",	
     "Marilyn",	
     "Professor",	
     "Art",	
     "$92,535.00"],
    
    ["Bragg",	
     "Christine",	
     "Administrative Services Assistant",	
     "Culinary Services",	
     "$23,649.60"],
    
    ["Branham",	
     "Bryan",	
     "Associate Professor",	
     "Aviation",	
     "$103,253.00"],
    
    ["Bricker",	
     "Richard",	
     "Associate Director, Facilities & Operations",	
     "Ping Recreation Center",	
     "$64,584.00"],
    
    ["Brooks",	
     "Karen",	
     "Key Shop Manager",	
     "Facilities Management",	
     "$59,459.00"],
    
    ["Brown",	
     "Jeffrey",	
     "Communication Designer",	
     "COM-Communication",	
     "$55,137.00"],
    
    ["Bulow",	
     "Megan",	
     "Director of Communications for OII",	
     "INSTRUCTIONAL INNOVATION",	
     "$71,206.00"],
    
    ["Bunescu",	
     "Constantin",	
     "Professor",	
     "Electrical Engineering and Computer Science",	
     "$117,387.00"],
    
    ["Burcham",	
     "Stephanie",	
     "Director, Proctorville Center",	
     "Director Proctorville",	
     "$78,057.00"],
    
    ["Burmeister",	
     "Larry",	
     "Professor",	
     "Sociology and Anthropology",	
     "$98,000.00"],
    
    ["Burroway",	
     "Sarah E Diamond",	
     "Director of External Relations",	
     "Southern Campus Dean's Office",	
     "$74,999.00"],
    
    
    
];

$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        "scrollX": true,
        "order": [[4, "desc"]],
        columns: [{
                title: "Last"
            },
            {
                title: "First"
            },
            {
                title: "Title"
            },
            {
                title: "Department"
            },
            {
                title: "Salary"
            }
        ],
        language: {
            searchPlaceholder: "Search records",
            search: "",
        },
        "dom": '<"pull-left"f><"pull-right"l>tip'


    });
});
