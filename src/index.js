const form = document.getElementById("form");
const name = document.getElementById("name");
const address = document.getElementById("address");
// const phone = document.getElementById("phone");
const email = document.getElementById("email");
// const date = document.getElementById("date");
const concession = document.getElementById("concession");

const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

//Check email
const checkEmail = function (input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
};

//Check required fields
const checkRequired = function (inputArr) {
  inputArr.forEach(function (input) {
    // console.log(input.value);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

//Check Length
const checkLength = function (input, min) {
  if (input.value.length < min) {
    showError(input, `Must be at least ${min} character`);
  } else {
    showSuccess(input);
  }
};

//check Date
const checkDate = function (input) {
  if (input === "") {
    showError(input, "Must enter the date and time of event");
  }
};

const getFieldName = function (input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(name.value);

  checkRequired([name, address, email, date]);
  checkLength(name, 1);
  checkEmail(email);
  checkDate();
});