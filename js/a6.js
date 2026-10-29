"use strict";

const lineas = [
    ["Café con leche", 1.5, 2],
    ["Tostada con tomate", 2.2, 1],
    ["Zumo de naranja", 2.8, 2]
];

const IVA = 0.10;

function abrirTicket() {

    

    const v = window.open(
        "",
        "ticket",
        "width=350,height=420,resizable=no"
    );

    if (v === null) {
        alert("El navegador ha bloqueado la ventana");
        return;
    }


    

    const numero = Math.floor(Math.random() * 9000) + 1000;

    const codigo = "T-" + numero;

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString("es-ES");
    const hora = ahora.toLocaleTimeString("es-ES");

    v.document.write("<h2>Ticket " + codigo + "</h2>");
    v.document.write("Fecha: " + fecha + "<br>");
    v.document.write("Hora: " + hora + "<br><br>");


   

    let subtotal = 0;

    for (let i = 0; i < lineas.length; i++) {

        const producto = lineas[i][0];
        const precio = lineas[i][1];
        const unidades = lineas[i][2];

        const importe = precio * unidades;

        subtotal += importe;

        v.document.write(
            producto + " - " +
            unidades + " unidades - " +
            importe.toFixed(2) + " €<br>"
        );
    }


   

    const iva = subtotal * IVA;

    const total = subtotal + iva;

    v.document.write("<br>");
    v.document.write("Subtotal: " + subtotal.toFixed(2) + " €<br>");
    v.document.write("IVA: " + iva.toFixed(2) + " €<br>");
    v.document.write("Total: " + total.toFixed(2) + " €<br><br>");


    

    v.document.write(
        "Esta ventana se cerrará automáticamente en 15 segundos."
    );

    v.document.close();

    function cerrarTicket() {
        v.close();
    }

    setTimeout(cerrarTicket, 15000);



    function comprobarTicket() {

        if (v.closed) {
            clearInterval(vigilante);
            document.title = "Ticket cerrado";
        }
    }

    const vigilante =
        setInterval(comprobarTicket, 500);
}