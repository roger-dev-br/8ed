import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsInstance } from "../../../services";

interface Post {
  id?: number;
  title: string;
  body: string;
}

export const adicionarPost = createAsyncThunk<Post, Post>("post/add", async (objeto) => {
  return await postsInstance.criar(objeto);
});

export const obterPostPorId = createAsyncThunk<Post, number>("post/getone", async (id) => {
  return await postsInstance.obtemUmPost(id);
});

const postSlice = createSlice({
  name: "post",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(adicionarPost.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(obterPostPorId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default postSlice.reducer;
