import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

interface MeuCardProps {
  imagem: string;
  titulo: string;
  texto: string;
  acao: () => void;
  xs?: number;
  lg?: number
}

const MeuCard: React.FC<MeuCardProps> = ({ imagem, titulo, texto, xs, lg, acao }) => {
  return (
    <Grid item xs={xs ?? 6} lg={lg ?? 3}>
      <Card>
        <CardMedia component="img" height="140" image={imagem} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {texto}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={acao}>Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MeuCard;
