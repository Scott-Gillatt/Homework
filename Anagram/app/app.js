function checkAnagram() {
    var strings1 = [];
    var strings2 = [];
    var userInput1 = document.getElementById("userInput1").value;
    var userInput2 = document.getElementById("userInput2").value;


    if (userInput1.length == userInput2.length) {
        for (var i = 0; i < userInput1.length; i++) {
            strings1.push(userInput1[i].toLowerCase());
            strings2.push(userInput2[i].toLowerCase());
        }

        var len = strings1.length;
        do {
            var lenCurrent = strings2.length;
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < len; j++) {
                    if (strings1[i] == strings2[j]) {
                        strings2.splice(j, 1);
                        strings1.splice(i, 1);
                    }
                    
                    // To see what the charater was being set to
                    // var strings1Char = strings1[i];
                    // var strings2Char = strings2[0];
                    // if (strings1Char == strings2Char){
                    
                }
            } if (strings2.length === lenCurrent) {
                break;
            }
        } while (strings2.length > 0);


        if (strings2.length == 0 && strings1.length == 0) {
            document.getElementById("charactername").innerHTML = "True";
        } else {
            document.getElementById("charactername").innerHTML = "False";
        }
    }
    else {
        document.getElementById("charactername").innerHTML = "False";
    }

    console.log(strings1);
    console.log(strings2);
}

//Clasemates MUCH easier way of doing this

/*function checkAnagram() {
    var word1 = prompt("Anagram check. Enter your first word");
    var word2 = prompt("Enter your second word");

    var str1 = word1.toLowerCase().split('').sort().join('').trim();
    var str2 = word2.toLowerCase().split('').sort().join('').trim();

    if (str1 === str2) {
        alert("this is an Anagram")
    } else {
        alert("better luck next time.")
    }
}
checkAnagram();*/