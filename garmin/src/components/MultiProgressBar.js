import React from 'react';

const MultiProgressBar = () => {
  const getProportions = (mod, vig) => {
    const total = mod + vig;
    const modProp = Math.round((mod/total) * 100);
    const vigProp = Math.round((vig/total) * 100);
    return [String(modProp), String(vigProp)];
  }

  const [mod, vig] = getProportions(22, 30);

	return (
		<div className='progress'>
			<div
				className={`progress-bar bg-success`}
        style={{width: `${mod}%`}}
				role='progressbar'
				aria-valuenow={`${mod}`}
				aria-valuemin='0'
				aria-valuemax='100'
			>Moderate</div>
      <div
				className={`progress-bar bg-danger`}
        style={{width: `${vig}%`}}
				role='progressbar'
				aria-valuenow={`${vig}`}
				aria-valuemin='0'
				aria-valuemax='100'
			>Vigorous</div>
		</div>
	);
};

export default MultiProgressBar;
