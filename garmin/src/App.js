import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ChartPanel from './components/ChartPanel';

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='row'>
				<div className='col-sm-6'>
					<ChartPanel />
				</div>
				<div className='col-sm-6'>
					<ChartPanel />
				</div>
        <div className="row">
          <div className="col-sm">
            <ChartPanel />
          </div>
        </div>
			</div>
		</div>
	);
};

export default App;
