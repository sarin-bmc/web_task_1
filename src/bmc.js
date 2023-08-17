// nav toggle for mobile view
const toggleNav = ()=>{
  var toggleIcon = document.getElementById('toggle_icon');
  var navbar = document.getElementsByClassName('navbar-inner')[0];
  if(navbar.classList.contains("hidden")){
    navbar.classList.remove('hidden')
    toggleIcon.classList.add('hidden')
    return;
  }
  navbar.classList.add('hidden')
  toggleIcon.classList.remove('hidden')
    return;
}

//fade in animation
const fadeInCallback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const fadeInObserver = new IntersectionObserver(fadeInCallback);

const fadein_animate = document.querySelectorAll(".fade-in");
fadein_animate.forEach(function (fadein_animate) {
  fadein_animate.classList.add("opacity-0");
  fadeInObserver.observe(fadein_animate);
});

// svg draw animation
const drawCallback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("workflow-svg");
    } else {
      entry.target.classList.remove("workflow-svg");
    }
  });
};

const drawObserver = new IntersectionObserver(drawCallback);

const svg_draw = document.querySelectorAll(".draw-svg");
svg_draw.forEach((svg_draw) =>{
  //svg_draw.classList.add("opacity-0");
  drawObserver.observe(svg_draw);
});

// popup animation
const popUpCallback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("popUp");
    } else {
      entry.target.classList.remove("popUp");
    }
  });
};

const popupObserver = new IntersectionObserver(popUpCallback);

const pop_up = document.querySelectorAll(".pop-up");
pop_up.forEach((pop_up) =>{
  popupObserver.observe(pop_up);
});

// navbar show/hide on scroll
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.top = "-20px";
    document.getElementById("navbar").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}