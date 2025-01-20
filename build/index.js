"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let tarefas = [];
function listarTarefas() {
    listElement.innerHTML = "";
    tarefas.map(item => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        todoElement.appendChild(tarefaText);
        listElement.appendChild(todoElement);
    });
}
listarTarefas();
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
    }
}
buttonElement.onclick = adicionarTarefa;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
