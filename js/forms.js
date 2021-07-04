let feedbackButton = document.querySelector(".contacts-info__link-submit");
let feedbackBlock = document.querySelector(".feedback");
let feedbackClose = document.querySelector(".feedback-form__button-close");
let sliderButtons = document.querySelectorAll(
  ".advertisement-controls__item-input"
);
let siteWrapper = document.querySelector(".site-wrapper");
let titleList = document.querySelectorAll(".advertisement-list__item");
let nameClient = document.getElementById("name-client");
let emailClient = document.getElementById("email-client");
let clientText = document.getElementById("client-text");
let feedbackSubmit = feedbackBlock.querySelector('[type="submit"]');
let subscribeInput = document.querySelector(".subscription-form__input");
let subscribeButton = document.querySelector(".subscription-form__button");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("nameClient");
  storage = localStorage.getItem("emailClient");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function () {
  feedbackBlock.classList.toggle("form-feedback-show");
  clientText.value = "";
});

feedbackClose.addEventListener("click", function () {
  feedbackBlock.classList.remove("feedback-form-error");
  clientText.value = "";
  feedbackBlock.classList.remove("form-feedback-show");
});

subscribeButton.addEventListener("click", function (evt) {
  if (!subscribeInput.value) {
    evt.preventDefault();
    subscribeInput.style.outline = "3px solid rgb(140, 13, 30, 0.5)";
  } else {
    subscribeInput.style.outline = "none";
  }
});

feedbackSubmit.addEventListener("click", function (evt) {
  if (!nameClient.value) {
    evt.preventDefault();
    feedbackBlock.classList.add("feedback-form-error");
    nameClient.style.outline = "3px solid rgb(140, 13, 30, 0.5)";
    feedbackButton.setAttribute("disabled", true);
  } else {
    nameClient.style.outline = "none";
  }
  if (!emailClient.value) {
    evt.preventDefault();
    feedbackBlock.classList.add("feedback-form-error");
    emailClient.style.outline = "3px solid rgb(140, 13, 30, 0.5)";
    feedbackButton.setAttribute("disabled", true);
  } else {
    emailClient.style.outline = "none";
  }
  if (!clientText.value) {
    evt.preventDefault();
    feedbackBlock.classList.add("feedback-form-error");
    clientText.style.outline = "3px solid rgb(140, 13, 30, 0.5)";
    feedbackButton.setAttribute("disabled", true);
  } else {
    clientText.style.outline = "none";
  }

  if (storage) {
    nameClient.value = storage;
    emailClient.value = storage;
    clientText.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameClient", nameClient.value);
      localStorage.setItem("emailClient", emailClient.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    if (feedbackBlock.classList.contains("form-feedback-show")) {
      feedbackBlock.classList.remove("feedback-form-error");
      feedbackBlock.classList.remove("form-feedback-show");
    }
  }
});

// Переключение слайдов главной страницы

for (let m = 0; m < sliderButtons.length; m += 1) {
  sliderButtons[m].addEventListener("click", function () {
    sliderToggle();
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
