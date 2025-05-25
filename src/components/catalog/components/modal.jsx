import "./../catalog.css"

const items = [
    {
        name: '',
        photo: '',
        table: ''
    },
    {
        name: 'P-180L-380',
        photo: '/catalog/crusher/P-180L-380.webp',
        table: '/catalog/crusher/P-180L-380.svg'
    },
    {
        name: 'P-180L-220',
        photo: '/catalog/crusher/P-180L-220.webp',
        table: '/catalog/crusher/P-180L-220.svg'
    },
    {
        name: 'P-250P',
        photo: '/catalog/crusher/P-250P.webp',
        table: '/catalog/crusher/P-250P.svg'
    },
    {
        name: 'P-250C',
        photo: '/catalog/crusher/P-250C.webp',
        table: '/catalog/crusher/P-250C.svg'
    },
    {
        name: 'P-300L',
        photo: '/catalog/crusher/P-300L.webp',
        table: '/catalog/crusher/P-300L.svg'
    },
    {
        name: 'P-300P',
        photo: '/catalog/crusher/P-300P.webp',
        table: '/catalog/crusher/P-300P.svg'
    },
    {
        name: 'P-300C',
        photo: '/catalog/crusher/P-300C.webp',
        table: '/catalog/crusher/P-300C.svg'
    },
    {
        name: 'P-400L',
        photo: '/catalog/crusher/P-400L.webp',
        table: '/catalog/crusher/P-400L.svg'
    },
    {
        name: 'P-400P',
        photo: '/catalog/crusher/P-400P.webp',
        table: '/catalog/crusher/P-400P.svg'
    },
    {
        name: 'P-400C',
        photo: '/catalog/crusher/P-400C.webp',
        table: '/catalog/crusher/P-400C.svg'
    },
    {
        name: 'P-500L',
        photo: '/catalog/crusher/P-500L.webp',
        table: '/catalog/crusher/P-500L.svg'
    },
    {
        name: 'P-500P',
        photo: '/catalog/crusher/P-500P.webp',
        table: '/catalog/crusher/P-500P.svg'
    },
    {
        name: 'P-500C',
        photo: '/catalog/crusher/P-500C.webp',
        table: '/catalog/crusher/P-500C.svg'
    },
    {
        name: 'P-600L',
        photo: '/catalog/crusher/P-600L.webp',
        table: '/catalog/crusher/P-600L.svg'
    },
    {
        name: 'P-600P',
        photo: '/catalog/crusher/P-600P.webp',
        table: '/catalog/crusher/P-600P.svg'
    },
    {
        name: 'P-600C',
        photo: '/catalog/crusher/P-600C.webp',
        table: '/catalog/crusher/P-600C.svg'
    },
    {
        name: 'P-700L',
        photo: '/catalog/crusher/P-700L.webp',
        table: '/catalog/crusher/P-700L.svg'
    },
    {
        name: 'P-700P',
        photo: '/catalog/crusher/P-700P.webp',
        table: '/catalog/crusher/P-700P.svg'
    },
    {
        name: 'P-700C',
        photo: '/catalog/crusher/P-700C.webp',
        table: '/catalog/crusher/P-700C.svg'
    },
    {
        name: 'P-800L',
        photo: '/catalog/crusher/P-800L.webp',
        table: '/catalog/crusher/P-800L.svg'
    },
    {
        name: 'P-800P',
        photo: '/catalog/crusher/P-800P.webp',
        table: '/catalog/crusher/P-800P.svg'
    },
    {
        name: 'P-800C',
        photo: '/catalog/crusher/P-800C.webp',
        table: '/catalog/crusher/P-800C.svg'
    },
    {
        name: 'P-1000L',
        photo: '/catalog/crusher/P-1000L.webp',
        table: '/catalog/crusher/P-1000L.svg'
    },
    {
        name: 'P-1000P',
        photo: '/catalog/crusher/P-1000P.webp',
        table: '/catalog/crusher/P-1000P.svg'
    },
    {
        name: 'Сушильный шкаф — 360',
        photo: '/catalog/drying/360.webp',
        table: '/catalog/drying/360.svg'
    },
    {
        name: 'Сушильный шкаф — 480',
        photo: '/catalog/drying/480.webp',
        table: '/catalog/drying/480.svg'
    },
    {
        name: 'Сушильный шкаф — 576',
        photo: '/catalog/drying/576.webp',
        table: '/catalog/drying/576.svg'
    },
    {
        name: 'Сушильный шкаф — 960',
        photo: '/catalog/drying/960.webp',
        table: '/catalog/drying/960.svg'
    },
    {
        name: 'Изоляторы',
        photo: '/catalog/isolators/isolator.webp',
        table: '/catalog/isolators/isolators.svg'
    }
]

const enItems = [
    {
        name: '',
        photo: '',
        table: ''
    },
    {
        name: 'P-180L-380-',
        photo: '/catalog/crusher/P-180L-380.webp',
        table: '/catalog/crusher/P-180L-380-en.svg'
    },
    {
        name: 'P-180L-220',
        photo: '/catalog/crusher/P-180L-220.webp',
        table: '/catalog/crusher/P-180L-220-en.svg'
    },
    {
        name: 'P-250P',
        photo: '/catalog/crusher/P-250P.webp',
        table: '/catalog/crusher/P-250P-en.svg'
    },
    {
        name: 'P-250C',
        photo: '/catalog/crusher/P-250C.webp',
        table: '/catalog/crusher/P-250C-en.svg'
    },
    {
        name: 'P-300L',
        photo: '/catalog/crusher/P-300L.webp',
        table: '/catalog/crusher/P-300L-en.svg'
    },
    {
        name: 'P-300P',
        photo: '/catalog/crusher/P-300P.webp',
        table: '/catalog/crusher/P-300P-en.svg'
    },
    {
        name: 'P-300C',
        photo: '/catalog/crusher/P-300C.webp',
        table: '/catalog/crusher/P-300C-en.svg'
    },
    {
        name: 'P-400L',
        photo: '/catalog/crusher/P-400L.webp',
        table: '/catalog/crusher/P-400L-en.svg'
    },
    {
        name: 'P-400P',
        photo: '/catalog/crusher/P-400P.webp',
        table: '/catalog/crusher/P-400P-en.svg'
    },
    {
        name: 'P-400C',
        photo: '/catalog/crusher/P-400C.webp',
        table: '/catalog/crusher/P-400C-en.svg'
    },
    {
        name: 'P-500L',
        photo: '/catalog/crusher/P-500L.webp',
        table: '/catalog/crusher/P-500L-en.svg'
    },
    {
        name: 'P-500P',
        photo: '/catalog/crusher/P-500P.webp',
        table: '/catalog/crusher/P-500P-en.svg'
    },
    {
        name: 'P-500C',
        photo: '/catalog/crusher/P-500C.webp',
        table: '/catalog/crusher/P-500C-en.svg'
    },
    {
        name: 'P-600L',
        photo: '/catalog/crusher/P-600L.webp',
        table: '/catalog/crusher/P-600L-en.svg'
    },
    {
        name: 'P-600P',
        photo: '/catalog/crusher/P-600P.webp',
        table: '/catalog/crusher/P-600P-en.svg'
    },
    {
        name: 'P-600C',
        photo: '/catalog/crusher/P-600C.webp',
        table: '/catalog/crusher/P-600C-en.svg'
    },
    {
        name: 'P-700L',
        photo: '/catalog/crusher/P-700L.webp',
        table: '/catalog/crusher/P-700L-en.svg'
    },
    {
        name: 'P-700P',
        photo: '/catalog/crusher/P-700P.webp',
        table: '/catalog/crusher/P-700P-en.svg'
    },
    {
        name: 'P-700C',
        photo: '/catalog/crusher/P-700C.webp',
        table: '/catalog/crusher/P-700C-en.svg'
    },
    {
        name: 'P-800L',
        photo: '/catalog/crusher/P-800L.webp',
        table: '/catalog/crusher/P-800L-en.svg'
    },
    {
        name: 'P-800P',
        photo: '/catalog/crusher/P-800P.webp',
        table: '/catalog/crusher/P-800P-en.svg'
    },
    {
        name: 'P-800C',
        photo: '/catalog/crusher/P-800C.webp',
        table: '/catalog/crusher/P-800C-en.svg'
    },
    {
        name: 'P-1000L',
        photo: '/catalog/crusher/P-1000L.webp',
        table: '/catalog/crusher/P-1000L-en.svg'
    },
    {
        name: 'P-1000P',
        photo: '/catalog/crusher/P-1000P.webp',
        table: '/catalog/crusher/P-1000P-en.svg'
    },
    {
        name: 'Drying cabinet — 360',
        photo: '/catalog/drying/360.webp',
        table: '/catalog/drying/360-en.svg'
    },
    {
        name: 'Drying cabinet — 480',
        photo: '/catalog/drying/480.webp',
        table: '/catalog/drying/480-en.svg'
    },
    {
        name: 'Drying cabinet — 576',
        photo: '/catalog/drying/576.webp',
        table: '/catalog/drying/576-en.svg'
    },
    {
        name: 'Drying cabinet — 960',
        photo: '/catalog/drying/960.webp',
        table: '/catalog/drying/960-en.svg'
    },
    {
        name: 'Isolators',
        photo: '/catalog/isolators/isolator.webp',
        table: '/catalog/isolators/isolators-en.svg'
    }
]

export default function Modal({item, enLan}) {

    // if (item !== 0) {
    //     document.body.style.overflow = "hidden";
    // }

    return (
        <>
            <h2 className='heading2'>{enLan ? enItems[item].name : items[item].name}</h2>
            <section className='catalog-modal-content'>
                <div className='catalog-modal-sec11'>
                    <div className='catalog-model-img'>
                        <img src={items[item].photo}/>
                    </div>
                    <p>
                        {/*Описание*/}
                    </p>
                </div>
                <div className='catalog-modal-content-table-wrapper'>
                    <h3 className='head1 catalog-modal-sec21-heading'>{enLan ? 'Main technical characteristics' : 'Основные технические характеристики'}    </h3>
                    <img src={enLan ? enItems[item].table : items[item].table} className='catalog-modal-wrapper-table'/>
                </div>
            </section>
        </>
    )
}