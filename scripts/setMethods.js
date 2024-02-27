$(document).ready(function () {
  let a = $(".dummy-text").html();
  console.log(a);

  //.text() method give only text not tags
  let b = $(".dummy-text").text();
  console.log(b);
  //.attr() method give classes and ids values overall attributes values
  let c = $(".dummy-text").attr("class");
  console.log(c);

  //val() method

  $("#myForm").submit(function () {
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let country = $("#country").val();
    let message = $("#message").val();
    alert(
      "Name: " +
        name +
        " " +
        "Email: " +
        email +
        " " +
        "Password: " +
        password +
        " " +
        "Country: " +
        country +
        " " +
        "Message: " +
        message +
        " "
    );
  });
  $("#clickBtn").click(function () {
    $(".dummy-text h2").text("Hello Jquery!");
    $(".dummy-text p").html(" <b> Jquery </b> Set Methods");
    $(".dummy-text h2").attr("class", "white");
  });

  $("#name").val("Your Name");
  $("#email").val("Your Unique Email");
  $("#message").val("Your Message");

  $("#addBtn").click(function () {
    $(".dummy-text, h1").addClass("first");
  });
  $("#removeBtn").click(function () {
    $(".dummy-text, h1 ").removeClass("first");
  });
  $("#toggleBtn").click(function () {
    $(".dummy-text, h1 ").toggleClass("first");
	});
	// for multiple inline css we use {]}
  $("#clickBtn").click(function () {
    $(".dummy-text").css({"background-color": "green", "color": "white"});
  });
});
