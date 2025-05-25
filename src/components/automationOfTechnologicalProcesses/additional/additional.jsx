import image from "./image.png";
import styles from "./additional.module.css"

export default function Additional({enLan}) {
    return <>
        <div id={styles.div} className={`${styles.ative}`}>
            <img id={styles.img} src={image} alt="img"/>
        </div>
    </>
}