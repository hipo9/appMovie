import { createSlice } from '@reduxjs/toolkit';
import {
	Movie,
	MovieDBMoviesResponse,
	MovieFull,
} from '../interfaces/movieInterface';
import { Cast } from '../interfaces/credentialsInterface';

interface MovieDetail {
	movieFull?: MovieFull;
	cast: Cast[];
	isLoading: boolean;
}
const initialState: MovieDetail = {
	movieFull: undefined,
	cast: [],
	isLoading: true,
};
export const movieDetailSlice = createSlice({
	name: 'movieDetail',
	initialState,
	reducers: {
		getMoviesDetailStart: (state) => {
			state.isLoading = true;
		},
		getMoviesDetailSuccess: (state, { payload }) => {
			state.movieFull = payload[0];
			state.cast = payload[1].cast;
			state.isLoading = false;
		},
		getMoviesDetailFailure: (state) => {
			state.isLoading = false; // Reset isLoading in case of an error
		},
	},
});

export const {
	getMoviesDetailSuccess,
	getMoviesDetailStart,
	getMoviesDetailFailure,
} = movieDetailSlice.actions;
