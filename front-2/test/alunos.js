"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meu_storage_1 = require("./meu-storage");
function imprimirAlunos() {
    for (const aluno of (0, meu_storage_1.leStorage)()) {
        console.log(aluno);
    }
}
imprimirAlunos();
