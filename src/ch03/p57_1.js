console.log(RegExp.prototype[Symbol.match]);
// Run in chrome: ƒ [Symbol.match]() { [native code] }
// Run with bun: [Function: [Symbol.match]]
console.log("foobar".match(/bar/));
// ["bar", index: 3, input: "foobar", groups: undefined]
