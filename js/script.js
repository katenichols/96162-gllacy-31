const inputLogin = signinForm.querySelector('[type="email"]');
const inputPassword = signinForm.querySelector('[type="password"]');
const signinSubmit = signinForm.querySelector(".signin-form__button");

try {
  storage = localStorage.getItem("inputLogin");
  storage = localStorage.getItem("inputPassword");
} catch (err) {
  isStorageSupport = false;
}

// Проверка форм на пустые поля

signinSubmit.addEventListener("click", function (evt) {
  if (!inputLogin.value) {
    evt.preventDefault();
    inputLogin.style.outline = "3px solid rgb(140, 13, 30, 0.5)";
  } else {
    inputLogin.style.outline = "none";
  }
  if (!inputPassword.value) {
    evt.preventDefault();
    inputPassword.style.outline = "3px solid rgb(140, 13, 30, 0.5)";
  } else {
    inputPassword.style.outline = "none";
  }

  if (storage) {
    inputLogin.value = storage;
    inputPassword.value = storage;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("inputLogin", inputLogin.value);
      localStorage.setItem("inputPassword", inputPassword.value);
    }
  }
});
