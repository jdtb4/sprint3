// Get the input fields
var password = document.getElementById("fPassword");
var phone = document.getElementById("fPhone");
var firstName = document.getElementById("fName");
var email = document.getElementById("fEmail");
var address = document.getElementById("fAddress");
var lastName = document.getElementById("fLastN");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");
var errorMail = document.getElementById("errorEmail");
var errorAddress = document.getElementById("errorAddress");
var errorLastN = document.getElementById("errorLastN");

// Exercise 6
function validate(event) {
  // Validate fields entered by the user: name, phone, password, and email

  event.preventDefault(firstName);

  //Validate First Name
  if(firstName.value.length < 3 || /\d+g/.test(firstName.value) == false){ // 3 Characters minimum and non numbers or special characters.
    errorName.classList.add('d-block');
    errorName.classList.add('invalid-feedback');
    firstName.classList.add('border-danger');
  }
  if(firstName.value.length >= 3 && /^[a-z ,.'-]+$/i.test(firstName.value) == true){ //Hide warning
    errorName.classList.remove('d-block');
    firstName.classList.remove('border-danger');
    firstName.classList.add("border-success");
  }

  //Validate Last Name
  if(lastName.value.length < 3 || /\d+g/.test(lastName.value) == false){ // 3 Characters minimum and non numbers or special characters.
    errorLastN.classList.add('d-block');
    errorLastN.classList.add('invalid-feedback');
    lastName.classList.add('border-danger');
  }
  if(lastName.value.length >= 3 && /^[a-z ,.'-]+$/i.test(firstName.value) == true){ //Hide warning.
    errorLastN.classList.remove('d-block');
    lastName.classList.remove('border-danger');
    lastName.classList.add("border-success");
  }

  //Validate Email
  if(email.value.length < 3 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false){ //To have numbers and letters and minimum 3 characters.
    errorMail.classList.add("d-block");
    errorMail.classList.add("invalid-feedback");
    email.classList.add("boder-danger");
  }
  if(email.value.length >= 3 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == true){ //Hide warning.
    errorMail.classList.remove("d-block");
    email.classList.remove("boder-danger");
    email.classList.add("border-success");
  }

  //Validate Password.
  if(password.value.length < 8 && /\w+g/.test(password.value) == false){
    errorPassword.classList.add("d-block");
    errorPassword.classList.add("invalid-feedback");
    password.classList.add("border-danger");
  }
  if(password.value.length >= 8 && /\w+g/.test(password.value) == true){
    errorPassword.classList.remove("d-block");
    password.classList.remove("border-danger");
    password.classList.add("border-success");
  }

  //Validate Address.
  if(address.value.length < 3){
    errorAddress.classList.add("d-block");
    errorAddress.classList.add("invalid-feefback");
    address.classList.add("border-danger");
  }
  if(address.value.length >= 3){
    errorAddress.classList.remove("d-block");
    address.classList.remove("border-danger");
    address.classList.add("border-success");
  }

  //Validate Phone Number
  if(phone.value.length < 9 && /[A-Za-z]+g/.test(phone.value) == false){ //Minimum 9 digits and only numbers.
    errorPhone.classList.add('d-block');
    errorPhone.classList.add('invalid-feedback');
    phone.classList.add('border-danger');
  }
  if(phone.value.length >= 9 && /[A-Za-z]+g/.test(phone.value) == true){ //Hide warning.
    errorPhone.classList.remove('d-block');
    phone.classList.remove('border-danger');
    phone.classList.add("border-success");
  }
}
