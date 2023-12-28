import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels'; // Import the datalabels plugin

const BarChart = () => {
  useEffect(() => {
    const chartCanvas = document.getElementById('myChart');
    if (chartCanvas) {
      const ctx = chartCanvas.getContext('2d');
      Chart.defaults.font.family = 'Mulish';

      // Chart data
      const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Hours',
          data: [5, 7, 4, 6, 8, 9, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
          borderColor: 'rgba(75, 192, 192, 1)', // Border color
          borderWidth: 1,
          datalabels: {}
        }]
      };

      // Chart options
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                family: 'Mulish', // Your font family
                size: 11,
              },
            },
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'Mulish', // Your font family
                size: 11,
              },
            },
          },
        },
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: 'My Bar Chart',
            font: {
              family: 'Mulish',
              size: 11, // Font size for the title
            },
          },
        },
      };

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });

      // Cleanup function to destroy the chart when the component unmounts
      return () => {
        myChart.destroy();
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default BarChart;
