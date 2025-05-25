import photo from './photo.webp'
import table from './table.svg'
import tableEn from './tableEn.svg'


export default function Robot1({enLan}) {
    return <div className='base_grid' id="robot1">
        <div className="robimg1 adli">
            <h3 className="imgheading">{enLan ? 'SCARA Robots' : 'Роботы SCARA'}</h3>
            <div><img src={photo} alt={enLan ? 'SCARA Robots photo' : 'Фото робота серии SCARA'}/></div>
        </div>
        <div className="robdesc1">
            <p className="size1333">{enLan ? 'Compact design, high speed, high positioning accuracy. Small size and flexibility. Water- and dust-resistant. Lightweight body, Wi-Fi module support, data upload and download, real-time monitoring.' : <>Компактная
                конструкция, высокая скорость, высокая точность позиционирования, малый
                размер и гибкость,
                защита от воды<br className="brt2"/> и пыли,<br className="brt4"/> легкий корпус,
                поддержка модуля Wi‑Fi,<br className="brt4"/> загрузка<br
                    className="brt2"/> и выгрузка
                данных,
                мониторинг в реальном времени.</>}<br/><br/></p>


            <h4>{enLan ? 'Applications:' : 'Область применения:'}</h4>
            <p className="size1333">
                {enLan ? 'Computers, electronics manufacturing, sorting, pharmaceutical production, food industry.' : <>Компьютерная,
                    производство электроники, сортировка,<br className="brt2"/> фармацевтическое<br/> производство,
                    пищевая
                    промышленность.</>}
                <br className="brt4"/> <br className="brt4"/>
            </p>
        </div>
        <div className="robtbl1">
            <h4>{enLan ? 'Key Technical Specifications' : 'Основные технические характеристики'}</h4>

            {enLan ? <img src={tableEn} alt="table of characteristics"/> :
                <img src={table} alt="таблица характеристик"/>}

        </div>
    </div>
}