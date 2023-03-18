
import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';
import styles from '../ArticleOffers/ArticleOffers.module.css';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';


const homes=[{homeImage:home1, homeTitle:'home1',id:1}, {homeImage:home2, homeTitle:'home2',id:2},
 {homeImage:home3, homeTitle:'home3',id:3}]

const ArticleOffers = ()=>{
    return (
        <div className={styles.offers}>
           <h3>Latest property news</h3>
           <ul className={styles.list}>
            {homes.map(x=><li key={x.id}>
            <img src={x.homeImage} alt='noalt'></img>
            <p>{x.homeTitle}</p>
            <button>Read More</button>
            </li>)}
              
            </ul>
        </div>
    )
    
}
export {ArticleOffers}