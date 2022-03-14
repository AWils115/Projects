import React from 'react';

const LastActivity = () => {
	const data = require('../data/lastactivity.json');

	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>Last Activity: {data.activityName}</h5>
				<div className='card-body'>
          <p>Duration: {Math.round(data.duration/60)} minutes</p>
          <p>Calories: {data.calories}</p>
          <p>Avg Heart Rate: {data.averageHR}</p>
          <p>Max Heart Rate: {data.maxHR}</p>
          <p>{data.activityName==='Strength' ? `Sets:  ${data.activeSets}` : `Distance: ${data.distance}`}</p>
				</div>
			</div>
		</div>
	);
};

export default LastActivity;
