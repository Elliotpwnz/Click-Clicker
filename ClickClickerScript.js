//Click Clicker Script File

//Player Variables
var clicks = 0;

//Document Tags
var dispClicks = document.getElementById("dispClicks");

//Update the display every 10th of a second
var updateDisplay = setInterval(updateDisplay, 100);

//The updateDisplay Function
function updateDisplay(){
	dispClicks.innerHTML = clicks;
}

//The click function
function clickF(){
	clicks++;
}