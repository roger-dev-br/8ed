# Instalar dependencias

```bash
npm install react-redux
npm install @reduxjs/toolkit
npm install redux-devtools-extension
```

# Criar pasta
/src/store/modules/contador

# Criar o slice para o contador
```typescript
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
```

# Criar o root Reducer
/src/store/modules/rootReducer.ts

```typescript
import { combineReducers } from "@reduxjs/toolkit";

import contador from "./contador/ContadorSlice";

export default combineReducers({
  contador,
});
```

# Criar a Store no Index
```typescript
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };
```

# Criar os hooks
```typescript
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

# Criar o Provider para a Store no App Principal

```typescript
import { CssBaseline } from "@mui/material";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Provider store={store}>
      <CssBaseline />
      <AppRoutes />
    </Provider>
  </>
);
```