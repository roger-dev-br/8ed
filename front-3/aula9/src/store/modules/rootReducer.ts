import { combineReducers } from "@reduxjs/toolkit";
import contador from "./contador/ContadorSlice";
import usuario from "./usuario/UsuarioSlice";
import compras from "./compras/ComprasSlice";

// Combina todos os reducers da aplicação
export default combineReducers({
  contador,
  usuario,
  compras,
});
