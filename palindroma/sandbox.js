// ESERCIZIO:
// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

var userInput = 'I topi non avevano nipoti';
var parolaDaAnalizzare = userInput.toLowerCase();
// console.log(parolaDaAnalizzare);
var parolaCampione = [];

for (var i = 0; i < parolaDaAnalizzare.length; i++) {
    var letteraDaAnalizzare = parolaDaAnalizzare[i];
    if (letteraDaAnalizzare.charCodeAt() !== 32) {
        parolaCampione.push(letteraDaAnalizzare);
    }
}
console.log(parolaCampione);

var parolaInvertita = [];
for (var i = 0; i < parolaCampione.length; i++) {
    var letteraDaAnalizzare = parolaCampione[i];
    parolaInvertita.unshift(parolaCampione[i]);
}

console.log(parolaInvertita);

for (var i = 0; i < parolaCampione.length; i++) {
    var check = false;
    if (parolaCampione[i] !== parolaInvertita[i]) {
        check = true;
    }
} if (!check) {
    console.log('La frase/parola scelta è palindroma');
} else {
    console.log('La frase/parola scelta non è palindroma');
}

// test1
// var test = ' ';
// console.log(test.charCodeAt());

// test2
// var test = [1, 2, 3];
// var pop = test.pop();
// console.log(pop);
