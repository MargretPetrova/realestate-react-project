import { Link, useSearchParams } from 'react-router-dom';

import styles from '../AuthForm/AuthForm.module.css'
import Button from '../SmallHelpers/Buttons';
function AuthForm(){
    const[searchParams] =useSearchParams();
    const isLogin = searchParams.get('mode') === 'login'
   
    return <form method="POST" className={styles.registerForm}> 
        <h4>{isLogin? 'Login': 'Register'}</h4>
        <p>Please enter your login and password</p>
        <div className={styles.cols}>
            <div> 
                <label>Email</label>
        <input type='text' name='email'></input></div>
       <div>
        <label>Password</label>
        <input type='text' name='pass'></input>
        
        </div>
        {isLogin && <p>Forget your password?</p>}
        <div>
        {!isLogin && <><label>Repeat Password</label>
        <input type='text' name='rePass'></input></>}
        </div>
     
        
        </div>
        <Button name={isLogin? 'Login': 'Sign up'}/>
        {isLogin && <div className={styles.info}>
         <p>Don't have registration, please  <Link className={styles.links} to="/?mode=register">  Sign up</Link></p>
      </div>}
      {!isLogin && <div className={styles.info}>
         <p>Allready have a registration, please  <Link className={styles.links} to="/?mode=login">  Login</Link></p>
      </div>}
        

    </form>
}
export default AuthForm