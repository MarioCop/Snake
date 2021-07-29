import {touchSnake, grow} from './snake.js'
import {randomPosition} from './input.js'

const GROW_RATE = 1;

let food = setPosition();

export function update(){
  if(touchSnake(food)){
    grow(GROW_RATE);
    food = setPosition();
  }
}
export function draw(gameBoard){
    const fElement = document.createElement('div');
    fElement.style.gridRowStart = food.y;
    fElement.style.gridColumnStart = food.x;
    fElement.classList.add('food');
    gameBoard.appendChild(fElement);
  }

  function setPosition(){
    let position
    while (position == null || touchSnake(position)){
      position = randomPosition();
    }
    return position
  }