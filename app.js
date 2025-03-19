let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");

    document.getElementById("pa_amigoSecreto").style.display = "none";

    if (inputAmigo.value.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(inputAmigo.value.trim());
    inputAmigo.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

    lista.style.display = "block";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("amigoSecreto").textContent = amigoSecreto;

    document.getElementById("pa_amigoSecreto").style.display = "flex"; 
    document.getElementById("listaAmigos").style.display = "none"; 
}
