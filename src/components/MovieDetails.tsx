import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import stl from './movieDetails.module.scss'
import { thunkgGetMovieDetail } from '../store/thunk';
import { AnyAction } from '@reduxjs/toolkit';
import Glider from 'react-glider';


export const MovieDetails = () => {
    const { cast, movieFull, isLoading } = useSelector((state: RootState) => state.moviesDetail);

    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(cast);



    useEffect(() => {
        if (!isLoading) return;
        if (!id) return;
        dispatch(thunkgGetMovieDetail(id) as unknown as AnyAction);
    }, [])

    const url = `https://image.tmdb.org/t/p/w500/`;
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
                {movieFull?.genres.map(g => (<p>{g.name}</p>))}

            </div>

            <h3 className={stl.detail__budget}>Actores:
            </h3>
            <div className={stl.detail__carousel}>
                {/*<img className={stl.cast__img} src={url} alt='img' />*/}
                <Glider
                    className="glider-container"
                    hasArrows
                    draggable
                    slidesToShow={1}
                    slidesToScroll={1}

                    responsive={[

                        {
                            breakpoint: 775,
                            settings: {
                                //slidesToShow: "auto",
                                slidesToShow: 3,
                                slidesToScroll: "auto",
                                itemWidth: 180,
                                duration: 0.25,
                            },
                        },
                        {
                            breakpoint: 0,
                            settings: {
                                //slidesToShow: "auto",
                                slidesToShow: 1,
                                slidesToScroll: "auto",
                                itemWidth: 100,
                                duration: 0.25,
                            },
                        },

                    ]}
                >
                    {cast.map(c => (
                        <div className={stl.cast} key={c.id}>
                            <div className={stl.cast__containerImg}>
                                <img className={stl.cast__img} src={url + c.profile_path}
                                    alt="img" />
                            </div>
                            <div className={stl.cast__img}></div>
                            <div className={stl.cast__containerName}>
                                <h2 className={stl.cast__name}>{c.name}</h2>
                                <p className={stl.cast__character}>{c.character}</p>
                            </div>


                        </div>)
                    )}
                </Glider>
            </div>



        </div>


    )
}
