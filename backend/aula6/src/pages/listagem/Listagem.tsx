import { Container } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { getAllPets, addPet } from "../../store/modules/pets/petsSlice";

const Listagem: React.FC = () => {
  const dispath = useAppDispatch();

  // Inicialmente data será = []
  const data = useAppSelector((state) => state.pets);

  useEffect(() => {
    // Buscar os pets
    dispath(getAllPets());

    console.log("useEffect");

    // após o fullfiled do thunk
    // data será um array preenchido
  }, [dispath]);

  function novoPet() {
    const nome = prompt("") ?? "";
    dispath(addPet({ nome }));
  }

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
            {data &&
              data.map((pet) => (
                <tr key={pet.codigo}>
                  <td>{pet.codigo}</td>
                  <td>{pet.nome}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <br />
        <button onClick={() => novoPet()}>Novo</button>
      </Container>
    </>
  );
};

export default Listagem;
