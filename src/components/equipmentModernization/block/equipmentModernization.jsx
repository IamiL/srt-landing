import Slider from "../slider/slider.jsx";
import styles from "./equipmentModernization.module.css";
import './mod.css'

export default function EquipmentModernization({enLan}) {
    return <section id="modernization">
        <h1 className='heading1'>
            {enLan ? 'Equipment Modernization' : 'Наши работы'}
        </h1>
        <div className='adli modernization_sec1'>
            <h2 className="heading2 modernization_heading">
                {enLan ? 'Modernization of Horizontal Boring Machine 2А622Ф4' : <>Модернизация
                    {/*горизонтально-расточного<br className="brt4"/> станка 2А622Ф4</>}*/}
                    {' '}горизонтально-расточного<br/> станка 2А622Ф4</>}
            </h2>
            <div className="base_grid" id={styles.div}>
                <Slider/>
                <p className="text4">
                    {enLan ? 'The customer faced frequent breakdowns of bulky and unreliable Bulgarian-made DC motors on the horizontal boring machine 2А622Ф4.' :
                        <>
                            Заказчик столкнулся с проблемой частого выхода из строя громоздких и не
                            очень надежных двигателей
                            постоянного тока Болгарского производства на
                            горизонтально-расточном станке
                            2А622Ф4.</>}
                    <br/>
                    <br/>

                    {enLan ? ' We designed and manufactured an adapter, bellows coupling components, and other necessary fasteners at our facilities. After testing, the machine was successfully delivered to the customer, who plans to replace all remaining motors similarly!' :
                        <> Были спроектированы и изготовлены<br className="brt4"/> на собственном производстве
                            переходной
                            адаптер, детали
                            сильфонной
                            муфты и другие<br className="brt6"/> необходимые крепежные элементы. После тестирования<br
                                className="brt5"/> станок
                            был
                            успешно сдан заказчику,
                            который планирует по этой же схеме<br className="brt1"/> поменять все
                            остальные двигатели!
                        </>
                    }
                </p>
            </div>

        </div>
    </section>
}