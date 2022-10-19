import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Box, Button, Container, Divider, Snackbar, Typography } from "@mui/material";
import { useState } from "react";

const PageUseState: React.FC = () => {
  // let contador: number = 0;
  // Aqui a gente desestrutura o useState que é uma lista
  // 1 - posiçao é o valor do estado
  // 2 - é a função que altera o valor do estado
  const [contador, setContador] = useState<number>(0);
  const open = false;

  function incrementarContador(): void {
    // contador++;
    setContador(contador + 1);
    console.log(contador);
  }

  function zerarContador(): void {
    setContador(0);
    console.log(contador);
  }

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Typography variant="h3" component="h3">
            Valor Atual: {contador}
          </Typography>

          <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
            <Button variant="contained" color="success" sx={{ mr: 4 }} onClick={incrementarContador}>
              Incrementar
            </Button>
            <Button variant="outlined" color="error" onClick={() => zerarContador()}>
              Zerar
            </Button>
          </Box>
        </Box>
      </Container>
      <Snackbar open={open} 
        autoHideDuration={6000} 
        message="Note archived" />
    </>
  );
};

export default PageUseState;
