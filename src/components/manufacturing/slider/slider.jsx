

import styles from './slider.module.css';
import p1 from "./photos/1.webp"
import p2 from "./photos/2.webp"
import p3 from "./photos/3.webp"
import p4 from "./photos/4.webp"
import p5 from "./photos/5.webp"
import p6 from "./photos/6.webp"
import {useState} from "react";

export default function Slider() {
    const [iPhoto, setIPhoto] = useState(0);
    return <div id={styles.div}>
        <div id={styles.imgs}>
            <div style={{transform: `translateX(-${iPhoto * 100}%)`}}>
                <img src={p1} alt="manufacturing-photo-1"/>
                <img src={p2} alt="manufacturing-photo-2"/>
                <img src={p3} alt="manufacturing-photo-3"/>
                <img src={p4} alt="manufacturing-photo-4"/>
                <img src={p5} alt="manufacturing-photo-5"/>
                <img src={p6} alt="manufacturing-photo-6"/>
            </div>
        </div>
        <div id={styles.btns}>
            <div>
                <button id={styles.btn_left} style={iPhoto === 0 ? {opacity: 0, cursor: "default"} : null}
                        onClick={iPhoto > 0 ? () => setIPhoto(iPhoto - 1) : null}>
                    <svg viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_315_3153)">
                            <path
                                d="M27.5 56C42.6878 56 55 43.464 55 28C55 12.536 42.6878 0 27.5 0C12.3122 0 0 12.536 0 28C0 43.464 12.3122 56 27.5 56Z"
                                fill="url(#paint0_linear_315_3153)"/>
                            <path
                                d="M27.5 55.2819C42.2984 55.2819 54.2949 43.0673 54.2949 27.9998C54.2949 12.9324 42.2984 0.717773 27.5 0.717773C12.7016 0.717773 0.705139 12.9324 0.705139 27.9998C0.705139 43.0673 12.7016 55.2819 27.5 55.2819Z"
                                stroke="url(#paint1_linear_315_3153)"/>
                            <path
                                d="M20.1567 27.7026C19.606 28.2634 19.606 29.1726 20.1567 29.7333L29.1316 38.8713C29.6823 39.432 30.5751 39.432 31.1259 38.8713C31.6766 38.3105 31.6766 37.4014 31.1259 36.8407L23.1483 28.718L31.1259 20.5952C31.6766 20.0345 31.6766 19.1254 31.1259 18.5646C30.5751 18.0039 29.6823 18.0039 29.1316 18.5646L20.1567 27.7026ZM22.5641 27.2821H21.1539V30.1539H22.5641V27.2821Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_315_3153" x1="27.5" y1="0" x2="27.5" y2="56"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0.4"/>
                                <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_315_3153" x1="1.09843e-05" y1="-0.000175233" x2="55.9909"
                                            y2="54.9909" gradientUnits="userSpaceOnUse">
                                <stop stopOpacity="0.1"/>
                                <stop offset="1" stopColor="white"/>
                            </linearGradient>
                            <clipPath id="clip0_315_3153">
                                <rect width="55" height="56" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button id={styles.btn_right}
                        style={iPhoto === 4 ? {opacity: 0, cursor: "default"} : null}
                        onClick={iPhoto < 4 ? () => setIPhoto(iPhoto + 1) : null}>
                    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_315_3158)">
                            <path
                                d="M28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0Z"
                                fill="url(#paint0_linear_315_3158)"/>
                            <path
                                d="M28 0.718128C12.9325 0.718128 0.71796 12.9327 0.71796 28.0002C0.71796 43.0676 12.9325 55.2822 28 55.2822C43.0675 55.2822 55.2821 43.0676 55.2821 28.0002C55.2821 12.9327 43.0675 0.718128 28 0.718128Z"
                                stroke="url(#paint1_linear_315_3158)"/>
                            <path
                                d="M35.4769 28.2979C36.0376 27.7371 36.0376 26.8279 35.4769 26.2672L26.3388 17.1292C25.7781 16.5684 24.869 16.5684 24.3082 17.1292C23.7474 17.69 23.7474 18.5991 24.3082 19.1598L32.4309 27.2825L24.3082 35.4053C23.7474 35.966 23.7474 36.875 24.3082 37.4359C24.869 37.9966 25.7781 37.9966 26.3388 37.4359L35.4769 28.2979ZM33.0256 28.7184H34.4615V25.8466H33.0256V28.7184Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_315_3158" x1="28" y1="56" x2="28" y2="0"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0.4"/>
                                <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_315_3158" x1="56" y1="56.0002" x2="1.17911e-05"
                                            y2="0.000179638" gradientUnits="userSpaceOnUse">
                                <stop stopOpacity="0.1"/>
                                <stop offset="1" stopColor="white"/>
                            </linearGradient>
                            <clipPath id="clip0_315_3158">
                                <rect width="56" height="56" fill="white" transform="matrix(-1 0 0 -1 56 56)"/>
                            </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>
        </div>
    </div>
}