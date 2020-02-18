$(document).ready(function () {
    $(".button").click(function () {
        $(".button-container").hide();
        $(".title").hide();
        $(".maintain").show();

    });


    $(".cancel").click(function () {
        $(".button-container").show();
        $(".title").show();
        $(".maintain").hide();

    });


    $('#datepicker1').datepicker({
        uiLibrary: 'bootstrap4'

    });
    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4'

    });
});
