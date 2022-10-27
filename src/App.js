import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import MainRouter from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
