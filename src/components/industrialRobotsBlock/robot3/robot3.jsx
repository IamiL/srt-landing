import photo from './photo.webp'
import table from './table.svg'
import tableEn from './tableEn.svg'


export default function Robot3({enLan}) {
    return <div className='base_grid' id="robot3">
        <div className="robimg1 adli">
            <h3 className="imgheading">{enLan ? 'SRTе Light-to-Medium Load Robots' : <>Роботы легко -
                средне<br/> нагруженные SRTе</>}</h3>
            <div><img src={photo} alt={enLan ? 'SRTе Robots photo' : 'Фото робота серии SRTе'}/></div>
        </div>
        <div className="robdesc1">
            <p className="size1333">{enLan ? 'High speed, repeatability, positioning accuracy, and rigidity. High protection level, lightweight body, low operating and maintenance costs.' :
                <>Высокая скорость, повторяемость, точность позиционирования и<br className="brt1"/> жесткость, высокий<br className="brt4"/> уровень
                    защиты, легкий
                    корпус, низкие<br className="brt4"/> затраты<br className="brt1"/> на эксплуатацию<br className="brt5"/> и
                    обслуживание</>}<br/><br/></p>

            <h4>{enLan ? 'Applications:' : 'Область применения:'}</h4>
            <p className="size1333">
                {enLan ? 'Computers, communication, consumer electronics manufacturing, metalworking, welding, painting. Primarily used for loading/unloading, grinding/polishing, welding, transferring, and stacking under harsh conditions.' :
                    <>Компьютерная, коммуникационная,<br className="brt4"/> производство бытовой<br
                        className="brt2"/> электроники,
                        металлообработка, сварочное производство,<br/> окрасочное производство. В основном применяется
                        для
                        погрузки и разгрузки,<br className="brt4"/> шлифовки и полировки, сварки, перемещения<br
                            className="brt4"/> и укладки в тяжелых
                        условиях.</>}
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