import photo from "./photo.webp";
import table from './table.svg'
import tableEn from './tableEn.svg'

export default function Robot4({enLan}) {
    return <div className='base_grid' id="robot4">
        <div className="robdesc2">
            <p className="size1333">{enLan ? 'Rigid structure, high stability, minimal torque fluctuations.' : <>
                Жёсткая конструкция,
                высокая стабильность, незначительные<br className="brt1"/> колебания крутящего<br
                className="brt4"/> момента.
            </>}
                <br/>
                <br/>
            </p>

            <h4>{enLan ? 'Applications:' : 'Область применения:'}</h4>
            <p className="size1333">
                {enLan ? 'Production lines, heavy industry, mechanical engineering, machining, handling heavy loads.' : <>
                    Производственные линии, тяжелая промышленность,<br className="brt2"/> машиностроение, механическая
                    обработка, перемещение<br className="brt4"/> тяжелых<br className="brt1"/> грузов.
                </>
                }
                <br className="brt4"/> <br className="brt4"/>
            </p>
        </div>
        <div className="robtbl2">
            <h4>{enLan ? 'Key Technical Specifications' : 'Основные технические характеристики'}</h4>

            {enLan ? <img src={tableEn} alt="table of characteristics"/> :
                <img src={table} alt="таблица характеристик"/>}
        </div>
        <div className="robimg2 adli">
            <h3 className="imgheading">{enLan ? 'SRTh Heavy-Duty Robots' : <>Роботы тяжело<br/> нагруженные
                SRTh</>}</h3>
            <div><img src={photo} alt={enLan ? 'SRTh Robots photo' : 'Фото робота серии SRTh'}/></div>
        </div>
    </div>
}