import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import styles from '../Header/Header.module.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebook,
//     faTwitter,
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
  import logo1 from '../../images/logo.gif';
  import logo2 from '../../images/logo_img.png'
const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    

    return (
        <>
           <div className={styles.logos}>
           <div className={styles.link}>
           
           <Link className={styles.logo2} to='/'><img src={logo2}></img></Link>
       <Link className={styles.logo1} to='/'><img src={logo1}></img></Link>
       
       </div>
       <button className={styles.navButton} onClick={() => {
     setIsNavExpanded(!isNavExpanded);
   }}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></button>
           </div>
     
       
            
        <nav className={isNavExpanded? [`${styles['nav']} ${styles['expanded']}`]:[`${styles['nav']} ${styles['notExpanded']}`]}>

    
        <ul className={styles.list}>
           <li><Link className={styles.links} to='/' >Home</Link></li>
           <li><Link className={styles.links} to='/buy' >Buy</Link></li>
           <li><Link className={styles.links} to='/sell' >Sell</Link></li>
           <li><Link className={styles.links} to='/rent' >Rent</Link></li>
           <li><Link className={styles.links} to='/finance' >Finance</Link></li>
           <li><Link className={styles.links} to='/contacts' >News</Link></li>
          <li className={styles.guest}>Sign up</li>
          <li className={styles.guest}>Login</li>
          <li className={styles.user}>Logout</li>
          
        </ul>

    </nav>
    

    
    </>
    
    )
}
export {Header};