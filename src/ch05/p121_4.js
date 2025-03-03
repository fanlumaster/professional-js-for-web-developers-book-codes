function doSomething() {
  console.log("do somthing.");
}

// get start time
let start = Date.now();
// call a function
doSomething();
// get stop time
let stop = Date.now(),
  result = stop - start;

console.log(result);