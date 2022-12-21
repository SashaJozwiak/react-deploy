import { useState } from 'react';

import styles from './profile_styles/Settings.module.css'

export default function Settings () {
    const [person, setPerson] = useState(1);




    return (
        <div className={styles.myinfo}>
            <ul className={styles.person_lists}>
                <li onClick={() => setPerson(1)}
                className={person === 1? styles.links_active: styles.links}
                ><h4 className={styles.links_title}>Individual</h4></li>
                <li onClick={() => setPerson(2)}
                className={person === 2? styles.links_active: styles.links}
                ><h4 className={styles.links_title}>Legal entity</h4></li>
            </ul>
            { person===1 ?
            <div>             
                <div className={styles.info}>
                    <input className={styles.input_names} type="text" placeholder='First Name'/>
                    <input className={styles.input_names} type="text" placeholder='Last Name'/>
                    <input className={styles.input_names} type="email" placeholder='Email'/>
                    <input className={styles.input_names} type="phone" placeholder='Phone'/>
                </div>
                
            </div>
            
            : 
                <div className={styles.info}>
                    <input className={styles.input_names} type="text" placeholder='Company Name'/>
                    <input className={styles.input_names} type="number" placeholder='ИНН/VAT/TIN'/>
                    <input className={styles.input_names} type="email" placeholder='Company email'/>
                    <input className={styles.input_names} type="phone" placeholder='Company Phone'/>
                </div>
                
            }
            <div className={styles.info}>
                <h2 className={styles.links_title}>Settings</h2>
            </div>
        </div>
    )
}