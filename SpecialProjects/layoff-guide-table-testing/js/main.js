var dataSet = [
  ["Boals, Jeffrey Donald","MENS BASKETBALL","Head Men's Basketball Coach","N/A","$581,000.00"  ],
  ["Solich, Frank","FOOTBALL","Head Football Coach","N/A","$524,928.00"  ],
  ["Nellis, Marvin Duane (M.Duane)","PRESIDENT","President","Professor","$489,357.00"  ],
  ["Djalali, Chaden","PROVOST","Executive Vice President and Provost","N/A","$378,750.00"  ],
  
  
];

$(document).ready(function() {
    $('#example').DataTable({
        data: dataSet,
        "scrollX": true,
        "order": [[ 4, "desc" ]],
        columns: [{
                title: "Name"
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
