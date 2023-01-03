import { apiBlog } from "./api-blog";

class Posts {
  async obtemTodos() {
    const resposta = await apiBlog.get("/posts");
    return resposta.data;
  }

  async obtemUmPost(id: number) {
    const resposta = await apiBlog.get(`/posts/${id}`);
    return resposta.data;
  }

  async criar(objeto: any) {
    const resposta = await apiBlog.post("/posts", objeto);
    return resposta.data;
  }
}

const postsInstance = new Posts();
export { postsInstance };
