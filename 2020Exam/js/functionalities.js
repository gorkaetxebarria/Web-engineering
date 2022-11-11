window.onload = () => {
    let main = document.querySelector("main");
    let buttons = main.querySelectorAll("button");
    addEventListeners(buttons);
};

const addEventListeners = buttons =>{
    buttons.forEach(element => {
        element.addEventListener("click", closing);
    });
}

function closing(e){
    e.target.parentNode.style.display = "none";
}

function dark(){

}

function reset(){

}