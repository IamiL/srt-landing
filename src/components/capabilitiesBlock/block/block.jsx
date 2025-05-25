import styles from "./block.module.css"
import "./block.css"

export default function CapabilitiesBlock({enLan}) {

    return <section id="capabilities">
        <h2>{enLan ? 'Our Capabilities' : <>Наши<br className="brt5"/> возможности</>}</h2>
        <ul className="base_grid" id={styles.ul}>
            <a href={`#industrial_robots`} id={styles.li1} className={`${styles.gr} adli ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Industrial Robotic Arms' : <>Промышленные<br/> роботы<br/> манипуляторы</>}</h3>
                <p className="text4">{enLan ? 'Programming and commissioning.' : <>Программирование и пуско-<br
                    className="brt2"/>наладка</>}</p>
            </a>
            <li id={styles.li2} className={`${styles.gr} adli ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Intelligent Solutions' : 'Интеллектуальные разработки'}
                </h3>
                <p className="text4">{enLan ? 'We not only supply the necessary robots but also design all nodes and components for seamless integration into your workflow.' :
                    <>Мы сможем не только<br/> поставить<br className="brt4"/> необходимых<br
                        className="brt2"/> роботов,
                        но и
                        спроектировать<br/> все узлы и
                        компоненты для
                        интеграции в ваш рабочий<br className="brt2"/> процесс</>}</p>
            </li>
            <a href={`#manufacturing`} id={styles.li3} className={`${styles.gr} adli ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">
                    {enLan ? 'In-House Manufacturing' : 'Собственное производство'}
                </h3>
                <p className="text4">
                    {enLan ? 'Production of necessary tooling and instruments at our own facilities.' : <>Изготовление
                        необходимой
                        оснастки<br className="brt4"/> и инструментов<br/> на собственном производстве</>}
                </p>
            </a>
            <li id={styles.li4} className={`adli  ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Development of Control Programs for equipment.' : <>Написание<br/> управляющих<br/> программ<br/> для
                    оборудования</>}</h3>
            </li>
            <li id={styles.li5} className={`adli  ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Post-Processor Development' : 'Написание постпроцессоров'}</h3>
            </li>
            <li id={styles.li6} className={`adli  ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Controller Programming' : 'Программирование контроллеров'}</h3>
            </li>
            <a href={`#automation`} id={styles.li7} className={`adli  ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Automation of Technological Processes' : 'Автоматизация технологических процессов'}</h3>
            </a>
            <li id={styles.li8} className={`adli  ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? '3D Modeling and Drawing Development' : <>3D-моделирование<br/> и
                    разработка<br/> чертежей</>}</h3>
            </li>
            <a href={`#modernization`} id={styles.li9} className={`adli  ${enLan ? 'enLi' : ""}`}>
                <h3 className="head1">{enLan ? 'Equipment Modernization' : 'Модернизация оборудования'}</h3>
            </a>
        </ul>
    </section>
}