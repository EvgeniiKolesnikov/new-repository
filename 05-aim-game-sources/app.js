const startBtn = document.querySelector('#start')
const restartBtn = document.querySelector('#restart')
const timeList = document.querySelector('#time-list')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const tickerSound = document.querySelector('#tickerSound')
const lootSound = document.querySelector('#lootSound')
const menuBtnSound = document.querySelector('#menuBtnSound')
const gameMusicSound = document.querySelector('#gameMusicSound')
const gameOverSound = document.querySelector('#gameOverSound')

menuBtnSound.volume = 0.5

const colors = ['#FBCEB1', '#FDD9B5', '#B5B8B1', '#78DBE2', '#E0B0FF', 
                '#FFBF00', '#1FCECB', '#93AA00', '#FF845C', '#CCFF00',
                '#D2691E', '#C54B8C', '#ED4830', '#7D8471', '#FFF8DC',
                '#3B5998', '#E3256B', '#EEE6A3', '#008080', '#834D18',
                '#D2B48C', '#3CAA3C', '#4E1609', '#926EAE', '#4D5D53']

let time = 0
let score = 0
let gameOver = false
let gameTimer = null
let gameOverTimer = null
let flag = true;


startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  screens[0].classList.add('up')
  menuBtnSound.play()
})

restartBtn.addEventListener('click', (e) => {
  menuBtnSound.play()
  location.reload()}
  )

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
    menuBtnSound.play()
  }
})

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    lootSound.play()
    score++
    e.target.remove()
    createRandomCircle()
  }
})


function startGame() {
  gameTimer = setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
  gameMusicSound.play()
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
  if (Number(value) <= 5) {
    timeEl.style.color = '#de3737'
    tickerSound.play()
  }
}

function finishGame() {
  clearInterval(gameTimer)
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Score: <span class="primary">${score}</span> </h1>`
  restartBtn.textContent = `Начать новую игру`
  tickerSound.pause()
  gameMusicSound.pause()
  gameOverSound.play()
  // gameOverSound.pause()
  console.log('finish Game');
  gameOverTimer = setInterval(winAnimation, 30);
}

function createRandomCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  const size = getRandomNumber(20, 150)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const mainColor = getColor()
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.boxShadow = `0 0 10px`;
  circle.style.border = `${getRandomNumber(0, 2)}px solid ${mainColor}`
  circle.style.background = 
  `linear-gradient(${getRandomNumber(0, 360)}deg, ${getColor()} 0%, ${mainColor} ${getRandomNumber(10, 90)}%, ${getColor()} 100%)`;
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function winAnimation() {
  if(flag){
    board.childNodes[0].style.opacity=1;
  } else {
    board.childNodes[0].style.opacity=0;
  }
  flag = !flag;
  gameOverSound.onended = function() {
    console.log('end winAnimation');
    if (score > 0) {
      alert(`Ты вообще понимаешь, что собрал(-а) целый миллион миллиардов триллионов кругов?!!! \nНу, или ${score}, но какая разница! :D`)
    } else {
      alert(`Ты набрал(-а) ${score}...\nНу, в этой ситуации мы просто, наша, это самое, мы уже здесь, наши полномочия всё, окончены! (^-^)`)
    }
    clearInterval(gameOverTimer)
    board.childNodes[0].style.opacity=1;
  };
}

function getColor() {
  return colors[getRandomNumber(0, colors.length-1)]
}