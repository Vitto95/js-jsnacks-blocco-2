var number = parseInt(prompt("Inserisci un numero: "));

if (number % 2 === 1) {
  console.log("il numero è dispari, numero successivo pari: " + (number + 1));
} else {
  console.log("Il numero è pari: " + number);
}
