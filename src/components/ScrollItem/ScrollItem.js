import styles from '../ScrollItem/ScrollItem.module.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const ScrollItem = ({ children }) => {
    const slideLeft = () => {

        const slider = document.getElementById('chevronL');
        console.log(slider.scrollLeft);
        slider.scrollLeft -= 300;

    }
    const slideRight = (e) => {

        const slider = document.getElementById('chevronL');
        slider.scrollLeft += 300;
        console.log(slider.scrollLeft);

    }
    return (
        
            <div className={styles.slider}>
                <MdChevronLeft size={50} className={styles.chevronL} onClick={slideLeft} />
                <ul className={styles.list} id='chevronL'>
                    {children}
                </ul>
                <MdChevronRight size={50} className={styles.chevronR} onClick={slideRight} />
            </div>



        
    )

}
export { ScrollItem }