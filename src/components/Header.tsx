import React, { useEffect, useState } from 'react'
import { Movie } from '../interfaces/movieInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import 'glider-js/glider.min.css';
import stl from './header.module.scss'
import GliderComponent from 'react-glider';




export const Header = () => {
    const { nowPlaying, isLoading } = useSelector((state: RootState) => state.movies);
    const { movieFull } = useSelector((state: RootState) => state.moviesDetail);
    console.log(movieFull);

    const url = `https://image.tmdb.org/t/p/w500/${movieFull?.backdrop_path}`;


    return (
        <header>
            {/*<GliderComponent

                className="glider-container"
                draggable
                //hasDots
                slidesToShow={1}
                //scrollLock
                //skipTrack   
                responsive={[
                    {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: 1,
                        },
                    },

                ]} 
            >
                {nowPlaying.map(p => (
                    <div className={stl.header} key={p.id}>
                        <img src={url} alt="img" className={stl.container__img} />
                        <div className={stl.header__opacity}></div>
                    </div>)
                )}
            </GliderComponent>*/}

            <div className={stl.header} >
                <img src={url} alt="img" className={stl.container__img} />
                <div className={stl.header__opacity}>
                    <div className={stl.header__container}>
                        <h1 className={stl.header__title}>{movieFull?.original_title}</h1>
                        <p className={stl.header__overview}>{movieFull?.overview}</p>
                        <button className={stl.header__btn}>Más Detalle</button>
                    </div>
                </div>
            </div>
        </header>
    )
}



