$(document).ready(function () {
    $(".btn-info").click(function () {
        $(".main").removeClass("col-sm-10");
        $(".main").addClass("col-sm-7");
        $(".margin-left").removeClass("col-sm-1");
        $(".margin-right").removeClass("col-sm-1");
        $(".margin-right").addClass("col-sm-5");
        $(".margin-right").show();
    });

    $(".btn-close").click(function () {
        $(".margin-right").hide();
        $(".main").removeClass("col-sm-7");
        $(".main").addClass("col-sm-10");
        $(".margin-left").addClass("col-sm-1");
        $(".margin-right").removeClass("col-sm-5");
        $(".margin-right").addClass("col-sm-1");
    });

    $(".btn-delete").click(function () {
        return confirm('Bạn có chắc chắn muốn xóa ghi chép này không?');
    });
});