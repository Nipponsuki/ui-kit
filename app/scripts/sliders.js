const steps = document.querySelectorAll('.progress-step')
const stages = document.querySelector('.bgc')

const slider1 = document.getElementById('slider1')
const slider1Value = document.querySelector('.value')

const slider2 = document.getElementById('slider2')
const slider2Values = document.querySelector('.slider-bgc')

steps.forEach((step) => step.addEventListener('click', nextStep))

slider1.addEventListener('input', sliderOne)

slider2.addEventListener('input', sliderTwo)

export function nextStep () {
  const { step } = this.dataset
  stages.style.width = `${step}%`
  this.style.background = '#4a00e0'
}

export function sliderOne () {
  slider1Value.innerHTML = this.value
}
export function sliderTwo () {
  const value = this.value
  slider2Values.style.width = `${value}%`
}
