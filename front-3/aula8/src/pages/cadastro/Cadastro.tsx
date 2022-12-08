import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import axios from 'axios';
import { useState } from "react";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [observacao, setObservacao] = useState("");




  async function salvar() {
    const resposta = await axios.post('http://localhost:3000/pets', 
    {
      nome: nome,
      observacao: observacao,
    });
    console.log(resposta.data);
  }

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Typography variant="h5" align="center" sx={{ flex: 1 }}>
          Cadastro de Pet
        </Typography>

        <Grid container sx={{ mt: 3 }}>
          <Grid item sm={3} xs={12}>
            <TextField id="codigo"
                label="Código" fullWidth sx={{ mt: 2, mr: 2 }} />
          </Grid>

          <Grid item sm={9} xs={12}>
            <TextField id="nome" label="Nome do Pet" fullWidth sx={{ mt: 2, mr: 2 }} 
              value={nome} onChange={(e) => setNome(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField id="observacao" label="Observação" 
                multiline
                rows={5}
                value={observacao} onChange={(e) => setObservacao(e.target.value)}
                fullWidth sx={{ mt: 2, mr: 2 }} />
          </Grid>

          <Grid item xs={12} >
            <Button variant="contained" onClick={() => salvar()}>Salvar</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cadastro;
