//For greensock cdn
// navigation starts here

$("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
// navigation ends here

// nav animation starts here
TweenMax.from("#brand", 1,{
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1)
//nav animation ends here

new WOW().init();

// prev and next toggle sections for project page starts here

$(document).ready(function(){
    $(".projpage div.hero-content").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next").click(function(){
        if ($(".projpage div.hero-content:visible").next().length != 0)
            $(".projpage div.hero-content:visible").next().show().prev().hide();
        else {
            $(".projpage div.hero-content:visible").hide();
            $(".projpage div.hero-content:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".projpage div.hero-content:visible").prev().length != 0)
            $(".projpage div.hero-content:visible").prev().show().next().hide();
        else {
            $(".projpage div.hero-content:visible").hide();
            $(".projpage div.hero-content:last").show();
        }
        return false;
    });
});

let active = 0;
let el = $("div.rowImg");
let total = el.length - 1;

const toggle = (el, index) => {
    el.hide()
    el.eq(index).show()
}

toggle(el, active)

$('p').on('click', function() {
    this.id === 'prev' ? active -= 1 : active += 1;
    if(active > total) active = 0;
    if(active < 0) active = total
    toggle(el, active)
})
//prev and next toggle sections for project page ends here