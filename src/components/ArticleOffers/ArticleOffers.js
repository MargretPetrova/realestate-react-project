
import React from 'react'

import styles from '../ArticleOffers/ArticleOffers.module.css';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { ScrollItem } from '../ScrollItem/ScrollItem';


const DummyHomes = [{ homeImage: home1, homeTitle: 'Green and Orange fancy house', id: 1 }, { homeImage: home2, homeTitle: 'American style white house', id: 2 },
{ homeImage: home3, homeTitle: 'Luxory house with pool', id: 3 }, { homeImage: home1, homeTitle: 'House with garden', id: 4 }];

const ArticleOffers = () => {
    // const slideLeft=()=>{

    //     const slider = document.getElementById('chevronL');
    //     console.log(slider.scrollLeft);
    //     slider.scrollLeft -= 300;

    // }
    // const slideRight=(e)=>{

    //     const slider = document.getElementById('chevronL');
    //     slider.scrollLeft += 300 ;
    //     console.log(slider.scrollLeft);

    // }
    return (
        <div className={styles.offers}>
            <h3>Explore All New Homes</h3>
            <ScrollItem>
                {DummyHomes.map(x => <li className={styles.liItems} key={x.id}>
                    <img src={x.homeImage} alt='noalt'></img>
                    <p>{x.homeTitle}</p>
                    <button>Details</button>
                </li>)}
            </ScrollItem>
        </div>
    )

}
export { ArticleOffers }