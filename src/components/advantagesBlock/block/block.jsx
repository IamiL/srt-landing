import styles from "./block.module.css"
import "./block.css"

export default function AdvantagesBlock({enLan}) {
    return <section id="advantages">
        <h2
                id={styles.h2}
                className='advantages_block-main_heading'
        >{enLan ? 'Our Advantages' : 'Наши преимущества'}</h2>
        <p
                className="text2"
                id={styles.p1}
        >
            {enLan ? 'SRT will elevate your production to a new level of profitability and quality.' : <>ИРТ
                выведет ваше производство на новый<br className="brt3" /> уровень<br className="brt1" /> рентабельности
                и качества.</>}
        </p>
        <ul
                className="base_grid"
                id={styles.ul}
        >
            <li
                    className={`adli ${styles.ligrid1} advantages-list-item-automation_of_work_processes`}
            >
                <h3
                        className="head1"
                        // id={styles.h11}
                >
                    {enLan ? 'Workflow Automation' : 'Автоматизация рабочих процессов'}
                </h3>
                <p
                        className="text4"
                        // id={styles.p11}
                >
                    {enLan ? 'Enables routine tasks and operations that used to be done manually to be performed using technology and software.' : 'Позволяет выполнять рутинные задачи и операции, которые раньше выполнялись вручную, с помощью технологий и программного обеспечения.'}
                </p>
            </li>
            <li
                    className={`adli ${styles.ligrid1} advantages-list-item-flexibility_of_use`}
            >
                <h3
                        className="head1"
                        id={styles.h11}
                >
                    {enLan ? 'Flexibility of Use' : 'Гибкость использования'}
                </h3>
                {/*<p*/}
                {/*        className="text4"*/}
                {/*        id={styles.p11}*/}
                {/*>{enLan ? 'Our technologies are applicable in various fields, from electronics and pharmaceuticals to heavy industry. We ensure rapid implementation and customization to your needs while maintaining the highest production quality.' : <>Наши*/}
                {/*    технологии применимы<br className="brt2" /> в*/}
                {/*    самых разных*/}
                {/*    сферах —<br className="brt2" /> от*/}
                {/*    электроники и<br /> фармацевтики<br className="brt1" /> до тяжелой промышленности.<br*/}
                {/*            className="brt6"*/}
                {/*    /> Мы обеспечиваем*/}
                {/*    быстрое внедрение<br*/}
                {/*            className="brt4"*/}
                {/*    /> и адаптацию*/}
                {/*    под<br className="brt2" /> ваши потребности, сохраняя высочайшее*/}
                {/*    качество производства.</>}</p>*/}
                <p
                        className="text4"
                        id={styles.p11}
                >{enLan ? 'Our technologies are used in a wide range of applications, from electronics and pharmaceuticals to industrial and agricultural challenges. We provide fast installation and customization for your production, while maintaining the highest quality of the work performed.' : 'Наши технологии применяются в самых разных направлениях — от электроники и фармацевтики до проблем промышленности и сельского хозяйства. Мы обеспечиваем быструю установку и адаптацию под особенности вашего производства, сохраняя высочайшее качество выполняемых работ.'}</p>
            </li>
            <li
                    // id={styles.li2}
                    className={`adli ${styles.ligrid2} advantages-list-item-performance`}
            >
                <h3
                        className="head1"
                        id={styles.h22}
                >{enLan ? 'Performance' : <>Производитель<span
                        className="brt4"
                >-<br /></span>ность</>}</h3>
                <p
                        className="text4"
                        id={styles.p22}
                >
                    {/*{enLan ? 'Our technologies operate around the clock, executing assigned tasks with high precision and stability. They don’t require vacations or days off.' : <>Наши*/}
                    {/*    технологии<br /> круглосуточно<br className="brt6" /> выполняют<br*/}
                    {/*            className="brt4"*/}
                    {/*    /> поставленные<br*/}
                    {/*            className="brt1"*/}
                    {/*    /> задачи<br className="brt5" /> с высоким уровнем*/}
                    {/*    точности<br /> и стабильности. Им не нужен отпуск или выходной.</>}*/}
                    {enLan ? 'Our automation technologies solve tasks around the clock with a high level of accuracy and stability.' : 'Наши технологии для автоматизации круглосуточно решают поставленные задачи с высоким уровнем точности и стабильности.'}
                </p>
            </li>
            <li
                    // id={styles.li3}
                    className={`adli ${styles.ligrid2} advantages-list-item-cost_effectiveness`}
            >
                <h3
                        className="head1"
                        id={styles.h33}
                >{enLan ? 'Cost-Effectiveness' : 'Рентабельность'}</h3>
                <p
                        className="text4"
                        id={styles.p33}
                >{enLan ? 'Reduce personnel costs and training, and lower production costs to increase volume and quality of output.' : <>Сокращение
                    затрат на<br /> персонал<br className="brt1" /> и его
                    <br className="brt4" /> обучение,<br className="brt5" /> а также<br
                            className="brt6"
                    /> снижение<br /> производственных<br /> затрат для
                    увеличение объема<br className="brt2" /> и
                    качества<br className="brt6" /> выпускаемой
                    <br className="brt4" /> продукции.</>}</p>
            </li>
            <li
                    // id={styles.li4}
                    className={`adli ${styles.ligrid1} advantages-list-item-independence_from_personnel`}
            >
                <h3
                        className="head1"
                        id={styles.h44}
                >{enLan ? 'Independence from Personnel' : <>Независимость<br
                        className="brt3"
                /> от
                    кадров</>}</h3>
                <p
                        className="text4"
                        id={styles.p44}
                >{enLan ? 'Our technology allows us to ensure stable production even when highly skilled personnel are scarce or unavailable. Our automation solutions do not need vacation or time off and are independent of human error.' :
                        <>Наши
                            технологии позволяют<br className="brt4" /> обеспечить стабильность производства даже при<br /> нехватке или
                            <br className="brt4" /> отсутствии <span id={styles.span1}> высококвалифицированного </span><span id={styles.span2}> высококвалифицирован- ного </span> персонала. Нашим решениям по автоматизации не нужны отпуск или выходной, и они независимы от человеческого фактора.</>}</p>
            </li>
        </ul>
    </section>
}