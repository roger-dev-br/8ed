import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

interface InputUsuarioProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputUsuario: React.FC<InputUsuarioProps> = ({ onChange }) => {
  return (
    <>
      <TextField id="usuario" label="Nome do Usuário" onChange={onChange} />
    </>
  );
};

export default InputUsuario;
