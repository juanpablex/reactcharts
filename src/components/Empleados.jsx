// import React from "react";
// import { Link } from "react-router-dom";
// import chartData from "../datos/charData.json";
// import { Line, Bar, Pie,Radar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   ArcElement // Necesario para gráficos de pastel
// } from "chart.js";
// import ChartDataLabels from 'chartjs-plugin-datalabels';  
// // 🔹 Registra los componentes necesarios de Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   ArcElement, // Necesario para gráficos de pastel
//   ChartDataLabels 
// );
// import options from "../config/chartOptions";

// const Empleados = () => {
//   const { line, bar, pie, radar } = chartData.empleados;

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>📊 Gráficos de Empleados</h2>
//       <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr", padding: "20px" }}>
//       <div style={{ width: "100%", height: "300px" }}>
//          <Line data={line} options={options}/>
//        </div>
//        <div style={{ width: "100%", height: "300px" }}>
//          <Bar data={bar} options={options}/>
//        </div>
//        <div style={{ width: "100%", height: "300px" }}>
//          <Pie data={pie} options={options}/>
//        </div>
//        <div style={{ width: "100%", height: "300px" }}>
//          <Radar data={radar} options={options}/>
//        </div>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <Link to="/">🏠 Menú Principal</Link> | <Link to="/productos">📦 Ir a Productos</Link>
//       </div>
//     </div>
//   );
// };

// export default Empleados;


import React from 'react';
import { Link } from 'react-router-dom';
import chartData from "../datos/charData.json";
import Grafica from '../common/Grafica';  // Importa el componente de gráficos
import Summary from "../common/Summary";
import options from "../config/chartOptions"; // Suponiendo que tienes un archivo con opciones globales

const Empleados = () => {
  const { line, bar, pie, radar } = chartData.empleados;
  const ventasTotales = line.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
  const margen = 70;  // Este es un ejemplo de cómo manejarlo, cámbialo a tu lógica.
  const margenPorcentaje = (margen / ventasTotales) * 100;
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📊 Gráficos de Empleados</h2>
      <Summary 
      ventasTotales={ventasTotales}
      margen={margen}
      margenPorcentaje={margenPorcentaje}
      />
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(4, 1fr)", padding: "20px" }}>
        <Grafica chartType="line" data={line} options={options} />
        <Grafica chartType="bar" data={bar} options={{...options, indexAxis: "y"}} />
        <Grafica chartType="pie" data={pie} options={options} />
        <Grafica chartType="radar" data={radar} options={options} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">🏠 Menú Principal</Link> | <Link to="/productos">📦 Ir a Productos</Link>
      </div>
    </div>
  );
};

export default Empleados;
