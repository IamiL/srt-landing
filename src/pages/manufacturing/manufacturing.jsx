import ManufacturingBlock from "../../components/manufacturing/block/block.jsx";
import Background3 from "../../components/background/3/background.jsx";

export default function Manufacturing({enLan}) {
    document.title = `${enLan ? 'IRT — Manufacturing' : 'ИРТ - Производство'}`
    return (
        <>
            <main>
                <ManufacturingBlock enLan={enLan}/>
            </main>
            <Background3/>
        </>
    );
}