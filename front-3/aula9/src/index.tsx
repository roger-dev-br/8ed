import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

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
