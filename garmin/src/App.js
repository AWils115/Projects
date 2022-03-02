import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ChartPanel from './components/ChartPanel';
import Training from './Pages/Training';
import Nutrition from './Pages/Nutrition';

import 'bootstrap/dist/css/bootstrap.min.css';

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
					<ChartPanel />
				</div>
				<div className='col-sm-6'>
					<ChartPanel />
				</div>
				<div className='row'>
					<div className='col-sm'>
						<ChartPanel />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
