//Click Clicker Script File

//Player Variables
var clicks = 0;
var clickBucks = 0;
var clickBuckValue = 10;

//Document Tags
var dispClicks = document.getElementById("dispClicks");
var dispClicksInv = document.getElementById("dispClicksInv");
var dispClickBucksInv = document.getElementById("dispClickBucksInv");
var dispClickBuckValue = document.getElementById("dispClickBuckValue");

//Update the display every 10th of a second
var updateDisplay = setInterval(updateDisplay, 100);

//The updateDisplay Function
function updateDisplay(){
	//Removes focus from button
	document.getElementById("clickButton").blur();
	
	//Updates universal display
	dispClicks.innerHTML = clicks;
	dispClicksInv.innerHTML = clicks;
	dispClickBucksInv.innerHTML = clickBucks;
	dispClickBuckValue.innerHTML = "(" + clickBuckValue + " Clicks = 1 Click-Buck)";
	
}

//The convert button function
function convertButtonF(){
	
	if (clicks >= clickBuckValue){
		var temp = clicks;
		clickBucks += Math.floor(clicks / clickBuckValue);
		clicks = clicks % clickBuckValue;
	}
}

//The click function
function clickF(){
	clicks++;
}