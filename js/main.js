$(function () {
  $(document).scroll(function () {
    if ($(window).scrollTop() === 0) {
      $(".navbar").addClass("ontop");
    }
    var $nav = $(".navbar");
    var $navlinks = $(".nav-link");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 200);
    $navlinks.toggleClass("scrolled", $(this).scrollTop() > 200);
  });
});
