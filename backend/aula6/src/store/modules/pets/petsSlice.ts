import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { petsService } from "../../../services/index";

export const getAllPets = createAsyncThunk("pets/getall", async () => {
  const resposta = await petsService.getAll();

  if (!resposta.data.sucesso) {
    return [];
  }

  return resposta.data.data;
});

const initialState: any[] = [];

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllPets.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

// exporta o slice
export default petsSlice.reducer;
