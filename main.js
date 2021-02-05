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
	if(characters != "" && codeCounter <= 2000 && initLength <=30){
		for (let i = 0; i < codeCounter; i++) {
			addRow();
		} 
	} else {
		codeDisplayJS.innerHTML = "<p>Please make a valid selection.</p>"
	}

})


function addCharacters() {
 	checkboxes.forEach(function(copper){
 		if(copper.checked) {
		characters.push(copper.value);
	}
})};



// function codes(x) {
// 	var x = codeCounter;
// 	let code = "";
// 	if(x <= 500 && initLength <=20) {
// 		for (let i = 0; i < x; i++) {		
// 		 code += prefix.value + randoLine() + suffix.value;
// 		}
// 	}
// 	else {
// 		codeDisplayJS.innerHTML = "<p class=\"large-text\">Values are too large, please select again</p>"
// 	}
// 	return 
// }



function genCode() {
	let code = prefix.value + randoLine() + suffix.value;
	return code;
}


//Generate Random Numbers

function randoLine(len) {
	var len = initLength;
	var p = characters.join('');
	    return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');

}


//Add a New Row

function addRow() {
	// Get a reference to the table
	let tableRef = codeDisplayJS;
  
	// Insert a row at the end of the table
	let newRow = tableRef.insertRow(-1);
  
	// Insert a cell in the row at index 0
	let newCell = newRow.insertCell(0);
  
	// Append a text node to the cell
	let newText = document.createTextNode(genCode());
	newCell.appendChild(newText);
  }
  
  // Call addRow() with the table's ID
//   addRow();



// function randomString(stringLength) {
//     stringLength = 20;
//     return Math.round((Math.pow(36, stringLength) - Math.random() * Math.pow(36, stringLength))).toString(36).slice(1);
// }


var element = document.getElementById('back-link');

// Provide a standard href to facilitate standard browser features such as 
//  - Hover to see link
//  - Right click and copy link
//  - Right click and open in new tab
element.setAttribute('href', document.referrer);

// We can't let the browser use the above href for navigation. If it does, 
// the browser will think that it is a regular link, and place the current 
// page on the browser history, so that if the user clicks "back" again,
// it'll actually return to this page. We need to perform a native back to
// integrate properly into the browser's history behavior
element.onclick = function() {
  history.back();
  return false;
}



