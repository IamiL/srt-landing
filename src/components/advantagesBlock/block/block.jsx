import styles from "./block.module.css"
import "./block.css"

export default function AdvantagesBlock({enLan}) {
    return <section id="advantages">
        <h2 id={styles.h2}>{enLan ? 'Our Advantages' : 'Наши преимущества'}</h2>
        <p className="text2"
           id={styles.p1}>{enLan ? 'SRT will elevate your production to a new level of profitability and quality.' : <>ИРТ
            выведет ваше производство на новый<br className="brt3"/> уровень<br className="brt1"/> рентабельности
            и качества.</>}</p>
        <ul className="base_grid" id={styles.ul}>
            <li id={styles.li1} className={`adli ${styles.ligrid1}`}>
                <h3 className="head1" id={styles.h11}>{enLan ? 'Flexibility of Use' : 'Гибкость использования'}</h3>
                <p className="text4"
                   id={styles.p11}>{enLan ? 'Our technologies are applicable in various fields, from electronics and pharmaceuticals to heavy industry. We ensure rapid implementation and customization to your needs while maintaining the highest production quality.' : <>Наши
                    технологии применимы<br className="brt2"/> в
                    самых разных
                    сферах —<br className="brt2"/> от
                    электроники и<br/> фармацевтики<br className="brt1"/> до тяжелой промышленности.<br
                        className="brt6"/> Мы обеспечиваем
                    быстрое внедрение<br
                        className="brt4"/> и адаптацию
                    под<br className="brt2"/> ваши потребности, сохраняя высочайшее
                    качество производства.</>}</p>
            </li>
            <li id={styles.li2} className={`adli ${styles.ligrid2}`}>
                <h3 className="head1" id={styles.h22}>{enLan ? 'Performance' : <>Производитель<span
                    className="brt4">-<br/></span>ность</>}</h3>
                <p className="text4"
                   id={styles.p22}>{enLan ? 'Our technologies operate around the clock, executing assigned tasks with high precision and stability. They don’t require vacations or days off.' : <>Наши
                    технологии<br/> круглосуточно<br className="brt6"/> выполняют<br
                        className="brt4"/> поставленные<br
                        className="brt1"/> задачи<br className="brt5"/> с высоким уровнем
                    точности<br/> и стабильности. Им не нужен отпуск или выходной.</>}</p></li>
            <li id={styles.li3} className={`adli ${styles.ligrid2}`}>
                <h3 className="head1" id={styles.h33}>{enLan ? 'Cost-Effectiveness' : 'Рентабельность'}</h3>
                <p className="text4"
                   id={styles.p33}>{enLan ? 'Reduce labor costs and training expenses while cutting non-production costs. Increase the volume and quality of manufactured products.' : <>Сокращение
                    затрат на<br/> персонал<br className="brt1"/> и его<br
                        className="brt4"/> обучение,<br className="brt5"/> а также<br
                        className="brt6"/> снижение<br/> внепроизводственных<br/> расходов,
                    увеличение объема<br className="brt2"/> и
                    качества<br className="brt6"/> выпускаемой<br
                        className="brt4"/> продукции.</>}</p></li>
            <li id={styles.li4} className={`adli ${styles.ligrid1}`}>
                <h3 className="head1" id={styles.h44}>{enLan ? 'Independence from Personnel' : <>Независимость<br
                    className="brt3"/> от
                    кадров</>}</h3>
                <p className="text4"
                   id={styles.p44}>{enLan ? 'Our technologies ensure production stability, even in the absence or shortage of highly qualified personnel.' :
                    <>Наши
                        технологии позволяют<br
                            className="brt4"/> поддерживать стабильность
                        производства даже при<br/> нехватке или<br
                            className="brt4"/> отсутствии
                        <span id={styles.span1}> высококвалифицированного </span><span
                            id={styles.span2}> высококвалифицирован- ного </span>
                        персонала. </>}</p>
            </li>
        </ul>
    </section>
}