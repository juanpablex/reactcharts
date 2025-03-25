// import React, { useEffect, useRef } from "react";
// import { Line, Bar, Pie, Radar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js';

// // Registra los componentes necesarios de Chart.js
// ChartJS.register(
//   CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement
// );

// const Empleados = () => {
//   const chartRefLine = useRef(null);
//   const chartRefBar = useRef(null);
//   const chartRefPie = useRef(null);
//   const chartRefRadar = useRef(null);

//   const dataLine = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Crecimiento de Empleados",
//         data: [50, 60, 70, 90],
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.1
//       }
//     ]
//   };

//   const dataBar = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Empleados Contratados",
//         data: [10, 15, 20, 25],
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1
//       }
//     ]
//   };

//   const dataPie = {
//     labels: ["Marketing", "Desarrollo", "Ventas", "Soporte"],
//     datasets: [
//       {
//         label: "Departamentos",
//         data: [30, 40, 20, 10],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"]
//       }
//     ]
//   };

//   const dataRadar = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Rendimiento de Empleados",
//         data: [3, 4, 2, 5],
//         fill: true,
//         backgroundColor: "rgba(179, 181, 198, 0.2)",
//         borderColor: "rgba(179, 181, 198, 1)",
//         borderWidth: 1
//       }
//     ]
//   };

//   useEffect(() => {
//     return () => {
//       // Destruir cada gráfico cuando el componente se desmonte
//       if (chartRefLine.current) {
//         const chartInstance = chartRefLine.current.chartInstance;
//         if (chartInstance) chartInstance.destroy();
//       }
//       if (chartRefBar.current) {
//         const chartInstance = chartRefBar.current.chartInstance;
//         if (chartInstance) chartInstance.destroy();
//       }
//       if (chartRefPie.current) {
//         const chartInstance = chartRefPie.current.chartInstance;
//         if (chartInstance) chartInstance.destroy();
//       }
//       if (chartRefRadar.current) {
//         const chartInstance = chartRefRadar.current.chartInstance;
//         if (chartInstance) chartInstance.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="charts-grid">
//       <div className="chart">
//         <Line ref={chartRefLine} data={dataLine} />
//       </div>
//       <div className="chart">
//         <Bar ref={chartRefBar} data={dataBar} />
//       </div>
//       <div className="chart">
//         <Pie ref={chartRefPie} data={dataPie} />
//       </div>
//       <div className="chart">
//         <Radar ref={chartRefRadar} data={dataRadar} />
//       </div>
//     </div>
//   );
// };

// export default Empleados;

// import React from "react";
// import { Line, Bar, Pie, Radar } from "react-chartjs-2";
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
//   ArcElement // Necesario para gráficos de pastel
// );

// const Empleados = () => {
//   const dataLine = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Crecimiento de Empleados",
//         data: [50, 60, 70, 90],
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.1,
//       },
//     ],
//   };

//   const dataBar = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Empleados Contratados",
//         data: [10, 15, 20, 25],
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const dataPie = {
//     labels: ["Marketing", "Desarrollo", "Ventas", "Soporte"],
//     datasets: [
//       {
//         label: "Departamentos",
//         data: [30, 40, 20, 10],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
//       },
//     ],
//   };

//   const dataRadar = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Rendimiento de Empleados",
//         data: [3, 4, 2, 5],
//         fill: true,
//         backgroundColor: "rgba(179, 181, 198, 0.2)",
//         borderColor: "rgba(179, 181, 198, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr", padding: "20px" }}>
//       <div style={{ width: "100%", height: "300px" }}>
//         <Line data={dataLine} />
//       </div>
//       <div style={{ width: "100%", height: "300px" }}>
//         <Bar data={dataBar} />
//       </div>
//       <div style={{ width: "100%", height: "300px" }}>
//         <Pie data={dataPie} />
//       </div>
//       <div style={{ width: "100%", height: "300px" }}>
//         <Radar data={dataRadar} />
//       </div>
//     </div>
//   );
// };

// export default Empleados;


import React from "react";
import { Link } from "react-router-dom";
import chartData from "../datos/charData.json";
import { Line, Bar, Pie,Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement // Necesario para gráficos de pastel
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';  
// 🔹 Registra los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement, // Necesario para gráficos de pastel
  ChartDataLabels 
);
import options from "../config/chartOptions";

const Empleados = () => {
  const { line, bar, pie, radar } = chartData.empleados;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📊 Gráficos de Empleados</h2>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr", padding: "20px" }}>
      <div style={{ width: "100%", height: "300px" }}>
         <Line data={line} options={options}/>
       </div>
       <div style={{ width: "100%", height: "300px" }}>
         <Bar data={bar} options={options}/>
       </div>
       <div style={{ width: "100%", height: "300px" }}>
         <Pie data={pie} options={options}/>
       </div>
       <div style={{ width: "100%", height: "300px" }}>
         <Radar data={radar} options={options}/>
       </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">🏠 Menú Principal</Link> | <Link to="/productos">📦 Ir a Productos</Link>
      </div>
    </div>
  );
};

export default Empleados;

