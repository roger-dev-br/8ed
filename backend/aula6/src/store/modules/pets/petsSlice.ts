import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { petsService } from "../../../services/index";

export const getAllPets = createAsyncThunk("pets/getall", async () => {
  const resposta = await petsService.getAll();

  if (!resposta.data.sucesso) {
    return [];
  }

  return resposta.data.data;
});

// Para facilitar a utilização criei uma Interface
interface Pet {
  codigo?: number;
  nome: string;
  observacao?: string | null;
}

// Crio o Thunk com o tipo do retorno e o tipo da Entrada <Pet, Pet>, ou seja,
// entra um Pet sem codigo, sai um pet Cadastrado
export const addPet = createAsyncThunk<Pet, Pet>("pets/add", async (pet) => {
  // envio a requisição para a classe de serviço q
  // via axios envia para o backend e Zaz
  const resposta = await petsService.create(pet);

  return resposta.data.data;
});

const initialState: any[] = [];

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPets.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        return [...state, action.payload];
      });
  },
});

// exporta o slice
export default petsSlice.reducer;
