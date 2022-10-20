import { Avatar, Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";

const PageUseEffect: React.FC = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
    });

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use Effect" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2, textAlign: "center" }}>
          <Avatar alt="Foto" src="" sx={{ width: 400, height: 400 }} />
        </Box>
      </Container>
    </>
  );
};

export default PageUseEffect;
