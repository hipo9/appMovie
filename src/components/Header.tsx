import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import 'glider-js/glider.min.css';
import stl from './header.module.scss'
import { LoadingComponent } from './LoadingComponent';
import { Link, useNavigate } from 'react-router-dom';




export const Header = () => {
    const { url, description, title, isLoading, id } = useSelector((state: RootState) => state.moviesHeader);

    return (
        <header>

            <>
                {(isLoading) ? <LoadingComponent /> :
                    <div className={stl.header} >
                        <img src={url} alt="img" className={stl.container__img} />
                        <div className={stl.header__opacity}>
                            <div className={stl.header__container}>
                                <div className={stl.header__containerTxt}>
                                    <h1 className={stl.header__title}>{title}</h1>
                                    <p className={stl.header__overview}>{description}</p>
                                    <Link to={`/movie/${id}`}>
                                        <button className={stl.header__btn} >Más Detalle</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        </header>
    )
}



