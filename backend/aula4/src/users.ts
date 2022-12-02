import { usersList } from "./data";

console.clear();
console.log("Exemplo de Usuários");

/*
 * Imprimir a quantidade de usuários cadastrados
 * Utilizando **map** imprimir a listagem de usuários contendo apenas os campos
 * name
 * age
 * gender
 */
const ex1 = usersList.map(({ name, age, gender }) => {
  return {
    name,
    age,
    gender,
  };
});
console.table(ex1);

/*
 * Utilizando o **map** imprimir a listagem de usuarios contendo os campos
 * name
 * username
 * Idoso ( quando idade for >= 60 anos)
 */
const ex2 = usersList.map((m) => {
  return {
    name: m.name,
    username: m.login.username,
    idoso: m.age > 60 ? "Sim" : "Não",
  };
});
console.table(ex2);

/*
 * Utilizando **filter** imprimir quantidade de usuarios do sexo Masculino ( gender = male )
 */
const ex3 = usersList.filter((f) => f.gender === "male");
console.table(ex3);

/*
 * Utilizando **filter** imprimir quantidade de usuarios do sexo Feminino e idade superior a 50 anos
 */
const ex4 = usersList.filter((f) => f.gender === "female" && f.age > 50);
console.table(ex4);

const eu = usersList.find((f) => f.name === "Roger Medeiros");
console.log({
  name: eu?.name,
  idade: eu?.age,
  genero: eu?.gender,
});
