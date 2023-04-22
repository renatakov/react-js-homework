import {Link} from 'react-router-dom';
import s from "./Header.module.css"
const Header = () => {
    return(
    <header>
        <nav>
            <Link className={s.link} to="/">Home</Link>
            <Link className={s.link} to="/about">About</Link>
            <Link className={s.link} to="/contact">Contact</Link>
        </nav>
    </header>
    )
}

export default Header;