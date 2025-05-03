/*🏆 Snack 2

Crea la funzione lanciaDado() che restituisce una Promise che, 
dopo 3 secondi, genera un numero casuale tra 1 e 6. 
Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".
*/

function lanciaDado() {
  return new Promise((resolve, reject) => {
    console.log("sto lanciando il dado...");
    setTimeout(() => {
      const siIncastra = Math.random() < 0.2;
      if (siIncastra) {
        reject("Il dado si è incastrato!");
      } else {
        const valore = Math.floor(Math.random() * 6) + 1;
        const lancio = valore % 2 === 0 ? `il tuo numero è: ${valore}, pari!` : `il tuo numero è: ${valore}, dispari!`;
        resolve(lancio);
      }
    }, 3000);
  });
}

lanciaDado()
  .then((messaggio) => console.log(messaggio))
  .catch((error) => {
    console.error(error);
  });
