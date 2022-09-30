import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>Aula 4</h1>
      <hr />
      <Link to={"/recados"}>Página de recados</Link>
    </>
  );
};

export default Home;
