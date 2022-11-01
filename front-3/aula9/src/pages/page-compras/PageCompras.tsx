import { Box, Container, Divider } from "@mui/material"
import Titulo from "../../components/titulo/Titulo"
import TopBar from "../../components/top-bar/TopBar"

const PageCompras: React.FC = () => {
    return (
        <>
      <TopBar />
      <Container maxWidth="md">
        <Titulo titulo="Compras" />
        <Divider />
        <Box sx={{ mt: 4 }}>
        
        </Box>
      </Container>
      </>
    );
};

export default PageCompras;