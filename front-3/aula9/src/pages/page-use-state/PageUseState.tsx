import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Box, Button, Container, Divider, Snackbar, Typography } from "@mui/material";
import { useState } from "react";

const PageUseState: React.FC = () => {
  // let contador: number = 0;
  // Aqui a gente desestrutura o useState que é uma lista
  // 1 - posiçao é o valor do estado
  // 2 - é a função que altera o valor do estado
  // let inicio = 10;
  const [contador, setContador] = useState<number>(0);

  const [lista, setLista] = useState<number[]>([]);

  const [ valorDaAgua, alteraValorAgua] = useState<number>(5);

  // Estado que vai controlar o SNACKBAR
  const [open, setOpen ] = useState<boolean>(false);

  const [mensagem, setMensagem] = useState<string>("");

  function incrementarContador(): void {
    // contador++;
    if ((contador + 1) % 5 === 0) {
      setMensagem("Contador multiplo de 5");
      setOpen(true);
    }
    setContador(contador + 1);
    console.log(contador);
  }

  function zerarContador(): void {
    setMensagem("Contador Zerado");
    setContador(0);
    setOpen(true);
    console.log(contador);
    alteraValorAgua(100);
  }

  function salvar() {
    if (contador < 0) {
      alert("Valor deve ser maior que 0");
      return;
    }
    lista.push(contador);
    /*setLista([
      ...lista,
      contador,
    ]);*/
    localStorage.setItem("contador", JSON.stringify(lista));
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setOpen(false);
  };

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use State" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Typography variant="h3" component="h3">
            Valor Atual: {contador} <br>
            </br>
            Valor Agua: {valorDaAgua}
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

      <input type="text" 
        value={contador}
        onChange={(e) => setContador(Number(e.target.value))}
      />


      <button onClick={salvar}>Salvar</button>

      <Snackbar open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        message={mensagem} />
    </>
  );
};

export default PageUseState;
