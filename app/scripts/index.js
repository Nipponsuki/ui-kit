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

document.addEventListener('DOMContentLoaded', () => {
  onSubmit()
})
