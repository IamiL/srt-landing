import ManufacturingBlock from "../../components/manufacturing/block/block.jsx";
import Background3 from "../../components/background/3/background.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Manufacturing({enLan}) {
    document.title = `${enLan ? 'In-house production of automation equipment | IRT' : 'Собственное производство оснастки для автоматизации | ИРТ'}`
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
    return (
            <>
                <main>
                    <ManufacturingBlock enLan={enLan} />
                </main>
                <Background3 />
            </>
    );
}