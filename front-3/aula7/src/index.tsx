import { CssBaseline, Container, Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import Exemplo2 from "./pages/exemplo2/Exemplo2";

const listaDeBichos = [
  {
    titulo: "Tigre",
    imagem:
      "https://s2.glbimg.com/qsSdnDobDGqkzbF_NcOZHbrczzY=/e.glbimg.com/og/ed/f/original/2020/04/06/tiger-2791980_1920.jpg",
    detalhes: "Texto de detalhes do tigre",
  },
  {
    titulo: "Gato",
    imagem: "https://www.petz.com.br/blog/wp-content/uploads/2020/01/como-saber-se-o-gato-e-femea-felina-1280x720.jpg",
    detalhes: "Texto de detalhes do GATO",
  },
  {
    titulo: "Pato",
    imagem: "https://t2.uc.ltmcdn.com/pt/posts/3/7/6/o_que_significa_pagar_o_pato_23673_600.jpg",
    detalhes: ""
  }
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        {listaDeBichos.map((item) => (
          <Exemplo2
            imagem={item.imagem}
            titulo={item.titulo}
            detalhes={item.detalhes}
          />
        ))}
      </Grid>
    </Container>
  </React.StrictMode>
);
