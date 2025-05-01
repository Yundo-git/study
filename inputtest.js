const emailForm = document.getElementById("email"); // form
const emailInput = document.getElementById("user-email"); // input type=email
const passwordInput = document.getElementById("user-password"); // input type=password

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;
  //   const passwordValue = passwordInput.value;

  console.log("입력값 >>", emailValue);
});
