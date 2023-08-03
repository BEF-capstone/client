import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

import { configureStore } from "@reduxjs/toolkit";
import recipeDataSlice from "./redux/recipeDataSlice.js";
import authDataSlice from "./redux/authDataSlice.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEFCF0",
      // #FEFCF0
    },
    secondary: {
      main: "#241023",
      text: "#FFFFFF",
    },
  },
});

/* Redux Reducers & Store */
const rootReducer = {
  recipeData: recipeDataSlice,
  userData: authDataSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
