import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Avatar, Box, Container, Divider } from "@mui/material";
import { useEffect, useState } from "react";

const PageUseEffect: React.FC = () => {
  const [imagem, setImagem] = useState();

  /*
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((json) => {
      setImagem(json.message);
      console.log("baixei os recursos");
    });
    */
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((json) => {
        setImagem(json.message);
        console.log(json.message);
        console.log("baixei os recursos");
      });
  }, []);

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use Effect" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Avatar alt="Meu dog" src={imagem} sx={{ width: 400, height: 400 }} />
        </Box>
      </Container>
    </>
  );
};

export default PageUseEffect;
