import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { thunkgGetMovieDetail } from "../store";
import { LoadingComponent, MovieDetails, Navbar } from "../components";
import stl from './detailPage.module.scss'
import { getEnvVariables } from "../helpers";

export const DetailPage = () => {
    const { cast, movieFull, isLoading } = useSelector((state: RootState) => state.moviesDetail);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        dispatch(thunkgGetMovieDetail(id) as unknown as AnyAction);
    }, [])

    const envVariable = useRef(getEnvVariables());
    const { VITE_API_URL } = envVariable.current;

    

    return (
        //contendor en donde esta el cartel y el titulo de la pelicula
        <>
            <Navbar />
            {(isLoading) ? <LoadingComponent /> :
                <div className="container">
                    <div className={stl.detail} >
                        <div className={stl.card}>
                            <div className={stl.card__imgContainer}>
                                <img className={stl.card__img} src={VITE_API_URL + movieFull?.poster_path} alt='img' />
                            </div>
                            <div className={stl.card__titlesContainer}>
                                <h2 className={stl.card__titleEs}>{movieFull?.title}</h2>
                                <p className={stl.card__titleEn}>{movieFull?.original_title}</p>
                            </div>
                        </div>
                        {/* es el contendor los detalles de la pelicila como historia, presupesto, casting... */}
                        <div className={stl.detail__info}>
                            <MovieDetails />
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

