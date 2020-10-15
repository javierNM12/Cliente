"use strict";
//declarar variables
let ventana = new Array();
let contador = 0;

function abrir() {
    //ventana = window.open("http://iestrassierra.com", "ventana");
    if (ventana[contador] == undefined && contador <= 9) {
        ventana[contador] = window.open(
            "",
            "ventana" + contador,
            "width = 300, height = 300"
        );
        ventana[contador].document.write("<h1>Ventana secundaria</h1>");
        ventana[contador].document.write("<button>Cerrar ventana</button>");
        //establecer el evento
        ventana[contador].onclick = function () { //funcion anonima
            ventana[contador].close();
            ventana[contador] = undefined;
        };
        contador++;
    }
}

function cerrarSec() {
    ventana.close();
    ventana = undefined;
}