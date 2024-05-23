import { createSlice } from '@reduxjs/toolkit';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetail {
	url: string;
	description: string;
	title: string;
	id: string;
	isLoading: boolean;
}
const initialState: MovieDetail = {
	url: '',
	description: '',
	title: '',
	id: '',
	isLoading: true,
};
export const movieHeaderSlice = createSlice({
	name: 'movieHeader',
	initialState,
	reducers: {
		getMovieHeaderStart: (state) => {
			state.isLoading = true;
		},
		getMoviesHeader: (state, { payload }) => {
			state.url = payload[0];
			state.description = payload[1];
			state.title = payload[2];
			state.id = payload[3];
			state.isLoading = false;
		},
		getMovieHeaderFailure: (state) => {
			state.isLoading = false; // Reset isLoading in case of an error
		},
	},
});

export const {
	getMoviesHeader,
	getMovieHeaderStart,
	getMovieHeaderFailure,
} = movieHeaderSlice.actions;
