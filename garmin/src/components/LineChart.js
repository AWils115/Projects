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

var times = require('../data/times.json')
var heartRate = require('../data/heartrate.json')

const LineChart = (props) => {
  Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin)

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
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 60,
            yMax: 60,
            borderColor: 'black',
            borderWidth: 2,
            label: {
              content: 'Resting',
              enabled: true,
            }
          }
        }
      }
    },
    elements: {
      point: {
        radius: 0,
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
      },
      {
        label: 'Resting Heart Rate',
        data: [],
        borderColor: 'black',
        backgroundColor: 'black'
      }
    ]
  }
	return (
    <div className='chart-container'>
      <Line options={options} data={data} />
    </div>);
};

export default LineChart;
