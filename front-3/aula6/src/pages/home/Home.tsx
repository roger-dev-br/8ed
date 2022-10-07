import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import MeuCard from "../../components/meu-card/MeuCard";
import MeuHeader from "../../components/meu-header/MeuHeader";

const Home: React.FC = () => {
  return (
    <>
      <MeuHeader titulo="Meu Header" estaLogado />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <MeuCard
            imagem="https://s2.glbimg.com/qsSdnDobDGqkzbF_NcOZHbrczzY=/e.glbimg.com/og/ed/f/original/2020/04/06/tiger-2791980_1920.jpg"
            titulo="Tigre"
            texto="O que se sabe até agora sobre a infecção por Covid-19 em animais"
            acao={() => {
                alert('acao 1');
            }}
          />

          <MeuCard
            imagem="https://www.petz.com.br/blog/wp-content/uploads/2020/06/animais-com-sindrome-de-down.jpg"
            titulo="Cachorro"
            texto="O que se sabe até agora sobre a infecção por Covid-19 em animais"
            acao={() => {
                alert('acao 2');
            }}
          />

          <MeuCard
            imagem="https://www.al.sp.gov.br/repositorio/noticia/N-01-2019/fg229586.jpg"
            titulo="Cachorro"
            texto="O que se sabe até agora sobre a infecção por Covid-19 em animais"
            acao={() => {
                alert('acao 3');
            }}
          />

          <MeuCard
            imagem="https://www.gov.br/ibama/pt-br/assuntos/noticias/2020/entenda-as-regras-para-criacao-de-animais-silvestres/2020-07-17_araras_fotodiego-azevedo_ascomibama.jpeg/@@images/e2873ee1-d40e-4d4c-bde6-a139ddd2d3b0.jpeg"
            titulo="Araras"
            texto="O que se sabe até agora sobre a infecção por Covid-19 em animais"
            acao={() => {
                alert('acao 4');
            }}
          />

          <MeuCard
            imagem="http://www.fiocruz.br/biosseguranca/Bis/infantil/direitos_animais1.jpg"
            titulo="Araras"
            texto="O que se sabe até agora sobre a infecção por Covid-19 em animais"
            acao={() => {
                alert('acao 5');
            }}
          />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
