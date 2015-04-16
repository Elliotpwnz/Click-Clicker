//Click Clicker Script File

//Player Variables
var clicks = 0;
var clickBucks = 0;
var clickBuckValue = 10;
var counter = 0;

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
	document.getElementById("convertButton").blur();
	
	//Increment the counter
	counter++;
	
	//Updates universal display
	dispClicks.innerHTML = clicks;
	dispClicksInv.innerHTML = clicks;
	dispClickBucksInv.innerHTML = clickBucks;
	dispClickBuckValue.innerHTML = "(" + clickBuckValue + " Clicks = 1 Click-Buck)";
	
	if (counter >= 1200){newsAlert();counter=0;}
	
}

//NewsAlert Function
function newsAlert(){
	var news = Math.floor((Math.random() * 3));
	
	if (clickBuckValue <= 7){news=1;}
	else if (clickBuckValue >= 13){news=0;}
	
	switch(news){
		
		case 0:
			document.getElementById("newsArea").innerHTML = "<b>News Alert:</b> ClickBuck inflation!";
			clickBuckValue--;
			break;
		case 1:
			document.getElementById("newsArea").innerHTML = "<b>News Alert:</b> ClickBuck deflation!";
			clickBuckValue++;
			break;
		case 2:
			document.getElementById("newsArea").innerHTML = "<b>News Alert:</b> No news.";
			break;
	}
	
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