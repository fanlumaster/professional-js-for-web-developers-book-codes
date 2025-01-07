let name = "NicholasAlice";
let age = 36;

// Suppose this script is unsure about what has already been declared in the page.
// It will assume variables have not been declared.

if (typeof name === "undefined") {
  let name;
}
// 'name' is restricted to the if {} block scope,
// so this assignment will act as a global assignment
name = "MattBob";

try {
  age;
} catch (error) {
  console.log("what");
}
// 'age' is restricted to the catch {} block scope,
// so this assignment will act as a global assignment
age = 26;
