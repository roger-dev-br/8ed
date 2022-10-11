import { CssBaseline, Container, Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Exemplo2 from "./pages/exemplo2/Exemplo2";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Exemplo2 
          imagem="https://s2.glbimg.com/qsSdnDobDGqkzbF_NcOZHbrczzY=/e.glbimg.com/og/ed/f/original/2020/04/06/tiger-2791980_1920.jpg" 
          titulo="Tigre"
          detalhes="Texto de detalhes do tigre"
        />

        <Exemplo2 
          imagem="https://www.petz.com.br/blog/wp-content/uploads/2020/01/como-saber-se-o-gato-e-femea-felina-1280x720.jpg"
          titulo="Gato"
          detalhes="Nome do gato"
        />
      </Grid>
    </Container>
  </React.StrictMode>
);
