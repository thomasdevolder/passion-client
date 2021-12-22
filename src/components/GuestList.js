import React, {useEffect, useRef} from 'react'
import styles from './guestList.module.css'
import thomas from '../assets/img/thomasdevolder.jpg'
import niels from '../assets/img/nielscloetens.jpg'
import bavo from '../assets/img/bavoingelaere.jpg'
import tine from '../assets/img/tinedevolder.jpg'
import cesar from '../assets/img/cesardegreve.jpg'
import wilma from '../assets/img/wilmavandemaele.jpg'
import alexander from '../assets/img/alexanderbuysse.jpg'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap/gsap-core'

gsap.registerPlugin(ScrollTrigger); 

const GuestList = () => {

    let p1 = useRef();
    let p2 = useRef();
    let p3 = useRef();
    let p4 = useRef();
    let p5 = useRef();
    let p6 = useRef();
    let p7 = useRef();
    let p8 = useRef();

    useEffect(() => {
        document.querySelector(`body`).style.overflowY = "auto"; 
        gsap.from(p2, {
            scrollTrigger: {
                start: "10%",
            }, 
            y: 100,
            opacity: 0
        })
        gsap.from(p3, {
            scrollTrigger: {
                start: "20%"
            }, 
            y: 100,
            opacity: 0
        })
        gsap.from(p4, {
            scrollTrigger: {
                start: "20%"
            }, 
            y: 100,
            opacity: 0
        })
        gsap.from(p5, {
            scrollTrigger: {
                start: "50%"
            }, 
            y: 100,
            opacity: 0
        })
        gsap.from([p6, p7], {
            scrollTrigger: {
                start: "70%"
            }, 
            y: 100,
            opacity: 0
        })
    }, [])

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Guest List</h2>
            <div className={styles.grid}>
                <article ref={el => p1 = el} className={styles.person}>
                    <img className={styles.img} src={thomas}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Thomas Devolder</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
                <article ref={el => p2 = el} className={styles.person2}>
                    <img className={styles.img} src={niels}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Niels Cloetens</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
                <article ref={el => p3 = el} className={styles.person3}>
                    <img className={styles.img} src={bavo}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Bavo Ingelaere</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
                <article ref={el => p4 = el} className={styles.person4}>
                    <img className={styles.img} src={tine}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Tine Devolder</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
                <article ref={el => p5 = el} className={styles.person5}>
                    <img className={styles.img} src={alexander}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Alexander Buysse</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
                <article ref={el => p6 = el} className={styles.person6}>
                    <img className={styles.img} src={wilma}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Wilma Vandemaele</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
                <article ref={el => p7 = el} className={styles.person4}>
                    <img className={styles.img} src={cesar}></img>
                    <div className={styles.detail}>
                        <h3 className={styles.name}>Cesar De Greve</h3>
                        <a className={styles.ig} href="https://www.instagram.com/thomas.devolder/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(-787 -881)"><g transform="translate(787 881)" fill="none" stroke="#fff" stroke-width="2"><rect width="24" height="24" rx="6" stroke="none"/><rect x="1" y="1" width="22" height="22" rx="5" fill="none"/></g><g transform="translate(792 886)" fill="none" stroke="#fff" stroke-width="2"><rect width="14" height="14" rx="7" stroke="none"/><rect x="1" y="1" width="12" height="12" rx="6" fill="none"/></g><g transform="translate(804 884)" fill="none" stroke="#fff" stroke-width="2"><rect width="4" height="4" rx="2" stroke="none"/><rect x="1" y="1" width="2" height="2" rx="1" fill="none"/></g></g></svg>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default GuestList