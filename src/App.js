import "./styles/Main.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { STORE } from "./utils/Variables";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={STORE}>
          <Router></Router>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
