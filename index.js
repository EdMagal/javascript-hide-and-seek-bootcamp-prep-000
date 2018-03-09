function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var el = document.querySelectorAll(".ranked-list li");
  for (var i in el) {
    el[i].innerHTML = +el[i].innerHTML + n;
  }
}

/*function deepestChild() {
  return (Array.from(document.querySelectorAll("#grand-node div"))).pop();
}*/

function deepestChild(){
  var a = document.getElementById("grand-node").querySelectorAll("div");
  
    return a[a.length-1];
  
}
