import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkgGetMovieDetail } from "../store/thunk";
import { RootState } from "../store/store";
import { AnyAction } from "@reduxjs/toolkit";
import stl from './detailPage.module.scss'
import { MovieDetails } from "../components/MovieDetails";


export const DetailPage = () => {
    const { cast, movieFull, isLoading } = useSelector((state: RootState) => state.moviesDetail);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        dispatch(thunkgGetMovieDetail(id) as unknown as AnyAction);
    }, [])

    const url = `https://image.tmdb.org/t/p/w500/${movieFull?.poster_path}`;

    if (!movieFull) return

    return (
        //contendor en donde esta el cartel y el titulo de la pelicula
        <div className="container">
            <div className={stl.detail} >
                <div className={stl.card}>
                    {/*<p>{popular[0].id}</p>*/}
                    <div className={stl.card__imgContainer}>
                        <img className={stl.card__img} src={url} alt='img' />
                    </div>
                    <div className={stl.card__titlesContainer}>
                        <h2 className={stl.card__titleEs}>{movieFull.title}</h2>
                        <p className={stl.card__titleEn}>{movieFull.original_title}</p>
                    </div>
                </div>
                {/* es el contendor los detalles de la pelicila como historia, presupesto, casting... */}
                <div className={stl.detail__info}>
                    <MovieDetails />
                </div>
            </div>
        </div>
    )
}

