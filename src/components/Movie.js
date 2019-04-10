import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ details, handleClick }) => (
	<div data-link={`${details.id}`} onClick={handleClick} className="movie">
		<Link to={`/movies/${details.id}`}>
			<img
				src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
				alt={`${details.title} poster`}
				className="movie-image"
			/>
			<p className="movie-title">{details.title}</p>
		</Link>
	</div>
);

export default Movie;
