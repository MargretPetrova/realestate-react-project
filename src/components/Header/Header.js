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
           
           <Link className={styles.logo2} to='/home'><img src={logo2}></img></Link>
       <Link className={styles.logo1} to='/home'><img src={logo1}></img></Link>
       
       </div>
       {/* <div className={styles.icons}>
           <Link to='www.facebook.com'><FontAwesomeIcon icon={faFacebook} color="blue" size="2x" /></Link>
           <Link to='www.facebook.com'><FontAwesomeIcon icon={faTwitter} color="blue" size="2x" /></Link>
           <Link to='www.facebook.com'><FontAwesomeIcon icon={faInstagram} color="blue" size="2x" /></Link>
           
       </div> */}
   
       
       <button className={styles.navButton} onClick={() => {
     setIsNavExpanded(!isNavExpanded);
   }}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></button>
           </div>
     
       
            
        <nav className={isNavExpanded? [`${styles['nav']} ${styles['expanded']}`]:[`${styles['nav']} ${styles['notExpanded']}`]}>

    
        <ul className={styles.list}>
           <li><Link className={styles.links} to='/home' >Main Page</Link></li>
           <li><Link className={styles.links} to='/home' >Buying Estate</Link></li>
           <li><Link className={styles.links} to='/home' >Selling Estate</Link></li>
           <li><Link className={styles.links} to='/home' >Renting Estate</Link></li>
           <li><Link className={styles.links} to='/home' >Finance</Link></li>
           <li><Link className={styles.links} to='/home' >Contact Us</Link></li>
        </ul>

    </nav>
    

    
    </>
    
    )
}
export {Header};