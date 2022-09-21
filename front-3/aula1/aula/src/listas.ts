import { lista } from "./data";

// Map
// Retornar um novo array - sem a idade
const novo = lista.map((m) => {
  return {
    nome: m.nome,
    regiao: m.regiao,
  };
});

// Quando a idade for >= 18 anos imprimir coluna maiorIdade = true, caso contrario false
const transformado = lista.map((m) => {
  return {
    nome: m.nome,
    maiorIdade: m.idade >= 18,
  };
});

// Filter - Filtrar baseado nas condiçoes os elementos pro novo array
// Filtrar somente os menores de idade
const menores = lista.filter((f) => f.idade < 18);

// Maiores de idade do Norte
const maioreDoNorte = lista
  .filter((f) => f.idade >= 18 && f.regiao === "Norte")
  .map((m) => {
    return {
      nome: m.nome,
      regiao: m.regiao,
      anoNascimento: new Date().getFullYear() - m.idade,
    };
  });

// Pessoas com região iniciando com "Su"
const regiaoSu = lista
  .filter((f) => f.regiao.toLowerCase().startsWith("su"))
  .map((m) => {
    return {
      nome: m.nome,
      regiao: m.regiao,
      anoNascimento: new Date().getFullYear() - m.idade,
    };
  });

// Find - Encontrar um registro único
const roger = lista.find((f) => f.nome === "Roger");
// console.table(roger);

// for of
for (const pessoa of lista) {
  // para cada pessoa da minha lista ele vai passar aqui 1x
  // console.log(pessoa.nome);
}

// for in
for (const pessoa in lista) {
  // console.log(lista[pessoa].nome);
}

// foreach
// ES5 >
lista.forEach((o) => {
  console.log(o.nome);
});
