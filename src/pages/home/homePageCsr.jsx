
import Home from "./home.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function HomePageCsr({enLan}) {

    document.title = `${enLan ? 'IRT — Robotic technologies' : 'ИРТ - Роботизированные технологии'}`
    const {pathname, hash, key} = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);
    return <Home enLan={enLan}/>
}