'use strict'

var navegacion = document.querySelector(".navegacion");
var menuCheck = document.querySelector("#menu__check");
var color = document.querySelector("a");
var menu = document.getElementById("menu");
var quienSoy = document.getElementById("quienSoyMenu");
var proyectosMenu = document.getElementById("proyectosMenu");
var habilidadesMenu = document.getElementById("habilidadesMenu");
var contactoMenu = document.getElementById("contactoMenu");
var encabezado = document.getElementById("encabezado");
var body = document.querySelector("body");




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
    console.log("aca se esconde");
}




//Despliegue y repliegue del menu

menuCheck.addEventListener('click', () => {
    if (menuCheck.checked == true) {
        console.log("falta la funcion");
        desplegar();
    } else if (menuCheck.checked == false && menu.style.display == "block") {
        esconder();
    }
});



//Menus scrolls

var sobreMi = document.querySelector("#sobreMi");
var proyectos = document.querySelector("#proyectos");
var habilidades = document.querySelector("#habilidades");
var contacto = document.querySelector("#contacto");

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

var h2 = document.getElementById("sobreMi");
var string = "Agustín Zigart";
var str = string.split("");
console.log(h2.innerHTML);

//subtitulo proyecto

var proyectos = document.getElementById("proyectos");
var string2 = "Proyectos";
var str2 = string2.split("");
console.log(proyectos.innerHTML);

//subtitulo habilidades

var tecnologias = document.getElementById("habilidades");
var string3 = "Habilidades";
var str3 = string3.split("");

//subtitulo contacto

var contacto = document.getElementById("contacto");
var string4 = "Contactame";
var str4 = string4.split("");

//adaptacion dependiendo el ancho del dispositivo

if (window.screen.width < 768) {
    console.log(window.screen.width);

} else if (window.screen.width >= 768 && window.screen.width < 1024) {

    window.onscroll = function() {


        if (window.scrollY >= 258 && h2.innerHTML == "") {
            (function animate() {
                str.length > 0 ? h2.innerHTML += str.shift() : clearTimeout(running);
                var running = setTimeout(animate, 90);
            })();
        }



        if (window.scrollY >= 1205 && proyectos.innerHTML == "") {
            (function animate2() {
                str2.length > 0 ? proyectos.innerHTML += str2.shift() : clearTimeout(running);
                var running = setTimeout(animate2, 90);
            })();
        }



        if (window.scrollY >= 3548 && tecnologias.innerHTML == "") {
            (function animate3() {
                str3.length > 0 ? tecnologias.innerHTML += str3.shift() : clearTimeout(running);
                var running = setTimeout(animate3, 90);
            })();
        }



        if (window.scrollY >= 4408 && contacto.innerHTML == "") {
            (function animate4() {
                str4.length > 0 ? contacto.innerHTML += str4.shift() : clearTimeout(running);
                var running = setTimeout(animate4, 90);
            })();
        }
        console.log("Vertical: " + window.scrollY);
    };
} else {
    window.onscroll = function() {


        if (window.scrollY >= 300 && h2.innerHTML == "") {
            (function animate() {
                str.length > 0 ? h2.innerHTML += str.shift() : clearTimeout(running);
                var running = setTimeout(animate, 90);
            })();
        }



        if (window.scrollY >= 1369 && proyectos.innerHTML == "") {
            (function animate2() {
                str2.length > 0 ? proyectos.innerHTML += str2.shift() : clearTimeout(running);
                var running = setTimeout(animate2, 90);
            })();
        }



        if (window.scrollY >= 3500 && tecnologias.innerHTML == "") {
            (function animate3() {
                str3.length > 0 ? tecnologias.innerHTML += str3.shift() : clearTimeout(running);
                var running = setTimeout(animate3, 90);
            })();
        }



        if (window.scrollY >= 4408 && contacto.innerHTML == "") {
            (function animate4() {
                str4.length > 0 ? contacto.innerHTML += str4.shift() : clearTimeout(running);
                var running = setTimeout(animate4, 90);
            })();
        }
        console.log("Vertical: " + window.scrollY);
    };
}



var botonVuelta = document.getElementById("boton");

botonVuelta.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
})