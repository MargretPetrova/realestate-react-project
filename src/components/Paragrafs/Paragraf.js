import styles from '../Paragrafs/Paragraf.module.css';

export default function Paragraf({isStrong,text}){
    return <p className={styles.paragraf2}>{isStrong? <strong>{text}</strong>: text}</p>
}