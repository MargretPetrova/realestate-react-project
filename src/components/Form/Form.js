import styles from '../Form/Form.module.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import Button from '../SmallHelpers/Buttons';

const FormComponent = () => {
  return (
    <form className={styles.searchForm} action="#" method="post">
      <h3>Find Your Property</h3>

      <label> City State, or Zip:</label>
      <input type="text" />

      <label>Type:</label>
      <select >
        <option>&nbsp;</option>
        <option>All types</option>
        <option>Apartment && Unit</option>
        <option>Villa</option>
        <option>House</option>
        <option>Land</option>
        <option>Retirement Living</option>
        <option>Block of units</option>
        <option>Townhouse</option>
      </select>

      <div className={styles.colSection}>
      <div className={styles.col}>
        <label>Price from:</label>
        <select>
          <option>EURO</option>
          <option>Any</option>
          <option>100</option>
          <option>500</option>
          <option>1000</option>
          <option>1500</option>
          <option>3000</option>
        </select>

        <label>Bedroom(s):</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>More</option>
          
        </select>

        <label>Land Size:</label>
        <select>
          <option>Any</option>
          <option>1ha</option>
          <option>2ha</option>
          <option>3ha</option>
          <option>4ha</option>
          <option>4ha</option>
          <option>10ha</option>
          <option>20ha</option>
          <option>30ha</option>
          <option>40ha</option>
          <option>50ha</option>
          <option>60ha</option>
          <option>70ha</option>
          <option>80ha</option>
          <option>90ha</option>
        </select>
      </div>

      <div className={styles.col}>
        <label>Price to:</label>
        <select>
          <option>EURO</option>
          <option>Any</option>
          <option>500</option>
          <option>1000</option>
          <option>1500</option>
          <option>3000</option>
        </select>

        <label>Bathroom(s):</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>More</option>
        </select>

        <Button name='Proposals'/>
      </div>
      </div>

      <div className={styles.info}>
        Join us and apply online
       <Link className={styles.links} to="/auth"> Login</Link>
      </div>

    </form>)

}
export default FormComponent;