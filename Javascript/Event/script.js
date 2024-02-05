
button = document.querySelector('.demo');
box = document.querySelector('.box');

$(document).ready(function () {
    $(".demo").click(function () {
        $(".box").toggle();
    });
});