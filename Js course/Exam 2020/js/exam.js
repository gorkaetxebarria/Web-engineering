window.onload = function(){
  let buttonsArticles = document.getElementsByClassName("butArticle");

  for (var i = 0; i < buttonsArticles.length ; i++) {
    buttonsArticles[i].addEventListener("click", articleClose);
  }

  document.getElementById("dark").addEventListener("click", dark);
  document.getElementById("reset").addEventListener("click", reset);

  let articles = document.getElementsByClassName("article");

  for (var i = 0; i < articles.length ; i++) {
    articles[i].addEventListener("click", selectArticle);
  }
}

function selectArticle(e){
  e.currentTarget.querySelector('.caption').classList.add("selected");
  e.currentTarget.querySelector('h3').classList.add("selected");
}

function articleClose(e){
  e.target.parentNode.parentNode.classList.add("invisible");
}

function dark(e){
  document.querySelectorAll(".selected").forEach(function(element){
    element.classList.remove("selected");
    element.classList.add("dark");
  });
}

function reset(e){
  setTimeout(function(){
    document.querySelectorAll(".selected").forEach(function(element){
      element.classList.remove("selected");
    });
    document.querySelectorAll(".dark").forEach(function(element){
      element.classList.remove("dark");
    });
    document.querySelectorAll(".invisible").forEach(function(element){
      element.classList.remove("invisible");
    });
  }, 2000);
}