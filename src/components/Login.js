import React, {useState, useEffect, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './login.module.css'
import axios from 'axios'
import { gsap } from 'gsap'

const Login = ({guestsData}) => {
    const history = useNavigate(); 

    const [name, setName] = useState(''); 
    const [password, setPassword] = useState('');
    
    let curtain = useRef(null); 

    useEffect(() => {

        gsap.to([curtain], {
            width: 0,
            duration: 1,
            ease: "Power3.inOut",
        })
    })

    const changePage = () => {
        history('/home/start')
    }
    const goHome = async (event) => {

        gsap.to([curtain], {
            width: "100vw",
            duration: 1,
            ease: "Power3.inOut",
            onComplete: changePage
        })
        

       // history('/home/start'); 

        axios.post(
            "http://localhost:1337/api/guests", {
                data: {
                    name: name, 
                    password: password,
                }
            }, {withCredentials: true}
        ).then(response => {
            console.log("res from login", response)
        }).catch(error => {
            console.log("login error", error);
        }); 
    event.preventDefault();
    }

    console.log(name, password)

    return(
        <>
        <div ref={el => curtain = el} className={styles.curtain}></div>
        <div className={styles.enter}>
            <h1 className={styles.enter_title}>17.12.2022</h1>
            <form action className={styles.enter_form} onSubmit={goHome}>
                <label className={styles.enter_label} htmlFor="name">Voornaam</label>
                <input value={name} onChange={e=> setName(e.target.value)}  className={styles.enter_input} id="name" name="name" type="text" placeholder="Thomas" />
                <label className={styles.enter_label} htmlFor="code">Persoonlijke code</label>
                <input value={password} onChange={e=> setPassword(e.target.value)} className={styles.enter_input} id="code" name="code"  type="password" placeholder="XXXZXS" />
                <input type="submit" className={styles.enter_submit} defaultValue="Enter event" />
            </form>
        </div>
        </>
    )
}

export default Login; 
