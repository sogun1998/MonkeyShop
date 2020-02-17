$(document).ready(function () {
    $(".button").click(function () {
        $(".button-container").hide();
        $(".title").hide();
    });


    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'

    });
});
