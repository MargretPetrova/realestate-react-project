import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../Features/Features.module.css'
import imgSell from '../../images/house.png';
import imgInvest from '../../images/saving.png';
import imgRent from '../../images/house-rental.png';
import ColsTitleComponent from '../Titles/ColsTitle';
import TitleConponent from '../Titles/Title';
import Button from '../Buttons/Buttons';
import Paragraf from '../Paragrafs/Paragraf';



const Features = () => {
  return (
    <div className={styles.features}>
      <TitleConponent title='Buyers. Sellers. Agents.' />

      <div className={styles.wrapper}>

        <article className={styles.cols}>
          <ColsTitleComponent srcImage={imgSell} title='Selling' />

          <div className={styles.colsParagraf}>
            <Paragraf isStrong={true} text='Check this week sold price and decide to sell'></Paragraf>
            <Paragraf text='Wondering if now is a good time to sell? See your options'></Paragraf>


            <Button>
              <Link className={styles.links} to='/catalog/sell'>Read more</Link>
            </Button>
          </div>
        </article>

        <article className={styles.cols}>
          <ColsTitleComponent srcImage={imgInvest} title='Investing' />
          <div className={styles.colsParagraf}>
            <Paragraf isStrong={true} text='Invest in the best property in the right time'></Paragraf>
            <Paragraf text='Compare your finance options to make trhe best decicion'></Paragraf>

            <Button>
              <Link className={styles.links} to='/catalog/buy'>Read more</Link>
            </Button>
          </div>

        </article>

        <article className={styles.cols}>
          <ColsTitleComponent srcImage={imgRent} title='Renting' />
          <div className={styles.colsParagraf}>
            <Paragraf isStrong={true} text='Are you a tenant looking for a new place?'></Paragraf>
            <Paragraf text='List your property for rent with an agent or on your own'></Paragraf>

            <Button>
              <Link className={styles.links} to='/catalog/rent'>Read more</Link>
            </Button>
          </div>
        </article>
       
      </div>


    </div>
  )

}
export { Features }