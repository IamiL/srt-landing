import styles from './footer.module.css'
import "./footer.css"
import Navigation from "../navigation2/navigation.jsx";
import {Link} from "react-router-dom";

export default function Footer({enLan}) {
    return <footer>
        <div id={styles.footer}>
            <div id={styles.logo}>
                <Link to="/">
                    <img
                            src={enLan ? '/footerEnLogo.svg' : '/footerRuLogo.svg'}
                            alt="footerLogo"
                    />
                </Link>
            </div>
            <a href="mailto:srtlt-robot@yandex.ru">
                srtlt-robot@yandex.ru
            </a>
            {/*<Link*/}
            {/*        to={'/policy'}*/}
            {/*        className={'policy-link'}*/}
            {/*>*/}
            {/*    Политика конфиденциальности*/}
            {/*</Link>*/}
            <div className='footer-nav-container'>
                <Navigation enLan={enLan} />
                <Link
                        to="/policy"
                        className="footer-privacy_link"
                >
                    {enLan ? 'Privacy Policy' : 'Политика конфиденциальности'}
                </Link>
            </div>
        </div>
    </footer>
}