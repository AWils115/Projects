import React from 'react';
import FilterBTN from '../FilterBTN';

const Gender = ({ updateGender, updatePageNumber }) => {
    /**
     * * Adds filter buttons to the Gender category, we map over the possible genders and
     * * returns a button for each one. When the user clicks a button the gender variable is
     * * updated in the api.
     */

	let genders = ['female', 'male', 'genderless', 'unknown'];
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header' id='headingThree'>
				<button
					className='accordion-button collapsed'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#collapseThree'
					aria-expanded='false'
					aria-controls='collapseThree'
				>
					{' '}
					Gender{' '}
				</button>
			</h2>
			<div
				id='collapseThree'
				className='accordion-collapse collapse'
				aria-labelledby='headingThree'
				data-bs-parent='#accordionExample'
			>
				<div className='accordion-body d-flex flex-wrap gap-3'>
					{genders.map((items, index) => {
						return (
							<FilterBTN
								name='gender'
								index={index}
								key={index}
								updatePageNumber={updatePageNumber}
								task={updateGender}
								input={items}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Gender;
