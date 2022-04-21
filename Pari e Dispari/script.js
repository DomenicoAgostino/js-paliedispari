/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let controlBattle = false;
let pariDispari;

while (!controlBattle) {
  
  pariDispari = prompt("Pari o Dispari?");

  if (pariDispari !== ("Pari" || "Dispari")) {
    alert ("Pari o Dispari???");
  }else{
    controlBattle = true;
  }
}

let secondcontrolBattle = false;

let chooseNumber;

while (!secondcontrolBattle) {
  
  chooseNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

  if (isNaN(chooseNumber)) {
    alert("Inserisci un numero da 1 a 5");
  }
  else if (chooseNumber < 1 || chooseNumber > 5) {
    alert("Il numero deve essere compreso tra 1 e 5!!!");
  }
  else{
    secondcontrolBattle = true;
  }
}

console.log(chooseNumber);

function randomNumber() {
  return Math.ceil(Math.random() * 5);
}
const ospiteNumber = randomNumber();

console.log(ospiteNumber);

const sum = chooseNumber + ospiteNumber;

console.log(sum);


function isSumPari(num) {
  let risultato = "Dispari";
  if (num % 2 === 0){
    risultato = "Pari";
  }
  return risultato;
}


const risultatoSfida = isSumPari(sum);

console.log(risultatoSfida);

if ( risultatoSfida === pariDispari) {
  alert("Utente Vince");
}else {
  alert("Ospite Vince");
}
