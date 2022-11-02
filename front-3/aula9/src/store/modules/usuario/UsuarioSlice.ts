import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// Defino um valor inicial
// Serve para setar o valor no primeiro acesso
// e tipar o nosso estado
export interface Usuario {
  id: number;
  nome: string;
}

const valorInicial: Usuario[] = [];

const slice = createSlice({
  name: "usuario",
  initialState: valorInicial,
  reducers: {
    // -- lista das ações
    // alterarNomeUsuario: (state, parametro: PayloadAction<string>) => null,
    novoUsuario: (state, parametro: PayloadAction<Usuario>) => {
      // adicionar o novo usuario no estado atual
      const index = state.findIndex((f) => f.nome === parametro.payload.nome);
      if (index === -1) {
        state.push(parametro.payload);
      }
      // state = [...state, parametro.payload];
    },
    removerUsuario: (state, parametro: PayloadAction<Usuario>) => {
      // removo um usuario da lista
      const index = state.findIndex((f) => f.id === parametro.payload.id);
      if (index >= 0) {
        state.splice(index, 1);
      }
    },
  },
});

// exportei ações para alterar o estado
// export const { alterarNomeUsuario } = slice.actions;

// exportar a leitura do estado
// export const selectorUsuario = (state: RootState) => state.usuario;

// Exporta o reducer para usar no STORE
export default slice.reducer;
