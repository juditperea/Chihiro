const canvas = document.getElementById('backgroundCanvas')
const context = canvas.getContext('2d')
const video = document.getElementById('backgroundVideo')

// Sprite for 'Still Chihiro'
const chihiro = new Image()
chihiro.src = '/sprites/chihiro.png'

// Initial sprite position
let chihiroX
let chihiroY

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  chihiroX = canvas.width * 0.1
  chihiroY = canvas.height * 0.75
}

window.addEventListener('resize', resize)

resize()

video.addEventListener('loadeddata', () => {
  video.play()
  drawScene()
})

function drawScene() {
  context.clearRect(0, 0, canvas.width, canvas.height)

  // Draw background according to canvas size
  context.drawImage(video, 0, 0, canvas.width, canvas.height)

  // Draw the sprite for still Chihiro (game is not playing)
  context.drawImage(chihiro, chihiroX, chihiroY, canvas.width * 0.07, canvas.height * 0.18)

  // Call the function to create loop effect
  requestAnimationFrame(drawScene)
}
