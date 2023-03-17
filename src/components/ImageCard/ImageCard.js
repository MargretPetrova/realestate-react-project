import React from 'react'

import styles from '../ImageCard/ImageCard.module.css'
import image from '../../images/img1.jpg'

const ImageCard = ()=>{
    return (
        <img className={styles.imageCard} src={image} alt='some...'>
         
        </img>
    )
    
}
export {ImageCard}