console.log(RegExp.prototype[Symbol.replace]);
// Run in chrome: ƒ [Symbol.replace]() { [native code] }
// Run with bun: [Function: [Symbol.replace]]
console.log("foobarbaz".replace(/bar/, "qux"));
// 'fooquxbaz'
