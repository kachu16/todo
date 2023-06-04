import React from 'react';
import styles from './section.module.css';
import wallet from '../../assets/Wallet.png';
import TodoList from '../TodoList/TodoList';
const Section = () => {
  return (
    <>
        <div className={styles.section}>

          <div>
              <div className={styles.innerSection}>
                <h2>Section</h2>
              <div className={styles.rightSection}>
                  <div className={styles.wallet}>
                      <img src={wallet} alt="" style={{marginRight: '5px'}}/>
                      <p>0.2 $XYZ</p>
                  </div>
                  <span className={styles.tier}>Tier 1</span>
              </div>
              </div>
              </div>
              <hr style={{borderBottom: '2px solid #242731'}}/>

            <TodoList/>
          </div>

    </>
  )
}

export default Section
