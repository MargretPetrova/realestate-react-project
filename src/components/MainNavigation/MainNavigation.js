import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from '../MainNavigation/MainNavigation.module.css'


const MainNavigation = ()=>{
    return (
        <section className={styles.sectionNav}>
            <Header/>
        </section>
    )
    
}
export {MainNavigation}