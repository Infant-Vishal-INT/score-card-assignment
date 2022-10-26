import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import MainRouter from "./routes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </div>
  );
}

export default App;
