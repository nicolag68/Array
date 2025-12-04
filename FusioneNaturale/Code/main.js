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
        v1.push(Math.floor(Math.random() * NUM_MAX + 1));
        v2.push(Math.floor(Math.random() * NUM_MAX + 1));
    }
    console.log(v1);
    console.log(v2);
}

//Funzione che stampa array
function stampaArray() {
    document.getElementById("v1").innerText = "1° array ordinato: " + v1;
    document.getElementById("v2").innerText = "2° array ordinato: " + v2;
    document.getElementById("v3").innerText = "L'unione dei 2 array: " + v3;
}

//Funzione BubbleSort
function ordinaBubble(array) {
    let lung = array.length -1;
    while(lung > 0) {
        for (let i = 0; i < lung; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        lung--;
    }
}

//Funzione fusione array
function fusionArray() {
    let i = 0; //contatore per v1
    let j = 0; //contatore per v2

    while (v1.length > i && v2.length > j) { //si interrompe quando uno dei 2 array finisce quindi  successivamente creiamo due nuovi cicli while che completeranno il vettore non terminato
        if(v1[i] > v2[j]) {
            v3.push(v2[j]);
            j++;
        }
        else {
            v3.push(v1[i]);
            i++;
        }
    }
    while (v2.length > j) {
        v3.push(v2[j]);
        j++;
    }
    while (v1.length > i) {
        v3.push(v1[i]);
        i++
    }
    console.log(v3);
}

//Funzione che inizializza il codice
function init() {
    addRandom();
    ordinaBubble(v1);
    ordinaBubble(v2);
    fusionArray();
    stampaArray();
}
window.addEventListener('DOMContentLoaded', init);