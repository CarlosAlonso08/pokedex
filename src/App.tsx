import React from "react";
import "./App.css";
import Listado from "./pages/Listado";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Listado/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
