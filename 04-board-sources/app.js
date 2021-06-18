const board = document.querySelector('#board')
const colors = ['#fed2b5', '#de9292', '#97759a', '#a4bcc8', '#465c71', '#27343d']
const cellSpace = 4
const cellSize = 16

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight
const SQUARES_NUMBER = 
  Math.floor((windowInnerWidth) / (cellSize + cellSpace)) *
  Math.floor((windowInnerHeight) / (cellSize + cellSpace))

let squareFill = 0;
let gameOver = false;

// console.log(`windowInnerWidth = ${windowInnerWidth}`);
// console.log(`windowInnerHeight = ${windowInnerHeight}`);
// console.log('w = ', Math.floor((windowInnerWidth) / (cellSize + cellSpace)));
// console.log('h = ', Math.floor((windowInnerHeight) / (cellSize + cellSpace)));
console.log(`SQUARES_NUMBER = ${SQUARES_NUMBER}`);


function createBoard() {
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    square.addEventListener('mouseover', (e) => setColor(e, square))
    square.addEventListener('mouseleave', (e) => fillColor(e, square))
  }
}
createBoard()

function setColor(e, element) {
  counter(element)
  const color = getColor(e.clientY)
  element.style.border = `6px double ${color}`
  element.style.boxShadow = `0 0 20px ${color}, 0 0 10px ${color}`
}

function fillColor(e, element) {
  element.style.backgroundColor = element.style.borderColor
  // element.style.backgroundColor = '#0d0d0d'
  // element.style.boxShadow = `0 0 2px #000`
}

function counter(element) {
  if (element.style.backgroundColor === '') {
    squareFill++
    console.log(`Filled ${squareFill}/${SQUARES_NUMBER}`); 
    if (squareFill === SQUARES_NUMBER && !gameOver) {
      gameOver = true;
      alert(`U WON THE W(O_o)RLD BATTLE! :) \nYou have filled all ${SQUARES_NUMBER} cells`)
    }
  }
}

function getColor(mouseY) {
  const step = windowInnerHeight/colors.length;
  let y = Math.floor(mouseY/step)

  if (y === 0) return colors[getNumberBetween(0,0)]
  if (y === 1) return colors[getNumberBetween(0,1)]
  if (y === 2) return colors[getNumberBetween(1,2)] 
  if (y === 3) return colors[getNumberBetween(2,4)] 
  if (y === 4) return colors[getNumberBetween(3,5)]
  if (y === 5) return colors[getNumberBetween(4,5)]
}

function getNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}