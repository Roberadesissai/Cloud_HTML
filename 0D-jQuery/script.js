$("h1").addClass("big-title margin-50");

numberofButtons = document.querySelectorAll(".color").length;

for (var i = 0; i < numberofButtons; i++) {
    document.querySelectorAll(".color")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = this.innerHTML;
    });
}

$(".color").click(function () {
    $("h1").css("color", $(this).text());
    if ($(h1).hide()) {
        $("h1").show();
    }
}); 

$(".hide").click(function () {
    $("h1").hide();
}
);

$(".show").click(function () {
    $("h1").show();
}
);

$(".toggle").click(function () {
    $("h1").toggle();
}
);


