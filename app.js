var mainDisplay = document.getElementById("display1");
var secondaryDisplay = document.getElementById("display2");

var num1 = 0;
var num2 = 0;
var operator = false;
var ready = true;
var mainDisplayLimit = 14; // Set a dynamic limit for the main display

// update display when a 'number' button is clicked and concatenate it's data-value
document.addEventListener("click", function (event) {
  if (ready === true) {
    ready = false;
    mainDisplay.textContent = "";
    secondaryDisplay.textContent = "";
  }
  if (event.target.classList.contains("number")) {
    // Get the value of the clicked button from the data attribute
    const buttonValue = event.target.getAttribute("data-value");

    // Limit the mainDisplay to the specified number of characters
    if (mainDisplay.textContent.length < mainDisplayLimit) {
      mainDisplay.textContent += buttonValue;
    }

    // else if an operator button is clicked
  } else if (event.target.classList.contains("operator")) {
    if (!operator) {
      num1 = parseFloat(mainDisplay.textContent);
      // get the value of the operator
      const operatorValue = event.target.getAttribute("data-value");
      // update our secondary display to track our sum
      secondaryDisplay.textContent += mainDisplay.textContent;
      // clear the contents of the main display
      mainDisplay.textContent = "";
      operator = operatorValue;
    } else {
      num2 = parseFloat(mainDisplay.textContent);
      num1 = calculate(num1, num2, operator);
      const operatorValue = event.target.getAttribute("data-value");
      secondaryDisplay.textContent += mainDisplay.textContent;
      mainDisplay.textContent = "";
      operator = operatorValue;
    }
    // get the value of the operator
    const operatorValue = event.target.getAttribute("data-value");
    // update our secondary display to track our sum
    secondaryDisplay.textContent += mainDisplay.textContent;
    // concatenate the operator value onto the secondaryDisplay
    secondaryDisplay.textContent += operatorValue;
    // clear the contents of the main display
    mainDisplay.textContent = "";
  } else if (event.target.classList.contains("clear-entry")) {
    // clear just the last entry
    mainDisplay.textContent = "";
  } else if (event.target.classList.contains("clear")) {
    // clear all entries
    mainDisplay.textContent = "";
    secondaryDisplay.textContent = "";
  } else if (event.target.classList.contains("decimal")) {
    // decimal place will only work if there is no decimal place contained in the main display already
    if (!mainDisplay.textContent.includes(".")) {
      const buttonValue = event.target.getAttribute("data-value");
      mainDisplay.textContent += buttonValue;
    }
  } else if (event.target.classList.contains("equals")) {
    // update the secondary display and run the calculation
    secondaryDisplay.textContent += mainDisplay.textContent += "=";
    num2 = parseFloat(mainDisplay.textContent);

    if (!isNaN(num2)) {
      // Check if num2 is a valid number
      mainDisplay.textContent = calculate(num1, num2, operator);
    } else {
      mainDisplay.textContent = "ERROR";
    }

    // Clear num1, num2, and operator as the calculation is complete
    reset();
  }
});

// const calculateExpression = function(secondaryDisplay.textContent)

const reset = function () {
  num1 = 0;
  num2 = 0;
  operator = false;
  ready = true;
};

const calculate = function (num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "ERROR";
  }
};
