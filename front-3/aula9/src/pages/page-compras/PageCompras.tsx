import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { adicionarItem, Compra, selectAll } from "../../store/modules/compras/ComprasSlice";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";

import { v4 as uuidv4 } from "uuid";
import CompraItem from "../../components/compra-item/CompraItem";
import { useEffect, useState } from "react";

const PageCompras: React.FC = () => {
  const [ comprasLocais, setComprasLocais ] = useState<Compra[]>([]);

  const compras = useAppSelector(selectAll);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setComprasLocais([
      ...compras.sort((a, b) => {
        return a.ok ? 1 : -1 && a.descricao.localeCompare(b.descricao);
      })
    ])
  }, [compras]);

  const handleAdd = () => {
    const descricao = prompt("Informe a Descrição");
    dispatch(
      adicionarItem({
        uid: uuidv4(),
        descricao: descricao ?? "sem descricao",
        ok: false,
      })
    );
  };

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
          {comprasLocais.map((item) => (
            <CompraItem uid={item.uid} descricao={item.descricao} ok={item.ok} key={item.uid}></CompraItem>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default PageCompras;