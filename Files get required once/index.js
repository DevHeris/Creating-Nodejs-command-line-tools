const counterObject = require("./script");

console.log(counterObject.getCounter()); //0
counterObject.increamentCounter();
console.log(counterObject.getCounter()); //counter is now 1

// Requiring from script.js again. will the counter variable automatically reset to 0 or be 1?
const newCounterObject = require("./script");

console.log(newCounterObject.getCounter()); // the result is 1
