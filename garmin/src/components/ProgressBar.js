import React from 'react';

const ProgressBar = () => {

  const barBackground = (current) => {
    let background;
    if (current < 0.1) {
      background = 'bg-danger'
    } else if (current > 0.1 & current < 0.9) {
      background = 'bg-warning'
    } else {
      background = 'bg-success'
    }
    return background
  }

	return (
		<div className='progress'>
			<div
				className={`progress-bar w-25 ${barBackground(0.1)}`}
				role='progressbar'
				aria-valuenow='25'
				aria-valuemin='0'
				aria-valuemax='100'
			>
				25%
			</div>
		</div>
	);
};

export default ProgressBar;
