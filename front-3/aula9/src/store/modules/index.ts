import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "aula9",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // Trocou o rootReducer, pelo persistedReducer
  reducer: persistedReducer,
});

// Exportando o Roostate para poder ler de fora
export type RootState = ReturnType<typeof store.getState>;

// Export um Disparador
export type AppDispatch = typeof store.dispatch;

export { store };

export const persistor = persistStore(store);
