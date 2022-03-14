import React from 'react';

const ActivityCard = () => {
	return (
		<div className='card'>
			<div className='row g-0'>
				<div className='col-md-1'>
					<p>Activity Icon</p>
				</div>
				<div className='col-md-1'>
					<p>Date</p>
				</div>
        <div className='col-md-5'>
					<p>Title</p>
				</div>
        <div className='col-md-1'>
					<p>Sets/Distance</p>
				</div>
        <div className='col-md-1'>
					<p>Duration</p>
				</div>
        <div className='col-md-1'>
					<p>Average HR</p>
				</div>
        <div className='col-md-1'>
					<p>Max HR</p>
				</div>
        <div className='col-md-1'>
					<p>Calories</p>
				</div>
			</div>
		</div>
	);
};

export default ActivityCard;
