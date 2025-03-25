import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empleados from "./components/Empleados";
import Productos from "./components/Productos";
import "./App.css";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Bienvenido al Panel de Control 📊</h2>}
        />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;
