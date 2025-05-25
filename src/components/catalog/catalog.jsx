import "./catalog.css"
import {Link} from "react-router-dom";
import Background4 from "../background/4/background.jsx";

export default function Catalog({enLan}) {
    return (
        <>
            <main>
                <h1 className='heading1 catalogp-heading'>{enLan ? 'Equipment catalog' : 'Каталог оборудования'}</h1>
                <section className="catalogp-sec">
                    {/*<div className='base_grid'>*/}
                    {/*    <div className='adli catalogp_item_left catalog_input-wrapper'>*/}
                    {/*        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*            <path*/}
                    {/*                d="M9.98577 18.7434C7.19488 18.7434 4.83312 17.836 2.90048 16.0213C0.967853 14.2065 0.00102499 11.99 8.12843e-07 9.37168C-0.00102337 6.75338 0.965804 4.53686 2.90048 2.72211C4.83516 0.907371 7.19693 0 9.98577 0C12.7746 0 15.1369 0.907371 17.0726 2.72211C19.0083 4.53686 19.9746 6.75338 19.9715 9.37168C19.9715 10.429 19.7923 11.4262 19.4339 12.3634C19.0754 13.3006 18.5889 14.1296 17.9744 14.8505L26.5775 22.9246C26.8592 23.1889 27 23.5253 27 23.9338C27 24.3423 26.8592 24.6788 26.5775 24.9431C26.2959 25.2074 25.9374 25.3396 25.5021 25.3396C25.0669 25.3396 24.7084 25.2074 24.4267 24.9431L15.8236 16.869C15.0555 17.4457 14.1721 17.9023 13.1735 18.2387C12.175 18.5752 11.1124 18.7434 9.98577 18.7434ZM9.98577 15.8598C11.9061 15.8598 13.5387 15.2292 14.8834 13.9681C16.2282 12.707 16.9 11.1749 16.899 9.37168C16.898 7.56847 16.2261 6.03681 14.8834 4.77667C13.5407 3.51654 11.9082 2.88552 9.98577 2.88359C8.06339 2.88167 6.43135 3.5127 5.08967 4.77667C3.748 6.04065 3.07562 7.57232 3.07255 9.37168C3.06947 11.171 3.74185 12.7032 5.08967 13.9681C6.4375 15.2331 8.06953 15.8636 9.98577 15.8598Z"*/}
                    {/*                fill="white" fillOpacity="0.75"/>*/}
                    {/*        </svg>*/}
                    {/*        <input className='text4 catalog_input' type="text" placeholder='Название модели' maxLength="55"*/}
                    {/*               onChange={e => console.log(e)}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <ul className='base_grid catalogp_grid'>
                        <li className='catalogp_item catalogp_item_left catalogp_item_padding1 adli'>
                            <Link to='/catalog/rotary-crusher'>
                                <h2 className='catalogp_item1_heading heading2'>
                                    {enLan ? 'Rotary crusher' : 'Дробилка роторная'}
                                </h2>
                                <div className='catalogp_item1_img'>
                                    <img src={'/catalog/main/crusher.webp'}/>
                                </div>
                            </Link>
                        </li>
                        <li className='catalogp_item catalogp_item_right catalogp_item_padding2 adli'>
                            <Link to='/catalog/drying-cabinets'>
                                <h2 className='catalogp_item2_heading heading2'>
                                    {enLan ? 'Drying cabinets' : 'Сушильные шкафы'}
                                </h2>
                                <div className='catalogp_item2_img'>
                                    <img src={'/catalog/main/cabinet.webp'}/>
                                </div>
                            </Link>
                        </li>
                        <li className='catalogp_item catalogp_item_left catalogp_item_padding1 adli'>
                            <Link to='/catalog/isolators'>
                                <h2 className='catalogp_item3_heading heading2'>
                                    {enLan ? 'Isolators' : 'Изоляторы'}
                                </h2>
                                <div className='catalogp_item3_img'>
                                    <img src={'/catalog/main/isolators.webp'}/>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </section>
            </main>
            <Background4/>
        </>
    )
}