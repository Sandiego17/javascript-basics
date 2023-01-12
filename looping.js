var todos = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study JS!",
    "eat healthy"
];

// for (var i=0; i < todos.length; i++) {
//     // console.log(i);
//     todos[i] = todos[i] + "!";
// }

var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
//     todos.pop();
// }
for (var i=0; i < todosLength; i++) {
    console.log(todos[i], i);
}

// todos.forEach(function(todo, i) {
//     console.log(todo, i);
// })

function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counter++;
// }

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counter--;
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo);