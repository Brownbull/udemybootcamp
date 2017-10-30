// do{
// var answer = prompt("are we there yet?");
// }while(answer !== "yes" && answer !== "yeah");
// alert("Yes! we made it!");


// in this case if the word yes is statement it will find it
do{
var answer = prompt("are we there yet?");
}while(answer.indexOf("yes") === -1);
alert("Yes! we made it!");
