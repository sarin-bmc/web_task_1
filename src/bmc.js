const toggleFaq = (boxId) => {
  var x = document.getElementById(boxId);
  box = document.getElementById(boxId);
  description = box.getElementsByClassName("faq-box-description-wrapper")[0];
  toggleButton = box.getElementsByClassName('faq-box-header')[0].getElementsByClassName('faq-box-header-toggle')[0];
  
  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    toggleButton.getElementsByClassName("faq-button-minus")[0].classList.remove("hidden");
    toggleButton.getElementsByClassName("faq-button-add")[0].classList.add("hidden");
    return;
  }
  
  description.classList.add("hidden");
  toggleButton.getElementsByClassName("faq-button-minus")[0].classList.add("hidden");
  toggleButton.getElementsByClassName("faq-button-add")[0].classList.remove("hidden");
  return;
};
const toggleNav = ()=>{
  var toggleIcon = document.getElementById('toggle_icon');
  var navbar = document.getElementsByClassName('navbar-inner')[0];
  if(navbar.classList.contains("hidden")){
    navbar.classList.remove('hidden')
    toggleIcon.classList.add('hidden')
    toggleIcon.getElementsByClassName('toggle-arrow')[0].classList.remove('rotate-90')
    toggleIcon.getElementsByClassName('toggle-arrow')[0].classList.add('-rotate-90')
    return;
  }
  navbar.classList.add('hidden')
  toggleIcon.classList.remove('hidden')
    toggleIcon.getElementsByClassName('toggle-arrow')[0].classList.add('rotate-90')
    toggleIcon.getElementsByClassName('toggle-arrow')[0].classList.remove('-rotate-90')
    return;
}