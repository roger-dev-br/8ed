import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "aula9",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // Trocou o rootReducer, pelo persistedReducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Exportando o Roostate para poder ler de fora
export type RootState = ReturnType<typeof store.getState>;

// Export um Disparador
export type AppDispatch = typeof store.dispatch;

export { store };

export const persistor = persistStore(store);
