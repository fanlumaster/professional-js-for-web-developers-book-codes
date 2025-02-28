class Foo {
  async *[Symbol.asyncIterator]() {}
}
let f = new Foo();
console.log(f[Symbol.asyncIterator]());
// Run in chrome: AsyncIterator {<suspended>}
// Run with bun: {}
