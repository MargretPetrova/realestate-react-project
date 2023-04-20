import { Link } from 'react-router-dom';
import styles from '../ScrollLiItems/ScrollLiItems.module.css';
import Button from '../Buttons/Buttons';


export default function ScrollLiItems(item) {
  
  const current = item.item
  console.log(current.image);
  let classnameofLiElement = current.image? 'liItems' : 'detailsLiItems'
  if (!current.image) {
    
  }
 
    return <li className={styles[classnameofLiElement]} key={0}>
        <img src={current.image? current.image[1]: current} alt='noalt'>
        </img>
        {current.image && <><p>{current.title}</p>
        <Button><Link className={styles.links} to={`/catalog/${current.id}`}>Details</Link></Button></>}
        
    </li>
}