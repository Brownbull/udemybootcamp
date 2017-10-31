// "new" - Add a Todo
var todos = [];
// var input = prompt("What would you like to do?");
// switch (input) {
//   case "new":
//     var newTodo = prompt("Enter new todo: ");
//     todos.push(newTodo);
//     break;
//   case "list":
//     console.log(todos);
//     break;
//   case "quit":
//     console.log("End");
//     break;
//   default:
//     console.log("invalid option");
// }
// "list" - View all Todos

// "quit" - Quit App
do{
  var input = prompt("What would you like to do?");
  if(input === "list"){
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    })
    // console.log(todos);
  } else if (input === "new"){
    var newTodo = prompt("please enter new Todo:");
    todos.push(newTodo);
  } else if (input === "delete"){
    var index = prompt("Enter index of Todo to delete:");
    todos.splice(index,1);
  }
}while(input !== "quit");
console.log("You Quit App..Bye");
