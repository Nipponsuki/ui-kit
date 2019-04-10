import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendarEl = document.querySelector('.calendar')

document.addEventListener('DOMContentLoaded', initCalendar)

export function initCalendar () {
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin]
  })
  calendar.render()
}
