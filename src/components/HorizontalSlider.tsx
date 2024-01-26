import Glider from 'react-glider';

import 'glider-js/glider.min.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import stl from './horizontalSlider.module.scss'
import { Movie } from '../interfaces/movieInterface';


interface Props {
    category: Movie[];
    title?: string
}
export const HorizontalSlider = ({ category, title }: Props) => {
    const url = `https://image.tmdb.org/t/p/w500/`;

    return (
        <div>
            <h2>{title}</h2>
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
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 5,
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
                {category.map(n => (
                    <div className={stl.container} key={n.id}>

                        <img src={url + n.poster_path} alt="img" className={stl.container__img} />
                    </div>)
                )}

            </Glider>
        </div>

    )
}
