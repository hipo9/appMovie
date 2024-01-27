import React, { useEffect, useMemo, useState } from 'react'
import { MovieLayout } from '../layout/MovieLayout'
import stl from './homePage.module.scss'


import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { thunkGetPopular, thunkgGetMovieDetail } from '../store/thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { GliderP } from '../components/Glider';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Navbar } from '../components/Navbar';






export const HomePage = () => {
    // Variable de estado para rastrear si el método ya se ejecutó
    const dispatch = useDispatch();
    const { popular, isLoading, nowPlaying, topRated, upcoming } = useSelector((state: RootState) => state.movies);
    


    useEffect(() => {
        getAllMovies()
        console.log('efect 2');

    }, [])

    const getAllMovies = () => {
        if (isLoading) return;
        dispatch(thunkGetPopular() as unknown as AnyAction);
        dispatch(thunkgGetMovieDetail('787699') as unknown as AnyAction);

    }

    return (
        <>
            <Navbar />
                <Header />
            <MovieLayout title='Estrenos'>
                <div className={stl.container}>
                    <div className={stl.container__popular}>
                        <h1 className={stl.container__title}>Hola</h1>
                        <GliderP />
                    </div>
                    {/*<div className={stl.container__nowP}>
                    <HorizontalSlider category={nowPlaying} title='Now Playing' />
                </div>
                <div className={stl.container__upC} >

                    <HorizontalSlider category={upcoming} title='Up coming' />
                </div>
                <div className={stl.container__topR}>
                    <HorizontalSlider category={topRated} title='Top Rated' />
                </div>*/}
                </div>
                {/* topRated ,
             upcomming */}
            </MovieLayout>
        </>
    )
}


/*>
API key: f0bb3344ea4418024dbd0174e1dd1915
API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGJiMzM0NGVhNDQxODAyNGRiZDAxNzRlMWRkMTkxNSIsInN1YiI6IjY1YTZlNDkyNTFjMDFmMDEyODYwNjJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3GI1iA3YJ65pXnIqseKy_yBiflNV9jTnlUGrGp7rxM
*/
