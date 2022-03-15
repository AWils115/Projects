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
		<div className='App'>
			<div className='row mt-2 gx-1 container-fluid'>
				<div className='col-6'>
					<LineChart />
				</div>
				<div className="col-2">
					<LastActivity />
				</div>
				<div className="col-4">
					<ProgressBar />
				</div>
			</div>
		</div>
	);
};

export default App;
