
let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button")as HTMLElement;

let listaSalva: (string | null)= localStorage.getItem("@listagem_tarefas");
console.log(listaSalva);
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];

function listarTarefas(){
    listElement.innerHTML = "";

    tarefas.map(item => {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        linkElement.setAttribute("onclick", "deletarTarefa()");
        linkElement.setAttribute("style", "margin-left:10px");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    })
}

listarTarefas();

function adicionarTarefa(){
    if(inputElement.value === "")
    {
        alert("Digite alguma tarefa!")
        return false;
    }
    else{

        let tarefadigitada: string = inputElement.value;
        tarefas.push(tarefadigitada);

        inputElement.value = "";

        listarTarefas();
        salvarDados();   
    }
}

buttonElement.onclick = adicionarTarefa

function deletarTarefa(){
    alert("Funcao Chamada")
}

function salvarDados()
{
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas))
}