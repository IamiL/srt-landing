import DryingCabinets from "../../components/catalog/components/dryingCabinets.jsx";
import Background7 from "../../components/background/7/background.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function DryingCabinetsPage({enLan}) {
    document.title = `${enLan ? 'Drying cabinets with automation 360-960 l | IRT' : 'Сушильные шкафы с автоматизацией 360-960л | ИРТ'}`
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
        <main><DryingCabinets enLan={enLan} /></main>
        <Background7 /></>
}