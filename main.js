var codeDisplayJS = document.querySelector("#tableDisplay");
var desiredLength = document.querySelector("#stringlength");
var genButton = document.querySelector("button");
var prefix = document.querySelector("#prefix");
var suffix = document.querySelector("#suffix");
var numCodes = document.querySelector("#codeCount");
var codeCounter = Number(numCodes.value);
var initLength = Number(desiredLength.value);
var characters = [];
var checkboxes = document.querySelectorAll("input[name='Characters']")


// NEXT STEPS
// Check if an Excel Output is possible
// Style the app

genButton.addEventListener("click", function(){
	codeDisplayJS.innerHTML = "";
	characters = [];
	codeCounter = Number(numCodes.value);
	initLength = Number(desiredLength.value)
	addCharacters();
	if(characters != ""){
		codes();
	} else {
		codeDisplayJS.innerHTML = "<p>Please select characters</p>"
	}

})


function addCharacters() {
 	checkboxes.forEach(function(copper){
 		if(copper.checked) {
		characters.push(copper.value);
	}
})};

function codes(x) {
	var x = codeCounter;
	if(x <= 500 && initLength <=20) {
		for (var i = 0; i < x; i++) {		
		codeDisplayJS.innerHTML += "<tr><td>" + prefix.value + randoLine() + suffix.value + "</td></tr>";
		}
	}
	else {
		codeDisplayJS.innerHTML = "<p class=\"large-text\">Values are too large, please select again</p>"
	}
}

function randoLine(len) {
	var len = initLength;
	var p = characters.join('');
	    return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');

}



// function randomString(stringLength) {
//     stringLength = 20;
//     return Math.round((Math.pow(36, stringLength) - Math.random() * Math.pow(36, stringLength))).toString(36).slice(1);
// }



