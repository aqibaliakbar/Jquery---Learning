$(document).ready(function () { 
	$("#widthBtn").click(function () {
    // width(): This method returns the calculated width of the first element in the set of matched elements, excluding padding, border, and margin
    console.log("Width: " + $(".dummy-text").width("1350px"));
   // innerWidth(): This method returns the inner width of the first element in the set of matched elements, including padding but excluding border and margin.
    console.log("innerWidth: " + $(".dummy-text").innerWidth());
   // outerWidth(): This method returns the outer width of the first element in the set of matched elements, including padding but excluding margin. This is equivalent to innerWidth() plus the width of the element's border.
    console.log("outerWidth: " + $(".dummy-text").outerWidth());
   // outerWidth(true): This variation of outerWidth() includes the width of the element's padding, border, and margin, in addition to the content width.
    console.log("outerWidth(true): " + $(".dummy-text").outerWidth(true));
	})
	
	$("#heightBtn").click(function () {
    // height(): This method returns the calculated height of the first element in the set of matched elements, excluding padding, border, and margin
    console.log("height: " + $(".dummy-text").height("500px"));
    // innerHeight(): This method returns the inner height of the first element in the set of matched elements, including padding but excluding border and margin.
    console.log("innerHeight: " + $(".dummy-text").innerHeight());
    // outerHeighth(): This method returns the outer width of the first element in the set of matched elements, including padding but excluding margin. This is equivalent to innerHeight() plus the width of the element's border.
    console.log("outerHeight: " + $(".dummy-text").outerHeight());
    // outerHeight(true): This variation of outerHeight() includes the height of the element's padding, border, and margin, in addition to the content height.
    console.log("outerHeight(true): " + $(".dummy-text").outerHeight(true));
  });

})