import React from 'react';
import { Line, Bar, Pie, Radar, Doughnut, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
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

const Grafica = ({ chartType, data, options }) => {
  let Chart;
  
  // Dependiendo del chartType, asignamos el tipo de gráfico correspondiente
  switch (chartType) {
    case 'line':
      Chart = Line;
      break;
    case 'bar':
      Chart = Bar;
      break;
    case 'pie':
      Chart = Pie;
      break;
    case 'radar':
      Chart = Radar;
      break;
    case 'doughnut':
        Chart = Doughnut;
    break;
    case 'polarArea':
        Chart = PolarArea;
    break;
    default:
      Chart = Line; // Default gráfico
  }

  return (
    <div style={{ width: "100%", height: "33vh", padding: "10px" }}>
      <Chart data={data} options={options} />
    </div>
  );
};

export default Grafica;
