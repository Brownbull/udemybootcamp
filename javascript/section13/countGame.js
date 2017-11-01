// Initial variables
var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.querySelector("#p2Btn");
var resetBtn = document.querySelector("#resetBtn");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score;
var p2Score;
var gameOver;
var winScore = 5;
var winScoreIn = document.querySelector("#winScoreIn");
var winScoreOut = document.querySelector("#winScoreOut");

function reset(){
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("green");
  p2Display.classList.remove("green");
}

reset();

winScoreIn.addEventListener("change", function() {
  winScoreOut.textContent = this.value;
  winScore = Number(winScoreIn.value);
  reset();
});

// Score logic
p1Btn.addEventListener("click", function() {
  if(!gameOver){
    p1Score++;
    p1Display.textContent = p1Score;
    if(p1Score == winScore){
      gameOver = true;
      p1Display.classList.add("green");
    }
  }
});

p2Btn.addEventListener("click", function() {
  if(!gameOver){
    p2Score++;
    p2Display.textContent = p2Score;
    if(p2Score == winScore){
      gameOver = true;
      p2Display.classList.add("green");
    }
  }
});

// reset button
resetBtn.addEventListener("click", function() {
  reset();
});
