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

var times = require('../data/times.json')
var heartRate = require('../data/heartrate.json')

const LineChart = (props) => {
  Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: props.legend,
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  const labels = props.xAxis

  const data = {
    labels,
    datasets: [
      {
        label: props.label,
        data: props.yAxis,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)'
      }
    ]
  }
	return (
    <div className='chart-container'>
      <Line options={options} data={data} />
    </div>);
};

export default LineChart;
