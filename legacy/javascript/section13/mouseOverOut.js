var allLi = document.querySelectorAll('li');

for (var i = 0; i < allLi.length ; i++){
  allLi[i].addEventListener('mouseover', function() {
    // this.style.color = "green";
    this.classList.add("selected");
  });
  allLi[i].addEventListener('mouseout', function() {
    // this.style.color = "black";
    this.classList.remove("selected");
  });
  allLi[i].addEventListener('click', function() {
    this.classList.remove("selected");
    this.classList.toggle("done");
  });
}

// firstLi.addEventListener('mouseover', function() {
//   this.style.color = "green";
// });
//
// firstLi.addEventListener('mouseout', function() {
//   this.style.color = "black";
// });
