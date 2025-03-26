import React from "react";
import { Link } from "react-router-dom";
import Header from "./common/Header";

const Menu = () => (
  <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#f0f0f0" }}>
    <Header/>
    {/* <Link to="/">🏠 Menú Principal</Link> */}
    {/* <Link to="/empleados">👨‍💼 Empleados</Link>
    <Link to="/productos">📦 Productos</Link> */}
  </nav>
);

export default Menu;
