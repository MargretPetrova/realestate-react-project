import React from 'react'

import styles from '../ImageCard/ImageCard.module.css'
import picture from '../../images/img1.jpg'

const ImageCard = ({image})=>{
let cardImage = picture;
if (image!== undefined) {
    cardImage =image
}
    return (
        <img className={styles.imageCard} src={cardImage} alt='some...'>
         
        </img>
    )
    
}
export {ImageCard}