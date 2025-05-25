import styles from "./navigation.module.css";
import {Link} from "react-router-dom";

export default function Navigation({enLan}) {
    return <nav id={styles.nav}>
        <Link to={`/`} id={styles.nav1}>{enLan ? 'About us' : 'О нас'}</Link>
        <Link to={`/cases`} id={styles.nav2}>{enLan ? 'Our works' : 'Наши работы'}</Link>
        <Link to={`/manufacturing`} id={styles.nav3}>{enLan ? 'Manufacturing' : 'Производство'}</Link>
        <Link to={`/catalog`} id={styles.nav4}>{enLan ? 'Equipment catalog' : 'Каталог оборудования'}</Link>
        <Link to={`/#contacts`} id={styles.nav5}>{enLan ? 'Contacts' : 'Контакты'}</Link>
    </nav>
}