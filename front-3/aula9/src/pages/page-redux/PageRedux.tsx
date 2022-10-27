import { Box, Button, Divider } from "@mui/material";
import { Container } from "@mui/system";
import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { increment, selectCount } from "../../store/modules/contador/ContadorSlice";
import './PageRedux.css';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const PageRedux: React.FC = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Redux" />
        <Divider />
        <Box sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={() => dispatch(increment(1))}>+</Button>
          <span className="value">{ count }</span>
          <Button variant="outlined">-</Button>
        </Box>
      </Container>
    </>
  );
};

export default PageRedux;
