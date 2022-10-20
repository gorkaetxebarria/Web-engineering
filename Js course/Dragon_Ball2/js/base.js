window.onload = function (){
    console.log("window loaded");

    let nav_items = document.getElementsByClassName("nav-item");
    for(let nav_item of nav_items){
        if(nav_item.id==="select-all-tabs"){
            nav_item.addEventListener(
                "click",
                showAllTabs
            );
        }else{
            nav_item.addEventListener(
                "click",
                showSingleTab
            );
        }
    }
}

function showAllTabs(event) {
    console.log("Show all tabs");
    updateCurrent(event.currentTarget);
    document.getElementsByTagName("body")[0].classList.remove("single-column");

    /*let hiddenArticles = document.getElementsByClassName("hidden");
    for(let i=hiddenArticles.length-1; i>=0; i--){
        hiddenArticles[i].classList.remove("hidden");
    }*/

    document.querySelectorAll(".hidden").forEach(function(article){
        article.classList.remove("hidden");
    })
}

function showSingleTab(event) {
    let index = event.currentTarget.id.replace("select-tab-","");
    console.log("Show single tab: "+ index);
    updateCurrent(event.currentTarget);
    let articles = document.getElementsByClassName("db-article");
    for(let article of articles){
        if(article.id==="tab-"+index){
            article.classList.remove("hidden");
        }else{
            article.classList.add("hidden");
        }
    }

    document.getElementsByTagName("body")[0].classList.add("single-column");
}

function updateCurrent(target) {
    let nav_items = document.getElementsByClassName("nav-item");
    for(let nav_item of nav_items){
        if(target.id===nav_item.id){
            nav_item.classList.add("current-nav");
        }else{
            nav_item.classList.remove("current-nav");
        }
    }

}