import { lerAlunos } from "./repositorio.js";
console.log("Typescript ok");
window.addEventListener("DOMContentLoaded", () => {
    // com certeza todos elementos vão estar disponiveis
    // 1 - Buscar os dados no repositorio
    // 2 - Atualizar a tabela
    const alunos = lerAlunos();
    montarTabela(alunos);
});
function criarColuna(texto) {
    const coluna = document.createElement("td");
    // coluna.classList.add("bg-info");
    coluna.innerText = texto;
    return coluna;
}
function adicionaClasses(elemento, classes) {
    for (const classe of classes) {
        elemento.classList.add(classe);
    }
}
function montarTabela(alunos) {
    var _a;
    const tableBody = document.getElementById("table-body");
    const tableBodyNew = document.createElement("tbody");
    alunos.forEach((aluno) => {
        const tr = document.createElement("tr");
        const nomeTd = criarColuna(aluno.nome);
        const cursoTd = criarColuna(aluno.curso);
        const acoesTd = criarColuna("");
        adicionaClasses(acoesTd, ["bg-primary"]);
        const editBtn = document.createElement("button");
        //editBtn.classList.add("btn");
        //editBtn.classList.add("btn-primary");
        adicionaClasses(editBtn, ["btn", "btn-warning"]);
        editBtn.innerText = "Editar";
        editBtn.setAttribute("onclick", "editarAluno");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-danger");
        deleteBtn.innerText = "Apagar";
        deleteBtn.setAttribute("onclick", "deletarAluno");
        tr.appendChild(nomeTd);
        tr.appendChild(cursoTd);
        acoesTd.appendChild(editBtn);
        acoesTd.appendChild(deleteBtn);
        tr.appendChild(acoesTd);
        tableBodyNew.appendChild(tr);
    });
    if (tableBody) {
        (_a = tableBody.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(tableBodyNew, tableBody);
    }
}
function editarAluno() { }
function deletarAluno() { }
const inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("keyup", (ev) => {
    // sempre que o usuário apertar e soltar um tecla
    // este codigo será executado
    //console.log(ev);
    switch (ev.key) {
        case "Escape":
            inputSearch.value = "";
            break;
        case "Enter":
            break;
        default:
            break;
    }
});
