let linkSearch = document.querySelector(".main-header__link-search");
let searchForm = document.querySelector(".search");
let linkSignin = document.querySelector(".main-header__link-login");
let signinForm = document.querySelector(".signin");
let linkCart = document.querySelector(".main-header__link-full");
let cartForm = document.querySelector(".cart");
let controlsList = document.querySelector(".advertisement-controls");
// let sliderCheck = controlsList.querySelector('input[type="radio"]:checked');
let sliderButtons = controlsList.querySelectorAll(
  ".advertisement-controls__item-input"
);
let siteWrapper = document.querySelector(".site-wrapper");
let titleList = document.querySelectorAll(".advertisement-list__item");

// Отображение/скрытие форм поиска, входа, корзины

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

// Переключение слайдов главной страницы

controlsList.addEventListener("click", function () {
  sliderToggle();
});

for (let k = 0; k < sliderButtons.length; k += 1) {
  sliderButtons[k].addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.key === "Enter") {
      console.log(
        "Нажат Enter на переключателе " + sliderButtons[k].getAttribute("value")
      );
    }
  });
}

function sliderToggle() {
  for (let y = 0; y < sliderButtons.length; y += 1) {
    for (let i = 0; i < titleList.length; i += 1) {
      if (sliderButtons[y].checked) {
        if (
          titleList[i].getAttribute("value") !==
          sliderButtons[y].getAttribute("value")
        ) {
          if (
            titleList[i].classList.contains("advertisement-list__item-current")
          ) {
            titleList[i].classList.remove("advertisement-list__item-current");
            siteWrapper.classList.remove("site-wrapper-" + [i + 1]);
          }
        } else {
          titleList[i].classList.add("advertisement-list__item-current");
          siteWrapper.classList.add("site-wrapper-" + [i + 1]);
        }
      }
    }
  }
}

// controlsList.addEventListener("click", function () {
//   for (let y = 0; y < sliderButtons.length; y += 1) {
//     for (let i = 0; i < titleList.length; i += 1) {
//       if (sliderButtons[y].checked) {
//         if (
//           titleList[i].getAttribute("value") !==
//           sliderButtons[y].getAttribute("value")
//         ) {
//           if (
//             titleList[i].classList.contains("advertisement-list__item-current")
//           ) {
//             titleList[i].classList.remove("advertisement-list__item-current");
//             siteWrapper.classList.remove("site-wrapper-" + [i + 1]);
//           }
//         } else {
//           titleList[i].classList.add("advertisement-list__item-current");
//           siteWrapper.classList.add("site-wrapper-" + [i + 1]);
//         }
//       }
//     }
//   }
// });
