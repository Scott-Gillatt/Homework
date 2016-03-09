// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var pickRandomPicture = function () {
    var people = ["Scott", "Dave", "Joe", "John", "Colin", "Josh", "Ken", "Matt", "Jake", "Overall"];
    var randomPeople = [];
    var len = people.length;
    
    for (var i = 0; i  < len ; i++) {
        var x = people[Math.floor(Math.random() * people.length)];
        randomPeople.push(x);
        var temp = people.indexOf(x);
        people.splice(temp , 1);
    }
console.log(randomPeople);
    
}
pickRandomPicture();
