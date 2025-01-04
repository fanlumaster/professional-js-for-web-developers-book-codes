import appHtmlContent from "./html/ch2-1-1.html?raw";

document.querySelector("#app").innerHTML = appHtmlContent;

function sayHi() {
  console.log("Hi!");
}
sayHi();
