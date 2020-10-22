// ESERCIZIO:
// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

var userInput = prompt('Inserisci la parola/frase da analizzare');
// var userInput = 'I topi non avevano nipoti';

console.log(isPalindroma(userInput));

// funzione che converte la parola in lettere minuscole ed elimina gli spazi tra le lettere
function toLowerClean(parola){
    var parolaLower = parola.toLowerCase();
    var parolaLowerClean = [];
    for (var i = 0; i < parolaLower.length; i++) {
        var letteraDaAnalizzare = parolaLower[i];
        // utilizzo il codice Unicode dello spazio per eliminarlo dalla parola/frase
        if (letteraDaAnalizzare.charCodeAt() !== 32) {
            parolaLowerClean.push(letteraDaAnalizzare);
        }
    }
    return parolaLowerClean;
    // console.log(parolaCampione);
}


// funzione che capovolge l'ordine della parola
function toInvert(parola){
    var parolaInvertita = [];
    for (var i = 0; i < parola.length; i++) {
        var letteraDaAnalizzare = parola[i];
        // spingo ciascuna lettera della parola/frase in prima posizione di un nuovo array cosi da capovolgerne la posizione finale
        parolaInvertita.unshift(parola[i]);
    }
    return parolaInvertita;
    // console.log(parolaInvertita);
}


// funziona che controlla se la frase/parola è palindroma
function isPalindroma(parola){
    for (var i = 0; i < parola.length; i++) {
        var parolaCampione = toLowerClean(parola);
        var parolaInvertita = toInvert(parolaCampione);
        var check = false;
        if (parolaCampione[i] !== parolaInvertita[i]) {
            check = true;
        }
    }
    var output;
    if (!check) {
        output = 'La frase/parola scelta è palindroma';
        // console.log(output);
    } else {
        output = 'La frase/parola scelta non è palindroma';
        // console.log(output);
    }
    return output;
}


// test1 - determinare Unicode dello spazio
// var test = ' ';
// console.log(test.charCodeAt());

// test2 - verifico la funzione unshift()
// var test = [1, 2, 3];
// var pop = test.unshift();
// console.log(pop);
