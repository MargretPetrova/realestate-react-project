
import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';
import styles from '../ArticleOffers/ArticleOffers.module.css';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


const DummyHomes=[{homeImage:home1, homeTitle:'Green and Orange fancy house',id:1}, {homeImage:home2, homeTitle:'American style white house',id:2},
 {homeImage:home3, homeTitle:'Luxory house with pool',id:3},{homeImage:home1, homeTitle:'House with garden',id:4}];

const ArticleOffers = ()=>{
    const slideLeft=()=>{
        
        const slider = document.getElementById('chevronL');
        console.log(slider.scrollLeft);
        slider.scrollLeft -= 300;
       
    }
    const slideRight=(e)=>{
        
        const slider = document.getElementById('chevronL');
        slider.scrollLeft += 300 ;
        console.log(slider.scrollLeft);
       
    }
    return (
        <div className={styles.offers}>
           <h3>Explore All New Homes</h3>
           <div className={styles.slider}>
           <MdChevronLeft size={50}   className={styles.chevronL} onClick={slideLeft}/>
           <ul className={styles.list} id='chevronL'>

            {DummyHomes.map(x=><li key={x.id}>
            <img src={x.homeImage} alt='noalt'></img>
            <p>{x.homeTitle}</p>
            <button>Details</button>
            </li>)}
              
            </ul>
            <MdChevronRight  size={50} className={styles.chevronR} onClick={slideRight}/>
           </div>
           

            
        </div>
    )
    
}
export {ArticleOffers}