export const SNAKE_SPEED = 7;

import {getDirection, randomSnakePosition} from './input.js'

const body = [randomSnakePosition()];
let counter = 0;
let pieces = 0;

export function update(){
  const direction = getDirection();
  addGrowth();
  for(let i = body.length - 2; i >= 0; i--){
    body[i + 1] = { ...body[i]}
  }
  body[0].x += direction.x;
  body[0].y += direction.y;
}

export function draw(gameBoard){
  body.forEach(square => {
    const sElement = document.createElement('div');
    sElement.style.gridRowStart = square.y;
    sElement.style.gridColumnStart = square.x;
    if (counter == 0)
      sElement.classList.add('snakeHead');
    else if (counter == (body.length - 1) && counter > 0)
      sElement.classList.add('snakeTail');
    else
      sElement.classList.add('snake');
    gameBoard.appendChild(sElement);
    counter++;
  })
 counter = 0;
}
export function touchSnake(food){
  return body.some(segment => {
    return segment.x === food.x && segment.y === food.y;
  })
}
export function grow(amount){
  pieces += amount;
}

function addGrowth(){
  for(let counter = 0; counter < pieces; counter++){
    body[body.length] = {...body[body.length -1]};
  }
  pieces = 0
}
export function getHead(){
  return body[0];
}

export function getSnake(){
  return body;
}

export function snakeLength(){
  return body.length;
}