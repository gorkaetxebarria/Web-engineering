const time = 3000;
var unselectTimeout;
var hideTimeout;

window.onload = function(){
  document.querySelectorAll("article").forEach(function(element){
    element.addEventListener("click", subjectClick);
  })
 
  document.getElementById("hide").addEventListener("click", hide);
  document.getElementById("cancel").addEventListener("click", cancel);
  document.getElementById("showall").addEventListener("click",showall);
}

function subjectClick(e){
  e.currentTarget.classList.toggle("selected");
    var id = e.currentTarget.id;
    console.log("id:" + id);

   
    var element = document.querySelector("a[href*='" + id+ "']");
    console.log("element:" + element);
    element.classList.toggle("articleselected")
}


function hide(e){
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(function(){
    document.querySelectorAll(".selected").forEach(function(element){
      element.classList.add("hidden");
      console.log("hidden added")
    });
  },
  function()
  {
    document.querySelectorAll(".articleselected").forEach(function(element){
      element.classList.add("articlehidden");
      console.log("articleselected hidden")
    });
  }, time);
}

function cancel(e){
  clearTimeout(unselectTimeout);
  clearTimeout(hideTimeout); 
}

function showall(e){
    document.querySelectorAll(".hidden").forEach(function(element){
        element.classList.remove("hidden");
        console.log("hidden removed")
    });
    document.querySelectorAll(".articlehidden").forEach(function(element){
        element.classList.remove("articlehidden");
        console.log("articlehidden removed")
    });
}