//cubo dei primi n numeri dove n è inserito dall'utente
var numero = parseInt(prompt('Inserisci un numero'));
//console.log(numero);
for(var i = 0; i < numero ; i++ ) {
    var cubo = Math.pow(i, 3);
    console.log(cubo);
}
