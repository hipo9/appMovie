import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

export interface MoviesState {
	nowPlaying: Movie[];
	popular: Movie[];
	topRated: Movie[];
	upcoming: Movie[];
	isLoading: boolean;
	isLoad: boolean;
}
const initialState: MoviesState = {
	nowPlaying: [],
	popular: [],
	topRated: [],
	upcoming: [],
	isLoading: false,
	isLoad: false,
};
export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		getMoviesStart: (state) => {
			state.isLoading = true;
		},
		getMoviesSuccess: (state, { payload }) => {
			state.nowPlaying.push(...payload[0]);
			state.popular.push(...payload[1]);
			state.topRated.push(...payload[2]);
			state.upcoming.push(...payload[3]);
			state.isLoading = false;
			state.isLoad = true;
		},
		getMoviesFailure: (state) => {
			state.isLoading = false; // Reset isLoading in case of an error
		},
	},
});

export const { getMoviesSuccess, getMoviesFailure, getMoviesStart } =
	movieSlice.actions;
