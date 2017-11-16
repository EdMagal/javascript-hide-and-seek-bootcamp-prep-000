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

function deepestChild() {
  var el = document.querySelectorAll("#grand-node div");
  return el[el.length-1];
}

