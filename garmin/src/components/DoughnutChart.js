import React from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  Chartjs.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
		plugins: {
			legend: {
				position: 'top',
				display: false,
			},
			title: {
				display: true,
				text: 'Stress',
			},
		},
  }

  const data = {
    labels: ['Rest', 'Activity', 'Other'],
    datasets: [
      {
        label: 'Data1',
        data: [1020, 3420, 240],
        backgroundColor: ['blue', 'orange', 'red'],
        borderColor: ['blue', 'orange', 'red']
      }
    ]
  }

  return (
    <div className="card pb-1">
      <Doughnut options={options} data={data} />
    </div>
  )
}

export default DoughnutChart;