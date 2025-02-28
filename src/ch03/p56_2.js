class Foo {
  *[Symbol.iterator]() {}
}
let f = new Foo();
console.log(f[Symbol.iterator]());
// Run in chrome: Generator {<suspended>}
// Run with bun: {}
