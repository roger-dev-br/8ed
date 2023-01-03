import { Container } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { obterTodosPosts } from "../../store/modules/posts/postsSlice";

const ListagemPosts: React.FC = () => {
  const dispath = useAppDispatch();

  // Inicialmente data será = []
  const data = useAppSelector((state) => state.posts);

  useEffect(() => {
    // Buscar os posts
    dispath(obterTodosPosts());

    console.log("useEffect");

    // após o fullfiled do thunk
    // data será um array preenchido
  }, [dispath]);

  return (
    <>
      <Container>
        <h1>Listagem de Posts</h1>

        <br></br>

        <Link to="/posts/new">
            Inserir novo post
        </Link>

        <br />

        <table border={1} width="100%">
          <thead>
            <tr>
              <th># ID</th>
              <th>Título</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          {data &&
              data.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td><Link to={`/posts/${post.id}`}>Visualizar</Link></td>
                </tr>
              ))}

          </tbody>
        </table>

        <br />
      </Container>
    </>
  );
};

export default ListagemPosts;
