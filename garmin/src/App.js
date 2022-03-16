import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LineChart from './components/LineChart';
import Training from './Pages/Training';
import Nutrition from './Pages/Nutrition';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LastActivity from './components/LastActivity';
import ProgressBar from './components/ProgressBar';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
import MultiProgressBar from './components/MultiProgressBar';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/training' element={<Training />} />
				<Route path='/nutrition' element={<Nutrition />} />
			</Routes>
		</Router>
	);
};

const Home = () => {
	return (
		<div className='App h-100 container-fluid'>
			<div className='row mt-2 gx-1 h-50'>
				<div className='col-6'>
					<LineChart />
					<div className='mt-1'>
					<h5>Intensity Minutes</h5>
						<MultiProgressBar />
					</div>
				</div>
				<div className='col-2'>
					<LastActivity />
					<div className='mt-1'>
						<DoughnutChart />
					</div>
				</div>
				<div className='col-4'>
					<div>
						<h5>Steps</h5>
						<ProgressBar />
						<div className='position-absolute end-0 me-3'>
							<h6>Goal: 7500</h6>
						</div>
					</div>
					<div className='mt-2'>
						<h5>Floors</h5>
						<ProgressBar />
						<div className='position-absolute end-0 me-3'>
							<h6>Goal: 7500</h6>
						</div>
					</div>
					<div className='mt-2'>
						<h5>Calories</h5>
						<ProgressBar />
						<div className='position-absolute end-0 me-3'>
							<h6>Goal: 7500</h6>
						</div>
					</div>
					<div className='mt-4'>
						<PieChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
