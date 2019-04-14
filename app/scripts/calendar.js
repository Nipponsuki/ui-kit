import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendarEl = document.querySelector('.calendar')
const openCalendar = document.querySelector('.add-calendar')
const closeCalendar = document.querySelector('#remove-calendar')
const modal = document.querySelector('.modal')

document.addEventListener('DOMContentLoaded', initCalendar)

export function initCalendar () {
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin]
  })
  calendar.render()
  openCalendar.addEventListener('click', () => { modal.style.display = 'block' })
  closeCalendar.addEventListener('click', () => { modal.style.display = 'none' })
}
