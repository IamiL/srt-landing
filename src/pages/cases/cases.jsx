import EquipmentModernization from "../../components/equipmentModernization/block/equipmentModernization.jsx";
import Background2 from "../../components/background/2/background.jsx";
import AutomationOfTechnologicalProcesses
    from "../../components/automationOfTechnologicalProcesses/automationOfTechnologicalProcesses.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Cases({enLan}) {
    document.title = `${enLan ? 'IRT — Our works' : 'ИРТ - Наши работы'}`
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
                    <EquipmentModernization enLan={enLan} />
                    <AutomationOfTechnologicalProcesses enLan={enLan} />
                </main>
                <Background2 />

            </>
    )
}