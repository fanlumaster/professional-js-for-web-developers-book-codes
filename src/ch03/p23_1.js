import appHtmlContent from "./html/ch03-main.html?raw";

document.querySelector("#app").innerHTML = appHtmlContent;

var message;
function test() {
  message = "hi"; // global variable
}
test();
console.log(message);