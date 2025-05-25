import "./../catalog.css"
import {useState} from "react";
import Portal from "./portal.jsx";
import GalleryPortal from "./gallery-portal.jsx";

export default function Isolators({enLan}) {
    const [modalItem, setModalItem] = useState(1)

    const [modal1Open, setModal1Open] = useState(null)

    return <>
            <h1 className='heading1 catalogp-heading'>{enLan ? 'Isolators' : 'Изоляторы'}</h1>
            <section className='base_grid catalog-main-sec'>
                <div className='catalog_main_img3 catalog_main_img2 adli'>
                    <img src='/catalog/isolators/isolators.webp'/>
                </div>
                <div className='catalog_main_text3 catalog_main_text2 text4'>
                    <p>
                        {enLan ? <>
                            Ceramic insulating beads are often used in the production of heating elements. They can be
                            used as additional wire insulation in industrial heaters with steel housing, and in ceramic
                            heaters (ceramic ribbon heaters, infrared ceramic and quartz radiators, flat ceramic
                            heaters) ceramic beads are an element of the standard type of heater connection.
                            <br/><br/>
                            Insulation of wires with ceramic beads is a reliable way of additional protection of
                            heat-resistant wires when working in high temperature conditions. The beads reliably protect
                            the wires from fractures and mechanical damage without preventing them from
                            bending.</> : <>Керамические изоляционные бусины часто используются при производстве
                            нагревательных элементов.
                            Они могут применяться как дополнительная изоляция проводов
                            в промышленных нагревателях со стальным корпусом,
                            а в керамических нагревателях (керамические ленточные
                            ТЭНы, инфракрасные керамические и кварцевые излучатели, плоские керамические ТЭНы)
                            керамические
                            бусы являются элементом стандартного типа подключения нагревателей.<br/><br/>
                            Изоляция проводов керамическими бусинами – это надежный способ дополнительной защиты
                            термостойких проводов при работе в условиях повышенных температур. Бусины надежно защищают
                            провода от изломов
                            и механических повреждений и при этом не мешают им изгибаться.</>}
                    </p>
                </div>
            </section>
            <section className='catalog-sec23'>
                <ul className='base_grid catalog_items'>
                    <li className='catalog_item4 catalog_item_left adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(29)
                        }}>
                        <h2 className='head1'>
                            {enLan ? 'Isolators' : 'Изоляторы'}
                        </h2>
                        <div className='catalog_item2_img2'>
                            <img src='/catalog/isolators/isolator.webp'/>
                        </div>
                    </li>
                </ul>
            </section>
            <Portal enLan={enLan} heightType={3} item={modalItem} isOpen={modal1Open}
                    setIsOpen={(value) => setModal1Open(value)}/>
        </>
}