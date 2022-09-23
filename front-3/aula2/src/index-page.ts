import { Aluno } from "./aluno.interface.js";
import { lerAlunos, fakeData } from "./repositorio.js";

console.log("Typescript ok");

window.addEventListener("DOMContentLoaded", () => {
  // com certeza todos elementos vão estar disponiveis
  // 1 - Buscar os dados no repositorio
  // 2 - Atualizar a tabela

  const alunos = lerAlunos();

  montarTabela(alunos);
});

function criarColuna(texto: string): HTMLTableCellElement {
  const coluna = document.createElement("td") as HTMLTableCellElement;
  // coluna.classList.add("bg-info");
  coluna.innerText = texto;

  return coluna;
}

function adicionaClasses(elemento: HTMLElement, classes: string[]) {
  for (const classe of classes) {
    elemento.classList.add(classe);
  }
}

function visibilidadeElemento(elemento: HTMLElement, visivel: boolean) {
  //
}

function montarTabela(alunos: Aluno[]): void {
  const tableBody = document.getElementById("table-body") as HTMLTableSectionElement;
  const tableBodyNew = document.createElement("tbody") as HTMLTableSectionElement;

  alunos.forEach((aluno) => {
    const tr = document.createElement("tr") as HTMLTableRowElement;

    const nomeTd = criarColuna(aluno.nome);
    const cursoTd = criarColuna(aluno.curso);
    const acoesTd = criarColuna("");
    adicionaClasses(acoesTd, ["bg-primary"]);

    const editBtn = document.createElement("button") as HTMLButtonElement;
    //editBtn.classList.add("btn");
    //editBtn.classList.add("btn-primary");
    adicionaClasses(editBtn, ["btn", "btn-warning"]);
    editBtn.innerText = "Editar";
    editBtn.setAttribute("onclick", "editarAluno");

    const deleteBtn = document.createElement("button") as HTMLButtonElement;
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
    tableBody.parentNode?.replaceChild(tableBodyNew, tableBody);
  }
}

function editarAluno() {}

function deletarAluno() {}

const inputSearch = document.getElementById("input-search") as HTMLInputElement;
inputSearch.addEventListener("keyup", (ev: KeyboardEvent) => {
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
