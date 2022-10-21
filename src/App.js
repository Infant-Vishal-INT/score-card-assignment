import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
