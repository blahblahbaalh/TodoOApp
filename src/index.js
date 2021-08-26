import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/layout/App";
import configureStore from "./app/store/configureStore";
import "./app/layout/styles.css";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./app/layout/theme";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
