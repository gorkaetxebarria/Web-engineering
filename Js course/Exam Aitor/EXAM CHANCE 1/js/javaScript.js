/* Event when windows is loaded */
window.onload = function() {initialize()};

var hideTimer;
const seconds = 5000;

/* On window loaded function */
function initialize() {
	console.log("Web page loaded");
	document.getElementById("cancelButton").disabled = true;
}

/* Hide button pressed */
function hide() {
	console.log("Hide clicked");
	hideTimer = setTimeout(function() { hideFunc() }, seconds);
	document.getElementById("hideButton").disabled = true;
	document.getElementById("cancelButton").disabled = false;
}

/* Function executed after 5 seconds*/
function hideFunc() {
	console.log("Executed after 5 seconds");
	
	document.getElementById("article3").style.display = "none";
	document.getElementById("article5").style.display = "none";
	
	document.getElementById("hideButton").disabled = false;
	document.getElementById("cancelButton").disabled = true;
}

/* Cancel button pressed */
function cancel() {
	console.log("Cancel clicked");

	clearTimeout(hideTimer);
	
	document.getElementById("article3").style.display = "block";
	document.getElementById("article5").style.display = "block";
	
	document.getElementById("hideButton").disabled = false;
	document.getElementById("cancelButton").disabled = true;
}