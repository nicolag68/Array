//Const
const NUM_MAX = 100;
const VALORI = 20;

//Vettori
let v1 = [];
let v2 = [];
let v3 = [];

//Aggiunge VALORI numeri random ai vettori
function addRandom() {
    for (let i = 0; i < VALORI; i++) {
        v1.push(Math.floor(Math.random() * NUM_MAX));
        v2.push(Math.floor(Math.random() * NUM_MAX));
    }
}

//Funzione che stampa array
function stampaArray() {
    document.getElementById("v1").innerText = v1;
    document.getElementById("v2").innerText = v2;
}

//Funzione BubbleSort
function ordinaBubble(array) {
    let nigegr = array.length -1;
    while(nigegr > 0) {
        for (let i = 0; i < nigegr; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        nigegr--;
    }
}

//Funzione fusione array
function fusionArray() {
    let i = 0;
    let lFinale = (v1.length + v2.length) - 2;
    while(lFinale > 0) {
        for (let i = 0; i < lFinale; i++) {
            if()
        }
    }
}

//Funzione che inizializza il codice
function init() {
    addRandom();
    stampaArray();
    ordinaBubble(v1);
    ordinaBubble(v2);
    fusionArray();
}
window.addEventListener('DOMContentLoaded', init);