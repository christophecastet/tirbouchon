/***** DEPLACEMENT NAV BAR *****/

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
        $('#navBar').removeClass('animationDown');
        $('#navBar').addClass('animationUp');
    } else if (scroll <500) {
        $('#navBar').removeClass('animationUp');
        $('#navBar').addClass('animationDown');
    }
});

/***** LIEN ACTIF *****/
let links = $('.navLink');



links.click(function() {
   alert(links);
  });
