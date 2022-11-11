import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { useAppDispatch } from "../../store/modules/hooks";

import { useEffect } from "react";
import { getPosts } from "../../store/modules/post/PostSlice";

const PagePost: React.FC = () => {
  const dispatch = useAppDispatch();

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
          <Button variant="outlined">Adicionar</Button>
        </Box>
        
        <Box sx={{ mt: 4 }}>
        </Box>

        <Box sx={{ mt: 4 }}>
        </Box>


        <Box sx={{ mt: 4 }}>
        </Box>
      </Container>
    </>
  );
};

export default PagePost;
