import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Compra {
  uid: string;
  descricao: string;
  ok: boolean;
}

const adapter = createEntityAdapter<Compra>({
  // configurar qual é a "chave" da nossa entidade
  selectId: (compra) => compra.uid,
});

export const { selectAll, selectById } = adapter.getSelectors((state: any) => state.compras);

const slice = createSlice({
  // nome do slice
  name: "compras",
  // fornece o estado inicial do adapter
  initialState: adapter.getInitialState(),
  reducers: {
    adicionarItem: adapter.addOne,
    atualizarItem: adapter.updateOne,
    removerItem: adapter.removeOne,
  },
});

export const { adicionarItem, atualizarItem, removerItem } = slice.actions;

export default slice.reducer;
