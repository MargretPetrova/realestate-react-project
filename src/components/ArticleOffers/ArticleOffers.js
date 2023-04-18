
import React, { Suspense } from 'react'
import styles from '../ArticleOffers/ArticleOffers.module.css';
import { ScrollItem } from '../ScrollItem/ScrollItem';

import ScrollLiItems from '../ScrollLiItems/ScrollLiItems';
import TitleConponent from '../SmallHelpers/Title';

const ArticleOffers = ({homes}) => {
    console.log(homes);
   
  
  
    return (
        <div className={styles.offers}>
            <TitleConponent title='Explore All New Homes'/>
            <ScrollItem>
                {homes.homes && homes.homes.map(x => <ScrollLiItems item ={x}/>)}
             
               
            </ScrollItem>
        </div>
    )
   
}
export { ArticleOffers }
