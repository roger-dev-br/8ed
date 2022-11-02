import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { adicionarItem, selectAll } from "../../store/modules/compras/ComprasSlice";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";

import { v4 as uuidv4 } from 'uuid';

const PageCompras: React.FC = () => {
  const compras = useAppSelector(selectAll);

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const descricao = prompt("Informe a Descrição");
    dispatch(adicionarItem({
        uid: uuidv4(),
        descricao: descricao ?? "sem descricao",
        ok: false,
    }));
  }

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Compras" />
        <Divider />

        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={handleAdd}>
            Adicionar
          </Button>
        </Box>


        <Box sx={{ mt: 4 }}>
          {compras.map((item) => (
            <h1 key={item.uid}>{item.descricao} </h1>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default PageCompras;
