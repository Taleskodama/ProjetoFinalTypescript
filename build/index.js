"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@listagem_tarefas");
console.log(listaSalva);
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = ""; // Limpa a lista antes de renderizar novamente
    tarefas.map((item, index) => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("style", "margin-left:10px");
        // Define a função de exclusão
        linkElement.setAttribute("onclick", `deletarTarefa(${index})`);
        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        // Monta o item da lista
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
    atualizarContador(); // Atualiza o contador após listar as tarefas
}
listarTarefas();
atualizarContador();
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefadigitada = inputElement.value;
        tarefas.push(tarefadigitada);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
        atualizarContador();
    }
}
buttonElement.onclick = adicionarTarefa;
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listarTarefas();
    salvarDados();
    atualizarContador();
}
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
function atualizarContador() {
    const contadorElement = document.getElementById("contador");
    contadorElement.innerText = `Tarefas pendentes: ${tarefas.length}`;
}
