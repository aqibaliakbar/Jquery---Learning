$(document).ready(function () {
  $("#name, #email, #country, #password, #message").focus(function () {
    $(this).css("background-color", "yellow");
  });
  $("#name, #email, #country, #password, #message").blur(function () {
    $(this).css("background-color", "");
  });
  $("#country").change(function () {
    $(this).css("background-color", "gray");
  });
  $("#country").change(function () {
    let a = $(this).val();
    $("#output").html(a);
  });
  $("#name, #email, #country, #password, #message").select(function () {
    $(this).css("background-color", "blue");
  });

	$("#myForm").submit(function (event) {
		event.preventDefault();
    console.log("Form Submitted");
  });

  $("#myForm").submit(function (event) {
    event.preventDefault();
    let formData = $(this).serializeArray();
    let result = "<h3>Form Data</h3><ul>";
    $.each(formData, function (index, field) {
      result +=
        "<li><strong>" + field.name + ":</strong> " + field.value + "</li>";
    });
    result += "</ul>";
    $("#output").html(result);
  });
});
