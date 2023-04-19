import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../Header/Header.module.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebook,
//     faTwitter,
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
import logo1 from '../../images/logo.gif';
import logo2 from '../../images/logo_img.png'
import Button from '../Buttons/Buttons';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import AuthForm from '../AuthForm/AuthForm';
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isShowing, toggle } = useModal();
 

  const user = null
  const registrationLink = <div className={styles.registerLinks}>
    {user && <Link className={styles.user} to='#'>Logout</Link>}
    <button className={styles.button} onClick={toggle}><Link className={styles.buttonLinks} to='?mode=register'>Sign up</Link></button>
    <button className={styles.button} onClick={toggle}><Link className={styles.buttonLinks} to='?mode=login'>Login </Link></button>
    {/* <Link className={styles.guest} to='/auth?mode=register'>Sign up</Link> 
<Link className={styles.guest} to='/auth?mode=login'>Login </Link> */}
  </div>;


  return (
    <>
      <Modal isShowing={isShowing} hide={toggle}>
        <AuthForm />
      </Modal>
      <div className={styles.logos}>
        <div className={styles.LogosLinks}>
          <Link className={styles.logo2} to='/'><img src={logo2}></img></Link>
          <Link className={styles.logo1} to='/'><img src={logo1}></img></Link>
        </div>
        {registrationLink}
        <button className={styles.navButton} onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg></button>
      </div>



      <nav className={isNavExpanded ? [`${styles['nav']} ${styles['expanded']}`] : [`${styles['nav']} ${styles['notExpanded']}`]}>


        <ul className={styles.list}>
          <li><Link className={styles.links} to='/' >Home</Link></li>
          <li><Link className={styles.links} to='catalog/buy' >Buy</Link></li>
          <li><Link className={styles.links} to='catalog/sell' >Sell</Link></li>
          <li><Link className={styles.links} to='catalog/rent' >Rent</Link></li>
          <li><Link className={styles.links} to='/finance' >Finance</Link></li>
          <li><Link className={styles.links} to='/contacts' >News</Link></li>
          {isNavExpanded && <Link onClick={toggle} className={styles.guest} to='?mode=register'>Sign up</Link>}
          {isNavExpanded && <Link onClick={toggle} className={styles.guest} to='?mode=login'>Login </Link>}
          {user && <Link onClick={toggle} className={styles.user} to='#'>Logout</Link>}

        </ul>

      </nav>



    </>

  )
}
export { Header };