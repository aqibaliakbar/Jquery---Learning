$(document).ready(function () {
  // position():

  // The position() method retrieves the current position of the first matched element relative to its offset parent.
  // The offset parent is the closest ancestor element that is positioned (i.e., has its CSS position property set to relative, absolute, or fixed), or the document itself.
  // The position is returned as an object with top and left properties, representing the element's distance from the top and left edges of its offset parent, respectively.

  $("#positionBtn").click(function () {
    let x = $(".dummy-text p").position();
    console.log(x);
    console.log("Top : " + x.top + " Left : " + x.left);
  });

  // 	offset():

  // The offset() method retrieves the current position of the first matched element relative to the document.
  // Unlike position(), offset() calculates the position of the element relative to the entire document, not just its offset parent.
  // The position is returned as an object with top and left properties, representing the element's distance from the top and left edges of the document, respectively.

  $("#offsetBtn").click(function () {
    let x = $(".dummy-text p").offset();
    // console.log("offsetTop: " + x.top + " offsetLeft: " + x.left);
    console.log(x);
  });
});
