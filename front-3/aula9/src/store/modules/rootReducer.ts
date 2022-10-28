import { combineReducers } from "@reduxjs/toolkit";
import contador from "./contador/ContadorSlice";

// Combina todos os reducers da aplicação
export default combineReducers({
  contador,
});
