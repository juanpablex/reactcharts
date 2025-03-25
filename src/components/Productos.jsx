// import React, { useEffect, useRef } from "react";
// import { Line, Bar, Pie, Radar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js';

// // Registra los componentes necesarios de Chart.js
// ChartJS.register(
//   CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement
// );

// const Productos = () => {
//   const chartRefLine = useRef(null);
//   const chartRefBar = useRef(null);
//   const chartRefPie = useRef(null);
//   const chartRefRadar = useRef(null);

//   const dataLine = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Ventas de Productos",
//         data: [500, 600, 700, 900],
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.1
//       }
//     ]
//   };

//   const dataBar = {
//     labels: ["Producto A", "Producto B", "Producto C", "Producto D"],
//     datasets: [
//       {
//         label: "Ventas por Producto",
//         data: [150, 200, 250, 300],
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1
//       }
//     ]
//   };

//   const dataPie = {
//     labels: ["Electrónica", "Ropa", "Comida", "Juguetes"],
//     datasets: [
//       {
//         label: "Categorías de Productos",
//         data: [35, 25, 20, 20],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"]
//       }
//     ]
//   };

//   const dataRadar = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Rendimiento de Productos",
//         data: [4, 5, 3, 4],
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

// export default Productos;

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

// const Productos = () => {
//   const dataLine = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Ventas de Productos",
//         data: [500, 600, 700, 900],
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.1,
//       },
//     ],
//   };

//   const dataBar = {
//     labels: ["Producto A", "Producto B", "Producto C", "Producto D"],
//     datasets: [
//       {
//         label: "Ventas por Producto",
//         data: [150, 200, 250, 300],
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const dataPie = {
//     labels: ["Electrónica", "Ropa", "Comida", "Juguetes"],
//     datasets: [
//       {
//         label: "Categorías de Productos",
//         data: [35, 25, 20, 20],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
//       },
//     ],
//   };

//   const dataRadar = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril"],
//     datasets: [
//       {
//         label: "Rendimiento de Productos",
//         data: [4, 5, 3, 4],
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

// export default Productos;





import React from "react";
import { Link } from "react-router-dom";
import chartData from "../datos/charData.json";
import { Line, Bar, Doughnut,PolarArea } from "react-chartjs-2";
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

const Productos = () => {
  const { line, bar, doughnut, polararea } = chartData.productos;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📊 Gráficos de Productos</h2>
      <div  style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr", padding: "20px" }}>
      <div style={{ width: "100%", height: "300px" }}>
         <Line data={line} options={options}/>
       </div>
       <div style={{ width: "100%", height: "300px" }}>
         <Bar data={bar} options={options}/>
       </div>
       <div style={{ width: "100%", height: "300px" }}>
         <Doughnut data={doughnut} options={options}/>
       </div>
       <div style={{ width: "100%", height: "300px" }}>
         <PolarArea data={polararea} options={options}/>
       </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">🏠 Menú Principal</Link> | <Link to="/empleados">👨‍💼 Ir a Empleados</Link>
      </div>
    </div>
  );
};

export default Productos;
