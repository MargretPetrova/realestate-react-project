import React from 'react'
import { ArticleOffers } from '../ArticleOffers/ArticleOffers'
import { SectionMain } from '../Section/Section'

import styles from '../PageContent/PageContent.module.css'

const PageContent = ({title, children})=>{
    return (
        <section className={styles.sectionFind}>
          {children}
          <SectionMain>
            <ArticleOffers/>
            </SectionMain>
          
        </section>
    )
    
}
export {PageContent}