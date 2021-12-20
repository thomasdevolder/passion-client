import React, {useRef, useState, useEffect} from 'react';
import styles from './lineUp.module.css' 
import boardX from '../assets/img/lineUpBoardx.png'
import artic from '../assets/img/djArtic.jpg'
import unregaler from '../assets/video/unregalr.mp4'
import gsap from 'gsap'
import {Draggable} from 'gsap/Draggable'

gsap.registerPlugin(Draggable);

const LineUp = () => {

    

    let vinyl = useRef();
    let dj1 = useRef(); 
    let dj2 = useRef();
    let dj3 = useRef(); 
    let dj4 = useRef(); 

    useEffect(()=>{ 
        console.log(vinyl);
        console.log(window.innerWidth/2+(window.innerWidth*0.05)-550)
        vinyl.style.left = (window.innerWidth)/2-550+(window.innerWidth*0.025)
        vinyl.style.top = (window.innerHeight)-350; 

        document.querySelector(`body`).style.overflow = "hidden"; 
        
        initRotate(); 
        
    }, [])

    const [scrollPosition, setScrollPosition] = useState(1);
    const handleScroll = (rotation) => {
         handleRotation(dj1.current, 0, rotation)
         handleRotation(dj2.current, 90, rotation)
        handleRotation(dj3.current, 180, rotation)
        handleRotation(dj4.current, 270, rotation)
          
    }; 

    const handleRotation = (element, offset, scroll) => {
        let centerX = window.innerWidth/2-window.innerWidth*0.475;;
        let centerY = window.innerHeight 
        let radius = window.innerWidth/2;

        const radians = (scroll - offset) * Math.PI / 180;

        if(element) {
            element.style.left = `${((centerX + Math.cos(radians ) * radius))}px`; 
        element.style.top = `${((centerY + Math.sin(radians) * radius))}px`;
        element.style.transform = `rotate(${scroll - offset+90}deg)`
        
        console.log(element.style.left, element.style.top)
        }
 
        //vinyl.style.transform = `rotate(${scroll-30}deg)`
      //  gsap.to(vinyl, {rotation: `${scroll}deg`, transformOrigin: "center"})
        
    }

    const initRotate = () => {
          let rotationSnap = 90; 
        Draggable.create(vinyl, {
            type:"rotation", 
            onDrag:  function() {console.log(this.rotation); handleScroll(this.rotation)},   
            snap: function(endValue) { 
                console.log(endValue);
                console.log(Math.round(endValue / rotationSnap) * rotationSnap)
        //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
                return Math.round(endValue / rotationSnap) * rotationSnap;
            }
    })
    }


  
    
    

    return (
        <main className={styles.main}>
            <div className={styles.lineUp}>
                <h2 className={styles.title}>Line Up</h2>
                <div ref={el => {dj1.current = el}} className={styles.info}>
                    <p className={styles.description}>DJ ARTIC is het nieuwe dj duo in Vlaanderen. Sinds ze begonnen zijn in 2019 hebben ze andere andere al op de 1 Euro fuif gedraaid. Afgelopen zomer zijn ze ook meegeweest met Summerbash en BoardX. Maar het ging niet altijd zo vlot. Tijdens de lockdown konden ze niet op evenement gaan draaien maar hebben ze hun tijd nuttig gebruik door hun vaardigheden en muziek collectie uit te breiden.  </p>
                    <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/3diNxyLMTGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img className={styles.img} src={artic}></img> 
                </div>
                <div ref={el => {dj2.current = el}} className={styles.info}>
                    <p className={styles.description}>DJ ARTIC is het nieuwe dj duo in Vlaanderen. Sinds ze begonnen zijn in 2019 hebben ze andere andere al op de 1 Euro fuif gedraaid. Afgelopen zomer zijn ze ook meegeweest met Summerbash en BoardX. Maar het ging niet altijd zo vlot. Tijdens de lockdown konden ze niet op evenement gaan draaien maar hebben ze hun tijd nuttig gebruik door hun vaardigheden en muziek collectie uit te breiden.  </p>
                    <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/3diNxyLMTGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img className={styles.img} src={artic}></img> 
                </div>
                <div ref={el => {dj3.current = el}} className={styles.info}>
                    <p className={styles.description}>DJ UNREGALR is het nieuwe dj duo in Vlaanderen. Sinds ze begonnen zijn in 2019 hebben ze andere andere al op de 1 Euro fuif gedraaid. Afgelopen zomer zijn ze ook meegeweest met Summerbash en BoardX. Maar het ging niet altijd zo vlot. Tijdens de lockdown konden ze niet op evenement gaan draaien maar hebben ze hun tijd nuttig gebruik door hun vaardigheden en muziek collectie uit te breiden.  </p>
                    <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/3diNxyLMTGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img className={styles.img} src={artic}></img> 
                </div>
                <div ref={el => {dj4.current = el}} className={styles.info}>
                    <p className={styles.description}>Unregalar ook wel bekent als Tagmag Insider Simon Wauman. Simon is één van de beste deejays die ken en verraste mij vaak met die mixes die hij speelde toen we samen met met DJ Matimo en Fotograaf Niels Cloetens in Berria waren. Waar hij samen met Mathis de pannen van het dak draaide ook al was het in openlucht ;)</p>
                    <video loop className={styles.video} width="560" height="315" autoPlay playsInline  muted src={unregaler}></video>
                    <img className={styles.img} src={artic}></img> 
                </div>
                <svg ref={e => vinyl = e} className={styles.vinyl} xmlns="http://www.w3.org/2000/svg" width="1100" height="1100" viewBox="0 0 1100 1100"><g transform="translate(-410 -725)"><g transform="translate(460 775)" fill="none" stroke="#fff" stroke-width="1"><circle cx="500" cy="500" r="500" stroke="none"/><circle cx="500" cy="500" r="499.5" fill="none"/></g><g transform="translate(410 725)" fill="none" stroke="#fff" stroke-width="2"><circle cx="550" cy="550" r="550" stroke="none"/><circle cx="550" cy="550" r="549" fill="none"/></g><g transform="translate(510 825)" fill="none" stroke="#fff" stroke-width="1"><circle cx="450" cy="450" r="450" stroke="none"/><circle cx="450" cy="450" r="449.5" fill="none"/></g><g transform="translate(560 875)" fill="none" stroke="#fff" stroke-width="1"><circle cx="400" cy="400" r="400" stroke="none"/><circle cx="400" cy="400" r="399.5" fill="none"/></g><g transform="translate(610 925)" fill="none" stroke="#fff" stroke-width="1"><circle cx="350" cy="350" r="350" stroke="none"/><circle cx="350" cy="350" r="349.5" fill="none"/></g><path d="M17191-947v200" transform="translate(-16230 1672)" fill="none" stroke="#fff" stroke-width="2"/><path d="M17191-947v200" transform="translate(-16230 2572)" fill="none" stroke="#fff" stroke-width="2"/><path d="M17191-947v200" transform="translate(563 -15916) rotate(90)" fill="none" stroke="#fff" stroke-width="2"/><path d="M17191-947v200" transform="translate(-337 -15916) rotate(90)" fill="none" stroke="#fff" stroke-width="2"/></g></svg>
            </div>
            
            <img className={styles.background} src={boardX}></img>
        </main>
    )
}

export default LineUp