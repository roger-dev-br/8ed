import { Search } from "@mui/icons-material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import MeuLink from "../meu-link/MeuLink";

const Header: React.FC = () => {
    return(
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Typography 
                    variant="h5"
                    align="center"
                    sx={{ flex: 1 }}
                >Aula 8</Typography>
                <IconButton>
                    <Search />
                </IconButton>
            </Toolbar>
            <Toolbar variant="dense">
                <MeuLink titulo="Home" url="http://google.com" />
                <MeuLink titulo="Cadastro" url="http://growdev.com.br" />
            </Toolbar>
        </>
    );
}

export default Header;