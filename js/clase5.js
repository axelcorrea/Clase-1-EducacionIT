// Practica 1, un mundo asincronico

// setTimeout( () => {
//     console.log("Hola setTimeOut");
//     alert("Hola setTimeOut");
// }, 3000);


// setInterval( () => {
//     console.log("Hola intervalo")
// }, 3000);


// let fecha = new Date ()
// console.log(fecha.getFullYear());
// let dia = fecha.getDate();
// let mes = fecha.getMonth() +1;
// let año = fecha.getFullYear();
// let hora = fecha.getHours();
// let minutos = fecha.getMinutes();
// let seg = fecha.getSeconds();

// function regresivo () {
//     setInterval(() => {
//         let h1 = document.querySelector("H1");
//         h1.innerHTML = `0${dia} - 0${mes} - ${año} - ${hora}: ${minutos}: ${seg}`;
//         if (seg > 0) {
//             seg--;
//         } else {
//             seg = 59;
//             minutos--;
//         }
    
    
//     }, 1000);
// }

/*PRACTICAS JQUERY
$("selector").acción()
algunos métodos: text, html, val, click, mouseover, hide, show, animate
*/

// let titulo = $("h1").text()
// let titulo = $("#titulo").text()
// let titulo = $(".t").text()
//alert(titulo)


// Practica 1 JQuery

// $("h1").text("Hola JQuery")
// $("#d").click(desaparecer)
// $("#a").click(aparecer)

// function desaparecer() {
//     //$("#caja").hide();
//     $("#caja").fadeOut("slow");
// }

// function aparecer() {
//     //$("#caja").show();
//     $("#caja").fadeIn("slow");
// }

// Practica 2 JQuery
// $("#ver").click(function(){
//     $("#contenido").slideToggle("slow");
// })

// Practica 3 JQuery
$("#activar").click(function(){
    $("#animacion").animate({left:'350px'})
})