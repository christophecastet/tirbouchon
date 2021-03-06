let titre = $(document).find("title").text();
console.log(titre);


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




/***** BURGER MENU *****/

let link = document.querySelectorAll('.link');

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function myFunction(x) {
  x.classList.toggle("change");
}

for (let i = 0; i< link.length; i++) {
	link[i].addEventListener("click", function(e) {
  closeNav(link[i]);
  document.querySelector('#btn').style.display = 'block';
	})
}

document.querySelector('#btn').addEventListener('click', function(e) {
	myFunction(this);
  openNav();
  document.querySelector('#btn').style.display = 'none';
})

document.querySelector(".closebtn").addEventListener('click', function() {
  closeNav();
  document.querySelector('#btn').style.display = 'block';
})

/***** BODY COLOR *****/

if (titre === 'Au Chti Canon') {
  window.addEventListener('resize', function () {

    let size = $(window).width();
    let content = $('.container-fluid');
    
    
      for (let i =0; i < content.length; i++) {
        if (size > 320 && size <= 375) {
          content[i].style.backgroundColor='#293133';
          document.body.style.backgroundColor='#293133';
        } 
        else if (size > 375 && size <= 800) {
          content[i].style.backgroundColor='#5a3a22';
          document.body.style.backgroundColor='#5a3a22';
        }
        else if (size > 800) {
          content[i].style.backgroundColor='white';
          document.body.style.backgroundColor='white';
        }
      }
  
  });
}




/***** IMAGE COLOR  *****/

let bodyCSS = window.getComputedStyle( document.querySelector( 'body' ), null );
let bgColor = bodyCSS.getPropertyValue( 'background-color' );
console.log(bgColor);
let testif = $('#testif');

/*
if (bgColor === 'rgb(255, 255, 255)') {
  testif[0].style.color = 'blue';
} else{
  testif[0].style.color = 'red';
}
*/

let logoColor = $('.logoColor');
logoColor[0].setAttribute('src', '/img/logoSmBk.png');



/***** LEAFLET *****/

var mymap = L.map('mapid').setView([43.9476,  4.80583], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYm91bGFuZ2VyaWVicmljZSIsImEiOiJjazhlam44d2sxNndmM2dwZTAwa25ueTRsIn0.2C4Vli5_Jtpy0zPTxyiVLA'
}).addTo(mymap);


var greenIcon = L.icon({
  iconUrl: '/../img/grappe.png',
  

  iconSize:     [24, 24], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [12, 24], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([43.945763, 4.805528], {icon: greenIcon}).addTo(mymap);








/***** DISPLAY IMG AU SCROLL *****/

window.addEventListener('scroll', function(e) {
  const offset= 400;
  
  let positions = $('.position');
  let divImg =$('.cache');
  let scrollEvt = Math.round(document.documentElement.scrollTop);

  for(let i = 0; i < positions.length; i++) {
    let position = positions[i].offsetTop;
    if( scrollEvt > 0 + (position-offset)) {
      for(let y = 0; y < divImg.length; y++) {
        divImg[i].classList.add('affiche');
      }
    }
  }
})

/****** LINK SCROLLING *****/

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
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