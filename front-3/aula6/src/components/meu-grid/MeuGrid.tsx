import { Grid } from "@mui/material";

const MeuGrid: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} lg={3}>Grid 1</Grid>
    </Grid>
  );
};

export default MeuGrid;
