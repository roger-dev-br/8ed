import { combineReducers } from "@reduxjs/toolkit";
import pets from "./pets/petsSlice";

// Combina todos os reducers da aplicação
export default combineReducers({
  pets,
});
