import React, { useEffect, useState } from 'react'
import { Movie } from '../interfaces/movieInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import Glider from 'react-glider';

import 'glider-js/glider.min.css';


import stl from './glider.module.scss'



export const Header = () => {
    const { nowPlaying, isLoading } = useSelector((state: RootState) => state.movies);
    const url = `https://image.tmdb.org/t/p/w500/`;
    //const [urlImg, seturlImg] = useState<string>(popular[Math.floor(Math.random() * 19) + 1].poster_path)
    //    useEffect(() => {
    //        getRandomMovie();
    //    }, []);
    //
    //    const getRandomMovie = () => {     
    //        //let numeroAleatorio = Math.floor(Math.random() * 19) + 1;
    //        const urlImg = popular[Math.floor(Math.random() * 19) + 1].poster_path;
    //
    //    }

    return (
        <header>
            <Glider
                className="glider-container"
                hasArrows
                slidesToShow={1}
                draggable
                slidesToScroll={1}
                //skipTrack   
                responsive={[
                    {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: "auto",
                            itemWidth: 150,
                            duration: 0.25,
                        },
                    },
                    //{
                    //    breakpoint: 480,
                    //    settings: {
                    //        slidesToShow: 2,
                    //        slidesToScroll: "auto",
                    //        itemWidth: 150,
                    //        duration: 0.25,
                    //    },
                    //},
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: "auto",
                            slidesToScroll: "auto",
                            itemWidth: 150,

                            duration: 0.25,
                        },
                    },
                ]}
            >
                {nowPlaying.map(p => (
                    <div className={stl.container} key={p.id}>
                        <img src={url + p.poster_path} alt="img" className={stl.container__img} />
                    </div>)
                )}
            </Glider>
        </header>
    )
}



