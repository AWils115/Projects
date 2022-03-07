import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LineChart from './components/LineChart';
import Training from './Pages/Training';
import Nutrition from './Pages/Nutrition';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';

var times = require('./data/times.json')
var heartRate = require('./data/heartrate.json')

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='./training' element={<Training />} />
				<Route path='./nutrition' element={<Nutrition />} />
			</Routes>
		</Router>
	);
};

const Home = () => {
	return (
		<div className='App'>
			<div className='row'>
				<div className='col-sm-6'>
					<LineChart yAxis={heartRate} xAxis={times} title='Daily Heart Rate' legend={false} label='Heart Rate' />
				</div>
				<div className='col-sm-6'>
					<LineChart />
				</div>
				<div className='row justify-content-md-center'>
					<div className='col-sm-10'>
						<LineChart />
					</div>
				</div>
				<div className='row justify-content-md-center'>
					<div className='col-sm-10'>
						<LineChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
