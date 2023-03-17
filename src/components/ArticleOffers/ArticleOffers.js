
import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';
import styles from '../ArticleOffers/ArticleOffers.module.css'

const ArticleOffers = ()=>{
    return (
        <div className={styles.offers}>
           <h3>Special Offers</h3>
           <ul className={styles.list}>
              <li> <Link className={styles.link} to="#">Home Loan Offer</Link></li>
              <li><Link className={styles.link} to="#">Free Calculators</Link></li>
              <li><Link className={styles.link} to="#">Free Loan Tools</Link></li>
              <li><Link className={styles.link} to="#">Value Your Home</Link></li>
              <li><Link className={styles.link} to="#">Recently Sold Properties</Link></li>
              <li><Link className={styles.link} to="#">Suburb Statistics</Link></li>
              <li><Link className={styles.link} to="#">Compare Property Prices</Link></li>
            </ul>
        </div>
    )
    
}
export {ArticleOffers}