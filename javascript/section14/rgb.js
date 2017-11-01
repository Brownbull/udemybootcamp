// alert("connected");
// Variables
// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)",
// ]

var colors = randomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var numSquares = 6;

// Scripts
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener('click', function() {
  numSquares = 3;
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors = randomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
     if(colors[i]){
       squares[i].style.background = colors[i];
     } else {
       squares[i].style.background = "none";
     }
  }
});

hardBtn.addEventListener('click', function() {
  numSquares = 6;
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = randomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
     if(colors[i]){
       squares[i].style.background = colors[i];
       squares[i].style.background = "bloack";
     }
  }
});

resetBtn.addEventListener('click', function() {
  colors = randomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++){
    // initial squares colors
    squares[i].style.backgroundColor = colors[i];
  }
});

for (var i = 0; i < squares.length; i++){
  // initial squares colors
  squares[i].style.backgroundColor = colors[i];

  // ladding listeners
  squares[i].addEventListener('click', function() {
    if (this.style.backgroundColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetBtn.textContent = "Play Again?"
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      // this.style.backgroundColor = document.body.style.backgroundColor;
      this.style.backgroundColor = "steelblue";
      messageDisplay.textContent = "Try Again";
    }
  });
}

// Functions
function changeColors(color){
  for(var i = 0; i < numSquares; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  // random picks a number between 0 and .99
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  // pick red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  // concatenate rgb, spaces are important
  return "rgb(" + r + ", " + g + ", " + b  + ")";
}
