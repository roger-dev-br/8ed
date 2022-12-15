import { Container } from "@mui/material";

const Listagem: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Listagem de Pets</h1>

        <table border={1} width="100%">
            <thead>
                <tr>
                    <th># ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nome do Pet #1</td>
                </tr>
            </tbody>
        </table>
      </Container>
    </>
  );
};

export default Listagem;
