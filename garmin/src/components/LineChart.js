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
import annotationPlugin from 'chartjs-plugin-annotation';

var times = require('../data/times.json');
var heartRate = require('../data/heartrate.json');

const LineChart = (props) => {
	Chartjs.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend,
		annotationPlugin
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: 'top',
			},
			title: {
				display: true,
				text: 'Heart Rate',
			},
			annotation: {
				annotations: {
					line1: {
						type: 'line',
						yMin: 60,
						yMax: 60,
						borderColor: 'black',
						borderWidth: 2,
						label: {
							content: `Resting`,
							enabled: true,
						},
					},
				},
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
	};

  const data = {
    labels: times,
    datasets: [
      {
        label: 'Heart Rate',
        data: heartRate,
        borderColor: 'red',
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

	return (
		<div className='card'>
			<Line options={options} data={data} />
		</div>
	);
};

export default LineChart;
