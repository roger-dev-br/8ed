import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { getContador, getContadorDobro, incrementar } from "../../store/modules/contador/ContadorSlice";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import "./PageRedux.css";

const PageRedux: React.FC = () => {
  const contador = useAppSelector(getContador);
  const contadorDobro = useAppSelector(getContadorDobro);
  const dispatch = useAppDispatch();

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Redux" />
        <Divider />
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined"
          onClick={() => dispatch(incrementar(2))}
          >+</Button>
          <span className="value"> {contador} </span>
          <span className="value"> {contadorDobro}x2 </span>
          <Button variant="outlined">-</Button>
        </Box>
      </Container>
    </>
  );
};

export default PageRedux;
