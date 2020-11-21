// create secretNumber
var secretNumber = 4;
// ask user for guests
var guess = Number(prompt("Guess a number"));
// alert(guess);
// check guests
if (guess === secretNumber){
  alert("You are right! number is " + guess)
}
else if (guess > secretNumber){
  alert("Too High!");
}
else {
  alert("Too Low!");
}
