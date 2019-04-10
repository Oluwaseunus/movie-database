import React, { useEffect, useState } from 'react';

import Movie from './Movie';

const Home = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const data = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					process.env.REACT_APP_API
				}&sort_by=popularity.desc`
			);
			const movies = await data.json();
			const { results } = movies;
			setMovies(results);
		}
		fetchData();
	}, []);

	const handleClick = e => {
		console.log(e.target.parentNode.href);
	};

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			{movies.map(movie => {
				const { poster_path, title, id } = movie;
				return (
					<Movie
						key={id}
						details={{ poster_path, title, id }}
						handleClick={handleClick}
					/>
				);
			})}
		</div>
	);
};

export default Home;
