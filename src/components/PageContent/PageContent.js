import React from 'react'

import styles from '../PageContent/PageContent.module.css'

const PageContent = ({title, children})=>{
    return (
        <section className={styles.sectionFind}>
          {children}
        </section>
    )
    
}
export {PageContent}