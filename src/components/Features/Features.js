import React from 'react'
import {Link} from 'react-router-dom';
import styles from '../Features/Features.module.css'
import imgSell from '../../images/house.png';
import imgInvest from '../../images/saving.png';
import imgRent from '../../images/house-rental.png';


const Features = ()=>{
    return (
        <div className={styles.features}>
          
           
          
            <h3 className={styles.title}>Buyers. Sellers. Agents.</h3>

            <div className={styles.wrapper}>

              <article className={styles.cols}>
                <div className={styles.colsTitle}> <img src={imgSell} ></img>
                <h4>Selling</h4>
                </div>
                <div className={styles.colsParagraf}>
                <p className={styles.paragraf}><strong>Check this week sold price and decide to sell </strong></p>
                <p className={styles.paragraf2}> Wondering if now is a good time to sell? See your options</p>
                <button><Link  className={styles.links} to='#'>Read more</Link></button>
                </div>
                 </article>

              <article className={styles.cols}>
              <div className={styles.colsTitle}> <img src={imgInvest} ></img>
                <h4>Investing</h4>
                </div>
                <div className={styles.colsParagraf}>
                <p className={styles.paragraf}><strong>Invest in the best property in the right time</strong></p>
                <p className={styles.paragraf2}>Compare your finance options to make trhe best decicion</p>
                <button><Link className={styles.links} to='#'>Read more</Link></button>
                </div>
                
                 </article>

              <article className={styles.cols}>
              <div className={styles.colsTitle}> <img src={imgRent} ></img>
                <h4>Renting</h4>
                </div>
                <div className={styles.colsParagraf}>
                <p className={styles.paragraf}><strong>Are you a tenant looking for a new place?</strong></p>
                <p className={styles.paragraf2}>List your property for rent with an agent or on your own</p>
                <button><Link className={styles.links} to='#'>Read more</Link></button>
                 </div>
                 </article>
            </div>
          
        
        </div>
    )
    
}
export {Features}