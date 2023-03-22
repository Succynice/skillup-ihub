const form = document.forms["signup-form"];
const signupBtn = form.querySelector("#signup-btn");
const mobileOrEmailField = form.querySelector("#inputMobileOrEmail");

signupBtn.addEventListener("click", (event) => {
  // prevent the form from submitting
  event.preventDefault();

  // check that all required fields are filled out
  if (form.checkValidity()) {
    // if all required fields are filled out, redirect to the confirm page
    window.location.href = "../confirmation/confirm.html";
  } else {
    // if any required fields are missing, display an error message
    alert("Please fill out all required fields.");

    // check if mobileOrEmailField is empty
    if (mobileOrEmailField.validity.valueMissing) {
      // display an error message next to the field
      mobileOrEmailField.insertAdjacentHTML(
        "afterend",
        "<p class='text-danger'>Please enter a mobile number or email</p>"
      );
    } else {
      // remove any existing error message next to the field
      const error = mobileOrEmailField.nextElementSibling;
      if (error && error.classList.contains("text-danger")) {
        error.remove();
      }
    }
  }
});
