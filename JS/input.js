const up = {x: 0, y: -1};
const down = {x: 0, y: 1};
const left = {x: -1, y: 0};
const right = {x: 1, y: 0};
let direction = down;

window.addEventListener('keydown', e =>{
  switch (e.key){
    case 'ArrowUp':
      if (direction == down) break;
      direction = up;
      break;
    case 'ArrowDown':
      if (direction == up) break;
      direction = down;
      break;
    case 'ArrowLeft':
      if (direction == right) break;
      direction = left;
      break;
    case 'ArrowRight':
      if (direction == left) break;
      direction = right;
      break;
  }
})

export function getDirection(){
  return direction;
}

export function randomPosition(){
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1
  }
}

export function randomSnakePosition(){
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 16)
  }
}

export function touchingWall(head){
  return( head.x < 1 || head.x > 21 || head.y < 1 || head.y > 21)
}

export function touchingSnake(snake, length){
  for (let i = 1; i < length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
      return true;
  }
  return false;
}