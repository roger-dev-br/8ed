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
    diminuir: (state, parametro: PayloadAction<number>) => {
      if (state - parametro.payload <= 0) {
        return 0;
      } else {
        return state - parametro.payload;
      }
    },
    zerar: (state) => (state = 0),
  },
});

// ACTIONS
// exportei ações para alterar o estado
export const { incrementar, diminuir, zerar } = slice.actions;

// SELECTORS
// exportar a leitura do estado
export const getContador = (state: RootState) => state.contador;
export const getContadorDobro = (state: RootState) => state.contador * 2;

// Exporta o reducer para usar no STORE
export default slice.reducer;
