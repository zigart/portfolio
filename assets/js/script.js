'use strict'

var navegacion = document.querySelector(".navegacion");
var menuCheck = document.querySelector("#menu__check");
var color = document.querySelector("a");
var menu = document.getElementById("menu");
var quienSoy = document.getElementById("quienSoyMenu");
var proyectos = document.getElementById("proyectosMenu");
var habilidades = document.getElementById("habilidadesMenu");
var contacto = document.getElementById("contactoMenu");


function desactivarScroll() {
    window.scrollTo(0, 0);
}

function desplegar() {
    window.addEventListener('scroll', desactivarScroll);
    navegacion.style.position = "fixed";
    navegacion.style.top = "0";
    navegacion.style.width = "100%";

    menu.style.width = "100vw";
    menu.style.height = "100vh";
    menu.style.display = "block";
    menu.style.zIndex = "100";
    menu.style.animation = "menuAnimacion 1s 1";
    menuCheck.disabled = true;
    setTimeout(() => {
        menuCheck.disabled = false;

    }, 1000)
    console.log('aca va la funcion');



}

function esconder() {
    window.removeEventListener('scroll', desactivarScroll);
    navegacion.style.position = "relative";
    menu.style.animation = "menu2 1s 1";
    menuCheck.disabled = true;
    setTimeout(() => {
        menuCheck.disabled = false;
        menu.style.display = "none";
    }, 1000);
    console.log("aca se esconde");
}

//Despliegue y repliegue del menu

menuCheck.addEventListener('click', () => {
    if (menuCheck.checked == true) {
        console.log("falta la funcion");
        desplegar();
    } else {
        esconder();
    }
});

quienSoy.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        window.scroll({
            top: 763,
            behavior: "smooth"
        });
    }, 1000);

})

proyectos.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        window.scroll({
            top: 1693,
            behavior: "smooth"
        });
    }, 1000);

})

habilidades.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        window.scroll({
            top: 3612,
            behavior: "smooth"
        });
    }, 1000);

})

contacto.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        window.scroll({
            top: 4431,
            behavior: "smooth"
        });
    }, 1000);

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

    if (window.scrollY >= 3100 && tecnologias.innerHTML == "") {
        (function animate3() {
            str3.length > 0 ? tecnologias.innerHTML += str3.shift() : clearTimeout(running);
            var running = setTimeout(animate3, 90);
        })();
    }

    console.log("Vertical: " + window.scrollY);


};

var botonVuelta = document.getElementById("boton");

botonVuelta.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
})