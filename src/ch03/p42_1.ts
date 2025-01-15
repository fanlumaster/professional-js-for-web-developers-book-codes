export {}; // 标记为模块
// Clamps 00011000 to 1000
let a: bigint = BigInt.asIntN(4, 24n); // -8n，4 位有符号整数的范围是 -8~7
console.log(a);
