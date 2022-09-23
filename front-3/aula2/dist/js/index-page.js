import { fakeData } from "./repositorio.js";
console.log("Typescript ok");
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
            fakeData();
            break;
        default:
            break;
    }
});
