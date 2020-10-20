"use strict";

const numberInput = document.querySelector(".js-input");
const inputButton = document.querySelector(".js-button");
const hintText = document.querySelector(".js-hint");
const triesText = document.querySelector(".js-tries");

// Generates random number and show it in console:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log("Mi número aleatorio es " + randomNumber);

/*Listens button and reads input number, 
compare with random generated and add tries to the counter:*/

let tries = 0;

function runFeedback() {
  const numberInputValue = parseInt(numberInput.value);
  console.log("El número introducido es: " + numberInputValue);
  if (numberInputValue === randomNumber) {
    hintText.innerHTML = "Has ganado campeona!!!";
  } else if (
    numberInputValue < randomNumber &&
    numberInputValue > 0 &&
    numberInputValue <= 100
  ) {
    hintText.innerHTML = "Pista: Demasiado bajo";
  } else if (
    numberInputValue > randomNumber &&
    numberInputValue > 0 &&
    numberInputValue <= 100
  ) {
    hintText.innerHTML = "Pista: Demasiado alto";
  } else if (numberInputValue < 1) {
    hintText.innerHTML = "Pista: El número debe ser mayor que 0";
  } else if (numberInputValue > 100) {
    hintText.innerHTML = "Pista: El número debe ser menor o igual que 100";
  } else if (!numberInputValue) {
    hintText.innerHTML =
      "Pista: Introduce un número en el campo para empezar a jugar";
  }
}

function runCounter() {
  if (hintText.innerHTML === "Has ganado campeona!!!") {
    tries += 0;
    triesText.innerHTML = "Número de intentos: " + tries;
  } else {
    tries += 1;
    triesText.innerHTML = "Número de intentos: " + tries;
  }
}

function runGame(event) {
  runCounter();
  runFeedback();
}

inputButton.addEventListener("click", runGame);

// Stops enter from refreshing the page and triggers button's click:

function changeEnterAction(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    inputButton.click();
  }
}

numberInput.addEventListener("keydown", changeEnterAction);

//Reset button: cleans the input, the counter, writes the initial feedback and generates a new random number to play again!

const resetButton = document.querySelector(".js-resetButton");

function resetGame(event) {
  hintText.innerHTML = "Pista: Escribe el número y dale a Prueba.";
  tries = 0;
  randomNumber = getRandomNumber(100);
  console.log("Mi número aleatorio es " + randomNumber);
  triesText.innerHTML = "Número de intentos: " + tries;
  numberInput.value = "";
}

resetButton.addEventListener("click", resetGame);
