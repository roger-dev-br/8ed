console.log("Typescript ok");
window.addEventListener("load", (ev) => {
    console.log("carregado");
});
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
            // fakeData();
            break;
        default:
            break;
    }
});
export {};
