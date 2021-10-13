import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { createStore } from "redux";
import { addTodo } from "./store/redux/reducer/mainReducer";
import "./index.css";
import App from "./App";

const store = createStore(addTodo);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
