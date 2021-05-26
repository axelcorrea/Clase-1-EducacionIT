// var fecha = new Date();
// var x = fecha.getFullYear();
// console.log(x);

// x = fecha.getDay();
// console.log(x);

// x = fecha.getTime(); //Devuelve a partir del numero de milisegundos  entre enero de 1 de 1970.
// console.log(x);

// Manipulando el DOM -> document object models

var titulo = document.querySelector("p");
// titulo = document.querySelector("#titulo");
// titulo = document.querySelector(".titulo");
// titulo = document.getElementById("titulo");
// titulo = document.getElementsByClassName("titulo")[0];
// console.log(titulo);

// console.log(titulo);
// //alert(titulo.innerHTML);
// titulo.innerHTML = "Hola JS manipulando el DOM";
// console.log(titulo.id);
// console.log(titulo.title);
// titulo.style.color = "red";
// titulo.style.backgroundColor = "lightpink";
// titulo.style.border = "1 px solid blue";
// titulo.style.padding = "10px";


/*
if() {
    if() {

    }
}else {
    if() {

    }
}
*/
//vamos a un boliche -> un rango de edad entre 18 y 25 años
//si la persona tiene 21  años obtiene una bebida gratis
//si no puede acceder decir la razon 

// var h1 = document.querySelector("h1");
// var p = document.querySelector("p");
// var edad = window.prompt("Escribe tu edad")
// if(edad >= 18  && edad <=25) {
//     h1.innerHTML = "Bienvenido";
//     if(edad == 21) {
//         alert("Tienes bebida gratis!")
//     }
// } else {
//     h1.innerHTML = "No puedes acceder";
//     if(edad < 18 ) {
//         p.innerHTML = "por ser menor"
//     } else {
//         p.innerHTML = "por ser muy grande"
//     }
// }

/*
if() {

}else if() {

}else if() {

}else {

}
//solicitar al usuario un numero e identificar  si tiene 1,2,3 o mas cifras

6 -> es menor que 10 y mayor que 0
25 -> entre 10 y 99
*/

// var num = parseInt(window.prompt("Escribe un numero"));
// if(num > 0 && num <= 10) {
//     document.write("El numero " + num + " tiene una cifra");
// } else if (num >= 10  && num < 100) {
//     document.write("El numero " + num + " tiene dos cifras");
// }  else if (num >= 100  && num < 1000) {
//     document.write("El numero " + num + " tiene tres cifras");
// }else if (num >= 1000  && num < 10000) {
//     document.write("El numero " + num + " tiene cuatro cifras");
// }else if (num >= 10000) {
//     document.write("El numero " + num + " tiene mas de cuatro cifras");
// }else {
//     document.write("No existe dentro del sistema")
//}

/*
switch(variable) {
    case valor1:
        instrucciones
        break;
    case valor2:
        instrucciones
        break;
    default:
        instrucciones
        break;
}
*/

// var color = "verde";
// switch(color) {
//     case "azul":
//     case "AZUL":
//     case "Azul":
//         document.write("Color azul");
//         break;
//     case "amarillo":
//         document.write("Color amarillo");
//         break;
//     case "verde":
//         document.write("Color verde");
//         break;
//     case "negro":
//         document.write("Color negro");
//         break;
//     default:
//         document.write("Ups no encuentro el color");
//         break;
// }    

/*
BUCLES:

while(condicion){
    instrucciones
    ajuste
}
*/
// var n = 1;
// while (n <=10) {
//     console.log("Hola");
//     document.write("<br>hola")
//     n++; // n = n + 1;
// }

/*
do {
    instrucciones
    ajuste
}while(condicion);
*/

// var a = 1;
// do {
//     document.write(a + "<br>");
//     a++;
// }while (a <= 10);

// var juegoPalabra = "";
// do {
//     var palabra = window.prompt("Escribe una palabra");
//     juegoPalabra += palabra; //juegoPalabra = juegoPalabra + palabra
// }while (window.confirm("Sigues jugando?"));
// document.write("Escribiste" + juegoPalabra);



/*
desarrollar un sistema de cajero automatico si accedo mostrar un menu (1 consulta 2 deposito 3 retiro 4 transferencia)
*/

var saldo = 30000, clave, claveCorrecta = 123, cbu, destinatario, eleccion, monto;
var h2 = document.querySelector("h2");

clave = parseInt(window.prompt("Ingrese su clave de acceso"));
if(clave === claveCorrecta) {
    eleccion = parseInt(window.prompt("Bienvenido al banco HSBC\n Escriba un numero de opcion:\n 1 Consulta \n 2 Deposito \n 3 Retiro \n 4 Transferencia"));
    switch(eleccion) {
        case 1: 
            h2.innerHTML = "Su saldo a la fecha es de $" + saldo;
            break;
        case 2: 
            monto = parseInt(window.prompt("Escriba el monto a depositar"));    
            saldo += monto;
            h2.innerHTML = "Deposito realizado exitosamente,<br> su saldo actual es de $" + saldo;
            break;
        case 3:
            monto = parseInt(window.prompt("Escriba el monto que desea retirar"));
            if(monto <= saldo){
                saldo -= monto;
                h2.innerHTML = "Retiro realizado exitosamente, <br> su saldo actual es de $" + saldo;
            }else {
                h2.innerHTML = "Su saldo es insuficiente para esta operacion";
            }
            break;
        case 4:
            monto = parseInt(window.prompt("Escriba el monto que desea transferir"));
            cbu = (window.prompt("Escribe el cbu a transferir"));
            if(monto <= saldo) {
                saldo -= monto;
                h2.innerHTML = "Transferencia realizada exitosamente, <br> usted ha transferido $" + monto + ' al cbu '+ cbu;
            }
            break;
    }
}else {
    h2.innerHTML = "Contraseña incorrecta";
}