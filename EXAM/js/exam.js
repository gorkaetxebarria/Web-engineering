const time = 3000;
var unselectTimeout;
var hideTimeout;

window.onload = function(){
  document.querySelectorAll("article").forEach(function(element){
    element.addEventListener("click", subjectClick);
  })
  document.getElementById("hide").addEventListener("click", hide);
  document.getElementById("cancel").addEventListener("click", cancel);
}

function subjectClick(e){
  e.currentTarget.classList.toggle("selected");
}


function hide(e){
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(function(){
    document.querySelectorAll(".selected").forEach(function(element){
      element.classList.add("hidden");
    });
  }, time);
}

function cancel(e){
  clearTimeout(unselectTimeout);
  clearTimeout(hideTimeout); 
}