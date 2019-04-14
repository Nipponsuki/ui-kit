const toggleBtn = document.getElementById('toggleAnimation')
const layout = document.querySelector('.layout')

toggleBtn.addEventListener('click', toggleAnimation)

export function toggleAnimation () {
  layout.classList.toggle('animation')
}
