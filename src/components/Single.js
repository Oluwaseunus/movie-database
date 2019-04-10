import React, { useState, useEffect } from 'react';

const Single = props => {
	const [details, setDetails] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(`https://api.themoviedb.org/3/movie/${
				props.match.params.id
			}?api_key=${process.env.REACT_APP_API}
			`);
			const result = await response.json();
			setDetails(result);
		}
		fetchData();
	});

	return (
		<>
			{details.title && (
				<div>
					<img
						src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
						alt={`${details.title} poster`}
					/>
					<h2>{details.title}</h2>
					<p>{details.overview}</p>
				</div>
			)}
		</>
	);
};

export default Single;
