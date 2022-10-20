import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Box, Container, Divider, Grid, TextField } from "@mui/material";
import { useMemo, useState } from "react";

const PageUseMemo: React.FC = () => {
  const [numero1, setNumero1] = useState<number>(1);
  const [numero2, setNumero2] = useState<number>(1);
  const [numero3, setNumero3] = useState<number>(1);
  const [numero4, setNumero4] = useState<number>(1);

  
  /*let potencia = () => {
    const futuro = Date.now() + 1000;
    while (Date.now() < futuro) {}

    return numero1 ** numero2;
  };*/

  let potencia = useMemo(() => {
    const futuro = Date.now() + 1000;
    while (Date.now() < futuro) {}

    return numero1 ** numero2;
  }, [numero1, numero2]);

  let soma = numero3 + numero4;

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
                onChange={(e) => setNumero3(Number(e.target.value))}
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
                onChange={(e) => setNumero4(Number(e.target.value))}
              />
            </Grid>
            <Grid item md={3}>
              <TextField fullWidth id="outlined-basic" label="Resultado" variant="outlined" value={soma} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default PageUseMemo;
