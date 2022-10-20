//1 chiedi all'utente il numero dei km che vuole percorrere
const kmToGo = Number(prompt("inserisci i km che vorrai percorrere"));

//2 chiedi all'utente l'età del passeggero
const age = Number(prompt("inserisci la tua età"));

//3 crea una variabile in base al prezzo al km (pari a 0.21€)
let price = kmToGo * 0.21;

//4 crea delle condizioni per applicare lo sconto in base all'età dell'utente
if(age<=18){
    price = price - ((price*20)/100);
}else if(age>=65){
    price = price - ((price*40)/100);
}