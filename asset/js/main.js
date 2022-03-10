let km = Number(prompt("Inserisci i chilometri che devi percorrere: "));
// console.log(km);
// console.log( typeof (km) );

let etaPasseggero = Number(prompt("Inserisci la tua eta: "));
// console.log(etaPasseggero);
// console.log( typeof (km) );

let tassa = 0.21;
let prezzo = km * tassa;

if (etaPasseggero < 18) {

    let prezzoScontato = (prezzo - (prezzo * 0.2));
    prezzoScontato = prezzoScontato.toFixed(2);
    document.getElementById("costo_biglietto").innerHTML = `Ti spetta uno sconto del 20%. Prezzo del biglietto: <h2>${prezzoScontato} \u20AC<h2>`;
    console.log(prezzoScontato);

} else if (etaPasseggero >= 65) {

    let prezzoScontato = (prezzo - (prezzo * 0.4));
    prezzoScontato = prezzoScontato.toFixed(2);
    document.getElementById("costo_biglietto").innerHTML = `Ti spetta uno sconto del 40%. Prezzo del biglietto: <h2>${prezzoScontato} \u20AC<h2>`;
    console.log(prezzoScontato);

} else {

    prezzo = prezzo.toFixed(2);
    document.getElementById("costo_biglietto").innerHTML = `Non ti spetta nessuno sconto. Prezzo del biglietto: <h2>${prezzo} \u20AC<h2>`;
    console.log(prezzo);

}