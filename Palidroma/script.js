/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// chiedo la parola
const userWord = prompt("Inserisci una parola");

function isPalindrome(string) {
 
  const wordLength = string.length - 1;

  for (let i = 0; i < wordLength / 2; i++) {

    if (string[i] !== string[wordLength - i] ) {
      return document.getElementById("text-pali").innerHTML = "Questa parola non e' palindroma";
    }

    return document.getElementById("text-pali").innerHTML = "Questa parola  e' palindroma";
  } 

}
// Chiamo Funzione
isPalindrome(userWord);