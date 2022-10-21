//1 chiedi all'utente il numero dei km che vuole percorrere
const kmToGo = Number(prompt("inserisci i km che vorrai percorrere"));

//2 chiedi all'utente l'età del passeggero
const age = Number(prompt("inserisci la tua età"));

console.log(kmToGo, age);

if( !isNaN(kmToGo) && !isNaN(age) ) {

        //3 crea una variabile in base al prezzo al km (pari a 0.21€)
        let price = kmToGo * 0.21;
        let message = "prezzo biglietto intero"

        //4 crea delle condizioni per applicare lo sconto in base all'età dell'utente
        if( age < 18 ){
        price = price - ((price*20)/100);
        message = "prezzo tariffa minorenni"
        }else if( age >= 65 ){
        price = price - ((price*40)/100);
        message = "prezzo tariffa over 65"
        }
        console.log(message);

        //5 stampo prezzo biglietto con eventuale scontistica applicata
        console.log(`il prezzo del tuo biglietto è:`, price.toFixed (2), `€`);

        //6 scrivo sulla pagina il prezzo del biglietto
        document.getElementById("price-ticket").innerHTML= price.toFixed (2);
} else {
    alert("Devi inserire dei numeri!!!")
}