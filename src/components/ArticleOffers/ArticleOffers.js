
import React, { Suspense } from 'react'

import styles from '../ArticleOffers/ArticleOffers.module.css';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';
import { ScrollItem } from '../ScrollItem/ScrollItem';

const ArticleOffers = (props) => {
    const items = props.homes;
  
    return (
        <div className={styles.offers}>
            <h3>Explore All New Homes</h3>
            <ScrollItem>
                {items && items.map(x => <li className={styles.liItems} key={x.id}>
                    <img src={x.image} alt='noalt'></img>
                    <p>{x.title}</p>
                    <button>Details</button>
                </li>)}
             
               
            </ScrollItem>
        </div>
    )

}
export { ArticleOffers }
