//cubo dei primi n numeri dove n è inserito dall'utente
//array vuoto
var insieme_cubi = [];
//chiedo un numero all'utente
var numero = parseInt(prompt('Inserisci un numero'));
//calcolo il cubo dei numeri da 0 a n, n=numero inserito dall'utente
for(var i = 0; i < numero ; i++ ) {
    var cubo = Math.pow(i, 3);
    console.log(cubo);
    insieme_cubi.push(cubo);
}
console.log(insieme_cubi);
