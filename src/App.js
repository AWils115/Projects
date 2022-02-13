import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import React, { useState, useEffect } from 'react';

import Search from './components/Search/Search';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';

function App() {
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
	 * * The useEffect() hook fetches the data from the rick and morty api,
	 * * with a watch put on the api, so if the api variable changes it will
	 * * load fresh data.
	 * * The async function will fetch the raw data and convert it to JSON.
	 */
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
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
					{/* Filter Component */}
					<div className='col-lg-8 col-12'>
						<div className='row'><Card results={results} /></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
