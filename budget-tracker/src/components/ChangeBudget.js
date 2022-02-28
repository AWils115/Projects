import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeBudget = () => {
	const { dispatch } = useContext(AppContext);

	const [budget, setBudget] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: 'CHANGE_BUDGET',
			payload: budget,
		});

		setBudget('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='budget'>Budget</label>
					<input
						type='text'
						required
						className='form-control'
						id='budget'
						value={budget}
						onChange={(e) => setBudget(e.target.value)}
					/>
				</div>
				<div className='row'>
					<div className='col-sm'>
						<button className='btn btn-primary mt-3'>Save</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ChangeBudget;
