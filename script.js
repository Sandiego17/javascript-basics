4 + 3;

if (4 + 3 === 7) {
    alert("You're smart!");
    console.log("Hellooooo, how are you?")
}

function sayHello() {
    console.log("Hello!");
}
sayHello();

//The following function is called an Anonymous function because it has no function-name.
var sayBye = function() {
    console.log("Bye");
}
sayBye();

var sayFuck = function fuckOff() { //But, the use of this type of function is limited
    console.log("Fuck off!");
}
sayFuck();

function multiply(a, b) {
    return a * b;
}

var subtract = function(a, b) {
    if (a > b) {
        return (a - b);
    } else if (a === b) {
        return ("Zero, but can be a hero when reversed!");
    } else {
        return ("Can not be done, according to kindergaton!")
    }
}

//EXERCISE 05
// function checkDriverAge() {
// 	var age = prompt("How old are you?");
// 	if (age < 18) {
// 		alert("Sorry, you are too young to drive this car. Powering off!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	} else if (age > 18) {
// 		alert("Powering on. Enjoy the ride!");
// 	}
//     return(age);
// }
// BONUS
function checkDriverAge(age) {
	if (age < 18) {
		return("Sorry, you are too young to drive this car. Powering off!");
	} else if (Number(age) === 18) {
		return("Congratulations on your first year of driving. Enjoy the ride!");
	} else if (age > 18) {
		return("Powering on. Enjoy the ride!");
	}
}