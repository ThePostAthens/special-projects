
$(document).ready(function () {
    "use strict";
    $('#brick1').click(function () {
        $('#love_story1').show('fast');
    });
    
    $('#love_story1').click(function () {
        $('#love_story1').remove();
    });
    
    $('#brick2').click(function () {
        $('#love_story2').show('fast');
    });
    
    $('#love_story2').click(function () {
        $('#love_story2').remove();
    });
});