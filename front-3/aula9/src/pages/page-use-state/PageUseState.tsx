import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

const PageUseState: React.FC = () => {
  let contador: number = 0;

  function incrementarContador(): void {
    contador++;    
    console.log(contador);
  }

  function zerarContador(): void {
    contador = 0;
    console.log(contador);
  }

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use State" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Typography variant="h3" component="h3">
            Valor Atual: {contador}
          </Typography>

          <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
            <Button variant="contained" color="success" sx={{ mr: 4 }}
                onClick={incrementarContador}
            >
              Incrementar
            </Button>
            <Button variant="outlined" color="error" 
                onClick={() => zerarContador()}>
              Zerar
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PageUseState;
