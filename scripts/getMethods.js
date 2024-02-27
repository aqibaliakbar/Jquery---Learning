$(document).ready(function () {
  let a = $(".dummy-text").html();
  console.log(a);

  //.text() method give only text not tags
  let b = $(".dummy-text").text();
  console.log(b);
  //.attr() method give classes and ids values overall attributes values
  let c = $(".dummy-text").attr('class');
	console.log(c);
	
	//val() method

	$("#myForm").submit(function () { 
		let name = $("#name").val()
		let email = $("#email").val()
		let password = $("#password").val()
		let country = $("#country").val()
		let message = $("#message").val()
		alert("Name: " + name + " " + "Email: " + email + " " + "Password: " + password + " " + "Country: " + country + " " + "Message: " + message + " ")
	})


});
