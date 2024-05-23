import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import stl from './horizontalSlider.module.scss'
import { Movie } from '../interfaces/movieInterface';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { getEnvVariables } from '../helpers';

interface Props {
    category: Movie[];
    title?: string
}
export const HorizontalSlider = ({ category, title }: Props) => {

    const envVariable = useRef(getEnvVariables());
    const { VITE_API_URL } = envVariable.current;

    return (
        <div className={stl.carousel}>
            <h2 className={stl.carousel__title}>{title}</h2>
            <Glider
                className="glider-container"
                hasArrows
                scrollLock={false}
                slidesToShow={1}
                //draggable //scroll por pantalla
                slidesToScroll={1}
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
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: "auto",
                        },
                    },
                ]}
            >
                {category.map(n => (
                    <div className={stl.card} key={n.id}>
                        <Link to={`/movie/${n.id}`}>
                            <img src={VITE_API_URL + n.poster_path} alt="img" className={stl.card__img} />
                        </Link>
                    </div>)
                )}

            </Glider>
        </div>

    )
}
