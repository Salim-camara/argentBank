import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
