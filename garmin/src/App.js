import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LineChart from './components/LineChart';
import Training from './Pages/Training';
import Nutrition from './Pages/Nutrition';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LastActivity from './components/LastActivity';

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
			<div className='row'>
				<div className='col-sm-6'>
					<LineChart />
				</div>
				<div className="col-sm-4">
					<LastActivity />
				</div>
			</div>
		</div>
	);
};

export default App;
