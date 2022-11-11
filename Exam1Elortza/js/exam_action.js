var subjects;
var navItems;
var timeoutID;
window.onload = () =>{
    subjects = document.getElementsByClassName("subject");
    navItems = document.getElementsByTagName("a");
    for(let i=0; i<subjects.length; i++){
        subjects[i].addEventListener("click", subjectClicked);
    }
    document.getElementById("hide").addEventListener("click", hideClicked);
    document.getElementById("cancel").addEventListener("click", cancelClicked);
    document.getElementById("showAll").addEventListener("click", showAllClicked);
}

function subjectClicked (evt){
    cancelClicked();
    for(let i=0; i<subjects.length; i++){
        if(evt.currentTarget == subjects[i]){
            let content = subjects[i].getElementsByClassName("content");
            content[0].classList.toggle("selected");
            navItems[i].classList.toggle("selected");
        }
    }
}
function hideClicked (){
    cancelClicked();
    timeoutID = setTimeout(hideSelected, 3000);
}
function hideSelected(){
    let selected = document.getElementsByClassName("selected");
    for(let i=0; i< navItems.length; i++){
        if(navItems[i] == selected[0]){ //Seleced-aren tamana aldatzen goaz, selected klasea duten elementuak kentzen ditugulako, hortaz beti 0 posizioa hartuz gero ondo dabil. 
            let content = subjects[i].getElementsByClassName("content");
            content[0].classList.remove("selected");
            subjects[i].classList.add("hide");
            navItems[i].classList.remove("selected")
            navItems[i].classList.add("hidden");
        }
    }
}
function cancelClicked(){
    clearTimeout(timeoutID);
}

function showAllClicked(){
    for (let i=0; i<subjects.length; i++){
        subjects[i].classList.remove("hide");
        navItems[i].classList.remove("hidden");
    }
}