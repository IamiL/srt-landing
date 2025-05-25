import "./../catalog.css"
import {StrictMode, useEffect, useRef, useState} from "react";
import Portal from "./portal.jsx";
import GalleryPortal from "./gallery-portal.jsx";


export default function RotaryCrusher({enLan}) {
    const initialArray = [
        'P-180L-380', 'P-180L-220', 'P-250P', 'P-250C', 'P-300L', 'P-300P', 'P-300C', 'P-400L', 'P-400P',
        'P-400C', 'P-500L', 'P-500P', 'P-500C', 'P-600L', 'P-600P', 'P-600C', 'P-700L', 'P-700P', 'P-700C', 'P-800L', 'P-800P', 'P-800C', 'P-1000L', 'P-1000P'
    ]

    const refsArray = [useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null),
    ]

    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(null)

    const [search, setSearch] = useState(initialArray);

    const [modalItem, setModalItem] = useState(1)

    const [modal1Open, setModal1Open] = useState(null)


    const [modal2Item, setModal2Item] = useState(0)

    const [modal2Open, setModal2Open] = useState(null)

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = initialArray.filter(item => item.toLowerCase().includes(query));
        setSearch(filtered);
    };

    useEffect(() => {
        ////console.log("isOpen - ", modal1Open)
    }, [modal1Open])

    const rootRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            const {target} = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                // isOpen && onClose?.();
                setSearchOpen(false);
                ////console.log('клик 1')
            } else {
                // catalog - search - item
                if (event.target.closest('.catalog-search-item')) {
                    ////console.log('клик по элементу списка')
                    setSearchOpen(false);
                } else {
                    ////console.log('клик не по элементу списка')
                    setSearchOpen(true);
                    inputRef.current.focus()
                }
                ////console.log('клик 2')
            }
            ////console.log('клик есть')
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (<>
            <h1 className='heading1 catalogp-heading'>{enLan ? 'Rotary Crusher' : 'Дробилка Роторная'}</h1>
            <section className='base_grid catalog-main-sec'>
                <div className='catalog_main_img1 adli'><img src='/catalog/crusher/crusher2.webp'/></div>
                <div className='catalog_main_text1 text4'>
                    <p>
                        {enLan ? <>
                                We offer an efficient solution for material shredding! Our range of modern and reliable
                                impact crushers is now available, capable of handling a wide range of tasks such as <span
                                className='catalog_main_text1-span'>crushing of:</span>
                            </> :
                            <>
                                Мы предлагаем эффективное решение для измельчения материалов! В нашем ассортименте
                                появились
                                современные и надежные роторные дробилки, способные справиться с широким спектром задач
                                таких
                                как <span className='catalog_main_text1-span'>дробление:</span>
                            </>}
                    </p>
                    <br/>
                    <ul className='catalog_main_text1-list'>
                        <li>{enLan ? 'polymer and rubber raw materials.' : 'полимерного и резинового сырья.'}</li>
                        <li>{enLan ? 'light construction waste.' : 'легкого строительного мусора.'}</li>
                        <li>{enLan ? 'plastic, wood, glass for recycling.' : 'пластика, древесины, стекла для вторичного использования.'}</li>
                        <li>{enLan ? 'agriculture: grinding of fodder, grain, straw for livestock breeding needs.' : 'сельское хозяйство: измельчение кормов, зерна, соломы для нужд животноводства.'}</li>
                    </ul>
                    <br/>
                    <p>{enLan ? 'We offer impact crushers of various types and capacities to meet your every need, as well as providing the necessary consumable spare parts. Our impact crushers are tried and tested, proven to be extremely reliable and trouble-free crushing equipment, and are currently in service in an existing production environment!' :
                        'Мы предлагаем роторные дробилки различных типов и производительности, чтобы удовлетворить любые ваши потребности, а также обеспечиваем необходимыми расходными запасными частями. Наши роторные дробилки проверены, протестированы, зарекомендовали себя как крайне надежное и безотказное дробильное оборудование, в настоящий момент находится в эксплуатации в условиях действующего производства!'}
                    </p>
                </div>
            </section>
            <section className='catalog-sec2'>
                <div className='base_grid'>
                    <div className='catalogp_item_left catalog_input-wrapper' ref={rootRef}>
                        <div className='adli catalog_input-area'>
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.98577 18.7434C7.19488 18.7434 4.83312 17.836 2.90048 16.0213C0.967853 14.2065 0.00102499 11.99 8.12843e-07 9.37168C-0.00102337 6.75338 0.965804 4.53686 2.90048 2.72211C4.83516 0.907371 7.19693 0 9.98577 0C12.7746 0 15.1369 0.907371 17.0726 2.72211C19.0083 4.53686 19.9746 6.75338 19.9715 9.37168C19.9715 10.429 19.7923 11.4262 19.4339 12.3634C19.0754 13.3006 18.5889 14.1296 17.9744 14.8505L26.5775 22.9246C26.8592 23.1889 27 23.5253 27 23.9338C27 24.3423 26.8592 24.6788 26.5775 24.9431C26.2959 25.2074 25.9374 25.3396 25.5021 25.3396C25.0669 25.3396 24.7084 25.2074 24.4267 24.9431L15.8236 16.869C15.0555 17.4457 14.1721 17.9023 13.1735 18.2387C12.175 18.5752 11.1124 18.7434 9.98577 18.7434ZM9.98577 15.8598C11.9061 15.8598 13.5387 15.2292 14.8834 13.9681C16.2282 12.707 16.9 11.1749 16.899 9.37168C16.898 7.56847 16.2261 6.03681 14.8834 4.77667C13.5407 3.51654 11.9082 2.88552 9.98577 2.88359C8.06339 2.88167 6.43135 3.5127 5.08967 4.77667C3.748 6.04065 3.07562 7.57232 3.07255 9.37168C3.06947 11.171 3.74185 12.7032 5.08967 13.9681C6.4375 15.2331 8.06953 15.8636 9.98577 15.8598Z"
                                    fill="white" fillOpacity="0.75"/>
                            </svg>
                            <input className='text4 catalog_input' type="text"
                                   placeholder={enLan ? 'Model name' : 'Название модели'}
                                   maxLength="55"
                                   value={searchQuery}
                                   onChange={handleSearchChange}
                                   ref={inputRef}
                                // onFocus={() => setSearchOpen(true)}
                                // onBlur={() => setSearchOpen(false)}
                            />
                        </div>
                        <ul className='catalog-search-items'
                            style={searchOpen && search.length !== 0 ? {display: 'block'} : {display: 'none'}}>
                            {search.map((item, index) => (
                                <>
                                    <li className='catalog-search-item' key={index}
                                        onMouseEnter={() => {
                                            ////console.log('навели на первого');
                                            setModalItem(1)
                                        }}
                                        onClick={() => {
                                            ////console.log('лкик по ', item, ', index - ', index)
                                            // if (refsArray[index + 1].current) {
                                            //     refsArray[index + 1].current.scrollIntoView()
                                            // }
                                            //Navigate(`/catalog/rotary-crusher/#${item}`)
                                            const element = document.getElementById(item);
                                            if (element) {
                                                element.scrollIntoView();
                                                element.classList.add('highlight'); // Добавляем класс подсветки

                                                setTimeout(() => {
                                                    element.classList.remove('highlight'); // Удаляем класс подсветки через 2 секунды
                                                }, 20000); // 2000 миллисекунд = 2 секунды
                                                ////console.log("элемент есть - ", item)
                                            } else {
                                                ////console.log("элемента нет - ", item)
                                            }
                                            // setSearchOpen(false);
                                        }}>

                                        {item}
                                    </li>
                                    <br/></>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 180</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli'
                            onClick={() => {
                                setModal1Open(true);
                                document.body.style.overflow = "hidden";
                            }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(1)
                            }}
                            ref={refsArray[1]}
                            id='P-180L-380'>
                            <h3 className='head1'>
                                P-180L-380
                            </h3>
                            <div style={{marginTop: '3.17708333333vw'}}>
                                <img src='/catalog/crusher/P-180L-380.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(2)
                            }}
                            ref={refsArray[2]}
                            id='P-180L-220'>
                            <h3 className='head1'>
                                P-180L-220
                            </h3>
                            <div style={{marginTop: '3.17708333333vw'}}>
                                <img src='/catalog/crusher/P-180L-220.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 250</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(3)
                            }}
                            ref={refsArray[3]}
                            id='P-250P'>
                            <h3 className='head1'>
                                P-250Р
                            </h3>
                            <div style={{marginTop: '2.13541666667vw'}}>
                                <img src='/catalog/crusher/P-250P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(4)
                            }}
                            ref={refsArray[4]}
                            id='P-250C'>
                            <h3 className='head1'>
                                P-250C
                            </h3>
                            <div style={{marginTop: '2.13541666667vw'}}>
                                <img src='/catalog/crusher/P-250C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 300</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(5)
                            }}
                            ref={refsArray[5]}
                            id='P-300L'>
                            <h3 className='head1'>
                                P-300L
                            </h3>
                            <div style={{marginTop: '2.23958333333vw'}}>
                                <img src='/catalog/crusher/P-300L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(6)
                            }}
                            ref={refsArray[6]}
                            id='P-300P'>
                            <h3 className='head1'>
                                P-300P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-300P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(7)
                            }}
                            id='P-300C'>
                            <h3 className='head1'>
                                P-300C
                            </h3>
                            <div style={{marginTop: '2.44791666667vw'}}>
                                <img src='/catalog/crusher/P-300C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 400</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(8)
                            }}
                            ref={refsArray[8]}
                            id='P-400L'>
                            <h3 className='head1'>
                                P-400L
                            </h3>
                            <div style={{marginTop: '2.44791666667vw'}}>
                                <img src='/catalog/crusher/P-400L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(9)
                            }}
                            ref={refsArray[9]}
                            id='P-400P'>
                            <h3 className='head1'>
                                P-400P
                            </h3>
                            <div style={{marginTop: '1.92708333333vw'}}>
                                <img src='/catalog/crusher/P-400P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(10)
                            }}
                            ref={refsArray[10]}
                            id='P-400C'>
                            <h3 className='head1'>
                                P-400C
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-400C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 500</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(11)
                            }}
                            ref={refsArray[11]}
                            id='P-500L'>
                            <h3 className='head1'>
                                P-500L
                            </h3>
                            <div style={{marginTop: '2.76041666667vw'}}>
                                <img src='/catalog/crusher/P-500L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(12)
                            }}
                            ref={refsArray[12]}
                            id='P-500P'>
                            <h3 className='head1'>
                                P-500P
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-500P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(13)
                            }}
                            ref={refsArray[13]}
                            id='P-500C'>
                            <h3 className='head1'>
                                P-500C
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-500C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 600</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(14)
                            }}
                            ref={refsArray[14]}
                            id='P-600L'>
                            <h3 className='head1'>
                                P-600L
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-600L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(15)
                            }}
                            id='P-600P'>
                            <h3 className='head1'>
                                P-600P
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-600P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(16)
                            }}
                            id='P-600C'>
                            <h3 className='head1'>
                                P-600C
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-600C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 700</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(17)
                            }}
                            id='P-700L'>
                            <h3 className='head1'>
                                P-700L
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-700L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(18)
                            }}
                            id='P-700P'>
                            <h3 className='head1'>
                                P-700P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-700P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(19)
                            }}
                            id='P-700C'>
                            <h3 className='head1'>
                                P-700C
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-700C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 800</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(20)
                            }}
                            id='P-800L'>
                            <h3 className='head1'>
                                P-800L
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-800L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(21)
                            }}
                            id='P-800P'>
                            <h3 className='head1'>
                                P-800P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-800P.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(22)
                            }}
                            id='P-800C'>
                            <h3 className='head1'>
                                P-800C
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-800C.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 1000</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(23)
                            }}
                            id='P-1000L'>
                            <h3 className='head1'>
                                P-1000L
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-1000L.webp'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                ////console.log('навели на первого');
                                setModalItem(24)
                            }}
                            id='P-1000P'>
                            <h3 className='head1'>
                                P-1000P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-1000P.webp'/>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className='head1 catalog_gal_heading'>{enLan ? 'Gallery' : 'Галерея'}</h2>
                <ul className='base_grid catalog_gal_items1'>
                    <li className='catalog_gal_item1 gallery-item gallery-item-size1'
                        onClick={() => {
                            // setModalItem(1);
                            setModal2Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(1)
                        }}>
                        <img src='/catalog/crusher/gal1.webp' alt='photo'/>
                    </li>
                    <li className='catalog_gal_item2 gallery-item gallery-item-size1'
                        onClick={() => {
                            // setModalItem(1);
                            setModal2Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(2)
                        }}>
                        <img src='/catalog/crusher/gal2.webp'/></li>
                    <li className='catalog_gal_item3 gallery-item gallery-item-size1' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(3)
                        }}>
                        <img src='/catalog/crusher/gal3.webp'/></li>
                    <li className='catalog_gal_item4 gallery-item gallery-item-size1' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(4)
                        }}>
                        <img src='/catalog/crusher/gal4.webp'/></li>
                    <li className='catalog_gal_item5 gallery-item gallery-item-size1' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(5)
                        }}>
                        <img src='/video-preview.webp'/></li>
                </ul>
            </section>
            <GalleryPortal catalogNumber={0} item={modal2Item} isOpen={modal2Open} setIsOpen={setModal2Open}/>
            <Portal enLan={enLan} item={modalItem} isOpen={modal1Open} setIsOpen={(value) => setModal1Open(value)}/>
        </>
    );
}
