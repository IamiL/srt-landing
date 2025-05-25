import photo from "./photo.webp";
import table from './table.svg'
import tableEn from './tableEn.svg'

export default function Robot2({enLan}) {
    return <div className='base_grid' id="robot2">
        <div className="robdesc2">
            <p className="size1333">{enLan ? 'High protection level, high speed, accuracy, and stability.' : 'Высокий уровень защиты, высокая скорость, точность, стабильность'}<br/><br/>
            </p>

            <h4>{enLan ? 'Applications:' : 'Область применения:'}</h4>
            <p className="size1333">
                {enLan ? 'Computers, communication, consumer electronics, metalworking, food industry, pharmaceutical production. Ideal for intensive operation in confined spaces.' :
                    <>Компьютерная, коммуникационная, бытовая электроника,<br className="brt2"/> металлообработка,
                        пищевая промышленность, фармацевтическое производство. Идеально подходит для интенсивной работы
                        в зоне<br className="brt1"/> замкнутого пространства.</>
                }<br className="brt4"/> <br className="brt4"/>
            </p>
        </div>
        <div className="robtbl2">
            <h4>{enLan ? 'Key Technical Specifications' : 'Основные технические характеристики'}</h4>

            {enLan ? <img src={tableEn} alt="table of characteristics"/> :
                <img src={table} alt="таблица характеристик"/>}
        </div>
        <div className="robimg2 adli">
            <h3 className="imgheading">{enLan ? 'SRTt Desktop Robots' : <>Настольные роботы<br/> серии SRTt</>}</h3>
            <div><img src={photo} alt={enLan ? 'SRTt Robots photo' : 'Фото робота серии SRTt'}/>
            </div>
        </div>
    </div>
}