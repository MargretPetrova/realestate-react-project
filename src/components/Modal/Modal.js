import AuthForm from '../AuthForm/AuthForm';
import styles from '../Modal/Modal.module.css'

import ReactDOM from 'react-dom';
const Modal = ({children, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <>
      <div className={styles['modal-overlay']}/>
      <div className={styles["modal-wrapper"]} aria-modal aria-hidden tabIndex={-1} role="dialog">
     
        <div className={styles["modal"]}>
          <div className={styles["modal-header"]}>
            <button type="button" className="modal-close-button"  onClick={hide}>
              <span >&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </>, document.body
  ) : null;
  
  export default Modal;