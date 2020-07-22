// half height snake
// sound
// change width and height depending on viewport

// const WIDTH = 28;
// const HEIGHT = 14;
const SNAKE = "&#xB2;";
const BUG = "&#xEA;"

var headx, heady, dirx, diry, length, grid, play, moves;
var playing
var WIDTH, HEIGHT;
var nibblesDiv = document.getElementById('nibbles');
// console.log(nibblesDiv)
if (nibblesDiv !== null) {
  var availableWidth = nibblesDiv.parentNode.clientWidth - 50;
  WIDTH = Math.floor(availableWidth / 9);
  HEIGHT = Math.floor(WIDTH / 3);
  console.log(WIDTH, HEIGHT)
  nibblesDiv.style.width = (WIDTH + 2).toString() + "ch";
  nibblesDiv.style.height = (HEIGHT + 2).toString() + "em";
  drawKeyboard();
  drawModal();
  window.addEventListener('keydown', function(e){
    if (playing === true) {
      moves.push(e.key);
    } else {
      reset();
    }
  });
}

function drawModal(){
  var modal = document.createElement('div');
  modal.className = "modal";
  modal.style.left = ((WIDTH - 24) / 2).toString() + "ch";
  modal.style.top = ((HEIGHT - 5) / 2).toString() + "em";
  modal.style.width = (26).toString() + "ch";
  modal.style.height = (5).toString() + "em";
  var modalBorder = document.createElement('div');

  if (playing) {
    var gameOverText = document.createElement('p');
    gameOverText.textContent = "Game Over";
    modal.append(gameOverText);
  }
  playing = false;
  var text = document.createElement('p');
  text.innerHTML = "Keys: w/a/s/d<br>Click here to begin";
  modal.addEventListener('click', function(e){
    reset();
  })
  modal.append(text);
  nibblesDiv.append(modal);
}

function drawKeyboard(){
  var nibblesKeyboard = document.getElementById('nibblesKeyboard');
  var rowOne = document.createElement('div');
  rowOne.className = 'row';
  rowOne.append(drawKey('w'));
  nibblesKeyboard.append(rowOne);
  var rowTwo = document.createElement('div');
  rowTwo.className = 'row';
  rowTwo.append(drawKey('a'));
  rowTwo.append(drawKey('s'));
  rowTwo.append(drawKey('d'));
  nibblesKeyboard.append(rowTwo);
}

function drawKey(key){
  var keyDiv = document.createElement('div');
  keyDiv.className = 'key';
  keyDiv.textContent = key.toUpperCase();
  keyDiv.addEventListener('click', function(e){
    if(playing){
      moves.push(key);
    } else {
      reset();
    }
  })
  return keyDiv;
}

function loop(){
  makeMove();
  checkCollision();
  moveSnake();
  draw();
}

function checkCollision(){
  if (headx + dirx < 0 || headx + dirx === WIDTH ||
    heady + diry < 0 || heady + diry === HEIGHT) {
    gameover();
    return;
  } else if (grid[heady + diry][headx + dirx] > 0) {
    gameover();
    return;
  } else if (grid[heady + diry][headx + dirx] === -1) {
    length += 5;
    spawn();
    startLoop();
  }
}

function makeMove(){
  var move = moves.shift();
  if (move === 'w' && diry !== 1) {
    dirx = 0;
    diry = -1;
  } else if (move === 'a' && dirx !== 1){
    dirx = -1;
    diry = 0;
  } else if (move === 's' && diry !== -1){
    dirx = 0;
    diry = 1;
  } else if (move === 'd' && dirx !== -1){
    dirx = 1;
    diry = 0;
  }
}

function moveSnake(){
  if(!playing){
    return;
  } 
  for(var y = 0; y < HEIGHT; y++){
    for(var x = 0; x < WIDTH; x++){
      if (grid[y][x] > 0) {
        grid[y][x] -= 1;
      }
    }
  }
  headx += dirx;
  heady += diry;
  grid[heady][headx] = length;
}

function gameover(){
  clearInterval(play);
  drawModal();
}

function reset(){
  moves = [];
  playing = true;
  headx = 8;
  heady = 8;
  dirx = 1;
  diry = 0;
  length = 10;
  grid = [];
  for(var y = 0; y < HEIGHT; y++){
    var row = [];
    for(var x = 0; x < WIDTH; x++){
      row.push(0);
    }
    grid.push(row);
  }
  startLoop();
  spawn();
}

function startLoop(){
  clearInterval(play);
  play = setInterval(loop, 200 - (length));
}

function draw(){
  if(!playing){
    return;
  } 
  nibblesDiv.innerHTML = "";
  nibblesDiv.append(borderTop());
  for(var i = 0; i < HEIGHT; i++){
    nibblesDiv.append(drawRow(i));
  }
  nibblesDiv.append(borderBottom());
};

function spawn(){
  var currentValue;
  while (currentValue != 0){
    var x = Math.floor(Math.random() * WIDTH);
    var y = Math.floor(Math.random() * HEIGHT);
    currentValue = grid[y][x];
  }

  grid[y][x] = -1;
}

function space(){
  var space = document.createElement('span');
  space.className = "space";
  return space;
}

function drawRow(row){
  var line = makeLine();
  line.append(border("&#xBA;"));
  for(var x = 0; x < WIDTH; x++){
    var value = grid[row][x];
    if(value === 0){
      line.append(space());
    } else if(value === -1){
      line.append(span(BUG));
    } else {
      line.append(span(SNAKE));
    }
  }
  line.append(border('&#xBA;'));
  return line;
};

function span(content){
  var span = document.createElement('span');
  span.innerHTML = content;
  return span;
}

function makeLine(input = ""){
  var line = document.createElement('span');
  line.classList.add('line');
  line.innerHTML = input;
  return line;
}

function border(input){
  var border = document.createElement('span');
  border.classList.add('border');
  border.innerHTML = input;
  return border;
}

function borderTop(){
  var line = makeLine();
  var text = ""
  text += '&#xC9;';
  for (var i=0; i < WIDTH; i++){
    text += '&#xCD;';
  }
  text += '&#xBB;';
  line.append(border(text));
  return line;
}

function borderBottom(){
  var line = makeLine();
  var text = ""
  text += '&#xC8;';
  for (var i=0; i < WIDTH; i++){
    text += '&#xCD;';
  }
  text += '&#xBC;';
  line.append(border(text));
  return line;
}