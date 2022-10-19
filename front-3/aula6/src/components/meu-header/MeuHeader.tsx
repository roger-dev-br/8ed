import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

interface MeuHeaderProps {
    titulo: string;
    estaLogado?: boolean;
}

const MeuHeader: React.FC<MeuHeaderProps> = ({ titulo, estaLogado }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { titulo }
          </Typography>
          {estaLogado &&
            <IconButton size="large" color="inherit">
                <AccountCircle />
            </IconButton>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MeuHeader;