import EquipmentModernization from "../../components/equipmentModernization/block/equipmentModernization.jsx";
import Background2 from "../../components/background/2/background.jsx";
import AutomationOfTechnologicalProcesses
    from "../../components/automationOfTechnologicalProcesses/automationOfTechnologicalProcesses.jsx";

export default function Cases({enLan}) {
        document.title = `${enLan ? 'IRT — Our works' : 'ИРТ - Наши работы'}`
    return (
        <>
            <main>
                <EquipmentModernization enLan={enLan}/>
                <AutomationOfTechnologicalProcesses enLan={enLan}/>
            </main>
            <Background2/>
        </>
    )
}