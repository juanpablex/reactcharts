import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const EmployeeCharts = () => {
  const performanceRef = useRef(null);
  const ageRef = useRef(null);
  const departmentRef = useRef(null);
  const genderRef = useRef(null);

  useEffect(() => {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);

    const employeesData = {
      performance: [65, 70, 80, 90, 85],
      age: [30, 25, 35, 45, 50],
      departments: ['Ventas', 'IT', 'Marketing', 'HR', 'Logística'],
      gender: [60, 40]
    };

    const totalPerformances = employeesData.performance.reduce((acc, val) => acc + val, 0);
    const totalAges = employeesData.age.reduce((acc, val) => acc + val, 0);
    const totalDepartments = employeesData.performance.reduce((acc, val) => acc + val, 0);
    const totalGenders = employeesData.gender.reduce((acc, val) => acc + val, 0);

    const performanceChart = new Chart(performanceRef.current, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Rendimiento de Empleados',
          data: employeesData.performance,
          backgroundColor: ['rgba(255, 87, 51, 0.6)', 'rgba(51, 255, 87, 0.6)', 'rgba(51, 87, 255, 0.6)', 'rgba(255, 51, 166, 0.6)'],
          borderColor: ['rgba(255, 87, 51, 1)', 'rgba(51, 255, 87, 1)', 'rgba(51, 87, 255, 1)', 'rgba(255, 51, 166, 1)'],
          borderWidth: 2,
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            color: 'black',
            font: { weight: 'bold', size: 20 },
            formatter: (value) => `${value} (${((value / totalPerformances) * 100).toFixed(1)}%)`
          }
        },
        scales: {
          x: {
            ticks: { font: { size: 16 } }
          },
          y: {
            ticks: { font: { size: 16 } }
          }
        }
      }
    });

    const ageChart = new Chart(ageRef.current, {
      type: 'bar',
      data: {
        labels: ['Juan', 'Ana', 'Carlos', 'Marta', 'Luis'],
        datasets: [{
          label: 'Edad de Empleados',
          data: employeesData.age,
          backgroundColor: ['rgba(255, 87, 51, 0.6)', 'rgba(51, 255, 87, 0.6)', 'rgba(51, 87, 255, 0.6)', 'rgba(255, 51, 166, 0.6)'],
          borderColor: ['rgba(255, 87, 51, 1)', 'rgba(51, 255, 87, 1)', 'rgba(51, 87, 255, 1)', 'rgba(255, 51, 166, 1)'],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'bottom',
            color: 'black',
            font: { weight: 'bold', size: 20 },
            formatter: (value) => `${value} (${((value / totalAges) * 100).toFixed(1)}%)`
          }
        },
        scales: {
          x: { ticks: { font: { size: 16 } } },
          y: { ticks: { font: { size: 16 } } }
        }
      }
    });

    const departmentChart = new Chart(departmentRef.current, {
      type: 'pie',
      data: {
        labels: employeesData.departments,
        datasets: [{
          label: 'Distribución por Departamento',
          data: [30, 25, 20, 15, 10],
          backgroundColor: ['rgba(255, 87, 51, 0.6)', 'rgba(51, 255, 87, 0.6)', 'rgba(51, 87, 255, 0.6)', 'rgba(255, 51, 166, 0.6)'],
          borderColor: ['rgba(255, 87, 51, 1)', 'rgba(51, 255, 87, 1)', 'rgba(51, 87, 255, 1)', 'rgba(255, 51, 166, 1)'],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            color: 'black',
            font: { weight: 'bold', size: 20 },
            formatter: (value) => `${value} (${((value / totalDepartments) * 100).toFixed(1)}%)`
          }
        }
      }
    });

    const genderChart = new Chart(genderRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Masculino', 'Femenino'],
        datasets: [{
          label: 'Distribución por Género',
          data: employeesData.gender,
          backgroundColor: ['rgba(255, 87, 51, 0.6)', 'rgba(51, 255, 87, 0.6)', 'rgba(51, 87, 255, 0.6)', 'rgba(255, 51, 166, 0.6)'],
          borderColor: ['rgba(255, 87, 51, 1)', 'rgba(51, 255, 87, 1)', 'rgba(51, 87, 255, 1)', 'rgba(255, 51, 166, 1)'],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            color: 'black',
            font: { weight: 'bold', size: 20 },
            formatter: (value) => `${value} (${((value / totalGenders) * 100).toFixed(1)}%)`
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>Página de Empleados</h1>
      <div className="chart-container">
        <canvas ref={performanceRef} width="400" height="200"></canvas>
        <canvas ref={ageRef} width="400" height="200"></canvas>
        <canvas ref={departmentRef} width="400" height="200"></canvas>
        <canvas ref={genderRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default EmployeeCharts;