'use strict'

const navegacion = document.querySelector(".navegacion");
const menuCheck = document.querySelector("#menu__check");
const color = document.querySelector("a");
const menu = document.getElementById("menu");
const quienSoy = document.getElementById("quienSoyMenu");
const proyectosMenu = document.getElementById("proyectosMenu");
const habilidadesMenu = document.getElementById("habilidadesMenu");
const contactoMenu = document.getElementById("contactoMenu");
const encabezado = document.getElementById("encabezado");
const body = document.querySelector("body");




//Despliegue del menu, con timer para que se ejecute la animacion

function desplegar() {

    body.style.overflowY = "hidden";

    menu.style.width = "100vw";
    menu.style.height = "100vh";
    menu.style.display = "block";
    menu.style.zIndex = "100";
    menu.style.animation = "menuAnimacion 1s 1";
    menuCheck.checked = true;
    menuCheck.disabled = true;

    setTimeout(() => {

        menuCheck.disabled = false;

    }, 1000)
}

function esconder() {

    body.style.overflowY = "visible";

    menu.style.animation = "menu2 1s 1";


    menuCheck.checked = false;
    menuCheck.disabled = true;
    setTimeout(() => {

        menuCheck.disabled = false;
        menu.style.display = "none";

    }, 1000);

}




//Evento de despliegue y repliegue del menu

menuCheck.addEventListener('click', () => {
    if (menuCheck.checked == true) {
        desplegar();
    } else if (menuCheck.checked == false && menu.style.display == "block") {
        esconder();
    }
});



//Menus scrolls

const sobreMi = document.querySelector("#sobreMi");
const proyectos = document.querySelector("#proyectos");
const habilidades = document.querySelector("#habilidades");
const contacto = document.querySelector("#contacto");

function scrollSection(i) {
    i.scrollIntoView({
        behavior: "smooth"
    })
}


//menu celular y tablets

quienSoy.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        scrollSection(sobreMi);
    }, 1000);
});

proyectosMenu.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        scrollSection(proyectos);
    }, 1000);
});

habilidadesMenu.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        scrollSection(habilidades);
    }, 1000);
});

contactoMenu.addEventListener('click', () => {
    esconder();
    setTimeout(() => {
        scrollSection(contacto);
    }, 1000);
});

//Menu escritorio



document.querySelector("#quienSoyMenuDesktop").addEventListener('click', () => {
    console.log("click");
    setTimeout(() => {
        scrollSection(sobreMi);
    }, 0);
});

document.querySelector("#proyectosMenuDesktop").addEventListener('click', () => {
    setTimeout(() => {
        scrollSection(proyectos);
    }, 0);
});

document.querySelector("#habilidadesMenuDesktop").addEventListener('click', () => {
    setTimeout(() => {
        scrollSection(habilidades);
    }, 0);
});

document.querySelector("#contactoMenuDesktop").addEventListener('click', () => {
    setTimeout(() => {
        scrollSection(contacto);
    }, 0);
});



//escritura de subtitulos

//subtitulo nombre


var string = "Agustín Zigart";
var str = string.split("");


//subtitulo proyecto


var string2 = "Proyectos";
var str2 = string2.split("");


//subtitulo habilidades


var string3 = "Habilidades";
var str3 = string3.split("");

//subtitulo contacto


var string4 = "Contactame";
var str4 = string4.split("");

//adaptacion dependiendo el ancho del dispositivo

if (window.screen.width < 768) {
    window.onscroll = function() {


        if (window.scrollY >= 268 && sobreMi.innerHTML == "") {
            (function animate() {
                str.length > 0 ? sobreMi.innerHTML += str.shift() : clearTimeout(running);
                var running = setTimeout(animate, 90);
            })();
        }



        if (window.scrollY >= 1445 && proyectos.innerHTML == "") {
            (function animate2() {
                str2.length > 0 ? proyectos.innerHTML += str2.shift() : clearTimeout(running);
                var running = setTimeout(animate2, 90);
            })();
        }



        if (window.scrollY >= 3033 && habilidades.innerHTML == "") {
            (function animate3() {
                str3.length > 0 ? habilidades.innerHTML += str3.shift() : clearTimeout(running);
                var running = setTimeout(animate3, 90);
            })();
        }



        if (window.scrollY >= 3900 && contacto.innerHTML == "") {
            (function animate4() {
                str4.length > 0 ? contacto.innerHTML += str4.shift() : clearTimeout(running);
                var running = setTimeout(animate4, 90);
            })();
        }

    };


} else if (window.screen.width >= 768 && window.screen.width < 1024) {

    window.onscroll = function() {


        if (window.scrollY >= 258 && sobreMi.innerHTML == "") {
            (function animate() {
                str.length > 0 ? sobreMi.innerHTML += str.shift() : clearTimeout(running);
                var running = setTimeout(animate, 90);
            })();
        }



        if (window.scrollY >= 1205 && proyectos.innerHTML == "") {
            (function animate2() {
                str2.length > 0 ? proyectos.innerHTML += str2.shift() : clearTimeout(running);
                var running = setTimeout(animate2, 90);
            })();
        }



        if (window.scrollY >= 3548 && habilidades.innerHTML == "") {
            (function animate3() {
                str3.length > 0 ? habilidades.innerHTML += str3.shift() : clearTimeout(running);
                var running = setTimeout(animate3, 90);
            })();
        }



        if (window.scrollY >= 4408 && contacto.innerHTML == "") {
            (function animate4() {
                str4.length > 0 ? contacto.innerHTML += str4.shift() : clearTimeout(running);
                var running = setTimeout(animate4, 90);
            })();
        }

    };
} else {
    window.onscroll = function() {


        if (window.scrollY >= 300 && sobreMi.innerHTML == "") {
            (function animate() {
                str.length > 0 ? sobreMi.innerHTML += str.shift() : clearTimeout(running);
                var running = setTimeout(animate, 90);
            })();
        }



        if (window.scrollY >= 1369 && proyectos.innerHTML == "") {
            (function animate2() {
                str2.length > 0 ? proyectos.innerHTML += str2.shift() : clearTimeout(running);
                var running = setTimeout(animate2, 90);
            })();
        }



        if (window.scrollY >= 3500 && habilidades.innerHTML == "") {
            (function animate3() {
                str3.length > 0 ? habilidades.innerHTML += str3.shift() : clearTimeout(running);
                var running = setTimeout(animate3, 90);
            })();
        }



        if (window.scrollY >= 4408 && contacto.innerHTML == "") {
            (function animate4() {
                str4.length > 0 ? contacto.innerHTML += str4.shift() : clearTimeout(running);
                var running = setTimeout(animate4, 90);
            })();
        }

    };
}



var botonVuelta = document.getElementById("boton");

botonVuelta.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
})