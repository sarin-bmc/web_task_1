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
