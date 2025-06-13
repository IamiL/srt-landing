import styles from './block.module.css';
import AutoPlayer from "./AutoPlayer/AutoPlayer.jsx";
import {useState} from "react";

export default function FirstBlock({enLan}) {
    const [videoError, setVideoError] = useState(false);

    const handleVideoError = () => {
        console.warn('Ошибка загрузки видео');
        setVideoError(true);
    };

    const handleVideoLoad = () => {
        console.log('Видео успешно загружено');
        setVideoError(false);
    };
    return <div
            id={styles.block1}
            className="base_grid"
    >
        <h1>
            {enLan ? <>
                        SRT <span
                            id="firstblockheadingspan1"
                    >— robotic technologies for automating your production</span>
                    </> :
                    <>
                        {/*ИРТ <span*/}
                        {/*id="firstblockheadingspan1">— роботизированные технологии для<br className="brt5"/> автоматизации вашего производства</span>*/}
                        Автоматизация <br />рабочих процессов <br />на вашем производстве
                    </>}
        </h1>
        <div id={styles.video}>
            <video
                    loop
                    height="100%"
                    autoPlay
                    muted
                    playsInline // Важно для iOS Safari
                    id="video"
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoad}
                    style={{
                        backgroundColor: videoError ? 'transparent' : 'initial'
                    }}
            >
                {/* Меняем порядок источников - сначала более совместимый */}

                <source
                        src="/video.mov"
                        type="video/mp4" // Используем video/mp4 вместо video/quicktime
                />
                <source
                        src="/video.webm"
                        type="video/webm"
                />
                Ваш браузер не поддерживает воспроизведение видео.
            </video>
            <AutoPlayer />
        </div>
        <p className="text1">{enLan ? 'Expanding the Boundaries of Possibility!' : 'Точно в срок. Качество. Договор.'}</p>
    </div>
}
