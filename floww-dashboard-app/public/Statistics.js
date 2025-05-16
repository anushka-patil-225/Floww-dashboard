import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = ({ tasks }) => {
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ['#4caf50', '#f44336'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ width: '250px', height: '250px', margin: '0 auto' }}>
      <h2>Statistics</h2>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;