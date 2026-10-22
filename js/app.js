let tarefas = [];
function adicionar() {
    let tarefa = prompt("Digite o nome da tarefa:");
    if (tarefa !== null && tarefa.trim() !== "") {
        tarefas.push(tarefa);
        alert("Tarefa adicionada!");
        listar();
    } else {
        alert("Digite uma tarefa válida.");
    }
}
function listar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
 
    if (tarefas.length === 0) {
        lista.innerHTML = "<li>Nenhuma tarefa cadastrada.</li>";
    } else {
        for (let i = 0; i < tarefas.length; i++) {
            let item = document.createElement("li");
            item.textContent = (i + 1) + " - " + tarefas[i];
            lista.appendChild(item);
        }
    }
}
function remover() {
    if (tarefas.length === 0) {
        alert("A lista está vazia!");
        return;
    }
 
    let numero = prompt(
        "Digite o número da tarefa para remover:\n" +
        tarefas.map((t, i) => (i + 1) + " - " + t).join("\n")
    );
 
    if (numero === null || numero.trim() === "") {
        return;
    }
 
    numero = Number(numero);
 
    if (Number.isInteger(numero) &&
        numero >= 1 && numero <= tarefas.length) {
        tarefas.splice(numero - 1, 1);
        alert("Tarefa removida!");
        listar();
    } else {
        alert("Número inválido!");
    }
}
function removerUltima() {
    if (tarefas.length > 0) {
        let removida = tarefas.pop();
        alert("Tarefa removida: " + removida);
        listar();
    } else {
        alert("A lista está vazia!");
    }
}
function quantidade() {
    alert("Total de tarefas: " + tarefas.length);
}
function menu() {
    let opcao = prompt(
        "MENU\n" +
        "1 - Adicionar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Remover tarefa\n" +
        "4 - Remover última tarefa\n" +
        "5 - Ver quantidade\n" +
        "0 - Sair"
    );
    switch (opcao) {
        case "1":
            adicionar();
            break;
        case "2":
            listar();
            break;
        case "3":
            remover();
            break;
        case "4":
            removerUltima();
            break;
        case "5":
            quantidade();
            break;
        case "0":
            alert("Até mais!");
            break;
        default:
            alert("Opção inválida!");
    }
}
 
 