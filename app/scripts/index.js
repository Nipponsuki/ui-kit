import '../styles/main.scss'
import { dropdown } from './dropdown'
import { onSubmit } from './onSubmit'
import { nextStep, sliderOne, sliderTwo } from './sliders'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
document.addEventListener('DOMContentLoaded', () => {
  dropdown()
  sliderOne()
  sliderTwo()
  onSubmit()
  nextStep()
})
