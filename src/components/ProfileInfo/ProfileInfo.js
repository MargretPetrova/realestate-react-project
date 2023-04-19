import styles from '../ProfileInfo/ProfileInfo.module.css'
import Button from '../Buttons/Buttons'
import profile from '../../images/manProfile.jpg';
import avatar from '../../images/avatar.jpg';

export default function ProfileInfo({profileInfo}){
    
    return <div className={styles.contactsInfo}>
        <div className={styles.infoDiv}>
        <div className={styles.infoImage}>
            <img src={profile} alt={avatar}></img>
        </div>
        <div className={styles.information}>
            <h3>{profileInfo[0].firstName} {profileInfo[0].lastName}</h3>
            <p>Email: <strong> {profileInfo[0].email}</strong></p>
            <p>Phone:<strong> {profileInfo[0].phone}</strong></p>
        
        </div>
        </div>
        <div className={styles.infoButton}>
            <Button name='Send Email'></Button>
        </div>
         </div>
}