//  Объявляем переменные для слайдера «Популярные гаджеты»

var sliderButtons = document.querySelectorAll(".gadgets-slider__switch");
var slides = document.querySelectorAll(".gadgets-slider__item");

//  Объявляем переменные для слайдера «Сервисы»

var tabButtons = document.querySelectorAll(".services__button");
var tabs = document.querySelectorAll(".services__tab");


//  Слайдер «Популярные гаджеты»

for (var i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < slides.length; j++) {
      sliderButtons[j].classList.remove("gadgets-slider__switch--current");
      evt.currentTarget.classList.add("gadgets-slider__switch--current");
      slides[j].classList.remove("gadgets-slider__item--visible");
      if (evt.currentTarget === sliderButtons[j]) {
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
