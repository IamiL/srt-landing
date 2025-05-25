import Slider from "../slider/slider.jsx";
import styles from "./block.module.css";
import './block.css'

export default function ManufacturingBlock({enLan}) {
    return <section id="manufacturing">
        <h2>{enLan ? 'In-House Manufacturing' : 'Собственное производство'}</h2>
        <p className="text5">{enLan ? 'Our company is part of ' : <>Наша компания работает в единой связи с<br
            className="brt4"/> </>}
            <a
                href="https://povpro.ru">{enLan ? '"Volga Production Association №3", LLC' : <>ООО &quot;Поволжское
                Производственное<br className="brt4"/> объединение №3&quot;</>}</a>
        </p>
        <div id={styles.div} className="base_grid">
            <p className="text4">
                {enLan ? 'It is a stable enterprise equipped with a fleet of modern high-tech machinery, enabling us to produce high-quality products that meet the most stringent customer requirements.'
                    : <>— это стабильно работающее предприятие с парком современного высокотехнологичного
                        оборудования,<br className="brt5"/> что позволяет нам выпускать продукцию высокого качества,<br
                            className="brt4"/> соответствующую
                        самым строгим<br className="brt3"/> требованиям
                        заказчиков.</>}


                {enLan ? 'We take pride in our professional team, which includes experienced workers, engineers, and programmers. Our specialists efficiently solve complex production challenges and provide services for the creation of tooling and components for automation and robotics projects.' :
                    <><br/>
                        <br/>
                        Мы гордимся своей профессиональной командой, состоящей из<br className="brt1"/> опытных рабочих,
                        инженеров и программистов.
                        Наши<br className="brt4"/> специалисты оперативно<br className="brt5"/> решают сложные
                        производственные
                        задачи и<br className="brt2"/> предоставляют
                        услуги по созданию
                        оснастки и компонентов<br className="brt4"/> для<br className="brt1"/> проектов автоматизации
                        и<br
                            className="brt5"/> роботизации
                        технологических процессов.
                    </>
                }

            </p>
            <Slider/>
        </div>
    </section>
}