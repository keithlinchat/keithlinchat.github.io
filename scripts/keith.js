var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
$(document).ready(function () {
    $("#dark").click(function () {
        $("span[style|='color: black;']").css("color", "white");

        $(".bg").css("background-color", "black");
        $(".text").css("color", "white");
    });
    $("#light").click(function () {
        $("span[style|='color: white;']").css("color", "black");

        $(".bg").css("background-color", "white");
        $(".text").css("color", "black");
    });
});