function lerRepositorio(chave) {
    return localStorage.getItem(chave);
}
function escreverNoRepositorio(chave, valor) {
    localStorage.setItem(chave, valor);
}
function lerAlunos() {
    console.log("lerAlunos");
    const valor = lerRepositorio("alunos");
    if (!valor) {
        return [];
    }
    return JSON.parse(valor);
}
function escreverAlunos(alunos) {
    escreverNoRepositorio("alunos", JSON.stringify(alunos));
}
function fakeData() {
    const alunos = lerAlunos();
    alunos.push({
        id: "uuidv4",
        nome: "Mateus",
        curso: "Full stack",
    });
    alunos.push({
        id: `outroid`,
        nome: "Fabiane",
        curso: "Full stack",
    });
    alunos.push({
        id: "asufisdfu",
        nome: "Samir",
        curso: "Full stack",
    });
    escreverAlunos(alunos);
}
export { lerAlunos, escreverAlunos, fakeData };
