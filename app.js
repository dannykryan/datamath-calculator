document.addEventListener("DOMContendLoaded", function () {
  //Store all components on HTML in our JS
  let clear = document.querySelector("#clear");
  let clearEntry = document.querySelector("#CE");
  let equals = document.querySelector("#equals");
  let decimal = document.querySelector("#decimal");
});

var num1;
var num2;
var operator;

const operate = function (num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "ERROR. No valid operator.";
  }
};
