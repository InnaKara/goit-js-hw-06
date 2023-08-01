const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.length === 0 || password.value.length === 0) {
    alert("Необхідно заповнити всі поля");
  } else {
    const dataUsers = {
      email: email.value,
      password: password.value,
    };
    console.log(dataUsers);
    event.currentTarget.reset();
  }
}
