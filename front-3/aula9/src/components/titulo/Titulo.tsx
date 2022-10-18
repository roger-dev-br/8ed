import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface TituloProps {
  titulo: string;
}

const Titulo: React.FC<TituloProps> = ({ titulo }) => {
  return (
    <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
      <Typography variant="h3" component="h3" align="center" sx={{ flex: 1 }}>
        {titulo}
      </Typography>
    </Box>
  );
};

export default Titulo;
