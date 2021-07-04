let linkSearch = document.querySelector(".main-header__link-search");
let searchForm = document.querySelector(".search");
let linkSignin = document.querySelector(".main-header__link-login");
let signinForm = document.querySelector(".signin");
let inputLogin = signinForm.querySelector('[type="email"]');
let inputPassword = signinForm.querySelector('[type="password"]');
let signinSubmit = signinForm.querySelector(".signin-form__button");
let linkCart = document.querySelector(".main-header__link-full");
let cartForm = document.querySelector(".cart");

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
