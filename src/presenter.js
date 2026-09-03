import { Tennis } from "./Tennis.js";

const tennis = new Tennis();
const botonJ1 = document.querySelector("#jugador1-button");
const botonJ2 = document.querySelector("#jugador2-button");
const resultado = document.querySelector("#resultado-div");

let j1 = 0;
let j2 = 0;

botonJ1.addEventListener("click", () => {

    if(j1 == 0)
    {
        j1 = 15;
    }
    else if(j1 == 15)
    {
        j1 = 30;
    }
    else if(j1 == 30)
    {
        j1 = 40;
    }
    else
    {
        j1 = j1 + 10;
    }

    resultado.innerHTML = tennis.score(j1, j2);
});


botonJ2.addEventListener("click", () => {

    if(j2 == 0)
    {
        j2 = 15;
    }
    else if(j2 == 15)
    {
        j2 = 30;
    }
    else if(j2 == 30)
    {
        j2 = 40;
    }
    else
    {
        j2 = j2 + 10;
    }

    resultado.innerHTML = tennis.score(j1, j2);
});