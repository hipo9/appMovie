import * as React from 'react';


import Glider from 'react-glider';

import 'glider-js/glider.min.css';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import stl from './glider.module.scss'
import { Link, } from 'react-router-dom';



interface Props {
    uri?: string
}
export const GliderP = React.memo(({ uri }: Props) => {
    console.log('glider-----');
    const { popular, isLoading } = useSelector((state: RootState) => state.movies);
    const url = `https://image.tmdb.org/t/p/w500/`;

    const onPress = () => {

    }
    return (
        <Glider
            className="glider-container"
            hasArrows
            scrollToPage={3}
            slidesToShow={1}
            //draggable={false}
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
            {popular.map(p => (
                <div className={stl.container} key={p.id} onClick={onPress}>
                    <Link to={`/movie/${p.id}`}>
                        <img src={url + p.poster_path} alt="img"  />
                    </Link>
                </div>)
            )}
        </Glider>
    )
})
