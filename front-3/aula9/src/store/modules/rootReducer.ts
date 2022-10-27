import { combineReducers } from "@reduxjs/toolkit";

import contador from "./contador/ContadorSlice";

export default combineReducers({
  contador,
});
