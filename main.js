'use strict';

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

 function getInputNumber (){
   const numberInputValue = parseInt(numberInput.value);
   console.log("El número introducido es: " + numberInputValue);
   tries += 1;
   triesText.innerHTML = "Número de intentos: " + tries;
   if(numberInputValue === randomNumber){
     hintText.innerHTML = "Has ganado campeona!!!";
   } else if (numberInputValue < randomNumber && numberInputValue >0 && numberInputValue <= 100){
     hintText.innerHTML = "Pista: Demasiado bajo";
   } else if (numberInputValue > randomNumber && numberInputValue >0 && numberInputValue <= 100){
    hintText.innerHTML = "Pista: Demasiado alto";
   } else if (numberInputValue < 1 || numberInputValue > 100) {
     hintText.innerHTML = "Pista: El número debe estar entre 1 y 100"
   }
 }

 inputButton.addEventListener("click", getInputNumber);