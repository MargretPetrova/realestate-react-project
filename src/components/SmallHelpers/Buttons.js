import styles from '../SmallHelpers/Buttons.module.css';

export default function Button({children, name, onClick}) {
if (onClick) {
    
}
    return <button className={styles.button} >{!children? name : children}</button>
    
}