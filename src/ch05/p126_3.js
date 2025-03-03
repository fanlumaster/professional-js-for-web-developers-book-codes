// Match the first instance of "bat" or "cat", regardless of case.
let pattern1 = /[bc]at/i;
// Same as pattern1, just using the constructor.
let pattern2 = new RegExp("[bc]at", "i");

console.log(pattern1);
console.log(pattern2);
