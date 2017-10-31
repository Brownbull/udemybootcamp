// functions
function printReverse(array){
  var revers = [];
  for(i = 0; i < array.length; i++){
    revers[array.length - 1 - i] = array[i];
    // revers[array.length - 1 - i] = array.length - 1 - i;
    // revers[array.length - 1 - i] = i;
  }
  return revers;
}

function isUniform(array){
  var first = array[0];
  for(i = 0; i < array.length; i++){
    if (first !== array[i]){
      return false;
    }
  }
  return true;
}

function sumArray(array){
  var total = 0;
  for(i = 0; i < array.length ; i++){
    total += Number(array[i]);
  }
  return total;
}

function max(array){
  max = 0;
  for(i = 0; i < array.length; i++){
    if(max < Number(array[i])){
      max = Number(array[i]);
    }
  }
  return max;
}
// scripts
var ar = [];
var element;
do{
  element = prompt("enter new array symbol; type quit to end");
  if (element !== "quit"){
    ar.push(element);
  }
} while (element !== "quit");
alert(printReverse(ar));

ar = [];
do{
  element = prompt("enter new array symbol; type quit to end");
  if (element !== "quit"){
    ar.push(element);
  }
} while (element !== "quit");
alert(isUniform(ar));

ar = [];
do{
  element = prompt("enter new array symbol; type quit to end");
  if (element !== "quit"){
    ar.push(element);
  }
} while (element !== "quit");
alert(sumArray(ar));

ar = [];
do{
  element = prompt("enter new array symbol; type quit to end");
  if (element !== "quit"){
    ar.push(element);
  }
} while (element !== "quit");
alert(max(ar));
