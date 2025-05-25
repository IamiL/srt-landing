import "./../catalog.css"
import {useState} from "react";
import Portal from "./portal.jsx";
import GalleryPortal from "./gallery-portal.jsx";

export default function DryingCabinets({enLan}) {
    const [modalItem, setModalItem] = useState(1)

    const [modal1Open, setModal1Open] = useState(null)


    const [modal2Item, setModal2Item] = useState(0)

    const [modal2Open, setModal2Open] = useState(null)

    return (
        <>
            <h1 className='heading1 catalogp-heading'>{enLan ? 'Drying cabinets' : 'Сушильные шкафы'}</h1>
            <section className='base_grid catalog-main-sec'>
                <div className='catalog_main_img2 adli'>
                    <img className='drying-img1' src='/catalog/drying/drying2.webp'/>
                    <img className='drying-img2' src='/catalog/drying/drying3.webp'/>
                    <img className='drying-img3' src='/catalog/drying/drying4.webp'/>
                </div>
                <div className='catalog_main_text2 text4'>
                    <p>{enLan ? <>The cabinets are made of high quality materials and stainless steel, which guarantees
                        reliability and many years of use.
                        and many years of use.<br/><br/>
                        The main task is to remove moisture from various
                        materials, be it raw materials, semi-finished or finished products. Also their use may be
                        necessary before painting, applying
                        coating, gluing of materials or other technological operations. Our products
                        allow you to intelligently control the process
                        for an indefinite period of time, and you can rest assured you'll avoid corrosion, rot, mold.
                        and other negative effects associated
                        associated with moisture.<br/><br/>
                        Our specialists will help you choose the drying cabinet that perfectly matches the needs of your
                        production.
                        and, if necessary, customize it to your specifications.
                        to your specifications.</> : <>Шкафы изготовлены из высококачественных материалов и
                        нержавеющей стали, что
                        гарантирует
                        надежность <br className='brt2'/>и многолетнюю эксплуатацию.<br/><br/>
                        Основная задача — удаление влаги из различных <br/>материалов, будь то сырье, полуфабрикаты или
                        готовая продукция. Также их использование может быть <br className='brt2'/>необходимо перед
                        покраской, нанесением <br/>покрытий, склейкой материалов или другими технологическими
                        операциями. Наша продукция <br/>позволяет интеллектуально управлять процессом <br/>в течение
                        неограниченного времени, и вы можете быть спокойны: вы избежите коррозии, гниения,
                        плесени <br className='brt2'/>и других негативных последствий, связанных <br className='brt2'/>с
                        влажностью.<br/><br/>
                        Наши специалисты помогут подобрать сушильный шкаф, который идеально соответствует нуждам
                        вашего <br className='brt2'/>производства, а в случае необходимости — доработать его <br
                            className='brt1'/>по вашему
                        техническому
                        заданию.</>}
                        <br/><br/>
                        {enLan ? <><span className='DryingCabinets-text-span'>We can equip the cabinet with a programmable logic controller (PLC) with touch screen control and remote monitoring capability</span></> : <><span
                            className='DryingCabinets-text-span'>
                        Мы можем оснастить шкаф <br/>программируемым логическим <br/>контроллером (ПЛК) с сенсорным <br/>управлением и
                        возможностью удаленного контроля
                        </span></>}
                    </p>
                </div>
            </section>
            <section className='catalog-sec22'>
                <ul className='base_grid catalog_items'>
                    <li className='catalog_item2 catalog_item_left catalog_item_mobile_left adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(25)
                        }}>
                        <h2 className='head1'>
                            {enLan ? 'Drying cabinet — 360' : <>Сушильный <br className='brt4' />шкаф — 360</>}
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/360.webp'/>
                        </div>
                    </li>
                    <li className='catalog_item2 catalog_item_center catalog_item_mobile_right adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(26)
                        }}>
                        <h2 className='head1'>
                            {enLan ? 'Drying cabinet — 480' : <>Сушильный <br className='brt4' />шкаф — 480</>}
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/480.webp'/>
                        </div>
                    </li>
                    <li className='catalog_item3 catalog_item_right catalog_item_mobile_left adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(27)
                        }}>
                        <h2 className='head1'>
                            {enLan ? 'Drying cabinet — 576' : <>Сушильный <br className='brt4' />шкаф — 576</>}
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/576.webp'/>
                        </div>
                    </li>
                    <li className='catalog_item2 catalog_item_left catalog_item_mobile_right adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(28)
                        }}>
                        <h2 className='head1'>
                            {enLan ? 'Drying cabinet — 960' : <>Сушильный <br className='brt4' />шкаф — 960</>}
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/960.webp'/>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className='head1 catalog_gal_heading'>{enLan ? 'Gallery' : 'Галерея'}</h2>
                <ul className='base_grid drying_gal_ul'>
                    <li className='gallery-item catalog_gal_item1 gallery-item-size2'
                        onClick={() => {
                            // setModalItem(1);
                            setModal2Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(1)
                        }}><img src='/catalog/drying/gal1.webp'/></li>
                    <li className='gallery-item catalog_gal_item2 gallery-item-size2' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(2)
                        }}><img src='/catalog/drying/gal2.webp'/></li>
                    <li className='gallery-item catalog_gal_item3 gallery-item-size2' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(3)
                        }}><img src='/catalog/drying/gal3.webp'/></li>
                    <li className='gallery-item catalog_gal_item4 gallery-item-size2' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(4)
                        }}><img src='/catalog/drying/gal4.webp'/></li>
                    <li className='gallery-item catalog_gal_item5 gallery-item-size2' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(5)
                        }}><img src='/catalog/drying/gal5.webp'/></li>
                    <li className='gallery-item catalog_gal_item6 gallery-item-size2' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(6)
                        }}><img src='/catalog/drying/gal6.webp'/></li>
                </ul>
            </section>
            <GalleryPortal catalogNumber={1} item={modal2Item} isOpen={modal2Open} setIsOpen={setModal2Open}/>
            <Portal enLan={enLan} heightType={2} item={modalItem} isOpen={modal1Open}
                    setIsOpen={(value) => setModal1Open(value)}/>
        </>
    );
}