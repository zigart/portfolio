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


    var proyectos = document.getElementById("proyectos");
    var string2 = "Proyectos";
    var str2 = string2.split("");
    console.log(proyectos.innerHTML);

    if (window.scrollY >= 1189 && proyectos.innerHTML == "") {
        (function animate2() {
            str2.length > 0 ? proyectos.innerHTML += str2.shift() : clearTimeout(running);
            var running = setTimeout(animate2, 90);
        })();
    }


    var tecnologias = document.getElementById("habilidades");
    var string3 = "Habilidades";
    var str3 = string3.split("");

    if (window.scrollY >= 1189 && tecnologias.innerHTML == "") {
        (function animate3() {
            str3.length > 0 ? tecnologias.innerHTML += str3.shift() : clearTimeout(running);
            var running = setTimeout(animate3, 90);
        })();
    }

    console.log("Vertical: " + window.scrollY);


};