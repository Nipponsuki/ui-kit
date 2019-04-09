import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

const form = document.querySelector('.form')
const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const messageInput = document.querySelector('.message-input')
const error = document.querySelector('.error-message')
const success = document.querySelector('.success-message')
const slider1 = document.getElementById('slider1')
const slider1Value = document.querySelector('.value')
const slider2 = document.getElementById('slider2')
const slider2Values = document.querySelector('.slider-bgc')

form.addEventListener('submit', onSubmit)

function onSubmit (e) {
  e.preventDefault()
  if (nameInput.value === '' || emailInput.value === '' || messageInput === '') {
    showMessage('error')
  } else {
    showMessage('success')
  }
}

function showMessage (type) {
  if (type === 'error') {
    error.style.display = 'flex'
    removeFeedback('error')
  } else if (type === 'success') {
    success.style.display = 'flex'
    removeFeedback('success')
  }
}
function removeFeedback (type) {
  if (type === 'error') {
    setTimeout(() => { error.style.display = 'none' }, 3000)
  } else if (type === 'success') {
    setTimeout(() => { success.style.display = 'none' }, 3000)
  }
}

slider1.addEventListener('input', function () {
  slider1Value.innerHTML = this.value
})

slider2.addEventListener('input', function () {
  const value = this.value
  slider2Values.style.width = `${value}%`
})

document.addEventListener('DOMContentLoaded', () => {
  onSubmit()
})
