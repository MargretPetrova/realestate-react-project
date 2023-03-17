import React from 'react'
import styles from '../Section/Section.module.css'

const SectionMain = ({children}) => {


  return (
    <div className={styles.searchBox}>
    
      {children}

    </div>
  )

}
export { SectionMain }