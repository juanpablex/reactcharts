// src/config/chartOptions.js
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Asegúrate de importar el plugin

// Configuración de las opciones para los gráficos
export const options = {
  plugins: {
    datalabels: {
      display: true, // Habilita la visualización de los datos
      color: 'black', // Color del texto
      font: {
        size: 12, // Tamaño de la fuente
      },
      formatter: (value) => value, // Muestra el valor directamente
    },
  },
  responsive: true,
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
      },
    },
    y: {
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

export default options;
