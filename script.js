const canvas = document.getElementById('backgroundCanvas')
const context = canvas.getContext('2d')
const video = document.getElementById('backgroundVideo')

video.play()

function drawVideo() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(video, 0, 0, canvas.width, canvas.height)
  requestAnimationFrame(drawVideo)
}


video.addEventListener('loadeddata', () => {
  drawVideo()
})
