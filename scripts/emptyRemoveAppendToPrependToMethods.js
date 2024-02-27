$(document).ready(function () {
  // Empty Method is use to empty the content of selected element whereas remove method altogether remove the selected element
  $("#emptyBtn").click(function () {
    $(".dummy-text").empty();
  });

  $("#removeBtn").click(function () {
    $(".dummy-text").remove();
  });

  // AppendTo & PrependTo

  $("#appendToBtn").click(function () {
    $("<h3>AppendTo Method</h3>").appendTo(".dummy-text");
  });

  $("#prependToBtn").click(function () {
    $("<h3>PrependTo Method</h3>").prependTo(".dummy-text");
  });

  // Clone Method

  $("#cloneBtn").click(function () {
    $(".dummy-text p").clone().prependTo(".dummy-text1");
  });

  //"ReplaceWith: Replaces the selected element(s) with the specified content." "ReplaceAll: Replaces all elements matching the selector with the specified content."

   $("#replaceBtn").click(function () {
     $(".dummy-text2 p:nth-child(3)").replaceWith("<h1>ReplaceWith() Method</h1>")
   });
  
  // Replace All
   $("#replaceAllBtn").click(function () {
     $("<h1>ReplaceAll() Method</h1>").replaceAll(
       ".dummy-text2 p"
     );
   });

});
