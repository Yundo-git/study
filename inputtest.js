const emailForm = document.getElementById("email"); // form
const emailInput = document.getElementById("user-email"); // input type=email
const passwordInput = document.getElementById("user-password"); // input type=password

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;
  //   const passwordValue = passwordInput.value;
  const passwordValue = passwordInput.value;

  console.log("입력값 >>", emailValue);
  console.log("비번값 >> ", passwordValue);
  inputemailvalue(emailValue);
  inputpassvalue(passwordValue);
});

function inputemailvalue(value) {
  const inputv = document.createElement("p");
  inputv.textContent = value;

  emailForm.append(inputv); //email form태그다음에 넣어라

  //   emailForm.parentNode.insertBefore(inputv, emailForm.nextSibling); 형제요소 선택자
}

function inputpassvalue(value) {
  const inputpas = document.createElement("h2");

  inputpas.textContent = `이거 입력된값임 ${value}`;

  console.log("asdf", inputpas);
  emailForm.prepend(inputpas);
}
