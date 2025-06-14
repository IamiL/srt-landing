import styles from "./page.module.css"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function PrivacyPolicy({enLan}) {
    document.title = `${enLan ? 'IRT — Privacy policy' : 'ИРТ - Политика конфиденциальности'}`
    const {pathname, hash, key} = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return <>
        <main>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.pageTitle}>{enLan ? 'Policy on personal data processing' : 'ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ'}</h1>
                    {/*<button*/}
                    {/*        className={styles.downloadButton}*/}
                    {/*        onClick="downloadPolicy()"*/}
                    {/*>*/}
                    {/*    <svg*/}
                    {/*            className={styles.downloadIcon}*/}
                    {/*            viewBox="0 0 24 24"*/}
                    {/*    >*/}
                    {/*        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />*/}
                    {/*    </svg>*/}
                    {/*    Скачать документ (.docx)*/}
                    {/*</button>*/}
                </div>

                <div className={styles.contentWrapper}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '1. General provisions' : '1. Общие положения'}</h2>
                        <div className={styles.textContent}>
                            {
                                enLan ? 'This policy of personal data processing is drawn up in accordance with the requirements of the Federal Law dated 27.07.2006. No. 152-FZ "On Personal Data" (hereinafter referred to as the Personal Data Law) and defines the procedure of personal data processing and measures to ensure personal data security taken by "IRT" LLC (hereinafter referred to as the Operator).' :
                                        'Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО "ИРТ" (далее — Оператор).'
                            }

                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>1.1.</div>
                            <div className={styles.textContent}>
                                {
                                    enLan ? 'The Operator sets as its most important goal and condition of its activity the observance of human and citizen\'s rights and freedoms in the processing of personal data, including the protection of the rights to privacy, personal and family secrecy.' :
                                            'Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.'
                                }
                            </div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>1.2.</div>
                            <div className={styles.textContent}>
                                {
                                    enLan ? 'This Operator\'s policy on personal data processing (hereinafter referred to as the Policy) applies to all information that the Operator may obtain about visitors to the https://srtlt.ru/ website.' :
                                            'Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://srtlt.ru/.'
                                }

                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? 'Basic concepts used in the Policy' : '2. Основные понятия, используемые в Политике'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.1.</div>
                            <div className={styles.textContent}>{enLan ? 'Automated processing of personal data - processing of personal data with the help of computer equipment.' : 'Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.2.</div>
                            <div className={styles.textContent}>{enLan ? 'Blocking of personal data - temporary cessation of personal data processing (except for cases when processing is necessary to clarify personal data).' : 'Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.3.</div>
                            <div className={styles.textContent}>{enLan ? 'Website - a set of graphic and informational materials, as well as computer programs and databases, ensuring their availability on the Internet at the network address https://srtlt.ru/.' : 'Веб-сайт — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://srtlt.ru/.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.4.</div>
                            <div className={styles.textContent}>{enLan ? 'Personal data information system - a set of personal data contained in databases and information technologies and technical means ensuring their processing.' : 'Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.5.</div>
                            <div className={styles.textContent}>{enLan ? 'Personal data depersonalization - actions, as a result of which it is impossible to determine without using additional information the belonging of personal data to a particular User or other subject of personal data.' : 'Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.6.</div>
                            <div className={styles.textContent}>{enLan ? 'Processing of personal data - any action (operation) or set of actions (operations) performed with or without the use of automation means with personal data, including collection, recording, systematization, accumulation, storage, clarification (update, change), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.' : 'Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.7.</div>
                            <div className={styles.textContent}>{enLan ? 'Operator - a state authority, municipal authority, legal entity or natural person, independently or jointly with other persons organizing and/or carrying out processing of personal data, as well as determining the purposes of personal data processing, composition of personal data subject to processing, actions (operations) performed with personal data.' : 'Оператор — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и/или осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.8.</div>
                            <div className={styles.textContent}>{enLan ? 'Personal Data - any information relating directly or indirectly to a specific or identifiable User of the https://srtlt.ru/ website.' : 'Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://srtlt.ru/.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.9.</div>
                            <div className={styles.textContent}>{enLan ? 'Personal data authorized by the personal data subject for dissemination - personal data, access to which is provided by the personal data subject to an unlimited number of persons by giving consent to the processing of personal data authorized by the personal data subject for dissemination in the manner prescribed by the Personal Data Law (hereinafter - personal data authorized for dissemination).' : 'Персональные данные, разрешенные субъектом персональных данных для распространения, — персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее — персональные данные, разрешенные для распространения).'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.10.</div>
                            <div className={styles.textContent}>{enLan ? 'User - any visitor of the website https://srtlt.ru/.' : 'Пользователь — любой посетитель веб-сайта https://srtlt.ru/.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.11.</div>
                            <div className={styles.textContent}>{enLan ? 'Provision of personal data - actions aimed at disclosure of personal data to a certain person or a certain circle of persons.' : 'Предоставление персональных данных — действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.12.</div>
                            <div className={styles.textContent}>{enLan ? 'Dissemination of personal data - any actions aimed at disclosure of personal data to an indefinite number of persons (transfer of personal data) or familiarization of personal data to an unlimited number of persons, including disclosure of personal data in mass media, placement in information and telecommunication networks or providing access to personal data in any other way.' : 'Распространение персональных данных — любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.13.</div>
                            <div className={styles.textContent}>{enLan ? 'Cross-border transfer of personal data - transfer of personal data to the territory of a foreign country to a foreign government authority, a foreign individual or a foreign legal entity.' : 'Трансграничная передача персональных данных — передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>2.14.</div>
                            <div className={styles.textContent}>{enLan ? 'Destruction of personal data - any actions, as a result of which personal data are irretrievably destroyed with the impossibility of further recovery of the content of personal data in the personal data information system and/or material carriers of personal data are destroyed.' : 'Уничтожение персональных данных — любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '3. Basic rights and obligations of the Operator' : '3. Основные права и обязанности Оператора'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>{enLan ? '3.1 The Operator shall have the right to:' : '3.1. Оператор имеет право:'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to receive from the subject of personal data reliable information and/or documents containing personal data;' : 'получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'in case the personal data subject revokes his/her consent to the processing of personal data, as well as in case the personal data subject submits a request to stop processing of personal data, the Operator has the right to continue processing of personal data without consent of the personal data subject, if there are grounds specified in the Personal Data Law;' : 'в случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также, направления обращения с требованием о прекращении обработки персональных данных, Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'independently determine the composition and the list of measures necessary and sufficient to ensure the fulfillment of obligations stipulated by the Law on personal data and regulatory legal acts adopted in accordance with it, unless otherwise provided by the Law on personal data or other federal laws.' : 'самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>{enLan ? '3.2 The Operator shall:' : '3.2. Оператор обязан:'}</div>
                            <div className={styles.listIItem}>{enLan ? 'provide the personal data subject, upon his/her request, with information regarding the processing of his/her personal data;' : 'предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'organize the processing of personal data in accordance with the procedure established by the current legislation of the Russian Federation;' : 'организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'respond to appeals and requests of personal data subjects and their legal representatives in accordance with the requirements of the Law on personal data;' : 'отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to inform the authorized body for the protection of the rights of personal data subjects, upon request of this body, of the necessary information within 10 days from the date of receipt of such request;' : 'сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10 дней с даты получения такого запроса;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'publish or otherwise provide unrestricted access to this Personal Data Processing Policy;' : 'публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to take legal, organizational and technical measures to protect personal data from unlawful or accidental access to them, destruction, modification, blocking, copying, provision, dissemination of personal data, as well as from other unlawful actions in relation to personal data;' : 'принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'cease transfer (dissemination, provision, access) of personal data, stop processing and destroy personal data in the manner and cases stipulated by the Personal Data Law;' : 'прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to fulfill other obligations stipulated by the Personal Data Law.' : 'исполнять иные обязанности, предусмотренные Законом о персональных данных.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '4. basic rights and obligations of personal data subjects' : '4. Основные права и обязанности субъектов персональных данных'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>{enLan ? '4.1 Personal data subjects have the right:' : '4.1. Субъекты персональных данных имеют право:'}</div>
                            <div className={styles.listIItem}>{enLan ? 'receive information regarding the processing of his/her personal data, except in cases provided for by federal laws. Information shall be provided to the subject of personal data by the Operator in an accessible form and shall not contain personal data relating to other subjects of personal data, except in cases where there are legal grounds for disclosure of such personal data. The list of information and the procedure for obtaining it is established by the Law on Personal Data;' : 'получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to demand from the operator to clarify his personal data, block or destroy them if the personal data are incomplete, outdated, inaccurate, illegally obtained or are not necessary for the stated purpose of processing, as well as to take measures provided for by law to protect his rights;' : 'требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'impose a condition of prior consent when processing personal data for the purpose of marketing goods, works and services;' : 'выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to withdraw consent to the processing of personal data, as well as to send a request to stop processing of personal data;' : 'на отзыв согласия на обработку персональных данных, а также, на направление требования о прекращении обработки персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to appeal to the authorized body for the protection of the rights of personal data subjects or in court against unlawful acts or omissions of the Operator in the processing of his/her personal data;' : 'обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to exercise other rights provided for by the legislation of the Russian Federation.' : 'на осуществление иных прав, предусмотренных законодательством РФ.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>{enLan ? '4.2 The subjects of personal data are obliged to:' : '4.2. Субъекты персональных данных обязаны:'}</div>
                            <div className={styles.listIItem}>{enLan ? 'provide the Operator with true data about himself;' : 'предоставлять Оператору достоверные данные о себе;'}</div>
                            <div className={styles.listIItem}>{enLan ? 'to inform the Operator about the clarification (update, change) of his/her personal data.' : 'сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>4.3.</div>
                            <div className={styles.textContent}>{enLan ? 'Persons who have passed to the Operator false information about themselves, or information about another subject of personal data without the consent of the latter, shall be liable in accordance with the legislation of the Russian Federation.' : 'Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? 'Principles of personal data processing' : '5. Принципы обработки персональных данных'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.1.</div>
                            <div className={styles.textContent}>{enLan ? 'The processing of personal data shall be carried out on a lawful and fair basis.' : 'Обработка персональных данных осуществляется на законной и справедливой основе.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.2.</div>
                            <div className={styles.textContent}>{enLan ? 'The processing of personal data is limited to the achievement of specific, predetermined and legitimate purposes. Processing of personal data incompatible with the purposes of personal data collection is not allowed.' : 'Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.3.</div>
                            <div className={styles.textContent}>{enLan ? 'It is not allowed to merge databases containing personal data processed for purposes incompatible with each other.' : 'Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.4.</div>
                            <div className={styles.textContent}>{enLan ? 'Only personal data that meet the purposes for which they are processed shall be processed.' : 'Обработке подлежат только персональные данные, которые отвечают целям их обработки.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.5.</div>
                            <div className={styles.textContent}>{enLan ? 'The content and scope of the processed personal data correspond to the declared purposes of processing. Redundancy of processed personal data in relation to the stated purposes of their processing is not allowed.' : 'Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.6.</div>
                            <div className={styles.textContent}>{enLan ? 'When processing personal data, the accuracy of personal data, their sufficiency and, where necessary, relevance in relation to the purposes of processing of personal data shall be ensured. The Operator shall take the necessary measures and/or ensure that they are taken to delete or clarify incomplete or inaccurate data.' : 'При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор принимает необходимые меры и/или обеспечивает их принятие по удалению или уточнению неполных или неточных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>5.7.</div>
                            <div className={styles.textContent}>{enLan ? 'Storage of personal data is carried out in a form that allows to identify the subject of personal data, no longer than required by the purposes of personal data processing, unless the period of storage of personal data is established by federal law, contract, party to which, beneficiary or guarantor of which is the subject of personal data. Processed personal data shall be destroyed or depersonalized upon achievement of the purposes of processing or in case of loss of necessity to achieve these purposes, unless otherwise provided for by federal law.' : 'Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '6. Purposes of personal data processing' : '6. Цели обработки персональных данных'}</h2>

                        <div className={styles.tableContainer}>
                            <table className={styles.dataTable}>
                                <tr>
                                    <th>{enLan ? 'Purpose of processing' : 'Цель обработки'}</th>
                                    <td>{enLan ? 'Conclusion, execution and termination of civil law contracts' : 'заключение, исполнение и прекращение гражданско-правовых договоров'}</td>
                                </tr>
                                <tr>
                                    <th>{enLan ? 'Personal data' : 'Персональные данные'}</th>
                                    <td>
                                        {enLan ? <>
                                                    — surname, first name, patronymic<br />
                                                    — e-mail address<br />
                                                    — phone numbers
                                                </> :
                                                <>
                                                    — фамилия, имя, отчество<br />
                                                    — электронный адрес<br />
                                                    — номера телефонов
                                                </>}
                                    </td>
                                </tr>
                                <tr>
                                    <th>{enLan ? 'Legal grounds' : 'Правовые основания'}</th>
                                    <td>{enLan ? 'Federal Law №149-FZ “On information, information technologies and information protection”, 27.07.2006' : '— Федеральный закон «Об информации, информационных технологиях и о защите информации» от 27.07.2006 N 149-ФЗ'}</td>
                                </tr>
                                <tr>
                                    <th>{enLan ? 'Types of personal data processing' : 'Виды обработки персональных данных'}</th>
                                    <td>
                                        {enLan ?
                                                <>
                                                    — Collection, recording, systematization, accumulation, storage, destruction and depersonalization of personal data<br />
                                                    — Sending newsletters to the e-mail address
                                                </> :
                                                <>
                                                    — Сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных данных<br />
                                                    — Отправка информационных писем на адрес электронной почты
                                                </>
                                        }
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '7. Conditions of personal data processing' : '7. Условия обработки персональных данных'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.1.</div>
                            <div className={styles.textContent}>{enLan ? 'The processing of personal data shall be carried out with the consent of the personal data subject to the processing of his/her personal data.' : 'Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.2.</div>
                            <div className={styles.textContent}>{enLan ? 'Processing of personal data is necessary to achieve the purposes provided for by the international treaty of the Russian Federation or by law, to fulfill the functions, powers and duties assigned to the operator by the legislation of the Russian Federation.' : 'Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.3.</div>
                            <div className={styles.textContent}>{enLan ? 'Processing of personal data is necessary for the administration of justice, execution of a judicial act, act of another body or official subject to execution in accordance with the legislation of the Russian Federation on enforcement proceedings.' : 'Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.4.</div>
                            <div className={styles.textContent}>{enLan ? 'The processing of personal data is necessary for the execution of a contract to which the personal data subject is a party or a beneficiary or guarantor, as well as for the conclusion of a contract at the initiative of the personal data subject or a contract under which the personal data subject will be a beneficiary or guarantor.' : 'Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.5.</div>
                            <div className={styles.textContent}>{enLan ? 'The processing of personal data is necessary for the exercise of the rights and legitimate interests of the operator or third parties or for the achievement of socially important purposes, provided that the rights and freedoms of the personal data subject are not violated.' : 'Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.6.</div>
                            <div className={styles.textContent}>{enLan ? 'Processing of personal data to which the personal data subject or at his/her request (hereinafter referred to as publicly available personal data) has unrestricted access is performed.' : 'Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее — общедоступные персональные данные).'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>7.7.</div>
                            <div className={styles.textContent}>{enLan ? 'Processing of personal data subject to publication or mandatory disclosure in accordance with federal law.' : 'Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '8. Procedure for collection, storage, transfer and other types of personal data processing' : '8. Порядок сбора, хранения, передачи и других видов обработки персональных данных'}</h2>

                        <div className={styles.highlightBox}>
                            <div className={styles.textContent}>
                                {enLan ? 'The security of personal data processed by the Operator is ensured by implementing legal, organizational and technical measures necessary for full compliance with the requirements of the applicable legislation in the field of personal data protection.' : 'Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.'}
                            </div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.1.</div>
                            <div className={styles.textContent}>{enLan ? 'The Operator shall ensure safety of personal data and take all possible measures to exclude access to personal data by unauthorized persons.' : 'Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.2.</div>
                            <div className={styles.textContent}>{enLan ? 'The User\'s personal data will never, under no circumstances, be transferred to third parties, except in cases related to the execution of the current legislation or if the subject of personal data has given consent to the Operator to transfer the data to a third party for the fulfillment of obligations under a civil law contract.' : 'Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.3.</div>
                            <div className={styles.textContent}> {
                                enLan ? <>
                                            In case of identifying inaccuracies in personal data, the User may update them independently by sending a notice to the Operator to the Operator's e-mail address <a
                                                href="mailto:logistica@povpro.ru"
                                                className={styles.emailLink}
                                        >logistica@povpro.ru</a> with the note "Personal Data Update".
                                        </> :
                                        <>
                                            В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора <a
                                                href="mailto:logistica@povpro.ru"
                                                className={styles.emailLink}
                                        >logistica@povpro.ru</a> с пометкой «Актуализация персональных данных».
                                        </>
                            }
                            </div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.4.</div>
                            <div className={styles.textContent}>
                                {enLan ?
                                        <>
                                            The term of personal data processing is determined by the achievement of the purposes for which the personal data were collected, unless another term is stipulated by the contract or applicable law. The User may withdraw his/her consent to the processing of personal data at any time by sending a notice to the Operator by e-mail to the Operator's e-mail address <a
                                                href="mailto:logistica@povpro.ru"
                                                className={styles.emailLink}
                                        >logistica@povpro.ru</a>, marked "Withdrawal of consent to the processing of personal data".
                                        </> :
                                        <>
                                            Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора <a
                                                href="mailto:logistica@povpro.ru"
                                                className={styles.emailLink}
                                        >logistica@povpro.ru</a> с пометкой «Отзыв согласия на обработку персональных данных».
                                        </>
                                }
                            </div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.5.</div>
                            <div className={styles.textContent}>{enLan ? 'All information that is collected by third-party services, including payment systems, means of communication and other service providers, is stored and processed by the specified persons (Operators) in accordance with their User Agreement and Privacy Policy. The subject of personal data and/or with the said documents. The Operator is not responsible for the actions of third parties, including the service providers specified in this paragraph.' : 'Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Субъект персональных данных и/или с указанными документами. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.6.</div>
                            <div className={styles.textContent}>{enLan ? 'The prohibitions established by the personal data subject on the transfer (except for granting access), as well as on the processing or conditions of processing (except for access) of personal data authorized for dissemination shall not apply in cases of personal data processing in the state, public and other public interests defined by the legislation of the Russian Federation.' : 'Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.7.</div>
                            <div className={styles.textContent}>{enLan ? 'The Operator shall ensure confidentiality of personal data during the processing of personal data.' : 'Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.8.</div>
                            <div className={styles.textContent}>{enLan ? 'The Operator shall store personal data in a form that allows to identify the subject of personal data for no longer than required by the purposes of personal data processing, unless the period of personal data storage is established by federal law, contract to which the subject of personal data is a party, beneficiary or guarantor.' : 'Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>8.9.</div>
                            <div className={styles.textContent}>{enLan ? 'The condition for termination of personal data processing may be the achievement of the purposes of personal data processing, expiration of the personal data subject\'s consent, withdrawal of consent by the personal data subject or the requirement to terminate personal data processing, as well as the detection of unlawful processing of personal data.' : 'Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных, отзыв согласия субъектом персональных данных или требование о прекращении обработки персональных данных, а также выявление неправомерной обработки персональных данных.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '9. List of actions performed by the Operator with the received personal data' : '9. Перечень действий, производимых Оператором с полученными персональными данными'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>9.1.</div>
                            <div className={styles.textContent}>{enLan ? 'The Operator shall collect, record, systematize, accumulate, store, clarify (update, change), extract, use, transfer (disseminate, provide, access), depersonalize, block, delete and destroy personal data.' : 'Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>9.2.</div>
                            <div className={styles.textContent}>{enLan ? 'The Operator performs automated processing of personal data with or without receiving and/or transmitting the received information via information and telecommunication networks.' : 'Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '10. Cross-border transfer of personal data' : '10. Трансграничная передача персональных данных'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>10.1.</div>
                            <div className={styles.textContent}>{enLan ? 'The Operator shall notify the authorized body for the protection of the rights of personal data subjects of its intention to carry out transborder transfer of personal data (such notification shall be sent separately from the notification on the intention to carry out personal data processing) prior to the commencement of transborder personal data transfer activities.' : 'Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных (такое уведомление направляется отдельно от уведомления о намерении осуществлять обработку персональных данных).'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>10.2.</div>
                            <div className={styles.textContent}>{enLan ? 'Before submitting the above-mentioned notification, the Operator shall be obliged to obtain relevant information from the authorities of a foreign state, foreign individuals, foreign legal entities to whom trans-border transfer of personal data is planned.' : 'Оператор до подачи вышеуказанного уведомления, обязан получить от органов власти иностранного государства, иностранных физических лиц, иностранных юридических лиц, которым планируется трансграничная передача персональных данных, соответствующие сведения.'}</div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '11. Confidentiality of personal data' : '11. Конфиденциальность персональных данных'}</h2>

                        <div className={styles.textContent}>
                            {enLan ? 'The operator and other persons who have access to personal data are obliged not to disclose to third parties and not to disseminate personal data without the consent of the subject of personal data, unless otherwise provided for by federal law.' : 'Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.'}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{enLan ? '12. Final provisions' : '12. Заключительные положения'}</h2>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>12.1.</div>
                            <div className={styles.textContent}>
                                {enLan ? <>
                                            The User may obtain any clarifications on the issues of interest regarding the processing of his/her personal data by contacting the Operator via e-mail at <a
                                                href="mailto:logistica@povpro.ru"
                                                className={styles.emailLink}
                                        >logistica@povpro.ru</a>.
                                        </>
                                        :
                                        <>
                                            Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты <a
                                                href="mailto:logistica@povpro.ru"
                                                className={styles.emailLink}
                                        >logistica@povpro.ru</a>.
                                        </>}
                            </div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>12.2.</div>
                            <div className={styles.textContent}>{enLan ? 'This document will reflect any changes to the Operator\'s personal data processing policy. The Policy is valid indefinitely until it is replaced by a new version.' : 'В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.'}</div>
                        </div>

                        <div className={styles.subsection}>
                            <div className={styles.subsectionTitle}>12.3.</div>
                            <div className={styles.textContent}>{enLan ? 'The current version of the Policy is freely available on the Internet at https://srtlt.ru/policy.' : 'Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://srtlt.ru/policy.'}</div>
                        </div>
                    </div>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactTitle}>{enLan ? 'Contact information' : 'Контактная информация'}</div>
                        <div className={styles.contactText}>
                            По всем вопросам, касающимся обработки персональных данных, обращайтесь к нам по электронной почте: <a
                                href="mailto:logistica@povpro.ru"
                                className={styles.emailLink}
                        >logistica@povpro.ru</a>
                        </div>
                        <div className={styles.contactText}>
                            {enLan ?
                                    <>
                                        The current version of this document is always available at: <a
                                            href="https://srtlt.ru/policy"
                                            className={styles.emailLink}
                                    >https://srtlt.ru/policy</a>
                                    </> :
                                    <>
                                        Актуальная версия данного документа всегда доступна по адресу: <a
                                            href="https://srtlt.ru/policy"
                                            className={styles.emailLink}
                                    >https://srtlt.ru/policy</a>
                                    </>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}