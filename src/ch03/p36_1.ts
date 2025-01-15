let a: number = 0.1;
let b: number = 0.2;
console.log(a + b); // 0.30000000000000004
if (a + b == 0.3) {
  // avoid!
  console.log("You got 0.3.");
}
