// Metodo 1 - ciclo for

var sum = 0;

for (var i = 1; i <= 5; i++) {
  var number = parseInt(prompt(`Inserisci il ${i}° numero:`));
  console.log(`Numero ${i}: ` + number);
  sum += number;
}

console.log(sum);

console.log("*****************************************************");

//Metodo 2 - ciclo while

var sum_2 = 0;
var j = 1;

while (j <= 5) {
  var number_2 = parseInt(prompt(`Inserisci il ${j}° numero:`));
  console.log(`Numero ${j}: ` + number_2);
  sum_2 += number_2;
  j++;
}
