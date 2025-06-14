import RotaryCrusher from "../../components/catalog/components/rotaryСrusher.jsx";
import Background5 from "../../components/background/5/background.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function RotaryCrusherPage({enLan}) {
    document.title = `${enLan ? 'Rotary crushers for industry | IRT' : 'Роторные дробилки для промышленности | ИРТ'}`
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
        <main><RotaryCrusher enLan={enLan} /></main>
        <Background5 />
    </>
}