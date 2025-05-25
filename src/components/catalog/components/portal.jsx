import {createPortal} from "react-dom";
import Modal from "./modal.jsx";
import {useRef} from "react";

export default function Portal({heightType, item, isOpen, setIsOpen, enLan}) {
    // const [mounted, setMounted] = useState(false)
    //
    // useEffect(() => {
    //     setMounted(true)
    //
    //     return () => setMounted(false)
    // }, [])


    // return mounted ?

    const ref = useRef()

    // useEffect(() => {
    //     // document.body.style.overflow = "hidden";
    //     // document.body.style.backdropFilter = "blur(10px)";
    //     const checkIfClickedOutside = e => {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             setIsOpen(false);
    //             document.body.style.overflow = "visible";
    //         }
    //     }
    //     if (isOpen) {
    //         document.addEventListener("click", checkIfClickedOutside)
    //     } else {
    //         document.removeEventListener("click", checkIfClickedOutside)
    //     }
    //
    //     // return () => {
    //     //     document.body.style.overflow = "visible";
    //     // }
    // }, [isOpen])

    return (item !== 0) && createPortal(
        <div
            className={`catalog-modal-wrapper ${isOpen === null ? '' : isOpen ? 'catalog-modal-wrapper-open' : 'catalog-modal-wrapper-close'}`}
            // style={isOpen ? {maxHeight: '100vh'} : {maxHeight: '0'}}
            onClick={(e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    setIsOpen(false);
                    document.body.style.overflow = "visible";
                }
            }}>
            <div
                className={`catalog-modal-container ${heightType === 2 ? 'modal-dryingCabinets-height' : heightType === 3 ? 'modal-isolators-height' : ''}`}
                ref={ref}>
                <div
                    className={`catalog-modal ${isOpen ? 'catalog-modal-open' : 'catalog-modal-close'} ${heightType === 2 ? 'modal-dryingCabinets-height' : heightType === 3 ? 'modal-isolators-height' : ''}`}>
                    <button className='catalog-modal-close-button' onClick={() => {
                        setIsOpen(false);
                        document.body.style.overflow = "visible";
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"
                             color="#ffffff"
                             fill="none">
                            <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="#ffffff"
                                  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <Modal item={item} enLan={enLan}/>
                </div>
            </div>
        </div>,
        document.body)
}