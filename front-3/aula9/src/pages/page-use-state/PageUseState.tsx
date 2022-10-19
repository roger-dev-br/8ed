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

  // Estado que vai controlar o SNACKBAR
  const [open, setOpen ] = useState<boolean>(false);

  function incrementarContador(): void {
    // contador++;
    setContador(contador + 1);
    console.log(contador);
  }

  function zerarContador(): void {
    setContador(0);
    setOpen(true);
    console.log(contador);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setOpen(false);
  };

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

      <input type="text" value={contador} />

      <Snackbar open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        message="Note archived" />
    </>
  );
};

export default PageUseState;
