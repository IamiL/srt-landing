import RotaryCrusher from "../../components/catalog/components/rotaryСrusher.jsx";
import Background5 from "../../components/background/5/background.jsx";

export default function RotaryCrusherPage({enLan}) {
    document.title = `${enLan ? 'IRT — Rotary Crusher' : 'ИРТ - Дробилка роторная'}`
    return <>
        <main><RotaryCrusher enLan={enLan}/></main>
        <Background5/>
    </>
}