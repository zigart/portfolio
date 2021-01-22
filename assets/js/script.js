'use strict'


var menuCheck = document.querySelector("#menu__check");
var color = document.querySelector("a");

function desplegar() {

    console.log('aca va la funcion');

}

function esconder() {
    console.log("aca se esconde");
}


menuCheck.addEventListener('click', () => {
    if (menuCheck.checked == true) {
        console.log("falta la funcion");
        desplegar();
    } else {
        esconder();
    }
})






window.onscroll = function() {
    var h2 = document.getElementById("sobreMi");
    var string = "Agustín Zigart";
    var str = string.split("");
    console.log(h2.innerHTML);

    if (window.scrollY >= 338 && h2.innerHTML == "") {
        (function animate() {
            str.length > 0 ? h2.innerHTML += str.shift() : clearTimeout(running);
            var running = setTimeout(animate, 90);
        })();

    }
    console.log("Vertical: " + window.scrollY);


};