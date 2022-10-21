import Titulo from "../../components/titulo/Titulo";
import TopBar from "../../components/top-bar/TopBar";
import { Box, Container, Divider, Grid, TextField } from "@mui/material";

const PageUseMemo: React.FC = () => {
    return (
        <>
          <TopBar />
          <Container maxWidth="md">
            <Titulo titulo="Use Memo" />
            <Divider />
            <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
              <Grid container sx={{ mt: 2, mb: 2 }}>
                <Grid item md={3}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Valor 1"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={3} sx={{ textAlign: "center" }}>
                  ^
                </Grid>
                <Grid item md={3}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Valor 2"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField fullWidth id="outlined-basic" label="Resultado" variant="outlined" />
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 2, mb: 2 }}>
                <Grid item md={3}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Valor 1"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={3} sx={{ textAlign: "center" }}>
                  +
                </Grid>
                <Grid item md={3}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Valor 2"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField fullWidth id="outlined-basic" label="Resultado" variant="outlined" />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      );
}

export default PageUseMemo;