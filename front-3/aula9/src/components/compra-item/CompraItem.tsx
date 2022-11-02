import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { atualizarItem, Compra, removerItem } from "../../store/modules/compras/ComprasSlice";
import { useAppDispatch } from "../../store/modules/hooks";
import DeleteIcon from '@mui/icons-material/Delete';

import "./CompraItem.css";

const CompraItem: React.FC<Compra> = ({ uid, descricao, ok }) => {
  const dispatch = useAppDispatch();

  const handleUpdate = () => {
    dispatch(atualizarItem({ id: uid, changes: { ok: !ok } }));
  };

  const handleRemove = () => {
    dispatch(removerItem(uid));
  };

  return (
<Paper elevation={2} onClick={handleUpdate} className="prevent-select" sx={{ p: 3, mb: 2 }}>
      <Grid container>
        <Grid item xs={11}>
          {!ok && (
            <Typography variant="h4">
              🥲 {descricao}
            </Typography>
          )}
          {ok && (
            <Typography variant="h4" className="comprado">
              😀 {descricao}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1}>
            <IconButton onClick={handleRemove}>
                <DeleteIcon />
            </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompraItem;
