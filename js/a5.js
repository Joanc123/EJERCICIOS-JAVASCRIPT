"use strict";



function pedidoRecibido() {
    console.log("Pedido recibido");
}

setTimeout(pedidoRecibido, 2000);




let segundos = 5;

const cuenta = setInterval(function () {

    if (segundos === 0) {
        clearInterval(cuenta);
        alert("¡Pedido listo!");
        return;
    }

    console.log("Faltan " + segundos + " segundos");

    document.title =
        "Faltan " + segundos + " segundos";

    segundos--;

}, 1000);




function cancelarPedido() {

    const cancelar =
        confirm("¿Quieres cancelar el pedido?");

    if (cancelar) {
        clearInterval(cuenta);
        document.title = "Pedido cancelado";
    }
}

setTimeout(cancelarPedido, 3000);



// Si no usamos clearInterval, la cuenta atrás
// seguiría ejecutándose cada segundo sin detenerse.