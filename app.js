var mainDisplay = document.getElementById("display1");
var secondaryDisplay = document.getElementById("display2");

// update display when a 'number' button is clicked and concatenate it's data-value
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("number")) {
    // Get the value of the clicked button from the data attribute
    const buttonValue = event.target.getAttribute("data-value");
    // Update the calculator display with the button's value
    mainDisplay.textContent += buttonValue;
    // else if an operator buitton is clicked
  } else if (event.target.classList.contains("operator")) {
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
    finalExpression = secondaryDisplay.textContent;
    calculateExpression(secondaryDisplay);
  }
});

// const calculateExpression = function(secondaryDisplay.textContent)
