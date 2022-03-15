import React from 'react';
import {
	Chart as Chartjs,
	ArcElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
	Chartjs.register(ArcElement, Title, Tooltip, Legend);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				display: false,
			},
			title: {
				display: true,
				text: 'Active Minutes',
			},
		},
	};

	const data = {
		labels: ['Highly Active', 'Active', 'Sedentary'],
		datasets: [
			{
				label: 'Data1',
				data: [420/60, 1551/60, 43509/60],
				backgroundColor: ['red', 'yellow', 'green'],
        borderColor: ['red', 'yellow', 'green'],
			},
		],
	};

	return (
		<div className='card pb-1'>
			<Pie options={options} data={data} />
		</div>
	);
};

export default PieChart;