$(document).ready(function () {
  // hasClass Method
  $("#hasClassBtn").click(function () {
    console.log($("#dummy-text").hasClass("test"));

    let x = $("#dummy-text").hasClass("test");
    if (x === true) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  });

  // hide() Method: hide the element but remain in html iys display become none. it has two parameters first parameter has values slow, fast and in milliseconds 1000ms and second parameter is callback function.

  $("#hideBtn").click(function () {
    $("#dummy-text").hide("slow", function () {
      console.log("Box is now Hidden");
    });
  });

  // show() Method: show the element opposite to hide Method. it has two parameters first parameter has values slow, fast and in milliseconds 1000ms and second parameter is callback function.

  $("#showBtn").click(function () {
    $("#dummy-text").show("slow", function () {
      console.log("Box is now visible");
    });
  });

  // toggle() Method: it includes both show and hide Method, if you click if it is show it become hidden and if hidden it become show. it has two parameters first parameter has values slow, fast and in milliseconds 1000ms and second parameter is callback function.

  $("#toggleBtn").click(function () {
    $("#dummy-text").toggle("1000", function () {
      console.log("Toggle");
    });
  });

  // fadeOut = hide Method and similar parameters and values
  $("#fadeOutBtn").click(function () {
    $("#dummy-text1").fadeOut("slow", function () {
      console.log("Box is now Hidden - fadeOut");
    });
  });

  // fadeIn = show Method and similar parameters and values
  $("#fadeInBtn").click(function () {
    $("#dummy-text1").fadeIn("slow", function () {
      console.log("Box is now visible - fadeIn");
    });
  });

  // fadeToggle = toggle Method and similar parameters and values

  $("#fadeToggleBtn").click(function () {
    $("#dummy-text1").fadeToggle("1000", function () {
      console.log("Toggle - fadeIn / fadeOut");
    });
  });

  // fadeTo Method has one additional parameter opacity like how much you wait to fade the selected element and its value is between 0 and 1.
  $("#fadeToBtn").click(function () {
    $("#dummy-text1").fadeTo("slow", 0.5, function () {
      console.log("Toggle - fadeIn / fadeOut");
    });
  });

  // slideUp = hide Method and similar parameters and values with animated effect
  $("#slideUpBtn").click(function () {
    $("#dummy-text2").slideUp("slow", function () {
      console.log("Box is now Hidden - fadeOut");
    });
  });

  // slideDown = show Method and similar parameters and values with animated effect
  $("#slideDownBtn").click(function () {
    $("#dummy-text2").slideDown("slow", function () {
      console.log("Box is now visible - fadeIn");
    });
  });

  // slideToggle = toggle Method and similar parameters and values with animated effect

  $("#slideToggleBtn").click(function () {
    $("#dummy-text2").slideToggle("1000", function () {
      console.log("Toggle - fadeIn / fadeOut");
    });
  });
});
