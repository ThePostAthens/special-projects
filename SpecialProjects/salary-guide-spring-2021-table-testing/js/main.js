var dataSet = [
    
// A ---------------------------------------------------------------------------
    ["Aizicovici", 
     "Sergiu", 
     "Professor", 
     "Mathematics", 
     "$134,567.00", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
    
    

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
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            },
            {
                title: "Color"
            }
        ],
        language: {
            searchPlaceholder: "Search records",
            search: "",
        },
        "dom": '<"pull-left"f><"pull-right"l>tip'


    });
});
