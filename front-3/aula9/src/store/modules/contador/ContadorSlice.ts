import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

const initialState: number = 0;

const slice = createSlice({
  name: "contador",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
});

// exportando as ações
export const { increment } = slice.actions;

// Seletor que disponibiliza o estado atual do contador
export const selectCount = (state: RootState) => state.contador;

export default slice.reducer;
