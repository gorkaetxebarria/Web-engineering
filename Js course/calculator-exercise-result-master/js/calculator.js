var result_display = null;
var temporal_result_display = null;
var display_value = "";

window.onload = function () {
    console.log("Window loaded");
    result_display = document.getElementById("result");
    temporal_result_display = document.getElementById("temporal-result-display");

    /* manual for */
    /*
    let operations = document.getElementsByClassName("action");
    console.log(operations);

    for (let i = 0; i < operations.length; i++) {
        operations[i].addEventListener(
            "click",
            addToDisplay
        );
    }
    */

    /* querySelectorAll + forEach */
    document.querySelectorAll(".action").forEach(function(operation){
        operation.addEventListener(
            "click",
            addToDisplay
        )
    });

    document.getElementById("equals").addEventListener("click", evaluateDisplay);
    document.getElementById("reset").addEventListener("click", resetDisplay);
    document.getElementById("delete").addEventListener("click", deleteLastCharacter);
}

function deleteLastCharacter() {
    display_value = result_display.innerHTML.slice(0, -1);
    updateDisplayWithValue();
    evaluateAndUpdateTemporalResultDisplay();
}

function addToDisplay(event) {
    display_value += event.target.innerHTML; /* target vs. currentTarget */
    updateDisplayWithValue();
    evaluateAndUpdateTemporalResultDisplay();
}

function resetDisplay() {
    display_value = "";
    result_display.innerHTML = "0";
    temporal_result_display.innerHTML = "-";
}

function evaluateDisplay() {
    try {
        display_value = eval(display_value);
    }catch{
        display_value = "ERROR";
    }
    updateDisplayWithValue();
}

function updateDisplayWithValue() {
    if(display_value)
        result_display.innerHTML = display_value;
    else
        result_display.innerHTML = 0;
}

function evaluateAndUpdateTemporalResultDisplay() {
    try{
        let result = eval(display_value);
        if(result == undefined) result = "-";
        temporal_result_display.innerHTML = result;
    } catch (error){
        if(!temporal_result_display.innerHTML.endsWith("(?)"))
            temporal_result_display.innerHTML += " (?)";
    }
}

function removeTemporalResultDisplay() {
    temporal_result_display.innerHTML = "-";
}