import "./styles/Main.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers/RootReducer";
import GetUser from "./actions/GetUser";

function App() {
  const store = configureStore({
    reducer: RootReducer,
    devTools: true,
  });

  store.dispatch(GetUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Router></Router>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
