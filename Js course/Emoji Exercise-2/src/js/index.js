var hideTimeout;
var timeOutFinished;

window.onload = function(){
  document.getElementById("hide").addEventListener("click", hide);
  document.getElementById("cancel").addEventListener("click", cancel);
  timeOutFinished = false;
}

function hide(e){
  let but = document.getElementById("hide");
  but.disabled = true;
  document.getElementById("cancel").disabled = false;
  hideTimeout = setTimeout(function(){
    document.getElementById("horse").style.display = "none";
    document.getElementById("monkey").style.display = "none";
    timeOutFinished = true;
  }, 5000)
  
}
function cancel(e){
  let but = document.getElementById("cancel");
  clearTimeout(hideTimeout);
  but.disabled = true;
  document.getElementById("hide").disabled = false;
  if(timeOutFinished){
    document.getElementById("horse").style.display = "block";
    document.getElementById("monkey").style.display = "block";
    timeOutFinished = false;
  }
}