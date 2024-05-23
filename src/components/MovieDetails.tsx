import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { thunkgGetMovieDetail } from '../store/thunk';
import { CastleSlider } from './CastleSlider';
import stl from './movieDetails.module.scss'
import { LoadingComponent } from './LoadingComponent';

export const MovieDetails = () => {
    const { cast, movieFull, isLoading } = useSelector((state: RootState) => state.moviesDetail);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        if (!isLoading) return;
        if (!id) return;
        dispatch(thunkgGetMovieDetail(id) as unknown as AnyAction);
    }, [])


    return (

        <div className={stl.detail}>
            <div>
                <h3 className={stl.detail__history}>Historia:</h3>
                <p className={stl.detail__historyTxt}>{movieFull?.overview}</p>
            </div>
            <div>
                <h3 className={stl.detail__budget}>Presupuesto:
                </h3>
                <p className={stl.detail__budgetSpan}> ${movieFull?.budget}</p>
            </div>
            <div>
                <h3 className={stl.detail__genres}>Genero:
                </h3>
                <div className={stl.detail__containerGenres}>
                    {movieFull?.genres.map(g => (<p key={g.id}>-{g.name}</p>))}
                </div>
            </div>
            <h3 className={stl.detail__budget}>Casting:
            </h3>
            <div className={stl.detail__carousel}>
                {(isLoading) ? <LoadingComponent /> : <CastleSlider cast={cast} />}

            </div>
        </div>


    )
}
