$(document).ready(function () {
	$(window).scroll(function () {
		$(".dummy-text1").html('');
		$(".dummy-text1").append("Top: " + $(window).scrollTop());
		$(".dummy-text1").append("<br>Left: " + $(window).scrollLeft());
		$("#scrollTopBtn").click(function () { 
			$(window).scrollTop(200);
		})
		$("#scrollLeftBtn").click(function () { 
			$(window).scrollLeft(100);
		})
    console.clear();
    console.log($(window).scrollTop());
    console.log($(window).scrollLeft());
  });
});
