const inputNome = document.getElementById('inputNome');
const inputKm = document.getElementById ('inputKm');
const inputEta = document.getElementById('inputEta')
const prezzoAlKm = 0.21;
const prezzoBiglietto = (inputKm * prezzoAlKm)
let sconto = 0;
let prezzoFinale = document.getElementById (`inputPrezzo`);
let etaPasseggero = document.getElementById(`eta`)
const bottoneGenera = document.getElementById('btn-input');

bottoneGenera.addEventListener('click', function() {
  const nome = inputNome.value;
  const km = inputKm.value;
  const eta = inputEta.value; 
  let prezzoFinale  = eta.value;
 // Parte Logica

  document.getElementById(`output-name`).innerHTML = nome

  
  
  
if(etaPasseggero ===`minorenne`){
  sconto = 0.2;
  prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

else if(etaPasseggero === `over65`){
  sconto = 0.4;
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

else(etaPasseggero === `maggiorenne`)

document.getElementById(`inputPrezzo`).innerHTML = `
${prezzoFinale}
`; 
 
 // Parte di presentazione

console.log('Nome ', nome);
console.log('KM ', km);
console.log('ETA', eta);
console.log(`PREZZO`, )
})





/*
const nomeCognome = ("Inserisci nome e cognome");
const kmDaPercorrere = parseInt("Quanti km vuoi percorrere?");
const etaPasseggero = parseInt("Quanti anni hai?"); 
const prezzoKm = 0.21;
const prezzoBiglietto = (kmDaPercorrere * prezzoKm)
let sconto = 0;
let scontoApplicato;
let prezzoScontato;
let prezzoFinale;
let output;

prezzoFinale = prezzoBiglietto;

if(etaPasseggero < 18){
  sconto = 0.2;
  literalAge = (`minorenne`)
  prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

else if(etaPasseggero > 65) {
  sconto = 0.4;
  literalAge = (`over65`)
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * sconto);
}

else{
  literalAge = (`maggiorenne`)
}

console.log('Il prezzo del biglietto è ',prezzoFinale)

document.getElementById(`prezzo-biglietto`).innerHTML += output;*/