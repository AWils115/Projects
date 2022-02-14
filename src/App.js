import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Search from './components/Search/Search';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function App() {
	/**
	 * * This function is allows us to use React Router to navigate the pages of
	 * * the app. The Route will lead to the path the app will go to and the element
	 * * will get loaded.
	 */

	return (
		<Router>
			<div className='App'>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/episodes' element={<Episodes />} />
				<Route path='/location' element={<Location />} />
			</Routes>
		</Router>
	);
}

const Home = () => {
	/**
	 * ! Search bar to search characters
	 * * Two useState() hooks hold the values of our search keywords and current
	 * * page number.
	 * * We then update our api variable with the search term and page number and our
	 * * useEffect() will fetch the data when our api changes.
	 * * We pass our Search component into the return statement along with our state variables.
	 */
	let [pageNumber, updatePageNumber] = useState(1);
	let [search, setSearch] = useState('');

	/**
	 * ! Filter section
	 */
	let [status, updateStatus] = useState('');
	let [gender, updateGender] = useState('');
	let [species, updateSpecies] = useState('');

	/**
	 * ! API for Rick and Morty character data
	 * * The useState() hook stores the data in the fetchedData variable and
	 * * gives us a function key to change the varibale data whenever the useEffect()
	 * * hook fetches new data. The fetchedData variable stores the data we get
	 * * from the API, the updateFetchedData changes the data whenever we want.
	 * * We destructure the data in fetchedData into info and results to make it
	 * * easier later.
	 */
	let [fetchedData, updateFetchedData] = useState([]);
	let { info, results } = fetchedData;

	/**
	 * * The useEffect() hook fetches the data from the rick and morty api,
	 * * with a watch put on the api, so if the api variable changes it will
	 * * load fresh data.
	 * * The async function will fetch the raw data and convert it to JSON.
	 */

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((response) => response.json());
			updateFetchedData(data);
			console.log(data);
		})();
	}, [api]);

	/**
	 * ! Render the app
	 */
	return (
		<div className='App'>
			<h1 className='text-center mb-3'>Characters</h1>
			<Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
			<div className='container'>
				<div className='row'>
					<Filter
						pageNumber={pageNumber}
						status={status}
						updateStatus={updateStatus}
						updateGender={updateGender}
						updateSpecies={updateSpecies}
						updatePageNumber={updatePageNumber}
					/>
					<div className='col-lg-8 col-12'>
						<div className='row'>
							<Card results={results} />
						</div>
					</div>
				</div>
			</div>
			<Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
		</div>
	);
};

export default App;
