
import { Link } from 'react-router-dom'
import stl from './navbar.module.scss'

export const Navbar = () => {
    return (

        <nav className={stl.navbar} >
            <Link to={'/home'} className={stl.navbar__link}>Inicio </Link>
            {/*<a >Popular</a>
            <a >más reproducidas</a>
            <a >Lo mas nuevo</a>
            <a >Lo mas visto</a>*/}
        </nav>

    )
}
