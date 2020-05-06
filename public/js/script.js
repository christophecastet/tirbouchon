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


for (let i = 0; i<links.length; i++) {
   
    links[i].addEventListener("click", function(e) {
        
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/***** BACK TO TOP *****/

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/***** TYPE WRITER *****/

// set up text to print, each item in array is new line
var aText = new Array(
    "Le vin c'est de la poésie ", 
    "en bouteille.."
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + ".";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();


  let navLinkResponsive =  $('.navLinkResponsive');
  let sidebarMenu = $('#sidebarMenuInner');

  for (let i = 0; i < navLinkResponsive.length; i++) {
    navLinkResponsive[i].addEventListener("click", function(e) {
      console.log(sidebarMenu[0].style);
      sidebarMenu[0].classList.add('test');
    })
  }