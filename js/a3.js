"use strict";


let nombre = prompt("Introduce el nombre completo");

if (nombre === null || nombre.trim() === "") {

    document.write("No has escrito ningún nombre");

} else {

    nombre = nombre.trim();

    const palabras = nombre.split(" ");

    let nombreFinal = "";
    let iniciales = "";
    let cantidadLetras = 0;

    for (let i = 0; i < palabras.length; i++) {

        if (palabras[i] !== "") {

            let palabra = palabras[i].toLowerCase();

            let palabraCorrecta =
                palabra[0].toUpperCase() +
                palabra.slice(1);

            nombreFinal += palabraCorrecta + " ";

            iniciales += palabraCorrecta[0];

            cantidadLetras += palabraCorrecta.length;
        }
    }

    nombreFinal = nombreFinal.trim();

    document.write("Nombre: " + nombreFinal + "<br>");


 

    document.write(
        "Número de letras: " +
        cantidadLetras +
        "<br>"
    );




    const numeroAleatorio =
        Math.floor(Math.random() * 900) + 100;

    const hoy = new Date();

    const año = hoy.getFullYear();

    const codigoTicket =
        iniciales +
        "-" +
        numeroAleatorio +
        "-" +
        año;

    document.write(
        "Código del ticket: " +
        codigoTicket +
        "<br>"
    );


  

    let email = prompt("Introduce el email");

    if (email === null) {

        document.write("El email no es válido");

    } else {

        email = email.trim().toLowerCase();

        const posicionArroba = email.indexOf("@");

        const posicionPunto =
            email.indexOf(".", posicionArroba + 1);

        if (
            posicionArroba !== -1 &&
            posicionPunto !== -1
        ) {

            const dominio =
                email.slice(posicionArroba + 1);

            document.write(
                "Dominio: " +
                dominio
            );

            if (email.endsWith(".es")) {

                document.write(
                    " (correo de España)"
                );
            }

        } else {

            document.write(
                "El email no es válido"
            );
        }
    }
}