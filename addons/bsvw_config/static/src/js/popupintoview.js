/**
 * Created by joe on 10.07.17.
 */

/*
$(window).scroll(function() {
    var element = document.getElementById("box");

    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({block: "end", behavior: "smooth"});
});
*/
$('html, body').animate({
    scrollTop: $("#fso_iframe").offset().top
}, 1000);