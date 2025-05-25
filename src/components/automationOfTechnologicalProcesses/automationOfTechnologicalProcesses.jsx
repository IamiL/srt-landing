import styles from "./automationOfTechnologicalProcesses.module.css"
import Additional from "./additional/additional.jsx";
import './aut.css'

export default function AutomationOfTechnologicalProcesses({enLan}) {
    return <section id="automation" className='adli'>
        <h2>{enLan ? 'Automation of Technological Processes' : 'Автоматизация технологических процессов'}</h2>
        <div className="base_grid" id={styles.div}>
            <div className="automation_sec1">
                <h4>{enLan ? 'Advantages of Automating Technological Processes' : 'Преимущества автоматизации технологических процессов'}</h4>
                <ul className="text6">
                    <li>
                        {enLan ? '• Remote process monitoring from any device.' :
                            <>• Контролирование процесса<br className="brt4"/> удаленно, с любого устройства.</>}
                    </li>
                    <li>
                        {enLan ? '• Automatic parameter adjustment, eliminating human error.' :
                            <>• Все параметры регулируются автоматически,<br className="brt5"/> исключая<br
                                className="brt3"/> человеческий
                                фактор.</>}
                    </li>
                    <li>
                        {enLan ? '• Increased productivity and no need for constant operator presence.' :
                            <>
                                • Увеличение производительности<br className="brt4"/> и отсутствие
                                необходимости постоянного<br className="brt5"/> присутствия оператора.
                            </>}
                    </li>
                </ul>
            </div>
            <div className='autp-mobile-img'>
            <Additional enLan={enLan}/></div>
            <p className="text4">
                {enLan ? 'A conventional drying cabinet purchased from a domestic manufacturer with manual control proved to be inconvenient and inefficient: setting the modes required constant operator presence, which reduced productivity and profitability.' :
                    <>
                        Обычный сушильный шкаф, приобретенный<br className="brt4"/> у отечественного производителя, с
                        ручным управлением
                        оказался
                        неудобным<br className="brt4"/> и малоэффективным: для настройки режимов требовалось<br
                        className="brt5"/> постоянное
                        присутствие<br className="brt4"/> оператора, что
                        снижало<br className="brt5"/> производительность<br className="brt6"/> и рентабельность.
                    </>}
                <br/>
                <br/>

                {enLan ? 'After our modernization and integration of a processor-based control system, the need for constant personnel presence was eliminated. Human involvement is now limited to loading and unloading, which is required only once every four days.' :
                    <>
                        После нашей модернизации и интеграции системы управления процессором
                        необходимость в постоянном присутствии персонала отпала. Единственное<br
                        className="brt1"/> участие
                        человека сводится к
                        загрузке и<br className="brt5"/> выгрузке, что требуется лишь раз<br
                        className="brt1"/> в четыре дня.
                    </>}
                <br/>
                <br/>


                {enLan ? 'The system allows remote adjustment of temperature and time settings from any device. Software developed by our engineers enables flexible programming of any modes and cycles, while also providing protection against unforeseen situations. In the event of an emergency, the system will automatically notify you via signal or message.' :
                    <>
                        Возможность удалённо регулировать температурные и временные режимы с<br
                        className="brt6"/> любого
                        устройства. Программное<br className="brt4"/> обеспечение, разработанное нашими<br
                        className="brt6"/> инженерами, позволяет гибко задавать<br
                        className="brt3"/> любые режимы
                        и циклы, а также<br className="brt1 /"/> защищает от нештатных ситуаций.<br className="brt5"/> В
                        случае аварии<br className="brt4"/> система
                        автоматически<br className="brt1 /"/> оповестит вас<br className="brt4"/> сигналом<br
                        className="brt5"/> или
                        сообщением.
                    </>}
                <br/>
                <br/>


                <span id={styles.span5}>{enLan ? 'FOR EXAMPLE:' : 'КАК ПРИМЕР:'}</span>
                {enLan ? ' in a process lasting 4 days, the temperature needs to be increased by 7°C every 1.5 hours. Failure to meet these conditions results in spoiled products. Thanks to our automation, the entire process runs seamlessly and fully automatically.' :
                    <> в
                        процессе,
                        длительностью<br className="brt4"/> 4 суток,
                        каждые 1,5<br className="brt5"/> часа
                        требуется
                        повышать температуру на 7 градусов. При<br className="brt5"/> нарушении<br
                            className="brt4"/> этих
                        условий продукция
                        становится<br className="brt4"/> испорченной.<br className="brt5"/> Благодаря нашей<br
                            className="brt4"/> автоматизации
                        весь процесс<br
                            className="brt1 /"/> выполняется<br className="brt4"/> без<br className="brt5"/> сбоев,
                        полностью в<br className="brt4"/> автоматическом режиме.</>}
            </p>
        </div>
        <Additional enLan={enLan}/>
    </section>
}