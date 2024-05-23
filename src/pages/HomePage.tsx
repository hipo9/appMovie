import { useEffect, useRef } from 'react'
import { MovieLayout } from '../layout/MovieLayout'
import stl from './homePage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { thunkGetHeaderMovie, thunkGetMovies } from '../store/thunk';
import { HorizontalSlider, Navbar, Header } from '../components';
import { getEnvVariables } from '../helpers';
import { LoadingComponent } from '../components/LoadingComponent';


export const HomePage = () => {
    const dispatch = useDispatch();
    const { popular, isLoad, topRated, upcoming } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        dispatch(thunkGetHeaderMovie() as unknown as AnyAction);
        if (isLoad) return;
        dispatch(thunkGetMovies() as unknown as AnyAction);
    }, [])


    return (
        <>

            <Navbar />
            <Header />
            <MovieLayout >
                <main className={stl.container}>
                    <div className={stl.container__popular}>
                        <HorizontalSlider category={popular} title='Mas populares' />
                    </div>
                    <div className={stl.container__upC} >
                        <HorizontalSlider category={upcoming} title='Proximamente' />
                    </div>
                    <div className={stl.container__topR}>
                        <HorizontalSlider category={topRated} title='Mejor Valorado' />
                    </div>
                </main>
            </MovieLayout>
        </>
    )
}


/*>
API key: f0bb3344ea4418024dbd0174e1dd1915
API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGJiMzM0NGVhNDQxODAyNGRiZDAxNzRlMWRkMTkxNSIsInN1YiI6IjY1YTZlNDkyNTFjMDFmMDEyODYwNjJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3GI1iA3YJ65pXnIqseKy_yBiflNV9jTnlUGrGp7rxM
*/
