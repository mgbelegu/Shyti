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
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("#sherbim1DIV").hover(function () {
    $("#sherbim1").slideDown("slow");
    $("#sherbim2").slideUp("slow");
    $("#sherbim3").slideUp("slow");
    $("#sherbim4").slideUp("slow");
  });

  $("#sherbim2DIV").hover(function () {
    $("#sherbim2").slideDown("slow");
    $("#sherbim1").slideUp("slow");
    $("#sherbim3").slideUp("slow");
    $("#sherbim4").slideUp("slow");
  });

  $("#sherbim3DIV").hover(function () {
    $("#sherbim3").slideDown("slow");
    $("#sherbim2").slideUp("slow");
    $("#sherbim1").slideUp("slow");
    $("#sherbim4").slideUp("slow");
  });

  $("#sherbim4DIV").hover(function () {
    $("#sherbim4").slideDown("slow");
    $("#sherbim2").slideUp("slow");
    $("#sherbim3").slideUp("slow");
    $("#sherbim1").slideUp("slow");
  });

  $("html").click(function () {
    $("#sherbim4").slideUp("slow");
    $("#sherbim2").slideUp("slow");
    $("#sherbim3").slideUp("slow");
    $("#sherbim1").slideUp("slow");
  });

  $("#sherbim1DIV").click(function (event) {
    event.stopPropagation();
  });
  $("#sherbim2DIV").click(function (event) {
    event.stopPropagation();
  });
  $("#sherbim3DIV").click(function (event) {
    event.stopPropagation();
  });
  $("#sherbim4DIV").click(function (event) {
    event.stopPropagation();
  });
});
