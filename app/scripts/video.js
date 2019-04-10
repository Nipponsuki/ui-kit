const bar = document.querySelector('.color')
const video = document.querySelector('.video')
const playPauseBtn = document.getElementById('play-pause')
// const fullScreen = document.getElementById('full-screen')

playPauseBtn.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', videoDuration)

export function videoDuration () {
  const barPos = video.currentTime / video.duration
  console.log(barPos)

  bar.style.width = `${barPos * 100}%`
}

export function togglePlay () {
  if (video.paused) {
    playPauseBtn.classList.remove('play')
    playPauseBtn.classList.add('pause')
    video.play()
  } else {
    playPauseBtn.classList.remove('pause')
    playPauseBtn.classList.add('play')
    video.pause()
  }
}
