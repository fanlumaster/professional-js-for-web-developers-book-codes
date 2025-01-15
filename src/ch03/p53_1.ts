export {};

let o = {
  [Symbol("foo")]: "foo val",
  [Symbol("bar")]: "bar val",
  "foo": "bar"
};
console.log(o);
console.log(Object.keys(o));