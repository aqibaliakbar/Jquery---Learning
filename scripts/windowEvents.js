$(document).ready(function () {
  $(".scroll-box").scroll(function () {
    console.log("You Are scrolling");
  });
  $(window).scroll(function () {
    console.log("You Are scrolling");
	});
	  $(window).resize(function () {
      console.log("You Are resizing window");
    });
});
