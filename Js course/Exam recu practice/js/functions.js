window.onload = function() {
    var cards = document.getElementsByTagName("section");
    for(let i = 0; i < cards.length; i++)
    {
        cards[i].addEventListener('click', selectFunc.bind(null, i));
    }
    document.getElementById("reset").addEventListener('click', resetAll);
    document.getElementById("size").addEventListener('click', resize);
}

function selectFunc(id)
{
    var sections = document.getElementsByTagName("section");
    sections[id].classList.toggle("toBeResized");
    var links = document.getElementsByTagName("a");
    links[id].classList.toggle("card_selected");
}

function resetAll(){
    card_selected_remove();
    toBeResized_remove();
    gridArea_remove();
}

function card_selected_remove(){
    var l_selected = document.getElementsByClassName("card_selected");
    var amount = l_selected.length;
    for(let i = 0; i < amount; i++)
    {
        l_selected[0].classList.remove("card_selected");
    }
}

function toBeResized_remove(){
    var tobe = document.getElementsByClassName("toBeResized");
    var amount = tobe.length;
    for(let i = 0; i < amount; i++)
    {
        tobe[0].classList.remove("toBeResized");
    }
}

function gridArea_remove(){
    var grid = document.getElementsByClassName("gridArea");
    var amount = grid.length;
    for(let i = 0; i < amount; i++)
    {
        grid[0].classList.remove("gridArea");
    }
}

function resize(){
    setTimeout(function(){
        var tobe = document.getElementsByClassName("toBeResized");
        document.getElementById("main_content")
        for(let i = 0; i < tobe.length; i++){
            tobe[i].classList.toggle("gridArea");
        }
    }, 2000);
}