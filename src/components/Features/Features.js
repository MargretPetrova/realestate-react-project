import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../Features/Features.module.css'
import imgSell from '../../images/house.png';
import imgInvest from '../../images/saving.png';
import imgRent from '../../images/house-rental.png';
import ColsTitleComponent from '../SmallHelpers/ColsTitle';
import TitleConponent from '../SmallHelpers/Title';
import Button from '../SmallHelpers/Buttons';



const Features = () => {
  return (
    <div className={styles.features}>
      <TitleConponent title='Buyers. Sellers. Agents.' />

      <div className={styles.wrapper}>

        <article className={styles.cols}>
          <ColsTitleComponent srcImage={imgSell} title='Selling' />

          <div className={styles.colsParagraf}>
            <p className={styles.paragraf}><strong>Check this week sold price and decide to sell </strong></p>
            <p className={styles.paragraf2}> Wondering if now is a good time to sell? See your options</p>
           
            <Button>
              <Link className={styles.links} to='#'>Read more</Link>
            </Button>
          </div>
        </article>

        <article className={styles.cols}>
          <ColsTitleComponent srcImage={imgInvest} title='Investing' />
          <div className={styles.colsParagraf}>
            <p className={styles.paragraf}><strong>Invest in the best property in the right time</strong></p>
            <p className={styles.paragraf2}>Compare your finance options to make trhe best decicion</p>
            <Button>
              <Link className={styles.links} to='#'>Read more</Link>
            </Button>
          </div>

        </article>

        <article className={styles.cols}>
          <ColsTitleComponent srcImage={imgRent} title='Renting' />
          <div className={styles.colsParagraf}>
            <p className={styles.paragraf}><strong>Are you a tenant looking for a new place?</strong></p>
            <p className={styles.paragraf2}>List your property for rent with an agent or on your own</p>
            <Button>
              <Link className={styles.links} to='#'>Read more</Link>
            </Button>
          </div>
        </article>
      </div>


    </div>
  )

}
export { Features }