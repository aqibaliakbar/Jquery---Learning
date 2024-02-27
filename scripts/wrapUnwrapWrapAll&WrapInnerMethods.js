$(document).ready(function () { 
	// Wrap Method - it only wrap the targeted element 
	$("#wrapBtn").click(function () {
		$(".dummy-text p").wrap("<div id='test'></div>");
	})

	// UnWrap Method - No value required in unwrap 

	$("#unwrapBtn").click(function () {
		$(".dummy-text p").unwrap();
	})
// #wrapAll() it wrap all the same targeted elements into single parent element 
	$("#wrapAllBtn").click(function () {
    $(".dummy-text1 p").wrapAll("<div id='test'></div>");
	});
	
	// #wrapInner()

		$("#wrapInnerBtn").click(function () {
      $("h1").wrapInner("<span id='test1'></span>");
    });
	
})