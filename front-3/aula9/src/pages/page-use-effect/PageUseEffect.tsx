import { Avatar, Box, Button, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";

const PageUseEffect: React.FC = () => {
  const [imagem, setImagem] = useState<string>("");
  const [nota, setNota] = useState<number>(10);

  const [lista, setLista] = useState<number[]>([]);

  const baixarImagem = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((json) => {
        setImagem(json.message);
        console.log("recebi a mensagem");
      });
  };

  const buscarNumeros = () => {
    const salvo = localStorage.getItem("contador");
    setLista(JSON.parse(salvo ?? "[]"));
  }

  const avaliaAluno = () => {
    ///
  };

  // Quando a pagina for carregada busca a imagem
  useEffect(() => {
    baixarImagem();

    buscarNumeros();
  }, []); // as dependencias

  // Podemos criar vários useEffect, um para cada dependencia ou grupo
  // de dependencias
  useEffect(() => {
    console.log("nota alterada");

    avaliaAluno();
  }, [nota]);

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Use Effect" />
        <Divider />
        <Box sx={{ flexGrow: 1, mt: 2, mb: 2, textAlign: "center" }}>
          <Avatar alt="Foto" src={imagem} sx={{ width: 400, height: 400 }} />
        </Box>
        <Button variant="outlined" onClick={baixarImagem}>
          Trocar imagem
        </Button>

        <ul>
          {lista.map((item) =>
            <li>{ item }</li>
          )
          }
        </ul>

        <input type="text" value={nota} onChange={(e) => setNota(Number(e.target.value))} />
      </Container>
    </>
  );
};

export default PageUseEffect;
