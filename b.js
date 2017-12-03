$('.carousel').carousel({
  interval: 8000
})

var landingPage = document.getElementById("landing-bg")
var home = document.getElementById("home")
var home2 = document.getElementById("home2")
var searchIcon = document.getElementById("search-icon")
var test = document.getElementsByClassName("test")
var homeDrop3 = document.getElementById("home-drop3")
var homeDrop4 = document.getElementById("home-drop4")
var homeDrop5 = document.getElementById("home-drop5")
var searchBar = document.getElementById("search-bar")
var close = document.getElementById("close")
var searchBar2= document.getElementById("search-bar2")
var searchWrapper2 = document.getElementById("search-wrapper2")
var searchWrapper = document.getElementById("search-wrapper")
var close2 = document.getElementById("close2")
var searchIcon2 = document.getElementById("search-icon2")

var homeDrop2 = document.getElementById("home-drop2")
var homeDrop = document.getElementById("home-drop")
var theaters = document.getElementById("theaters")
var concessions = document.getElementById("concessions")
var extras = document.getElementById("extras")
var giftCards = document.getElementById("gift-cards")
var movies = document.getElementById("movies")
var navbar = document.getElementById("nb-wrapper")
var navbarContainer = document.getElementById("nb-container")

searchIcon.addEventListener("click", function(){
  searchWrapper.style.display="flex";
  close.style.display="block";
  })

close.addEventListener("click", function(){
  searchWrapper.style.display="none";
  close.style.display="none";
})

searchIcon2.addEventListener("click", function(){
  searchWrapper2.style.display="flex";
  close2.style.display="block";
  })

close2.addEventListener("click", function(){
  searchWrapper2.style.display="none";
  close2.style.display="none";
})

movies.addEventListener("mouseover", function(){
  homeDrop.style.display="block";
  homeDrop2.style.display="none";
  homeDrop3.style.display="none";
  homeDrop4.style.display="none";
  homeDrop5.style.display="none";
  navbarContainer.style.background="black";
  navbarContainer.classList.add("border-bottom");
  
})
 
theaters.addEventListener("mouseover", function(){
  homeDrop.style.display="none";
  homeDrop2.style.display="flex";
  homeDrop3.style.display="none";
  homeDrop4.style.display="none";
  homeDrop5.style.display="none";
  navbarContainer.style.background="black";
  navbarContainer.classList.add("border-bottom");
})

concessions.addEventListener("mouseover", function(){
  homeDrop.style.display="none";
  homeDrop2.style.display="none";
  homeDrop3.style.display="flex";
  homeDrop4.style.display="none";
  homeDrop5.style.display="none";
  navbarContainer.style.background="black";
  navbarContainer.classList.add("border-bottom");
})

extras.addEventListener("mouseover", function(){
  homeDrop.style.display="none";
  homeDrop2.style.display="none";
  homeDrop3.style.display="none";
  homeDrop4.style.display="flex";
  homeDrop5.style.display="none";
  navbarContainer.style.background="black";
  navbarContainer.classList.add("border-bottom");
})

giftCards.addEventListener("mouseover", function(){
  homeDrop.style.display="none";
  homeDrop2.style.display="none";
  homeDrop3.style.display="none";
  homeDrop4.style.display="none";
  homeDrop5.style.display="flex";
  navbarContainer.style.background="black";
  navbarContainer.classList.add("border-bottom");
})

var leave = function leave() {
  this.style.display="none";
  navbarContainer.style.background="transparent";
  navbarContainer.classList.remove("border-bottom")
} 

homeDrop.addEventListener("mouseleave", leave)

homeDrop2.addEventListener("mouseleave", leave)

homeDrop3.addEventListener("mouseleave", leave)

homeDrop4.addEventListener("mouseleave", leave)

homeDrop5.addEventListener("mouseleave", leave)


/*Change Navbar on Scroll*/
var nbMobile = document.getElementById("nb-mobile")

window.onscroll = function(){
    if(window.scrollY <= 100) {
      nbMobile.style.background="transparent";
      navbarContainer.style.background="transparent";
  } else if (window.scrollY > 100) {
      navbarContainer.style.background="black";
      nbMobile.style.background="black";
  } 
  
} 

/*window.onscroll = function (){
    if(window.scrollY <= 100) {
    nbMobile.style.background="transparent";
  } else if (window.scrollY > 100){
    nbMobile.style.background="black";
  }
  
}*/




/*Movie Poster Scroll*/

$('.center').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 5,
  arrows:true,
  responsive: [

    {
      breakpoint: 1500,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 5
      }
     }, 

    {
      breakpoint: 1360,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3
      }
     }, 
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    
    {
      breakpoint: 900,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 3
      }
    },

    {
      breakpoint: 840,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 750,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 690,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '190px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 630,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '160px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },

    {
      breakpoint: 420,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '65px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 376,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },

    {
      breakpoint: 320,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '35px',
        slidesToShow: 1
      }
    },

    {
      breakpoint: 305,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    },
  ]
});


 

  
$('.prev').click(function(){
  $('.center').slick('slickPrev');
})

$('.next').click(function(){
  $('.center').slick('slickNext');
})


var nbMobileMenu = document.getElementById("nb-mobile-menu")
var homeDropMobile = document.getElementById("home-drop-mobile")
var none = document.getElementById("none")
nbMobileMenu.addEventListener("click", function(){
      homeDropMobile.style.display="block";
      none.style.display="block"
      nbMobileMenu.style.display="none"
      nbMobile.style.background="black"
})

none.addEventListener("click", function(){
      homeDropMobile.style.display="none";
      none.style.display="none"
      nbMobileMenu.style.display="block"
      nbMobile.style.background="transparent"
})