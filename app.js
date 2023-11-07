document.addEventListener("DOMContentLoaded", function() {
  let mainDisplay = document.getElementById("display1");
  let secondaryDisplay = document.getElementById("display2");

  let firstOperand = 0;
  let secondOperand = 0;
  let operator = false;
  let ready = true;
  let mainDisplayLimit = 14;
  let secondaryDisplayLimit = 28;

  function handleNumberClick(event) {
    if (ready === true) {
      ready = false;
      mainDisplay.textContent = "";
      secondaryDisplay.textContent = "";
    }

    const buttonValue = event.target.getAttribute("data-value");

    if (mainDisplay.textContent.length < mainDisplayLimit) {
      mainDisplay.textContent += buttonValue;
    }
  }

  function handleOperatorClick(event) {
    if (!operator) {
      firstOperand = parseFloat(mainDisplay.textContent);
      const operatorValue = event.target.getAttribute("data-value");

      // Check if adding the operator exceeds the secondaryDisplay limit
      if (secondaryDisplay.textContent.length + mainDisplay.textContent.length + operatorValue.length <= secondaryDisplayLimit) {
        secondaryDisplay.textContent += mainDisplay.textContent + operatorValue;
        mainDisplay.textContent = "";
        operator = operatorValue;
      } else {
        secondaryDisplay.textContent = secondaryDisplay.textContent.substring(0, secondaryDisplayLimit - operatorValue.length);
      }
    } else {
      secondOperand = parseFloat(mainDisplay.textContent);
      firstOperand = calculate(firstOperand, secondOperand, operator);
      const operatorValue = event.target.getAttribute("data-value");

      // Check if adding the operator exceeds the secondaryDisplay limit
      if (secondaryDisplay.textContent.length + mainDisplay.textContent.length + operatorValue.length <= secondaryDisplayLimit) {
        secondaryDisplay.textContent += mainDisplay.textContent + operatorValue;
        mainDisplay.textContent = "";
        operator = operatorValue;
      } else {
        secondaryDisplay.textContent = secondaryDisplay.textContent.substring(0, secondaryDisplayLimit - operatorValue.length);
      }
    }
  }

  function handleEqualsClick() {
    secondaryDisplay.textContent += mainDisplay.textContent += "=";
    secondOperand = parseFloat(mainDisplay.textContent);

    if (!isNaN(secondOperand)) {
      mainDisplay.textContent = calculate(firstOperand, secondOperand, operator);
    } else {
      mainDisplay.textContent = "ERROR";
    }

    reset();
  }

  function handleClearEntryClick() {
    mainDisplay.textContent = "";
  }

  function handleClearClick() {
    mainDisplay.textContent = "";
    secondaryDisplay.textContent = "";
  }

  function handleDecimalClick(event) {
    if (!mainDisplay.textContent.includes(".")) {
      const buttonValue = event.target.getAttribute("data-value");
      mainDisplay.textContent += buttonValue;
    }
  }

  function reset() {
    firstOperand = 0;
    secondOperand = 0;
    operator = false;
    ready = true;
  }

  function calculate(firstOperand, secondOperand, operator) {
    let result;

    if (operator === "+") {
      result = firstOperand + secondOperand;
    } else if (operator === "-") {
      result = firstOperand - secondOperand;
    } else if (operator === "*") {
      result = firstOperand * secondOperand;
    } else if (operator === "/") {
      if (secondOperand !== 0) {
        result = firstOperand / secondOperand;
      } else {
        return "ERROR: Division by zero";
      }
    } else {
      return "ERROR: Invalid operator";
    }

    return result;
  }

  let numberButtons = document.querySelectorAll(".number");
  let operatorButtons = document.querySelectorAll(".operator");
  let equalsButton = document.querySelector(".equals");
  let clearEntryButton = document.querySelector(".clear-entry");
  let clearButton = document.querySelector(".clear");
  let decimalButton = document.querySelector(".decimal");

  numberButtons.forEach(function(button) {
    button.addEventListener("click", handleNumberClick);
  });

  operatorButtons.forEach(function(button) {
    button.addEventListener("click", handleOperatorClick);
  });

  equalsButton.addEventListener("click", handleEqualsClick);
  clearEntryButton.addEventListener("click", handleClearEntryClick);
  clearButton.addEventListener("click", handleClearClick);
  decimalButton.addEventListener("click", handleDecimalClick);
});
