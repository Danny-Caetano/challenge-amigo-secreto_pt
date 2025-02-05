let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim(); 
        
    

    if (nomeAmigo === "") {
        alert("Digite o nome do seu amigo");
        return 
    }
    
    amigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();

}

function atualizarLista() {
    const listaAmigoUl = document.getElementById('listaAmigos');
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo para sortear. Escreva o nome de um amigo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];    
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}
    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnAdicionar').addEventListener('click', adicionarAmigo);
    document.getElementById('btnSortear').addEventListener('click', sortearAmigo);

    });