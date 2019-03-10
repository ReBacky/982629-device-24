//  Объявляем переменные для слайдера «Популярные гаджеты»

const sliderButtons = document.querySelectorAll(".gadgets-slider__switch");
const slides = document.querySelectorAll(".gadgets-slider__item");

//  Объявляем переменные для слайдера «Сервисы»

const tabButtons = document.querySelectorAll(".services__button");
const tabs = document.querySelectorAll(".services__tab");

//  Объявляем переменные для формы «Напишите нам»

const contactsButton = document.querySelector(".contacts__button");
const popup = document.querySelector(".modal-write");
const buttonClose = popup.querySelector(".button-close");
const form = popup.querySelector("form");
const fullName = popup.querySelector("[name=full-name]");
const emailAddress = popup.querySelector("[name=email-address]");
const mailText = popup.querySelector("[name=mail-text]");


//  Слайдер «Популярные гаджеты»

for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let j = 0; j < slides.length; j++) {
      sliderButtons[j].classList.remove("gadgets-slider__switch--current");
      evt.target.classList.add("gadgets-slider__switch--current");
      slides[j].classList.remove("gadgets-slider__item--visible");
      if (evt.target === sliderButtons[j]) {
        slides[j].classList.add("gadgets-slider__item--visible");
      }
    }
  });
}

//  Слайдер «Сервисы»

for (let k = 0; k < tabButtons.length; k++) {
  tabButtons[k].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let m = 0; m < tabs.length; m++) {
      tabButtons[m].classList.remove("services__button--current");
      evt.target.classList.add("services__button--current");
      tabs[m].classList.remove("services__tab--visible");
      if (evt.target === tabButtons[m]) {
        tabs[m].classList.add("services__tab--visible");
      }
    }
  });
}

//  Форма «Напишите нам»

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  fullName.focus();
});

form.addEventListener("submit", function (evt) {
  if (!fullName.value || !emailAddress.value || !mailText.value) {
    evt.preventDefault();
    if (!fullName.value) {
      fullName.classList.add("write-form__input--invalid");
    }
    if (!emailAddress.value) {
      emailAddress.classList.add("write-form__input--invalid");
    }
    if (!mailText.value) {
      mailText.classList.add("write-form__input--invalid");
    }
    popup.classList.remove("modal--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal--error");
  }
});

fullName.addEventListener("input", function () {
  if (fullName.value) {
    fullName.classList.remove("write-form__input--invalid");
  }
});

emailAddress.addEventListener("input", function () {
  if (emailAddress.value) {
    emailAddress.classList.remove("write-form__input--invalid");
  }
});

mailText.addEventListener("input", function () {
  if (mailText.value) {
    mailText.classList.remove("write-form__input--invalid");
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  popup.classList.remove("modal--error");
  fullName.classList.remove("write-form__input--invalid");
  emailAddress.classList.remove("write-form__input--invalid");
  mailText.classList.remove("write-form__input--invalid");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      popup.classList.remove("modal--error");
      fullName.classList.remove("write-form__input--invalid");
      emailAddress.classList.remove("write-form__input--invalid");
      mailText.classList.remove("write-form__input--invalid");
    }
  }
});
