import '../styles/main.scss'
import { dropdown } from './dropdown'
import { onSubmit } from './onSubmit'
import { nextStep, sliderOne, sliderTwo } from './sliders'
import { initCalendar } from './calendar'
import { togglePlay, videoDuration } from './video'
// import $ from 'jquery'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
document.addEventListener('DOMContentLoaded', () => {
  dropdown()
  sliderOne()
  sliderTwo()
  onSubmit()
  nextStep()
  initCalendar()
  togglePlay()
  videoDuration()
})
