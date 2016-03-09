/* global angular */
var app = angular.module('kittyList', []);


var catList = ["alfred", "bobby", "catness", "dogless", "elfred", "fredrick", "golem", "hiknee", "igor", "jago", "kayo", "leroy", "maddie", "nala", "odin", "paladin", "quincy", "ralph", "sahib", "teeny"]

var catExists = false;

var checkcat = function (userInput) {
    userInput = document.getElementById("catInput").value;

    // Verify the user enters in a valid input
    if (userInput == null || !isNaN(userInput)) {
        alert("Sorry, that isn't a valid input.  Please try again");
    } 
    
    //if user inputer is correct contineus on
    else {

    // This checks to see if the cats name exists, if so then marks catExists to true
        for (var i = 0; i < catList.length; i++) {
            if (userInput.trim().toLowerCase() == catList[i]) {
                catExists = true;
            }
        }
        // If catExists is true, allow user to knwo that and reset catExists back to false so they can try another one.
        if (catExists == true) {
            alert(userInput.trim() + " Does Exists!!! YEA");
            catExists = false;
            return;
        } else {
            alert("Sorry, " + userInput.trim() + " doesn't exists");
            return;
        }
    }
}