import React from 'react';
import {
	Chart as Chartjs,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const ChartPanel = () => {
  Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar']

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 4, 7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: 'Dataset 2',
        data: [15, 8, 19],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)'
      }
    ]
  }
	return <Line options={options} data={data} />;
};

export default ChartPanel;
