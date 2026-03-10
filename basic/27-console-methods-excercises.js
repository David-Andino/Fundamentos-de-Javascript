// 1. Crea una funcion que utilice error correctamente
function checkAge(age) {
  if (age < 18) {
    console.error("You must be at least 18 years old.");
  } else {
    console.log("Access granted.");
  }
}

checkAge(16);
checkAge(20);

// 2. Crea una funcion que utilice warning correctamente
function checkPassword(password) {
  if (password.length < 8) {
    console.warn("Your password is too short. Consider using at least 8 characters.");
    } else {    
    console.log("Password is strong.");
  }
}

checkPassword("12345");
checkPassword("strongpassword");

// 3. Crea una funcion que utilice info correctamente
function displayUserInfo(user) {
  console.info("User Information:");
  console.info(`Name: ${user.name}`);
  console.info(`Age: ${user.age}`);
}
const user = { name: "Alice", age: 30 };
displayUserInfo(user);

// 4. utiliza tabble
const products = [
  { name: "Laptop", price: 999 },
  { name: "Phone", price: 499 },
];
console.table(products);

// 5. utiliza group
console.group("Product Details");
console.log("Product: Laptop");
console.log("Price: $999");
console.groupEnd();
console.group("Product Details");
console.log("Product: Phone");
console.log("Price: $499");
console.groupEnd();

// 6. utiliza time
console.time("Data Fetching");
setTimeout(() => {
  console.timeEnd("Data Fetching");
}, 1500);

// 7. valida con assert si un numero es positivo
function checkPositiveNumber(num) {
  console.assert(num > 0, "The number is not positive.");
}
checkPositiveNumber(-5);
checkPositiveNumber(10);

// 8. uitiliza count
function countClicks() {
  console.count("Button Clicks");
}
countClicks();
countClicks();
countClicks();
console.countReset("Button Clicks");
countClicks();

// 9. utiliza trace
function functionX() {
  functionY();
}
function functionY() {
  console.trace("Trace message");
}
functionX();

// 10. utiliza clear
setTimeout(() => {
  console.clear();
}, 3000);
