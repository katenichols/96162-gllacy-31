const linkSearch = document.querySelector(".main-header__link-search");
const searchForm = document.querySelector(".search");
const linkSignin = document.querySelector(".main-header__link-login");
const signinForm = document.querySelector(".signin");
const inputLogin = signinForm.querySelector('[type="email"]');
const inputPassword = signinForm.querySelector('[type="password"]');
const signinSubmit = signinForm.querySelector(".signin-form__button");
const linkCart = document.querySelector(".main-header__link-full");
const cartForm = document.querySelector(".cart");

// const isStorageSupport = true;
// const storage = "";

try {
  storage = localStorage.getItem("inputLogin");
  storage = localStorage.getItem("inputPassword");
} catch (err) {
  isStorageSupport = false;
}

// Отображение/скрытие форм поиска, входа, корзины, обратной связи

linkSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  try {
    signinForm.classList.remove("form-show");
    cartForm.classList.remove("cart-show");
    searchForm.classList.toggle("form-show");
  } catch (err) {
    signinForm.classList.remove("form-show");
    searchForm.classList.toggle("form-show");
  }
});

linkSignin.addEventListener("click", function (evt) {
  evt.preventDefault();
  try {
    cartForm.classList.remove("cart-show");
    searchForm.classList.remove("form-show");
    signinForm.classList.toggle("form-show");
  } catch (err) {
    searchForm.classList.remove("form-show");
    signinForm.classList.toggle("form-show");
  }
});

if (linkCart !== null) {
  linkCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.remove("form-show");
    signinForm.classList.remove("form-show");
    cartForm.classList.toggle("cart-show");
  });
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

// Закрытие форм по нажатию клавиши Esc

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    if (searchForm.classList.contains("form-show")) {
      searchForm.classList.remove("form-show");
    } else {
      if (signinForm.classList.contains("form-show")) {
        signinForm.classList.remove("form-show");
      } else {
        if (linkCart !== null) {
          if (cartForm.classList.contains("cart-show")) {
            cartForm.classList.remove("cart-show");
          }
        }
      }
    }
  }
});
