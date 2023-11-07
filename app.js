document.addEventListener("DOMContentLoaded", function() {
  // Encapsulate variables in a function to avoid global scope pollution
  function initializeCalculator() {
    var mainDisplay = document.getElementById("display1");
    var secondaryDisplay = document.getElementById("display2");

    var firstOperand = 0;
    var secondOperand = 0;
    var operator = false;
    var ready = true;
    var mainDisplayLimit = 14; // Set a dynamic limit for the main display

    // Function to handle number button clicks
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

    // Function to handle operator button clicks
    function handleOperatorClick(event) {
      if (!operator) {
        firstOperand = parseFloat(mainDisplay.textContent);
        const operatorValue = event.target.getAttribute("data-value");
        secondaryDisplay.textContent += mainDisplay.textContent;
        mainDisplay.textContent = "";
        operator = operatorValue;
      } else {
        secondOperand = parseFloat(mainDisplay.textContent);
        firstOperand = calculate(firstOperand, secondOperand, operator);
        const operatorValue = event.target.getAttribute("data-value");
        secondaryDisplay.textContent += mainDisplay.textContent;
        mainDisplay.textContent = "";
        operator = operatorValue;
      }

      const operatorValue = event.target.getAttribute("data-value");
      secondaryDisplay.textContent += operatorValue;
      mainDisplay.textContent = "";
    }

    // Add event listeners for number buttons and operator buttons
    var numberButtons = document.querySelectorAll(".number");
    var operatorButtons = document.querySelectorAll(".operator");

    numberButtons.forEach(function(button) {
      button.addEventListener("click", handleNumberClick);
    });

    operatorButtons.forEach(function(button) {
      button.addEventListener("click", handleOperatorClick);
    });

    // ... (Other event handlers)

    // Reset function
    function reset() {
      firstOperand = 0;
      secondOperand = 0;
      operator = false;
      ready = true;
    }

    // ... (Other functions)

    // Updated calculate function to handle division by zero
    function calculate(firstOperand, secondOperand, operator) {
      if (operator === "+") {
        return firstOperand + secondOperand;
      } else if (operator === "-") {
        return firstOperand - secondOperand;
      } else if (operator === "*") {
        return firstOperand * secondOperand;
      } else if (operator === "/") {
        if (secondOperand !== 0) {
          return firstOperand / secondOperand;
        } else {
          return "ERROR: Division by zero";
        }
      } else {
        return "ERROR: Invalid operator";
      }
    }
  }

  // Initialize the calculator when the DOM content is loaded
  initializeCalculator();
});