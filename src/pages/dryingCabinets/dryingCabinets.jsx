import DryingCabinets from "../../components/catalog/components/dryingCabinets.jsx";
import Background7 from "../../components/background/7/background.jsx";

export default function DryingCabinetsPage({enLan}) {
    document.title = `${enLan ? 'IRT — Drying cabinets' : 'ИРТ - Сушильные шкафы'}`
    return <>
        <main><DryingCabinets enLan={enLan}/></main>
        <Background7/></>
}