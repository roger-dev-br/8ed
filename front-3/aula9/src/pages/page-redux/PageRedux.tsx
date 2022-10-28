import { Box, Button, Container, Divider } from "@mui/material";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { getContador, incrementar, diminuir } from "../../store/modules/contador/ContadorSlice";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import "./PageRedux.css";

const PageRedux: React.FC = () => {
  const contador = useAppSelector(getContador);
  const dispatch = useAppDispatch();

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Redux" />
        <Divider />
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined"
          onClick={() => dispatch(incrementar(1))}
          >+</Button>
          <span className="value"> {contador} </span>
          <Button variant="outlined" 
            onClick={() => dispatch(diminuir(1))}>-</Button>
        </Box>
      </Container>
    </>
  );
};

export default PageRedux;
