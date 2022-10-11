import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface Exemplo2Props {
    imagem: string;
    titulo: string;
    detalhes: string;
}

const Exemplo2: React.FC<Exemplo2Props> = ({ imagem, titulo, detalhes }) => {
  return (
    <>
      <Grid item lg={3} md={4} xs={12}>
        <Card>
          <CardMedia component="img" height="140" image={imagem} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { titulo }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { detalhes }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Exemplo2;
