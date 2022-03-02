import React from 'react';

const Navbar = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container-fluid'>
					<span className='navbar-brand mb-0 h1'>Fitness Dashboard</span>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navabarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a href='#' className='nav-link active' aria-current='page'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									Training
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									Nutrition
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
