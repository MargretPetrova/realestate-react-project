
import React, { Suspense } from 'react'

import styles from '../ArticleOffers/ArticleOffers.module.css';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';
import { ScrollItem } from '../ScrollItem/ScrollItem';
import { Link } from 'react-router-dom';
import ScrollLiItems from '../ScrollLiItems/ScrollLiItems';
import TitleConponent from '../SmallHelpers/Title';

const ArticleOffers = (props) => {
    const items = props.homes;
  
  
    return (
        <div className={styles.offers}>
            <TitleConponent title='Explore All New Homes'/>
            <ScrollItem>
                {items && items.map(x => <ScrollLiItems item ={x}/>)}
             
               
            </ScrollItem>
        </div>
    )
   
}
export { ArticleOffers }
