import styles from './header.module.css'
import Navigation from "../navigation/navigation.jsx";
import "./header.css"
import MobileMenu from "../mobileMenu/menu.jsx";
import Logo from "../logo/logo.jsx";
import {Link, useLocation} from "react-router-dom";

export default function Header({enLan}) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return <header
            id={styles.header}
            className="base_grid"
    >
        <Link
                to='/'
                id={styles.logo}
                className={`${isHomePage ? "header-main-logo-start-animation" : ""}`}
        >
            <Logo enLan={enLan} />
        </Link>
        <div className={`nav_menu ${isHomePage ? 'nav_menu_start_animated' : ''}`}>
            <Navigation enLan={enLan} />
            <MobileMenu enLan={enLan} />
        </div>
    </header>
}