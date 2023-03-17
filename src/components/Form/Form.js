import styles from '../Form/Form.module.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

const FormComponent = () => {
  return (
    <form className={styles.searchForm} action="#" method="post">
      <h3>Find Your Property</h3>

      <label> City State, or Zip:</label>
      <input type="text" />

      <label>Search Area:</label>
      <select >
        <option>&nbsp;</option>
        <option>...</option>
        <option>...</option>
      </select>

      <div className={styles.colSection}>
      <div className={styles.col}>
        <label>Price from:</label>
        <select>
          <option>&nbsp;</option>
          <option>...</option>
          <option>...</option>
        </select>

        <label>Bedroom(s):</label>
        <select>
          <option>&nbsp;</option>
          <option>...</option>
          <option>...</option>
        </select>

        <label>Radius:</label>
        <select>
          <option>&nbsp;</option>
          <option>...</option>
          <option>...</option>
        </select>
      </div>

      <div className={styles.col}>
        <label>Price to:</label>
        <select>
          <option>&nbsp;</option>
          <option>...</option>
          <option>...</option>
        </select>

        <label>Bathroom(s):</label>
        <select>
          <option>&nbsp;</option>
          <option>...</option>
          <option>...</option>
        </select>

        <button>Proposals</button>
      </div>
      </div>

      <div className={styles.info}>
        Are you a member? 
       <Link className={styles.links} to="#"> Login</Link> now
      </div>

    </form>)

}
export default FormComponent;