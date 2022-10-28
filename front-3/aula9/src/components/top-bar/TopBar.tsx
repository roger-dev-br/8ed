import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { getContador, zerar } from '../../store/modules/contador/ContadorSlice';
import { useAppDispatch, useAppSelector } from '../../store/modules/hooks';

const TopBar: React.FC = () => {
  const count = useAppSelector(getContador);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Hooks
          </Typography>
          <Button color="inherit"
          onClick={() => dispatch(zerar())}>{ count }</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
