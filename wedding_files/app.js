(function () {

})();

function goTo(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}

function goTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);   
}