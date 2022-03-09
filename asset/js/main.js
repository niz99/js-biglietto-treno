const km = prompt("Inserisci i chilometri che devi percorrere: ");
console.log(km);
console.log(isNaN(km));

let etaPasseggero = prompt("Inserisci la tua eta: ");
console.log(etaPasseggero);
console.log(isNaN(etaPasseggero));

let prezzo = km * 0.21;
console.log(prezzo);

if (etaPasseggero < 18) {

    let prezzoScontato = (prezzo - (prezzo * 0.2));
    prezzoScontato = prezzoScontato.toFixed(2);
    document.getElementById("costo_biglietto").innerHTML = `Ti spetta uno sconto del 20%. Prezzo del biglietto: ${prezzoScontato} \u20AC`;
    console.log(prezzoScontato);

} else if (etaPasseggero > 65) {

    let prezzoScontato = (prezzo - (prezzo * 0.4));
    prezzoScontato = prezzoScontato.toFixed(2);
    document.getElementById("costo_biglietto").innerHTML = `Ti spetta uno sconto del 40%. Prezzo del biglietto: ${prezzoScontato} \u20AC`;
    console.log(prezzoScontato);

} else {

    prezzo = prezzo.toFixed(2);
    document.getElementById("costo_biglietto").innerHTML = `Non ti spetta nessuno sconto. Prezzo del biglietto: ${prezzo} \u20AC`;
    console.log(prezzo);

}