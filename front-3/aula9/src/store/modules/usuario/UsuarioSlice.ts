import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// Defino um valor inicial
// Serve para setar o valor no primeiro acesso
// e tipar o nosso estado
const valorInicial: string = "";

const slice = createSlice({
  name: "usuario",
  initialState: valorInicial,
  reducers: {
    // -- lista das ações
    alterarNomeUsuario: (state, parametro: PayloadAction<string>) => (state = parametro.payload),
  },
});

// exportei ações para alterar o estado
export const { alterarNomeUsuario } = slice.actions;

// exportar a leitura do estado
export const selectorUsuario = (state: RootState) => state.usuario;

// Exporta o reducer para usar no STORE
export default slice.reducer;
