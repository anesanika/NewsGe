const allSlider = document.querySelectorAll('.sliders');
const mainRight = document.querySelector('.mainRight');
const resLinks = document.querySelector('.resLinks');

// --------------------slider-------------------
let sliderVal = 0

function lefSlide(){
  sliderVal += 100;
  allSlider.forEach((item) => {
    if(sliderVal >= 0){
      sliderVal = 0;
      item.style.transform = `translateX(${sliderVal}%)`
    }
    item.style.transform = `translateX(${sliderVal}%)`
  })
};

function rightSlide(){
  sliderVal -= 100;
  allSlider.forEach((item) => {
    if(sliderVal <=  (-allSlider.length * 100) + 100){
      sliderVal = -500;
      item.style.transform = `translateX(${sliderVal}%)`
    }
    item.style.transform = `translateX(${sliderVal}%)`
  })
}
function slideOne(){
  sliderVal = 0;
  allSlider.forEach((item) => {
    item.style.transform = `translateX(${sliderVal}%)`
  })
}
function slideTwo(){
  sliderVal = -100;
  allSlider.forEach((item) => {
    item.style.transform = `translateX(${sliderVal}%)`
  })
}
function slideThree(){
  sliderVal = -200;
  allSlider.forEach((item) => {
    item.style.transform = `translateX(${sliderVal}%)`
  })
}
function slidefour(){
  sliderVal = -300;
  allSlider.forEach((item) => {
    item.style.transform = `translateX(${sliderVal}%)`
  })
}
function slidefive(){
  sliderVal = -400;
  allSlider.forEach((item) => {
    item.style.transform = `translateX(${sliderVal}%)`
  })
}
function slideSix(){
  sliderVal = -500;
  allSlider.forEach((item) => {
    item.style.transform = `translateX(${sliderVal}%)`
  })
}

//-----------------------------news slie-------------------

function showNewsBar(){
  mainRight.classList.toggle('newsToggle')
}

function closeNavbar(){
  resLinks.style.top = '-450px';
}
function showNavbar(){
  resLinks.style.top = '0';
}