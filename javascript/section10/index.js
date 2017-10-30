// functions
function isEven(num){
  return num % 2 === 0;
}

function factorial(num){
  var result = 1;
  for(i = 2; i <= num; i++){
    result *= i;
  }
  return result;
}

// replace - for _
function kebabToSnake(word){
  // replace all '-' with '_'
  return word.replace(/-/g,"_");
}


// scripts
var num = isEven(Number(prompt("type a number:")));
if(num){
  alert("IsEven!");
}
else {
  alert("IsOdd!");
}

alert("Factorial : " + factorial(Number(prompt("number for factorial:"))));
alert("KebabToSnake : " + kebabToSnake(prompt("enter a word with - symbols:")));
