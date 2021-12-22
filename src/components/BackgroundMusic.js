import React, {useState, useEffect, useRef} from 'react'
import styles from './backgroundMusic.module.css'
import murphy from '../assets/music/outsideClub.mp3'


const BackgroundMusic = ({songPlaying, setSongPlaying}) => {

    const [initial, setInitial] = useState(false); 


    const songRef = useRef(new Audio(murphy));

    useEffect(() => {
      
         

        console.log(songPlaying)
        if (songPlaying === false) {
          console.log('should pause')
          songRef.current.pause(); 
        }  else if(songPlaying === true) {
            console.log('should play')
             songRef.current.play(); 

        }
    },
    [songPlaying]
    );

    const changeSound = () => {
        if(songPlaying === true) {
            console.log('pause');
            setSongPlaying(false);
        } else if (songPlaying === false) {
            console.log('playing');
            setSongPlaying(true);
        }
         
        
    };

    return (
        <div className={styles.logo}>
      {songPlaying ? (
          <svg onClick={() => {changeSound()}} className={styles.sound} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44.995" height="50.466" viewBox="0 0 44.995 50.466"><defs><clipPath id="a"><rect width="44.995" height="49.58" fill="none" stroke="#fff" stroke-width="1"/></clipPath></defs><g transform="translate(0 0.443)"><path d="M46.161,10,27.144,24.547H10V45.523H29.271l16.89,12.919Z" transform="translate(-9.431 -9.431)" fill="none" stroke="#fff" stroke-width="1"/><g clip-path="url(#a)"><path d="M46.161,10,27.144,24.547H10V45.523H29.271l16.89,12.919Z" transform="translate(-9.431 -9.431)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1"/></g><line y2="39.069" transform="translate(40.578 5.256)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1"/><g clip-path="url(#a)"><line y1="29.906" transform="translate(44.426 9.837)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1"/></g></g></svg>
      ) : (
        <svg onClick={() => {changeSound()}} className={styles.sound} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="52.18" height="50.532" viewBox="0 0 52.18 50.532"><defs><clipPath id="a"><rect width="52.18" height="49.648" fill="none" stroke="#fff" stroke-width="1"/></clipPath></defs><g transform="translate(0 0.442)"><path d="M46.21,10,27.167,24.566H10v21H29.3L46.21,58.508Z" transform="translate(-9.43 -9.43)" fill="none" stroke="#707070" stroke-width="1"/><g clip-path="url(#a)"><path d="M46.21,10,27.167,24.566H10v21H29.3L46.21,58.508Z" transform="translate(-9.43 -9.43)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1"/><line y1="35.803" x2="35.803" transform="translate(15.974 6.922)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1"/><line x1="35.803" y1="35.803" transform="translate(15.974 6.922)" fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="1"/></g></g></svg>
      )} 
        </div> )

}



export default BackgroundMusic; 