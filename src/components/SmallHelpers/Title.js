import styles from '../SmallHelpers/Title.module.css'
export default function TitleConponent({title}){
    return <h3 className={styles.title}>{title}</h3>
}