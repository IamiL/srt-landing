import Isolators from "../../components/catalog/components/isolators.jsx";
import Background6 from "../../components/background/6/background.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function IsolatorsPage({enLan}) {
    document.title = `${enLan ? 'Ceramic insulators for heating elements | IRT' : 'Керамические изоляторы для нагревательных элементов | ИРТ'}`
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
    return <>
        <main><Isolators enLan={enLan} /></main>
        <Background6 /></>
}