var subjects;
var navItems;
var timeoutID;

window.onload = function (){
    console.log("window loaded");

    subjects = document.getElementsByClassName("asign");
    navItems = document.getElementsByTagName("a");

    for(let subj of subjects){
        subj.addEventListener("click", cambiarColor);
    }
    document.getElementById("Hide").addEventListener("click", hideClicked);
    document.getElementById("Cancel").addEventListener("click", clear);
    document.getElementById("Show").addEventListener("click", mostrarOcultar);
}

function cambiarColor(event){
    clearTimeout(timeoutID);
    let asign = event.currentTarget;
    for(let i = 0; i<subjects.length; i++){
        if(subjects[i] == asign){
            subjects[i].classList.toggle("selected");
            navItems[i].classList.toggle("selected");
        }
    }
    
}

function ocultarAsign(){
    console.log("ocultar");
    let selected = document.getElementsByClassName("selected");
    for(let i = 0; i < navItems.length; i++){
        if(selected[0] == navItems[i]){
            subjects[i].classList.remove("selected");
            navItems[i].classList.remove("selected");
            subjects[i].classList.add("hidden");
            navItems[i].classList.add("hiddenNav");
        }        
    }
}

function hideClicked (){
    clearTimeout(timeoutID);
    timeoutID = setTimeout(ocultarAsign, 3000);
}

function clear(){
    clearTimeout(timeoutID);
}

function mostrarOcultar(){
    let hidden = document.getElementsByClassName("hiddenNav");
    for(let i = 0; i < navItems.length; i++){
        if(hidden[0] == navItems[i]){
            subjects[i].classList.remove("hidden");
            navItems[i].classList.remove("hiddenNav");
        } 
    }
}