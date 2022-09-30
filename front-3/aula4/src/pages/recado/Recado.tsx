import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Recado: React.FC = () => {
  return (
    <>
      <Header titulo="Recados" />
      <Link to={"/"}>Página inicial</Link>
    </>
  );
};

export default Recado;