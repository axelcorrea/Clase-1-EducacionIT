// alert('Hola JS externo');
//comentarios de una linea
/*
comentarios de varias
lineas
*/
// document.write("Hola html"); //escribir en el html
// console.log('Hola consola'); //escribir en la consola 

/*
variables: var, let, const 
var identificador; -> declarando
identificador = valor; ->inicializar

tambien declarar e inicializar
var identificador = valor;

modificar el valor
identificador = valor2;
*/

// var nombre = 'Juan'; //String 
// var edad = 20; //number: int, double, float
// var resultado = true; //boolean: true o false
// var X; //undefined
// var arreglo = []; //array
// var objeto =  {}; //objeto

// alert(nombre);
// nombre = 'Juana'
// alert(nombre);

// document.write("El <strong>nombre</strong> es:" + nombre);

//Operadores aritmeticos: + - * / %(modulo: resto de la division)
// var numero1 = 20;
// var numero2 = 10;
// var total = numero1 + numero2;
// document.write("<br>La suma es " + total);
// document.write("<br>segunda suma " + (numero1 + 20)+ "<br>")
// document.write( 10 % 3);
// numero2++; //va incrementando de a 1 
// numero1-- //va decreciendo en 1

//Operadores relacionales <  >  <=  >= == === !=
//document.write(numero1 == numero2);
//Operadores logicos &&(and) || (or)

/*
true && true = true
true && false = false
false && true = false
false && false = false


false || false = false
true || false = true
false || false = true
true || true = true
*/

// nombre = window.prompt("Escribe tu nombre")
// document.write("Escribiste" + nombre)
// var a = parseInt(window.prompt("Escribe un numero"));
// var b = parseInt(window.prompt("Escribe otro numero"));
// document.write(a + b);
// var resp = window.confirm("¿Seguro que te vas?");
// document.write(resp);

/*
diferencias entre 
var-> es redeclarable, es redefinible, scope global
let-> no redeclarable, redefible, scope local
const-> no redeclarable, no redefinible, scope local
if(condicion) {
    ...conjunto de instrucciones...
}
*/
// var c = 2;
// console.log(c)
// if(true) {
//     var c = 4;
//     console.log(c);
// }
// console.log(c);
// var c = 6;
// console.log(c)

// let c = 2;
// console.log(c);
// if(true){
//     let c = 4
//     console.log(c);
// }
// console.log(c);
// let c = 6
// console.log(c);

// const c = 2;
// console.log(c);
// if(true) {
//     const c = 4
//     console.log(c);
// }
// console.log(c);
// const c = 6; // no podemos vovler a declarar
// c = 6; //no podemos modificar
// console.log(c);

//laboratorio 1
// var x = 10;
// var y = 20;

// //test A
// x = x + x + 1;
// y = y - y - x;

// console.log(x)
// console.log(y)

// //ejercicio 2
// var palabra1 = "hola";
// var palabra2  = "chau";
// var frase = ""
// frase = palabra1 + " mundo"
// console.log(frase);
// var a = ""

/* 
solicitar nombre del empleado, correo, clave, salario
*/
var empleado = window.prompt("Escribe tu nombre");
var correo = window.prompt("Escribe tu correo");
var clave = window.prompt("Escribe tu clave");
var salario = window.prompt("Escribe tu salario");

if(correo == "correo@web.com" && clave=="abc123") {
    document.write("Bienvenido al sistema, sus datos son: <br><b>Correo </b>" + correo + "<br><b>Nombre del empleado </b>" + empleado + "<br><b>Salario </b>" + salario);
} else {
    document.write("clave incorrecta!")
}


