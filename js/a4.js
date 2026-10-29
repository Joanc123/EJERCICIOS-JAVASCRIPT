"use strict";



const pedidoGuardado = localStorage.getItem("pedido");

if (pedidoGuardado !== null) {
    const ultimoPedido = JSON.parse(pedidoGuardado);

    document.write(
        "Último pedido guardado: " +
        ultimoPedido.join(" + ") +
        "<br><br>"
    );
} else {
    document.write(
        "Todavía no hay ningún pedido guardado<br><br>"
    );
}




let pedido = [];
let producto;

do {

    producto = prompt(
        "Introduce un producto o escribe fin"
    );

    if (
        producto !== null &&
        producto.trim() !== "" &&
        producto.toLowerCase() !== "fin"
    ) {
        pedido.push(producto.trim());
    }

} while (
    producto !== null &&
    producto.toLowerCase() !== "fin"
);



if (pedido.length > 0) {

    const quitar = confirm(
        "¿Quieres quitar el último producto?"
    );

    if (quitar) {
        pedido.pop();
    }
}




document.write(
    "Número de productos: " +
    pedido.length +
    "<br>"
);

document.write(
    "Pedido: " +
    pedido.join(" + ") +
    "<br>"
);


const pedidoOrdenado = pedido.slice();

pedidoOrdenado.sort(function(a, b) {
    return a.localeCompare(b, "es");
});

document.write(
    "Pedido ordenado: " +
    pedidoOrdenado.join(" + ") +
    "<br>"
);



const tresPrimeros = pedido.slice(0, 3);

document.write(
    "Tres primeros productos: " +
    tresPrimeros.join(" + ") +
    "<br>"
);




localStorage.setItem(
    "pedido",
    JSON.stringify(pedido)
);



function vaciarPedido() {
    localStorage.removeItem("pedido");
    location.reload();
}