$(".fadeBtn").on("click", function(){
  // $("div").fadeOut(2000, function(){
  $("div").fadeToggle(2000, function(){
  console.log("Fade Completed!");
  // $(this).remove();
  });
});

$(".slideBtn").on("click", function(){
  // $("div").fadeOut(2000, function(){
  $("div").slideToggle(2000, function(){
  console.log("Slide Completed!");
  // $(this).remove();
  });
});
