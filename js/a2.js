
const dias = [
    "domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

const meses = [
    "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];


    const hoy = new Date();

    const dia = dias[hoy.getDay()];
    const mes = meses[hoy.getMonth()];
    const año = hoy.getFullYear();
    const diaSemana = hoy.getDate();

    document.write("<< hoy es " + dia + " " +
        diaSemana + " de " + mes + " de " + 
        año);      
        
        
    const hora = hoy.getHours();
    const minutos = hoy.getMinuts().padStart(2,"0");    

    document.write("son " + hora +
        minutos
    );

    if(dia <= 6 && dia >=1 && hora >= 8 && hora < 21){
      document.write("La cafetería está ABIERTA");
} else {
    document.write("La cafetería está CERRADA");
}