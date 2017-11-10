$("h1").click(function(){
  alert("h1 clicked!");
});

$("button").click(function(){
  // alert("botton clicked");
  // $(this).css("background", "pink");
  console.log("You clicked" + $(this).text());
});

$('input[type="text"]').keypress(function(event){
  // console.log("YOU PRESSED A KEY!");
  if(event.which == 13){
    alert("Enter detected!");
  }
});

// $(this).on("click", function(){
//   alert($(this) + " clicked");
// })

$("button").on("mouseenter", function(){
  // console.log("mouse enter!");
  $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
  // console.log("mouse enter!");
  $(this).css("font-weight", "normal");
});
