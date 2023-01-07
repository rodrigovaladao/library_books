function validateForm() {
  let hasError = false;

  if (document.getElementById("firstName").value == "") {
    hasError = true;
    let firstNameError = document.getElementById("firstNameError");
    firstNameError.innerHTML = "Name can't be empty";

    //alert("Please enter your name");
    return false;
  }

  if (document.getElementById("emailAddress").value == "") {
    hasError = true;
    let emailAddressError = document.getElementById("emailAddressError");
    emailAddressError.innerHTML = "Email can't be empty";
    // alert("Please enter your e-email");
    return false;
  }

  if (isNaN(document.getElementById("phoneNumber").value)) {
    hasError = true;
    let phoneNumberError = document.getElementById("phoneNumberError");
    phoneNumberError.innerHTML = "Only Numbers Accepted";
    // alert("Please enter your phoneNumber");
    return false;
  }

  var commentCheck = document.forms[0].myComments.value;
  if (commentCheck == "") {
    hasError = true;
    let messageAreaError = document.getElementById("messageAreaError");
    messageAreaError.innerHTML = "Message can't be empty";

    // alert("Please type your message");
    return false;
  }
  let firstName = document.getElementById("firstName").value;
  let messageSucessfull = document.getElementById("messageSucessfull");
  messageSucessfull.innerHTML =
    "Dear " +
    firstName +
    ", Thank you for your inquiry. One of our team members will be in touch with you shortly.";

  return false;
  // alert("Obrigado pela sua mensagem!");
}

function elementOnFocus(x) {
  x.style.background = "yellow";
}

function elementOnReset() {
  alert("The form was reset");
}
