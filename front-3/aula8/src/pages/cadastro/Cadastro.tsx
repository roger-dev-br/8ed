import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Header from "../../components/header/Header";

const Cadastro: React.FC = () => {
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
            <TextField id="nome" label="Nome do Pet" fullWidth sx={{ mt: 2, mr: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <TextField id="observacao" label="Observação" 
                multiline
                rows={5}
                maxRows={5}
                fullWidth sx={{ mt: 2, mr: 2 }} />
          </Grid>

          <Grid item xs={12} >
            <Button variant="contained">Salvar</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cadastro;
