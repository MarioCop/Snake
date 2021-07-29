import {update as uSnake, draw as dSnake, getHead, getSnake, snakeLength,SNAKE_SPEED} from './snake.js';
import {update as uFoord, draw as dFood} from './food.js';
import {touchingWall, touchingSnake} from './input.js'

let previousTimeStamp = 0;
let gameState = true;
const gameBoard = document.getElementById("game_board");

alert('Use the Arrow keys to move. Click "OK" or press "Enter" to Start')

function main(timestamp){
  if (!gameState){
    if (confirm('Game Over press "OK" or press "Enter" to play again')){
      window.location = '/';
    }
    return;
  }
  window.requestAnimationFrame(main);
  const timeDifferenceInSeconds = (timestamp - previousTimeStamp) / 1000;
  if (timeDifferenceInSeconds < 1 / SNAKE_SPEED) return;
  previousTimeStamp = timestamp;
  update()
  draw();
}
window.requestAnimationFrame(main);

function update(){
  uSnake();
  uFoord();
  checkGameState();
}

function draw(){
  gameBoard.innerHTML = '';
  dFood(gameBoard);
  dSnake(gameBoard);
}

function checkGameState(){
  if (touchingWall(getHead()) || touchingSnake(getSnake(), snakeLength()))
    gameState = false;
}