import axios from "axios";

console.clear();

const posts = axios.get("http://jsonplaceholder.typicode.com/posts");

const users = axios.get("http://jsonplaceholder.typicode.com/users");

Promise.all([posts, users]).then((valores) => {
  console.log(valores[0].data[0]);
  console.log(valores[1].data[0]);
});

console.log("fim------------------");
