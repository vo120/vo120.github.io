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

/*let linkArr = ["project1.html", "project2.html", "project3.html", "project4.html", "project5.html"]

$('.prev').on('click', function() {
    let currentSrc = $('.iframeWindow').attr('src')
    if (linkArr.indexOf(currentSrc) != 0) {
        $('.iframeWindow').attr('src', linkArr[linkArr.indexOf(currentSrc) - 1])
    }

})

$('.next').on('click', function() {
    let currentSrc = $('.iframeWindow').attr('src')
    if (linkArr.indexOf(currentSrc) != 4) {
        $('.iframeWindow').attr('src', linkArr[linkArr.indexOf(currentSrc) + 1])
    }
})*/

/*function getNewUrl(addNum) {
    var url = window.location.pathname;
    var lastIndex = url.lastIndexOf('/project1');
    var filename = url.substring(lastIndex + 1);
    var newFileName = filename.substring(0, 2) +
        pad(parseInt(filename.substring(2, 5), 10) + addNum, 3) +
        filename.substring(5);
    return url.substring(0, lastIndex) + newFileName;
}

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}*/
/*var pages = ['project1.html','project2.html','project3.html','project4.html', 'project5.html'];

$(".next").on("click", function() {
    for(var i = 0; i < pages.length; i++){
        if(window.location.pathname === pages[i]){
            if(i === pages.length - 1){
                //at the end, go to first page
                window.location.href=pages[0];
            }
            else{
                window.location.href=pages[i+1];
            }
            break;
        }
    }
});*/
/*$(document).ready(function(){
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
});*/

/*let active = 0;
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
})*/
//prev and next toggle sections for project page ends here