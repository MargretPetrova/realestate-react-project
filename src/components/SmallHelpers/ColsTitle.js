import styles from '../SmallHelpers/ColsTitle.module.css';
export default function ColsTitleComponent({srcImage, title}){
    return  <div className={styles.colsTitle}> <img src={srcImage} alt="noAlt"></img>
    <h4>{title}</h4>
    </div>
}