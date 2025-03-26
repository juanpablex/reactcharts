import React from 'react';
import './Header.css';  // Puedes usar un archivo CSS para los estilos
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* <h1>Mi Aplicación</h1> */}
      </div>
      <nav className="navigation">
         <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
          <Link to="/empleados">Empleados</Link>
          <Link to="/productos">Productos</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
