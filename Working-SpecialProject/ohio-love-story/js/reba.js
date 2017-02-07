
$(document).ready(function () {
    "use strict";
    $(document).on('click', '#brick1', function () {
        $('#1').show('fast');
    });
    
    $('#1').click(function () {
        $('#1').hide();
    });
    
    $(document).on('click', '#brick2', function () {
        $('#2').show('fast');
    });
    
    $('#2').click(function () {
        $('#2').hide();
    });
});