import { combineReducers } from "@reduxjs/toolkit";
import pets from "./pets/petsSlice";
import posts from "./posts/postsSlice";
import post from "./posts/postSlice";

// Combina todos os reducers da aplicação
export default combineReducers({
  pets,
  posts,
  post,
});
