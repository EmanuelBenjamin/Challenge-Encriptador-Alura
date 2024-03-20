function encriptar() {
    var frase = document.getElementById("textoEncriptado").value;

    if (!frase.match(/^[a-z\s]+$/)) {
        refrescarPantalla();
        return alert("El texto debe contener letras minusculas , sin acento y sin caracteres");
    }

    var reemplazos = {
        "e": "enter",
        "o": "ober",
        "i": "imes",
        "a": "ai",
        "u": "ufat"
    };

    var textoEncriptado = frase.replace(/[eoiau]/g, function(match) {
        return reemplazos[match];
    });

    var contenedorImagen = document.querySelector(".contenedor-imagen");
    contenedorImagen.style.display = "none";

    document.getElementById("resultado").style.display = "block";
    document.getElementById("textoDesencriptado").value = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "block";
}

function desencriptar() {
    console.log("Entrando a la funcion desencriptar");

    var frase = document.getElementById("textoEncriptado").value;
    console.log("Texto encriptado", frase);

    var reemplazos = {
        "enter": "e",
        "ober": "o",
        "imes": "i",
        "ai": "a",
        "ufat": "u"
    };

    var textoDesencriptado = frase.replace(/enter|ober|imes|ai|ufat/g, function(match) {
        return reemplazos[match];
    });

    document.getElementById("textoDesencriptado").value = textoDesencriptado;
    console.log("valor del textarea: ", document.getElementById("textoDesencriptado").value);

    document.getElementById("textoDesencriptado").style.height = "auto";
    document.getElementById("resultado").style.display = "block";
    document.querySelector(".contenedor-imagen").style.display = "none";

    refrescarPantalla();

    console.log("Texto desencriptado", textoDesencriptado);
    console.log("Saliendo de la funcion desencriptar");
}

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("Copy");

    refrescarPantalla();
}

function refrescarPantalla() {
    var textoEncriptado = document.getElementById("textoEncriptado");

    if (textoEncriptado) {
        textoEncriptado.value = "";
    }

    document.getElementById("botonCopiar").style.display = "none";
}

window.onload = function() {
    refrescarPantalla();
};

document.addEventListener("DOMContentLoaded", function() {
    var inputTexto = document.getElementById("textoEncriptado");

    inputTexto.addEventListener("input", function() {
        document.getElementById("resultado").style.display = "none";
        document.querySelector(".contenedor-imagen").style.display = "block";
    });

    var btn = document.querySelector("#botonEncriptado");
    btn.onclick = encriptar;

    var btn2 = document.querySelector("#botonDesencriptado");
    btn2.onclick = desencriptar;

    var btn3 = document.querySelector("#botonCopiar");
    btn3.onclick = copiar;
});