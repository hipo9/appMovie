import { useEffect, useState } from 'react';
import movieDB from '../api/movieApi';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
	nowPlaying: Movie[];
	popular: Movie[];
	topRated: Movie[];
	upcoming: Movie[];
}

export const useMovies = () => {
	//hooks
	const [isLoading, setIsLoading] = useState(true);
	const [moviesState, setMoviesState] = useState<MoviesState>({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	});

	const getMovies = async () => {
		try {
			const nowPlayingPromise =
				movieDB.get<MovieDBMoviesResponse>('/now_playing');
			const popularPromise =
				movieDB.get<MovieDBMoviesResponse>('/popular');
			const topRatedPromise =
				movieDB.get<MovieDBMoviesResponse>('/top_rated');
			const upcomingPromise =
				movieDB.get<MovieDBMoviesResponse>('/upcoming');

			//Ejecutar promedas de manera simultanea
			const response = await Promise.all([
				nowPlayingPromise,
				popularPromise,
				topRatedPromise,
				upcomingPromise,
			]);

			setMoviesState({
				nowPlaying: response[0].data.results,
				popular: response[1].data.results,
				topRated: response[2].data.results,
				upcoming: response[3].data.results,
			});
		} catch (error) {
			console.log(error + 'TryCatch');
		}

		setIsLoading(false);
	};

	useEffect(() => {
		//peliculas actuales
		getMovies();
	}, []);

	//esponer las peliculas

	return {
		...moviesState,
		isLoading,
	};
};
