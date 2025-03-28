import React from 'react';
import './Summary.css';  // Para agregar estilos adicionales
import chartData from "../datos/charData.json";

const Summary = ({ ventasTotales, margen, margenPorcentaje }) => {


  return (
    <div className="header-container">
      <div className="header-item">
        <span className="header-title">Ventas Totales</span>
        <span className="header-data">$ {ventasTotales}</span>
      </div>
      <div className="header-item">
        <span className="header-title">Margen $</span>
        <span className="header-data">$ {margen}</span>
      </div>
      <div className="header-item">
        <span className="header-title">Margen %</span>
        <span className="header-data">{margenPorcentaje.toFixed(2)} %</span>
      </div>
    </div>
  );
};

export default Summary;
