const display = document.querySelector(".display");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const button0 = document.querySelector(".button0");
const buttonAdd = document.querySelector(".buttonAdd")
const buttonSubtraction = document.querySelector(".buttonSubtraction");
const buttonMultiply = document.querySelector(".buttonMultiply");
const buttonDivide = document.querySelector(".buttonDivide");
const buttonEqual = document.querySelector(".buttonEqual");
const buttonClear = document.querySelector(".buttonClear");
const buttonBackspace =  document.querySelector(".buttonBackspace");
const buttonComma = document.querySelector(".buttonComma");

let operator = undefined;
let number1 = undefined;
let number2 = undefined;
let operationMode = "off";
let clearScreen = "on"
display.innerHTML = "0"



window.addEventListener("keydown", function (event) {
  if (event.key === "1") {
    event.preventDefault();
    button1.click();
  }
  if (event.key === "2") {
    event.preventDefault();
    button2.click();
  }
  if (event.key === "3") {
    event.preventDefault();
    button3.click();
  }
  if (event.key === "4") {
    event.preventDefault();
    button4.click();
  }
  if (event.key === "5") {
    event.preventDefault();
    button5.click();
  }
  if (event.key === "6") {
    event.preventDefault();
    button6.click();
  }
  if (event.key === "7") {
    event.preventDefault();
    button7.click();
  }
  if (event.key === "8") {
    event.preventDefault();
    button8.click();
  }
  if (event.key === "9") {
    event.preventDefault();
    button9.click();
  }
  if (event.key === "0") {
    event.preventDefault();
    button0.click();
  }
  if (event.key === "+") {
    event.preventDefault();
    buttonAdd.click();
  }
  if (event.key === "-") {
    event.preventDefault();
    buttonSubtraction.click();
  }
  if (event.key === "/") {
    event.preventDefault();
    buttonDivide.click();
  }
  if (event.key === "*") {
    event.preventDefault();
    buttonMultiply.click();
  }
  if (event.key === "Enter") {
    event.preventDefault();
    buttonEqual.click();
  }
  if (event.key === "Tab") {
    event.preventDefault();
    buttonClear.click();
  }

  if(event.key === "Backspace") {
    event.preventDefault();
    buttonBackspace.click();
  }
  console.log(event.key);

});


buttonComma.addEventListener("click", () => {
  if(getDisplayContent().indexOf(".") > -1 || getDisplayContent().length < 1) {
    display.innerHTML = getDisplayContent();
  } else {
    display.innerHTML = getDisplayContent() + ".";
  }
   
});

buttonBackspace.addEventListener("click", () => {
  let displayContent = getDisplayContent();
  display.innerHTML = displayContent.substring(0, displayContent.length -1);
});

buttonAdd.addEventListener("click", () => {
  if (number1 != undefined) {
    number2 = getDisplayContent();
    operate(operator, number1, number2);
    number1 = getDisplayContent();
    number2 = undefined;
    operator = "add";
    clearScreen = "on";

  } else {
    number1 = getDisplayContent();
    operator = "add";
    clearScreen = "on"
    operationMode = "on";
  }

});

buttonSubtraction.addEventListener("click", () => {
  if (number1 != undefined) {
    number2 = getDisplayContent();
    operate(operator, number1, number2);
    number1 = getDisplayContent();
    number2 = undefined;
    operator = "subtract";
    clearScreen = "on";

  } else {
    number1 = getDisplayContent();
    operator = "subtract";
    clearScreen = "on";
    operationMode = "on";
  }
});

buttonMultiply.addEventListener("click", () => {
  if (number1 != undefined) {
    number2 = getDisplayContent();
    operate(operator, number1, number2);
    number1 = getDisplayContent();
    number2 = undefined;
    operationMode = "on";
    operator = "multiply";
    clearScreen = "on";


  } else {
    number1 = getDisplayContent();
    operator = "multiply";
    operationMode = "on";
    clearScreen = "on";
  }
})

buttonDivide.addEventListener("click", () => {
  if (number1 != undefined) {
    number2 = getDisplayContent();
    operate(operator, number1, number2);
    number1 = getDisplayContent();
    number2 = undefined;
    operationMode = "on";
    operator = "divide";
    clearScreen = "on";

  } else {
    number1 = getDisplayContent();
    operator = "divide";
    operationMode = "on";
    clearScreen = "on";
  }
});

buttonClear.addEventListener("click", clear);
function clear() {
  display.innerHTML = "";
  number1 = undefined;
  number2 = undefined;
  operator = undefined;
  operationMode = "off";
  clearScreen = "on";
};

buttonEqual.addEventListener("click", pressEqual);

function pressEqual() {
  number2 = getDisplayContent();
  operate(operator, number1, number2);
  number1 = undefined;
  number2 = undefined;
  clearScreen = "on";
  operationMode = "off";

}

function getDisplayContent() {
  return display.textContent;
}

function add(number1, number2) {
  display.innerHTML = +number1 + +number2;
}

function subtract(number1, number2) {
  display.innerHTML = +number1 - +number2;
}

function multiply(number1, number2) {
  display.innerHTML = +number1 * +number2;
}

function divide(number1, number2) {
  if (number2 == 0) {
    display.innerHTML = "can't divide by 0!"
    clearScreen = "on";
  } else {
    display.innerHTML = Math.round((+number1 / +number2) * 100) /100;
  }
  
}

function operate(operator, number1, number2) {
  switch (operator) {
    case "add":
      add(number1, number2);
      break;
    case "subtract":
      subtract(number1, number2);
      break;
    case "multiply":
      multiply(number1, number2);
      break;
    case "divide":
      divide(number1, number2);
      break;
  }
}

function isOperationModeOn() {
  if (operationMode === "on") {
    return true;
  }
  return false;
}

button1.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";
  }
  display.innerHTML = getDisplayContent() + "1";
});

button2.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "2";
});

button3.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";
  }
  display.innerHTML = getDisplayContent() + "3";
});

button4.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "4";
});

button5.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "5";
});

button6.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "6";
});

button7.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "7";
});

button8.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "8";
});

button9.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";

  }
  display.innerHTML = getDisplayContent() + "9";
});

button0.addEventListener("click", () => {
  if (clearScreen === "on") {
    display.innerHTML = "";
    clearScreen = "off";
  }
  display.innerHTML = getDisplayContent() + "0";
});