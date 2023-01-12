//EXERCISE 01
// Guess what answers you would get if you ran this in the Javascript Console in Google Chrome. Once you have an answer  to the questions then check them by copying them and running it in the console yourself line by line. Evaluate the below:
5 + "34"		= "534"
5 - "4"			= 1
10 % 5			= 0
5 % 10			= 5   
"Java" + "Script"	= "JavaScript"
" " + " "		= "  "
" " + 0			= " 0"
true + true		= 2
true + false		= 1
false + true		= 1
false - true		= -1
3 - 4			= -1
"Bob" - "bill"		= NaN

//Evaluate the below comparisons:
5 >= 1			= true
0 === 1			= false
4 <= 1			= false
1 != 1			= false
"A" > "B"		= false
"B" < "C"		= true
"a" > "A"		= true
"b" < "A"		= false
true === false		= false
true != true		= false

// Make the string: "Hi There! It's "sunny" out" by using the + sign:
"Hi " + "There! " + "It\'s " + "\"sunny\" " + "out"


// EXERCISE 02
// Evaluate what answers you would get if you ran this in the Javascript Console in Google Chrome. Answer the questions then check them by copying them and running it in the console yourself line by line: add variable "firstName" and "lastName" so that they equal your name
// create a variable that holds the answer of "firstName" + " " + "lastName"
var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var fullName = firstName + " " + lastName;
alert("Your name is: " + fullName);

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?	Answer: a + b = 23

// What is c equal to?
var c;		Answer: Undefined


//EXERCISE 03
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  
var a = prompt("Please enter first number");
var b = prompt("Please enter second number");
var sum = Number(a) + Number(b);
alert("The sum of both numbers is: " + sum);

or

var a = prompt("Please enter first number");
var b = prompt("Please enter second number");
alert("The sum of both numbers is: " + (Number(a) + Number(b)));

// BONUS: Make a program that can subtract, multiply, and also divide!
var a = prompt("Please enter first number");
var b = prompt("Please enter second number");
var difference = Number(a) - Number(b);
alert("The difference between both numbers is: " + difference);

var a = prompt("Please enter first number");
var b = prompt("Please enter second number");
var product = Number(a) * Number(b);
alert("The product of both numbers is: " + product);

var a = prompt("Please enter first number");
var b = prompt("Please enter second number");
var divide = Number(a) / Number(b);
alert("The division of both numbers is: " + divide);


// EXERCISE 04
// Make a keyless car! This car will only let you drive if you are over 18. Make it do the following:
// using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
var age = prompt("How old are you?");
if (age < 18) {
	alert("Sorry, you are too young to drive this car. Powering off!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (age > 18) {
	alert("Powering on. Enjoy the ride!");
}


// EXERCISE 05
// Make a keyless car EVEN BETTER! We are improving our car from previous exercise now. Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function. Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge() {
	var age = prompt("How old are you?");
	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else if (age > 18) {
		alert("Powering on. Enjoy the ride!");
	}
    	return(age);
}

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression. 
var checkDriverAge2 = function () {
	var age = prompt("How old are you?");
	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else if (age > 18) {
		alert("Powering on. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter: checkDriverAge(92); it returns "Powering On. Enjoy the ride!"
function checkDriverAge(age) {
	if (age < 18) {
		return("Sorry, you are too young to drive this car. Powering off!");
	} else if (Number(age) === 18) {
		return("Congratulations on your first year of driving. Enjoy the ride!");
	} else if (age > 18) {
		return("Powering on. Enjoy the ride!");
	}
}


// EXERCISE 06
// Using this array, var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.shift();

or

array.splice(0, 1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a']). You should have at the end: ["Kiwi", "Oranges", "Blueberries"]
array.reverse();

// 6. Using this array, var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];


// EXERCISE 07
// Create an object and an array which we will use in our facebook exercise. 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
	username: "Sandiego17",
	password: "Bush123"
};

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
	{
		username: "Sandiego17",
		password: "Bush123"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
	{
		username: "Sandiego17",
		timeline: "JavaScript is sooooo cool!"
	},
	{
		username: "ThePrince",
		timeline: "JavaScript is preeetyy cool!"
	},
	{
		username: "GoZion22",
		timeline: "So tired from all that learning!"
	}
];