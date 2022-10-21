import { Avatar, Box, Button, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";

const PageUseEffect: React.FC = () => {
  const [imagem, setImagem] = useState<string>("");

  const baixarImagem = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((json) => {
      setImagem(json.message);
      console.log("recebi a mensagem");
    });
  }

  useEffect(() => {
    baixarImagem();
  }, []); // as dependencias

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use Effect" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2, textAlign: "center" }}>
          <Avatar alt="Foto" src={imagem} sx={{ width: 400, height: 400 }} />
        </Box>
        <Button variant="outlined" onClick={baixarImagem}>Trocar imagem</Button>
      </Container>
    </>
  );
};

export default PageUseEffect;
