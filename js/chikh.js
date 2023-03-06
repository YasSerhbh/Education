
var left, left2;

$(".back ul li").on("click", function () {

    left = $(this).attr("data-left")

    $(this).addClass("selected").siblings().removeClass("selected")

    $(".back section").css("left", left)

})


if ($(document).scrollTop() >= 50) {
    $("nav").removeClass("light-nav")
}else {
    $("nav").addClass("light-nav")
}


$(document).on("scroll", function () {

    if ($(this).scrollTop() >= 50) {
        $("nav").removeClass("light-nav")
    }else {
        $("nav").addClass("light-nav")
    }

})




$(".teachers ul li").on("click", function () {

    left = $(this).attr("data-left")

    $(this).addClass("selected").siblings().removeClass("selected")

    $(".teachers .tchers").css("left", left)

})





// SLICK CLIENTS

$(".clients").slick({
    infinite: true,
    slideToShow: 2,
    speed: 400,
    dots: true,
    arrows: false,
})




// SLICK BLOGS
$('.blogs').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings:{
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings:{
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
  });






// DARK MODE
var light = document.querySelector(".light")
var night = document.querySelector(".night")

if (localStorage.getItem("theme") != null) {
document.body.className = localStorage.getItem("theme")
}else {
document.body.className = "light"
}

theme()

function theme() {
if (document.body.className == "dark") {
    light.innerHTML = '<i class="fa-regular fa-sun"></i>'
    night.innerHTML = '<i class="fa-solid fa-moon"></i>'
}else {
    light.innerHTML = '<i class="fa-solid fa-sun"></i>'
    night.innerHTML = '<i class="fa-regular fa-moon"></i>'
}
}

light.onclick = function () {
    document.body.className = "light"
    localStorage.setItem("theme", "light")
    theme()
}

night.onclick = function () {
    document.body.className = "dark"
    localStorage.setItem("theme", "dark")
    theme()
}

// DARK MODE