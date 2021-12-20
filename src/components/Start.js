import React from 'react'
import styles from './start.module.css'
import homeImg from '../assets/img/home.jpg'


const Start = ({homeImage}) => {
    return (
        <main className={styles.homeMain}>
                <div className={styles.homeText}>
                    <h1 className={styles.homeTitle}>
                        Hey,<br/> you're invited <br/> for the <br/> party<br/> of your<br/> life
                    </h1>
                    <ul className={styles.homeList}>
                        <li className={styles.homeListItem, styles.homeListTitle}>Sweet 21 volder</li>
                        <li className={styles.homeListItem}>21:00-05:00</li>
                        <li className={styles.homeListItem}>17/12/2022</li>
                        <li className={styles.homeListItem, styles.homeListItemPlace}>Factor Club</li>
                        <li className={styles.homeListItem}>Kraanplein 6</li>
                        <li className={styles.homeListItem}>8000 Brugge</li>
                        <li className={styles.homeListItem}>51.21043, 3.2251872</li>
                    </ul>
                </div>
                <img className={styles.homeImg} src={homeImage} alt="party picture"/>
            </main>
    )
}

export default Start; 