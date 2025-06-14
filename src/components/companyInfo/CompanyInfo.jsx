import "./CompanyInfo.css"

export default function CompanyInfo({enLan}) {
    return <section className="company_info-legal_section">
        <div className="company_info-legal_block">
            <h2 className="company_info-legal_title">{enLan ? 'Company information' : 'данные о компании'}</h2>

            <div className="company_info-legal_content">
                <div className="legal_column">
                    <div className="company_info-company-info">
                        <div className="company_info-company_name">
                            {enLan ? '“Smart Robotic Technologies” LLC.' : 'Общество с ограниченной ответственностью "Интеллектуальные Роботизированные Технологии"'}
                        </div>

                        <div className="company_info-inn">
                            {enLan ? 'TIN: 6320083494' : 'ИНН 6320083494'}
                        </div>

                        <div className="company_info-address_block">
                            <div className="company_info-address_label">{enLan ? 'Legal address' : 'Юридический адрес'}</div>
                            <div className="company_info-address_text">
                                {enLan ? '445043, Samara region, the city of Togliatti, Togliatti, Okrainnaya str, vld. 24, premises. 202' : '445043, Самарская область, г.о. Тольятти, г. Тольятти, ул Окраинная, влд. 24, помещ. 202'}
                            </div>
                        </div>

                        <div className="company_info-address_block">
                            {!enLan &&
                                    <>
                                        <div className="company_info-address_label">Фактический адрес</div>
                                        <div className="company_info-address_text">
                                            445043, Самарская область, г.о. Тольятти, г. Тольятти, ул Окраинная, влд. 24, помещ. 202
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>

                <div className="company_info_legal_column">
                    <div className="company_info-okved_section">
                        <div className="company_info-okved_title">Основной код ОКВЭД</div>

                        <div className="company_info-okved_item">
                            <div className="company_info-okved_code">62.01</div>
                            <div className="company_info-okved_description">
                                Разработка компьютерного программного обеспечения
                            </div>
                            <div className="company_info-ministry_info">
                                Информация о видах ИТ-деятельности согласно Приказу Минцифры России от 11.05.2023 N 449 "Об утверждении перечня видов деятельности в области информационных технологий" (Зарегистрировано в Минюсте России 14.08.2023 N 74778)
                            </div>
                        </div>

                        <div className="company_info-okved_item">
                            <div className="company_info-okved_code">Код 1.03</div>
                            <div className="company_info-okved_description">
                                Проектирование и (или) иная деятельность, а также оказание услуг в отношении технологий робототехники и сенсорики, в том числе в области сенсоромоторной координации и пространственного позиционирования, сенсоров и обработки сенсорной информации, интеллектуальных систем управления робототехническими системами, систем автоматизации управления, включая беспилотные воздушные судна и высокоавтоматизированные транспортные средства
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}