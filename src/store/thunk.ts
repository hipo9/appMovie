import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';
import { MovieDBMoviesResponse, MovieFull } from '../interfaces/movieInterface';
import {
	MoviesState,
	getMoviesFailure,
	getMoviesStart,
	getMoviesSuccess,
} from './movieSlice';

import { Action, AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { CreditResponse } from '../interfaces/credentialsInterface';
import { getMoviesDetailFailure, getMoviesDetailStart, getMoviesDetailSuccess } from './movieDetailSlice';

export const thunkGetPopular = (): ThunkAction<
	void,
	MoviesState,
	unknown,
	Action<string>
> => {
	console.log('thunk');

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
			console.log(error);
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

			console.log(resData);

			dispatch(getMoviesDetailSuccess(resData));
        } catch (error) {
            dispatch(getMoviesDetailFailure())
        }
	};
};
