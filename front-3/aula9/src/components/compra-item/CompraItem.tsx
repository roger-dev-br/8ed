import { Grid, Paper, Typography } from "@mui/material";
import { Compra } from "../../store/modules/compras/ComprasSlice";

const CompraItem: React.FC<Compra> = ({ uid, descricao, ok}) => {
    return (
        <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
            <Grid container>
                <Grid item md={12}>
                    <Typography variant="h4">
                        { descricao }
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CompraItem;