import { Button, ButtonGroup, Grid, Link } from "@mui/material";

const Exemplo1: React.FC = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Button variant="contained" fullWidth>Contained</Button>
        </Grid>
        <Grid item md={4} xs={12}>
          <Link href="#" underline="none">
            {'underline="none"'}
          </Link>
        </Grid>

        <Grid item md={4} xs={12}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default Exemplo1;
