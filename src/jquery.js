$(function () {
  $(document).on("click", ".faq-box", function () {
    $(this).children(".faq-box-description-wrapper").slideToggle();
    if ($(this).children(".faq-box-description-wrapper").height() > 1) {
      $(this)
        .children(".faq-box-header")
        .find(".faq-button-minus")
        .addClass("hidden");
      $(this)
        .children(".faq-box-header")
        .find(".faq-button-add")
        .removeClass("hidden");

      return;
    }
    $(this)
      .children(".faq-box-header")
      .find(".faq-button-add")
      .addClass("hidden");
    $(this)
      .children(".faq-box-header")
      .find(".faq-button-minus")
      .removeClass("hidden");
    return;
  });
});
