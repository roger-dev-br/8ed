interface Animal {
  nome: string;
  patas: number;
}

interface Cachorro extends Animal {
  raca: string;
}

const toto = {
  nome: "Totó",
  patas: 4,
  raca: "Vira latas",
};

function Imprimir(cachorro: Cachorro): void {
  console.log(`Meu nome é ${cachorro.nome}, tenho ${cachorro.patas} e sou da raça ${cachorro.raca}`);
}

function ImprimirDesestruturado(cachorro: Cachorro): void {
  const { nome, patas } = cachorro;
  console.log(`Meu nome é ${nome}, tenho ${patas}.`);
}

ImprimirDesestruturado(toto);
