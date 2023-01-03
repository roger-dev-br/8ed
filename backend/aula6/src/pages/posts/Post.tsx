import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { adicionarPost, obterPostPorId } from "../../store/modules/posts/postSlice";

const DetalhePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [txtBody, setTxtBody] = useState("");

  const { id } = useParams();

  const dispath = useAppDispatch();
  const data: any = useAppSelector((state) => state.post);

  useEffect(() => {
    if (id !== "new") {
      dispath(obterPostPorId(Number(id)));
    }
  }, [id, dispath]);

  useEffect(() => {
    setTitle(data?.title);
    setTxtBody(data?.body);
  }, [data]);

  function novoPost() {
    if (id === "new") {
      dispath(
        adicionarPost({
          title,
          body: txtBody,
        })
      );
    } else {
      // chama a o metodo de update
    }
  }

  return (
    <>
      <Container>
        <h1>Novo Post</h1>

        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br></br>
        <input type="text" value={txtBody} onChange={(e) => setTxtBody(e.target.value)} />
        <br></br>

        <button onClick={() => novoPost()}>Salvar</button>
      </Container>
    </>
  );
};

export default DetalhePost;
