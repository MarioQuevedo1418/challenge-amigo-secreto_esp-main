// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let sorteoRealizado = false;

function agregarAmigo() {
    var input = document.getElementById("nombreInput");
    var nombre = input.value.trim();
    var nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,})*$/;
    
    if (nombreRegex.test(nombre)) {
        var lista = document.getElementById("listaNombres");
        var li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = "";
        input.focus();
        sorteoRealizado = false; // Permitir un nuevo sorteo
        document.getElementById("sortearBtn").disabled = false;
    } else {
        alert("Por favor, ingrese un nombre válido (mínimo 2 letras, sin números ni signos).");
    }
}

function sortearAmigo() {
    if (sorteoRealizado) {
        alert("El sorteo ya se ha realizado. Reinicie la lista para volver a sortear.");
        return;
    }
    
    var lista = document.getElementById("listaNombres");
    var nombres = [];
    lista.querySelectorAll("li").forEach(function(item) {
        nombres.push(item.textContent);
    });
    
    if (nombres.length > 0) {
        var nombreSorteado = nombres[Math.floor(Math.random() * nombres.length)];
        document.getElementById("nombreSorteado").textContent = "Nombre sorteado: " + nombreSorteado;
        sorteoRealizado = true;
        document.getElementById("sortearBtn").disabled = true;
    } else {
        alert("No hay nombres en la lista para sortear.");
    }
}

function juegoNuevo() {
     document.getElementById("listaNombres").innerHTML = "";
   // document.getElementById("listaMostrada").textContent = "";
    document.getElementById("nombreSorteado").textContent = "";
    sorteoRealizado = false;
    document.getElementById("sortearBtn").disabled = false;
}