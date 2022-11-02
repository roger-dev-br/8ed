import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AppRoutes from "./routes/AppRoutes";
import { persistor, store } from "./store/modules";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <AppRoutes />
      </PersistGate>
    </Provider>
  </>
);
