import styles from './block.module.css';
import AutoPlayer from "./AutoPlayer/AutoPlayer.jsx";

export default function FirstBlock({enLan}) {
    return <div id={styles.block1} className="base_grid">
        <h1>
            {enLan ? <>
                    SRT <span
                    id="firstblockheadingspan1">— robotic technologies for automating your production</span>
                </> :
                <>
                    ИРТ <span
                    id="firstblockheadingspan1">— роботизированные технологии для<br className="brt5"/> автоматизации вашего производства</span>
                </>}
        </h1>
        <div id={styles.video}>
            <video loop height="100%" autoPlay muted id="video">
                <source src={"/video4.mov"}
                        type='video/quicktime'/>
                <source src={"/video.webm"}
                        type='video/webm'/>
            </video>
            <AutoPlayer/>
        </div>
        <p className="text1">{enLan ? 'Expanding the Boundaries of Possibility!' : 'Раздвигаем границы возможного!'}</p>
    </div>
}
