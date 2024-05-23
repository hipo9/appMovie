import React, { useRef } from 'react'
import Glider from 'react-glider';
import { Cast } from '../interfaces/credentialsInterface';
import stl from './CastleSlider.module.scss'
import { getEnvVariables } from '../helpers';

interface Props {
    cast: Cast[];

}
export const CastleSlider = ({ cast }: Props) => {
    const envVariable = useRef(getEnvVariables());
    const { VITE_API_URL } = envVariable.current;
    return (
        <>
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

                            slidesToShow: 3,
                            slidesToScroll: "auto",
                            itemWidth: 180,
                            duration: 0.25,
                        },
                    },
                    {
                        breakpoint: 0,
                        settings: {
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
                            {c.profile_path ?
                                <img className={stl.cast__img} src={VITE_API_URL + c.profile_path}
                                    alt="img" />
                                : <div></div>}
                        </div>
                        <div className={stl.cast__img}></div>
                        <div className={stl.cast__containerName}>
                            <h2 className={stl.cast__name}>{c.name}</h2>
                            <p className={stl.cast__character}>{c.character}</p>
                        </div>
                    </div>)
                )}
            </Glider>

        </>
    )
}
