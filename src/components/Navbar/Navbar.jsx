import React from 'react';
import styles from './navbar.module.css';
import Line1 from '../../assets/line-1.svg';
import Line2 from '../../assets/line-2.svg';
import Line3 from '../../assets/line-3.svg';
import leftarrow from '../../assets/leftarrow.svg';
import dark from '../../assets/Dark toggle.png';
import net from '../../assets/net.svg';
import listData from './constants';




const Navbar = () => {
  return (
      <div className={styles.navbar}>    

        <div className={styles.nav}>

          <div className={styles.nameIcon}>N</div>
          <h3 className={styles.nameHeading}>Name</h3>
        
          <div className={styles.arrowBox}>
            <img src={Line1} alt="line" style={{width:'17px'}}/>  
            <div className={styles.arrowInnerBox}>
              <img src={leftarrow} alt="arrow" style={{position:'relative' , left:'5px'}}/>
              <img src={Line3} alt="line" style={{width: '24px'}}/>
            </div>            
            <img src={Line2} alt="line" style={{width:'17px'}}/>                   
          </div>
        </div>  

        <div className={styles.midnavbar}>
          {
            listData.map((list) => (
            <div className={`${styles.navlist} ${list.class} ${styles.class}`}>
              <img src={list.img} alt="icon" />
              <span>{list.text}</span>
            </div>

            ))
          }   
        </div>  

        <div className={styles.endnav}>

          <div className={`${styles.navItems}  ${styles.price}`}>
          <div className={`${styles.nameIcon} ${styles.smIcon}`}>N</div>
          <h3 style={{marginLeft:'5px'}}>$0.90</h3>
          </div>

          <div className={`${styles.navItem}  ${styles.price}`}>
            <h3 >Buy $XYZ</h3>
          </div>
          
        </div>

        <div className={styles.lastNav}>
          <img src={net} alt="not found" />
          <img src={dark} alt="not found" style={{marginLeft:'10px'}}/>
          
        </div>            
      
      </div>
  )
}

export default Navbar
