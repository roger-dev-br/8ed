import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Box, Button, Container, Divider, Grid, TextField } from "@mui/material";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import MeuInput from "../../components/meu-input/MeuInput";

const PageUseMemo: React.FC = () => {
  const [numero1, setNumero1] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [numero3, setNumero3] = useState<number>(0);
  const [numero4, setNumero4] = useState<number>(0);

  /*const potencia = () => {
        const futuro = Date.now() + 1000;
        while (Date.now() < futuro) {}

        return numero1 ** numero2;
    }*/

  const potencia = useMemo(() => {
    const futuro = Date.now() + 1000;

    console.log("Calculando potencia");

    while (Date.now() < futuro) {}

    return numero1 ** numero2;
  }, [numero1, numero2]);

  console.log("Componente inicializado");

  let soma = numero3 + numero4;

  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleNome(e: any) {
    setNome(e.target.value);
  }

  const [valor3Invalido, setValor3Invalido] = useState<boolean>(false);

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use Memo" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Grid container sx={{ mt: 2, mb: 2 }}>
            <Grid item md={3}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Valor 1"
                variant="outlined"
                value={numero1}
                onChange={(e) => setNumero1(Number(e.target.value))}
              />
            </Grid>
            <Grid item md={3} sx={{ textAlign: "center" }}>
              ^
            </Grid>
            <Grid item md={3}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Valor 2"
                variant="outlined"
                value={numero2}
                onChange={(e) => setNumero2(Number(e.target.value))}
              />
            </Grid>
            <Grid item md={3}>
              <TextField fullWidth id="outlined-basic" label="Resultado" variant="outlined" value={potencia} />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2, mb: 2 }}>
            <Grid item md={3}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Valor 1"
                variant="outlined"
                value={numero3}
                error={valor3Invalido}
                onChange={(e) => {
                  setNumero3(Number(e.target.value));
                  console.log(Number(e.target.value));
                  setValor3Invalido(Number(e.target.value) < 10);
                }}
              />
            </Grid>
            <Grid item md={3} sx={{ textAlign: "center" }}>
              +
            </Grid>
            <Grid item md={3}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Valor 2"
                variant="outlined"
                value={numero4}
                onChange={(e) => {
                  setNumero4(Number(e.target.value));
      
                }}
              />
            </Grid>
            <Grid item md={3}>
              <TextField fullWidth id="outlined-basic" label="Resultado" variant="outlined" value={soma} />
            </Grid>
          </Grid>
          <br></br>
          <hr></hr>
          Meus inputs
          <hr />
          <MeuInput onChange={handleNome}></MeuInput>
          <MeuInput
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => console.log("Foco no e-mail")}
          ></MeuInput>
          <Button
            onClick={(e) => {
              setValor3Invalido(numero3 < 10);
            }}
          >
            Salvar
          </Button>
          <hr />
          {nome}
          <br />
          {email}
        </Box>
      </Container>
    </>
  );
};

export default PageUseMemo;
