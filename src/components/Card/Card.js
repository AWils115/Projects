import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ page, results }) => {
	/**
	 * * This will render a card for each character. We first initialise a display variable
	 * * that will hold the cards. Then we use an if statement to check the api returned data that
	 * * is held in results.
	 * * If there is data in results we map() over the data and create a card for each character.
	 * * We use a further if statement within the JSX to check the status of each character, which will
	 * * produce a badge stating wether they are 'Dead', 'Alive' or 'Unknown'.
	 */
	let display;
	if (results) {
		display = results.map((x) => {
			let { id, image, name, status, location } = x;
			return (
				<Link
					style={{ textDecoration: 'none' }}
					to={`${page}${id}`}
					key={id}
					className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'
				>
					<div
						key={id}
						className='col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark'
					>
						<div className={`${styles.card} d-flex flex-column justify-content-center`}>
							<img className={`${styles.img} img-fluid`} src={image} alt='' />
							<div className={`${styles.content}`}>
								<div className='fs-5 fw-bold mb-4'>{name}</div>
								<div className=''>
									<div className='fs-6 fw-normal'>Last Location</div>
									<div className='fs-5'>{location.name}</div>
								</div>
							</div>
						</div>
						{(() => {
							if (status === 'Dead') {
								return (
									<div className={`${styles.badge} position-absolute badge bg-danger`}>
										{status}
									</div>
								);
							} else if (status === 'Alive') {
								return (
									<div className={`${styles.badge} position-absolute badge bg-success`}>
										{status}
									</div>
								);
							} else {
								return (
									<div className={`${styles.badge} position-absolute badge bg-secondary`}>
										{status}
									</div>
								);
							}
						})()}
					</div>
				</Link>
			);
		});
	} else {
		display = 'No Characters Found!';
	}
	return <>{display}</>;
};

export default Card;
