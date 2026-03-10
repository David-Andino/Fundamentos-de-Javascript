// Console log
console.log("Hello, World!");

//error
console.error("This is an error message.");

//warning
console.warn("This is a warning message.");

//info
console.info("This is an informational message.");

//assert
console.assert(1 === 2, "This assertion failed.");

//table
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.table(users);

//time
console.time("Timer");

setTimeout(() => {
  console.timeEnd("Timer");
}, 1000);

//group
console.group("User Information");
console.log("Name: Alice");
console.log("Age: 30");
console.groupEnd();

//count
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.countReset("Counter");

//trace
function functionA() {
  functionB();
}
function functionB() {
  console.trace("Trace message");
}
functionA();

//clear
setTimeout(() => {
  console.clear();
}, 2000);
