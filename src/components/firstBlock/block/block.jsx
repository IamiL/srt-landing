import styles from './block.module.css';
import AutoPlayer from "./AutoPlayer/AutoPlayer.jsx";
import {useTimer} from "../../timerContext/timerContext.jsx";


export default function FirstBlock({enLan}) {
    const {isActive} = useTimer();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return <div
            id={styles.block1}
            className="base_grid"
    >
        <h1 className={isActive ? styles.mainSectionHeadingStartAnimation : ''}>
            {enLan ?
                    // <>
                    //     SRT <span
                    //         id="firstblockheadingspan1"
                    // >— robotic technologies for automating your production</span>
                    // </>
                    <>
                        Automate <br />your production workflows.
                    </>
                    :
                    <>
                        {/*ИРТ <span*/}
                        {/*id="firstblockheadingspan1">— роботизированные технологии для<br className="brt5"/> автоматизации вашего производства</span>*/}
                        Автоматизация <br />рабочих процессов <br />на вашем производстве
                    </>}
        </h1>
        <div
                id={styles.video}
                className={isActive ? styles.mainSectionHeadingStartAnimation : ''}
        >
            <video
                    loop
                    height="100%"
                    autoPlay
                    muted
                    id="video"
                    playsInline
            >
                {isSafari ? <source
                        src={"/video.mov"}
                        type="video/mp4"
                /> : <source
                        src={"/video.webm"}
                        type='video/webm'
                />}
            </video>
            <AutoPlayer />
        </div>
        <p className={`text1 ${isActive ? styles.mainSectionTextStartAnimation : ''}`}>{enLan ? 'On time. Quality. Contract.' : 'Точно в срок. Качество. Договор.'}</p>
    </div>
}
