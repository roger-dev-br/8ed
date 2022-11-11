import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";

import { useEffect } from "react";
import { atualizar, getPosts, postar } from "../../store/modules/post/PostSlice";

const PagePost: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, error, data } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Compras" />
        <Divider />

        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => dispatch(getPosts())}>
            Recarregar
          </Button>

          <Button variant="outlined" onClick={() => postar()}>
            Criar
          </Button>

          <Button variant="outlined" onClick={() => atualizar()}>
            Atualizar
          </Button>
        </Box>

        <Box sx={{ mt: 4 }}>
            { loading && (
                <div>Carregando</div>
            )}
        </Box>

        <Box sx={{ mt: 4 }}>
            {error && (
                <div>{ error }</div>
            )}
        </Box>

        <Box sx={{ mt: 4 }}>
            {!loading && data && data.map((post)=> (
                <div key={post.id}>{ post.title }</div>
            ))}

            {!loading && (!data || data.length === 0) && (
              <div>Nenhum registro localizado</div>
            )}
        </Box>
      </Container>
    </>
  );
};

export default PagePost;
