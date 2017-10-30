var counter = -10;

while (counter < 20) {
  console.log(counter);
  counter++;
}

console.log("odd numbers");
var counter = 10;
while (counter <= 40) {
  if ((counter % 2) === 0 ){
    console.log(counter);
  }
  counter++;
}

// divisible by 5 and 3
console.log(" divisible by 5 and 3");
var counter = 5;
while (counter <= 50) {
  if ((counter % 5) === 0 && (counter % 3) === 0){
    console.log(counter);
  }
  counter++;
}
