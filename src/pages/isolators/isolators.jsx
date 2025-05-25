import Isolators from "../../components/catalog/components/isolators.jsx";
import Background6 from "../../components/background/6/background.jsx";

export default function IsolatorsPage({enLan}) {
    document.title = `${enLan ? 'IRT — Isolators' : 'ИРТ - Изоляторы'}`
    return <>
        <main><Isolators enLan={enLan}/></main>
        <Background6/></>
}