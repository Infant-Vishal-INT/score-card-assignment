import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
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
