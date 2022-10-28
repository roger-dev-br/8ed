import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// Defino um valor inicial
// Serve para setar o valor no primeiro acesso
// e tipar o nosso estado
const valorInicial: number = 0;

const slice = createSlice({
  name: "contador",
  initialState: valorInicial,
  reducers: {
    // -- lista das ações
    incrementar: (state, parametro: PayloadAction<number>) => (state += parametro.payload),
  },
});

// exportei ações para alterar o estado
export const { incrementar } = slice.actions;

// exportar a leitura do estado
export const getContador = (state: RootState) => state.contador;

// Exporta o reducer para usar no STORE
export default slice.reducer;
