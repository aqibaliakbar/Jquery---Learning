$(document).ready(function () {
	// in animate method height/width also have predefined properties show/hide/toggle and we write css properties in camelCase e.g: fontSize

	// $("#animateBtn").click(function() {
	// 	$("#dummy-text").animate({
	// 		left: "150px",
	// 		width: "+=150px",
	// 		fontSize: "24px"
	// 	})
	// })

	// Below we show animation in queue like step by step instead of simultaneously

		$("#animateBtn").click(function () {
			$("#dummy-text").animate({ left: "450px", fontSize: "24px" }, 3000, function () { 
				console.log("First Animation Completed")
			});
      $("#dummy-text").animate({top: "150px"});
      $("#dummy-text").animate({width: "+=150px"});
      $("#dummy-text").animate({height: "+=150px"});
    });
})