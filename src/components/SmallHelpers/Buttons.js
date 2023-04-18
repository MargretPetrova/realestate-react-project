import styles from '../SmallHelpers/Buttons.module.css';

export default function Button({children, name, onClick}) {
if (onClick) {
    
}
    return <button className={styles.button} onClick={onClick}>{!children? name : children}</button>
    
}