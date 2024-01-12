const counterObject = require("./script");

console.log(counterObject.getCounter());
counterObject.increamentCounter();
console.log(counterObject.getCounter());

const newCounterObject = require("./script");

console.log(newCounterObject.getCounter());
