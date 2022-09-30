import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header titulo="Aula 4" />
      <Link to={"/recados"}>Página de recados</Link>
    </>
  );
};

export default Home;
