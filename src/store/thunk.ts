import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';
import { MovieDBMoviesResponse, MovieFull } from '../interfaces/movieInterface';
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { CreditResponse } from '../interfaces/credentialsInterface';
import {
	MoviesState,
	getMoviesFailure,
	getMoviesStart,
	getMoviesSuccess,
	getMoviesDetailFailure,
	getMoviesDetailStart,
	getMoviesDetailSuccess,
	getMovieHeaderFailure,
	getMovieHeaderStart,
	getMoviesHeader,
} from './';
import { getEnvVariables } from '../helpers';

export const thunkGetMovies = (): ThunkAction<
	void,
	MoviesState,
	unknown,
	Action<string>
> => {
	return async (dispatch: any) => {
		dispatch(getMoviesStart()); // Dispatch action to indicate the start of the request
		try {
			const popular = await movieApi.get<MovieDBMoviesResponse>(
				'/popular'
			);
			const nowPlaying = await movieApi.get<MovieDBMoviesResponse>(
				'/now_playing'
			);
			const topRated = await movieApi.get<MovieDBMoviesResponse>(
				'/top_rated'
			);
			const upcoming = await movieApi.get<MovieDBMoviesResponse>(
				'/upcoming'
			);
			const response = await Promise.all([
				nowPlaying,
				popular,
				topRated,
				upcoming,
			]);
			// Verificar si la respuesta fue exitosa antes de acceder a la propiedad data

			const moviesData = response.map((res) =>
				res && res.data ? res.data.results : []
			);
			dispatch(getMoviesSuccess(moviesData));
		} catch (error) {
			dispatch(getMoviesFailure());
		}
	};
};

export const thunkgGetMovieDetail = (movieId: string) => {
	return async (dispatch: any) => {
		dispatch(getMoviesDetailStart()); // Dispatch action to indicate the start of the request
		try {
			const movieDetailPromise = await movieApi.get<MovieFull>(
				`/${movieId}`
			);
			const castPromise = await movieApi.get<CreditResponse>(
				`/${movieId}/credits`
			);
			const response = await Promise.all([
				movieDetailPromise,
				castPromise,
			]);
			const resData = response.map((res) =>
				res && res.data ? res.data : []
			);

			dispatch(getMoviesDetailSuccess(resData));
		} catch (error) {
			dispatch(getMoviesDetailFailure());
		}
	};
};

export const thunkGetHeaderMovie = () => {
	const envVariable = getEnvVariables();
	const { VITE_API_URL } = envVariable;
	return async (dispatch: any) => {
		dispatch(getMovieHeaderStart());
		const popular = await movieApi.get<MovieDBMoviesResponse>('/popular');
		const res = await popular.data.results;
		const numRamdom = Math.floor(Math.random() * 20) + 1;
		const url = `${VITE_API_URL}${res[numRamdom].backdrop_path}`;
		const data = [
			url,
			res[numRamdom].overview,
			res[numRamdom].title,
			res[numRamdom].id,
		];

		try {
			dispatch(getMoviesHeader(data));
		} catch (error) {
			dispatch(getMovieHeaderFailure());
		}
	};
};
