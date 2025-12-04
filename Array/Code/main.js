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
        v2.push(Math.floor(Math.random() * NUM_MAX + 1));
        v2.push(Math.floor(Math.random() * NUM_MAX + 1));
    }
}

//Funzione che stampa array
function stampaArray() {
    document.getElementById("v1").innerText = v1;
    document.getElementById("v2").innerText = v2;
    document.getElementById("v3").innerText = v3;
}

//Funzione BubbleSort
function ordinaBubble(array) {
    let lenght = array.length -1;
    while(lenght > 0) {
        for (let i = 0; i < lenght; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        lenght--;
    }
}

//Funzione fusione array
function fusionArray() {
    lunghezza = v1.length + v2.length - 2;
    while(lunghezza > 0) {

    }
}

//Funzione che inizializza il codice
function init() {
    addRandom();
    ordinaBubble(v1);
    ordinaBubble(v2);
    stampaArray();
}
window.addEventListener('DOMContentLoaded', init);