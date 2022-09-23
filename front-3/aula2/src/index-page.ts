import { fakeData, lerAlunos } from "./repositorio.js";

console.log("Typescript ok");

window.addEventListener("DOMContentLoaded", (ev: Event) => {
  // com certeza todos elementos vão estar disponiveis
  // 1 - Buscar os dados no repositorio
  // 2 - Atualizar a tabela
});

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
      // fakeData();
      break;

    default:
      break;
  }
});
