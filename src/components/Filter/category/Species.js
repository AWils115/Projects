import React from 'react';
import FilterBTN from '../FilterBTN';

const Species = ({ updateSpecies, updatePageNumber }) => {
      /**
     * * Adds filter buttons to the Species category, we map over the possible species and
     * * returns a button for each one. When the user clicks a button the species variable is
     * * updated in the api.
     */
    
	let species = [
		'Human',
		'Alien',
		'Humanoid',
		'Poopybutthole',
		'Mythological',
		'Unknown',
		'Animal',
		'Disease',
		'Robot',
		'Cronenberg',
		'Planet',
	];
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header' id='headingTwo'>
				<button
					className='accordion-button collapsed'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#collapseTwo'
					aria-expanded='false'
					aria-controls='collapseTwo'
				>
					Species
				</button>
			</h2>
			<div
				id='collapseTwo'
				className='accordion-collapse collapse'
				aria-labelledby='headingTwo'
				data-bs-parent='#accordionExample'
			>
				<div className='accordion-body d-flex flex-wrap gap-3'>
					{species.map((item, index) => {
						return (
							<FilterBTN
								name='species'
								index={index}
								key={index}
								updatePageNumber={updatePageNumber}
								task={updateSpecies}
								input={item}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Species;
