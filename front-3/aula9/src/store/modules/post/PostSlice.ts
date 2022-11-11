import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  userId: number;
  title: string;
  id: number;
  body: string;
}

interface PostState {
  loading: boolean;
  error: string | null;
  data: Post[] | null;
}

export const getPosts = createAsyncThunk("posts/getAll", async (data, thunkApi) => {
  try {
    const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=100");
    return response.data;
  } catch (error: any) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});

const initialState = {
  loading: false,
  error: null,
  data: null,
} as PostState;

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
