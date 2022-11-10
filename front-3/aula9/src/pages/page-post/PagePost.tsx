import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";

import { useEffect } from "react";
import { getPosts } from "../../store/modules/produto/produtoSlice";

const PagePost: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { loading, error, data } = useAppSelector((state) => state.posts);

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Compras" />
        <Divider />

        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => dispatch(getPosts())}>Adicionar</Button>
        </Box>
        
        <Box sx={{ mt: 4 }}>
          { loading && (
            <div>Carregando</div>
          )}
        </Box>

        <Box sx={{ mt: 4 }}>
          { error && (
            <div>{ error }</div>
          )}
        </Box>


        <Box sx={{ mt: 4 }}>
          {!loading && !error && data && data.map((item) => (
            <div>{ item.title }</div>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default PagePost;
