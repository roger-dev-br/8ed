import axios from "axios";

console.clear();

axios
  // buscando informaçoes em uma API Externa
  .get("http://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    // Quando a informação for respondida imprime no console
    // console.log(res);
    console.log("Resposta de Posts - [ OK ]");

    // aqui
  })
  .then(() => {
    // console.log("Fim do programa");
  })
  .catch((erro) => {
    // Quando der erro imprime a mensagem tratada no console
    console.log(erro.message);
  });

axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
  console.log("Resposta Users - [ OK ] ");
});

console.log("fim------------------");
