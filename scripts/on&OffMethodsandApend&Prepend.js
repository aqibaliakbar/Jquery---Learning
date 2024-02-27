$(document).ready(function () {
  let a = $(".dummy-text").html();
  console.log(a);

  //.text() method give only text not tags
  let b = $(".dummy-text").text();
  console.log(b);
  //.attr() method give classes and ids values overall attributes values
  let c = $(".dummy-text").attr("class");
  console.log(c);

  // on functions take two parameters 1. event which is click in our case and 2. function()

  /*$(".dummy-text").on("click", function () {
	$(this).css({"background-color": "#ffffff"})
	})*/

  // two events in same line

  /*$(".dummy-text").on("mouseover mouseout", function () {
		$(this).toggleClass("bgText");
})*/

  // Main Use of on Method

  $(".dummy-text").on({
    click: function () {
      $(this).css({ "background-color": "#000000", color: "#ffffff" });
    },
    mouseover: function () {
      $(this).css({ "background-color": "pink", color: "#ffffff" });
    },
    mouseout: function () {
      $(this).css({ "background-color": "lightblue", color: "#ffffff" });
    },
  });

  $(".removeEvent").click(function () {
    $(".dummy-text").off("mouseover mouseout");
  });

  $("#appendBtn").click(function () {
    $(".dummy-text").append("<div><h1>Jquery Append Method</h1></div>");
  });
  $("#prependBtn").click(function () {
    $(".dummy-text").prepend("<div><h1>Jquery Prepend Method</h1></div>");
  });

  // Difference between append/prepend and after and before method is that append() and prepend() insert content inside the targeted element, whereas after() and before() insert content outside, either after or before the targeted element, respectively.

    $("#afterBtn").click(function () {
      $(".dummy-text").after("<div><h1>Jquery Append Method</h1></div>");
    });
    $("#beforeBtn").click(function () {
      $(".dummy-text").before("<div><h1>Jquery Prepend Method</h1></div>");
      $("div h1").css({color: "pink"})
    });
});
