"use strict";
const ventas = [45.5, 120, 8.25, 99.9, 15, 230.75];
const nombreCamarero = "  maría  ";

function mediaVentas(lista) {
  let suma = 0;
  for (let i = 0; i <= lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

ventas.sort();
const mayor = ventas[ventas.length];

const hoy = new Date();
const fecha = hoy.getDate() + "/" + hoy.getMonth() + "/" + hoy.getFullYear();

const nombre = nombreCamarero.toUpperCase;
document.write("Camarero: " + nombre.trim() + "<br>");
document.write("Fecha: " + fecha + "<br>";
document.write("Media: " + mediaVentas(ventas).toFixed(2) + " €<br>");
document.write("Venta mayor: " + mayor + " €<br>");

function cerrarCaja() {
  alert("Caja cerrada el " + fecha);
}
setTimeout(cerrarCaja(), 5000);
