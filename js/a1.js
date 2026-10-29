const precios = [1.2, 1.5, 2.85, 3.1, 4.75, 5.2];
const IVA = 0.10;

const max = Math.max(...precio);
const min = Math.min(...precio);
let suma = 0;

for(let i = 0 ;i < precios.length;i++){
  suma = suma + precios[i];
}

const media = suma / precios.length;

const mediaIVA = media + (media * IVA);

document.write("Precio más alto: " + mayor.toFixed(2) + " €<br>");
document.write("Precio más bajo: " + menor.toFixed(2) + " €<br>");
document.write("Precio medio: " + media.toFixed(2) + " €<br>");
document.write("Precio medio con IVA: " + mediaIVA.toFixed(2) + " €<br>");