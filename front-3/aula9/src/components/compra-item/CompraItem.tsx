import { Grid, Paper, Typography } from "@mui/material";
import { atualizarItem, Compra } from "../../store/modules/compras/ComprasSlice";
import { useAppDispatch } from "../../store/modules/hooks";

import "./CompraItem.css";

const CompraItem: React.FC<Compra> = ({ uid, descricao, ok }) => {
  const dispatch = useAppDispatch();

  const handleUpdate = () => {
    dispatch(atualizarItem({ id: uid, changes: { ok: !ok } }));
  };

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }} onClick={handleUpdate} className="prevent-select">
      <Grid container>
        <Grid item md={12}>
          {!ok && <Typography variant="h4" color="red">🥲 {descricao}</Typography>}
          {ok && <Typography variant="h4">😄 {descricao}</Typography>}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompraItem;
