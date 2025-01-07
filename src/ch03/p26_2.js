// this cannot run in vite
var name = "MattBob";
var anotherName = "Another MattBob";
console.log(window.name); // 'MattBob'
console.log(window.anotherName); // 'Another MattBob'

let age = 26;
console.log(window.age); // undefined
