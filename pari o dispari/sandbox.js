// ESERCIZIO:
// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.

// L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)


// chiedo all'utente di inserire un numero tra 1 e 5
var userInputNamber = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));

while(isNaN(userInputNamber)){
    alert('Il valore inserito non è valido!');
    userInputNamber = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));
}
console.log('Il numero che hai scelto è: ' + userInputNamber);


// // chiedo all'utente di scegliere tra pari o dispari
var userInputPari = prompt('Pari (p) o dispari (d)?');
while(userInputPari != 'p' && userInputPari !='d') {
    alert('Il valore inserito non è valido!');
    userInputPari = prompt('Pari (p) o dispari (d)?');
}
if (userInputPari == 'p') {
    userInputPari = true;
    console.log('Hai scelto pari');
} else {
    userInputPari = false;
    console.log('Hai scelto dispari');
}
// console.log(userInputPari);

// genero un numero random compreso tra 0 e 5
var randomNumber = randomNumber(1, 5);
console.log('Il numero generato è: ' + randomNumber);

// faccio la somma tra il numero scelto dall'utente e quello generare per determinare se il numero è pari o dispari
var somma = userInputNamber + randomNumber;
console.log('L somma tra i due numeri è: ' + somma);

// verifico se la somma è pari o dispari
var sommaPari = isPari(somma);
// console.log(sommaPari);

// determino il vincitore confrontando isPari?(somma) con l'input scelto dal'utente
if ((sommaPari && userInputPari) || (!sommaPari && !userInputPari)) {
    console.log('Complimenti hai vinto!');
} else {
    console.log('Mi dispiace hai perso, ritenta ;)');
}


// funzione per generare un numero random
function randomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min) ) + min;;
    // console.log(randomNumber);
    return number;
}

// funzione per determinare se un numero è pari o dispari
function isPari(numero){
    var pari;
    if (numero % 2 == 0) {
        pari = true;
    } else {
        pari = false;
    }
    // console.log(pari);
    return pari;
}
