import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./css/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
