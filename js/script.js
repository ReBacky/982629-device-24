//  Объявляем переменные для слайдера «Популярные гаджеты»

var sliderButtons = document.querySelectorAll(".gadgets-slider__switch");
var slides = document.querySelectorAll(".gadgets-slider__item");

//  Объявляем переменные для слайдера «Сервисы»

var tabButtons = document.querySelectorAll(".services__button");
var tabs = document.querySelectorAll(".services__tab");

//  Объявляем переменные для формы «Напишите нам»

var contactsButton = document.querySelector(".contacts__button");
var popup = document.querySelector(".modal-write");
var buttonClose = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var fullName = popup.querySelector("[name=full-name]");
var emailAddress = popup.querySelector("[name=email-address]");
var mailText = popup.querySelector("[name=mail-text]");


//  Слайдер «Популярные гаджеты»

for (var i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < slides.length; j++) {
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

for (var k = 0; k < tabButtons.length; k++) {
  tabButtons[k].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var m = 0; m < tabs.length; m++) {
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

fullName.addEventListener("input", function (evt) {
  if (fullName.value) {
    fullName.classList.remove("write-form__input--invalid");
  }
});

emailAddress.addEventListener("input", function (evt) {
  if (emailAddress.value) {
    emailAddress.classList.remove("write-form__input--invalid");
  }
});

mailText.addEventListener("input", function (evt) {
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
