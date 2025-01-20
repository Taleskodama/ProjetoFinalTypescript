"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let tarefas = [];
function adicionarTarefa() {
    if (inputElement.value == "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefadigitada = inputElement.value;
        tarefas.push(tarefadigitada);
        inputElement.value = "";
        console.log(tarefas);
    }
}
