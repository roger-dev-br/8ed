import { Link } from "react-router-dom";
import DivPrincipal from "../../components/minha-div/DivPrincipal";
import MinhaDiv from "../../components/minha-div/MinhaDiv";

const Trabalho: React.FC = () => {
  return (
    <>
      <DivPrincipal>
        <MinhaDiv>1</MinhaDiv>
        <MinhaDiv>2</MinhaDiv>
      </DivPrincipal>

      <Link to="/">Voltar para a home</Link>
    </>
  );
};

export default Trabalho;
